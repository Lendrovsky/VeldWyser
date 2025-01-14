import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; // Gebruik Prisma of een andere ORM/databaseclient

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { firstName, email } = req.body;

    if (!firstName || !email) {
      return res.status(400).json({ error: "First name and email are required" });
    }

    try {
      // Voeg de gegevens toe aan de database
      await prisma.newsletter.create({
        data: {
          firstName,
          email,
        },
      });

      return res.status(200).json({ message: "Successfully signed up!" });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Failed to sign up" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
