import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, province, country, email, subscribe } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Voeg hier je database-logica toe (bijvoorbeeld Prisma, MongoDB, etc.)
      console.log("User registered:", { firstName, lastName, province, country, email, subscribe });

      return res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Error processing registration:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
