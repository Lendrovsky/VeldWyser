import { NextRequest, NextResponse } from 'next/server';
import { supabaseCreateClient } from '@/libs/supabase';
import validator from 'validator';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

type RequestBody = {
  name: string;
  email: string;
};

const containsHTML = (input: string): boolean => /<\/?[^>]+(>|$)/g.test(input);
const containsURL = (input: string): boolean => /https?:\/\/[^\s]+|www\.[^\s]+/gi.test(input);
const containsSSTI = (input: string): boolean => /{{.*}}|{%.*%}/g.test(input);
const escapeHtml = (str: string): string => _.escape(str);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();

    // Validate required fields
    if (!body.name || !body.email) {
      console.error('Validation failed: Name and Email are required');
      return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
    }

    // Validate length of fields
    if (body.name.length > 255 || body.email.length > 255) {
      console.error('Validation failed: Name and email cannot exceed 255 characters');
      return NextResponse.json({ error: 'Name and email cannot exceed 255 characters' }, { status: 400 });
    }

    // Validate email format
    if (!validator.isEmail(body.email)) {
      console.error('Validation failed: Invalid email format');
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Validate input for unwanted patterns
    const validationChecks = [
      { check: containsHTML, error: 'HTML input detected' },
      { check: containsURL, error: 'URL detected' },
      { check: containsSSTI, error: 'SSTI pattern detected' },
    ];

    for (const { check, error } of validationChecks) {
      if (check(body.name) || check(body.email)) {
        console.error(`Validation failed: ${error}`);
        return NextResponse.json({ error: `Invalid input: ${error}` }, { status: 400 });
      }
    }

    // Sanitize inputs
    const name = escapeHtml(body.name);
    const email = escapeHtml(validator.normalizeEmail(body.email) as string);

    // Check for existing email in the database
    const { data: existingLeads, error: fetchError } = await supabaseCreateClient
      .from('leads')
      .select('*')
      .eq('email', email);

    if (fetchError) {
      console.error('Database fetch error:', fetchError);
      return NextResponse.json({ error: 'Failed to check existing leads' }, { status: 500 });
    }

    if (existingLeads && existingLeads.length >= 1) {
      console.error('Data already exists: Email already in use');
      return NextResponse.json({ error: 'Data already exists' }, { status: 409 });
    }

    // Insert new lead
    const unsubscribeToken = uuidv4();
    const { data, error } = await supabaseCreateClient
      .from('leads')
      .insert([{ name, email, created_at: new Date(), unsubscribe_token: unsubscribeToken }])
      .select();

      // Example: Log the inserted data (or do further processing)
      console.log('Inserted lead data:', data);

    if (error) {
      console.error('Database insert error:', error);
      return NextResponse.json({ error: 'Failed to insert lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}