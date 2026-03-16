import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const waitlistSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  businessName: z.string().min(1),
  industry: z.string().min(1),
  userType: z.enum(["Business", "Investor"]),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      const contact = await storage.createContact(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const input = waitlistSchema.parse(req.body);

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
              "Full Name": input.fullName,
              "Email Address": input.email,
              "Business Name": input.businessName,
              "Industry": input.industry,
              "Submitted At": new Date().toISOString(),
              "Status": input.userType,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Airtable error:", data.error);
        return res.status(500).json({ message: "Failed to submit to waitlist" });
      }

      res.status(201).json({ success: true, id: data.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      console.error("Waitlist error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
