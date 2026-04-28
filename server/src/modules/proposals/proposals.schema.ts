import { z } from "zod";

export const JobSchema = z
  .object({
    jobDescription: z
      .string()
      .min(50, "Job description is too short to be meaningful")
      .max(2000, "Job description is too long")
      .refine((val) => /react|node|postgres|payment/i.test(val), {
        message:
          "Job description should mention key technical requirements (React, Node.js, PostgreSQL, or payments)",
      }),
    tone: z
      .enum(
        ["professional", "friendly", "confident"],
        "Tone must be either professional, friendly, or confident",
      )
      .default("professional"),
    currency: z
      .enum(["INR", "USD", "BOTH"], "Currency must be either INR, USD, or BOTH")
      .default("BOTH"),
  })
  .strict();

export const FindProposalsQuerySchema = z
  .object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(50).default(10),
    search: z.string().trim().min(1).optional(),
  })
  .strict();

export type JobDto = z.infer<typeof JobSchema>;
export type FindProposalsQueryDto = z.infer<typeof FindProposalsQuerySchema>;
