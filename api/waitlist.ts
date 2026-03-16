import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.AIRTABLE_PAT || !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_ID) {
    console.error("Missing Airtable environment variables");
    return res.status(500).json({ message: "Server configuration error" });
  }

  const { fullName, email, businessName, industry, userType } = req.body;

  if (!fullName || !email || !businessName || !industry || !userType) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!["Business", "Investor"].includes(userType)) {
    return res.status(400).json({ message: "Invalid user type" });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Full Name": fullName,
            "Email Address": email,
            "Business Name": businessName,
            "Industry": industry,
            "Submitted At": new Date().toISOString(),
            "Status": userType,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Airtable error:", data.error);
      return res.status(500).json({ message: "Failed to submit to waitlist" });
    }

    return res.status(201).json({ success: true, id: data.id });
  } catch (err) {
    console.error("Waitlist error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
