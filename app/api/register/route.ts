import { supabaseCreateClient } from '@/libs/supabase';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password, province, country, subscribe } = await req.json();

    // Validatie
    if (!firstName || !lastName || !email || !password || !province || !country) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Check of email al bestaat in de users-tabel
    const { data: existingUser, error: emailCheckError } = await supabaseCreateClient
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (emailCheckError && emailCheckError.code !== 'PGRST116') {
      console.error('Error checking email:', emailCheckError);
      return NextResponse.json({ message: emailCheckError.message || 'Error checking email.' }, { status: 500 });
    }

    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered.' }, { status: 400 });
    }

    // Hash het wachtwoord
    const hashedPassword = await bcrypt.hash(password, 10);

    // Gebruiker registreren in Supabase Auth
    const { data: authData, error: authError } = await supabaseCreateClient.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName, province, country, subscribe },
      },
    });

    if (authError) {
      console.error('Supabase Auth Error:', authError);
      return NextResponse.json({ message: authError.message || 'An error occurred while registering the user.' }, { status: 400 });
    }

    // Controleer of de gebruiker correct is aangemaakt in Auth
    const user = authData.user;
    if (!user) {
      return NextResponse.json({ message: "User creation failed." }, { status: 500 });
    }

    // Opslaan in de 'users' tabel, inclusief gehashte wachtwoord
    const { error: insertError } = await supabaseCreateClient.from('users').insert([
      { 
        id: user.id, // Gebruik de ID uit Supabase Auth
        email: user.email, 
        first_name: firstName, 
        last_name: lastName, 
        password: hashedPassword, // Voeg het gehashte wachtwoord toe
        province, 
        country, 
        subscribe, 
        created_at: new Date()
      }
    ]);

    if (insertError) {
      console.error('Database Insert Error:', insertError);
      return NextResponse.json({ message: insertError.message || 'Failed to save user in database.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });

  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}
