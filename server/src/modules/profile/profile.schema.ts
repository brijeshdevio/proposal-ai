import z from "zod";

const skillEnum = z.enum([
  "Node.js",
  "TypeScript",
  "NestJS",
  "REST API Design",
  "PostgreSQL",
  "Prisma ORM",
  "Database Design & Optimization",
  "Authentication (JWT, OAuth)",
  "Microservices Architecture",
  "Docker",
  "Redis",
  "Message Queues (BullMQ / RabbitMQ)",
  "Unit & Integration Testing",
  "CI/CD Pipelines",
]);

export const ProfileUpdateSchema = z
  .object({
    title: z.string().min(5).max(80).optional(),
    skills: z
      .array(skillEnum)
      .min(3, "At least 3 relevant skills required")
      .max(15, "Too many skills reduces credibility")
      .optional(),
    experienceYears: z.coerce.number().min(0).max(15).optional(),
    defaultRateINR: z.coerce.number().min(1000).max(10000).optional(),
    defaultRateUSD: z.coerce.number().min(10).max(100).optional(),
    bio: z
      .string()
      .min(80, "Bio should be detailed and credible")
      .max(500)
      .optional(),
    highlights: z
      .array(z.string().min(10).max(120))
      .min(2, "Add at least 2 strong achievements")
      .max(6)
      .optional(),
  })
  .refine((data) => Object.values(data).some((value) => value !== undefined), {
    message: "At least one field must be provided for update",
  })
  .refine(
    (data) =>
      !data.defaultRateINR ||
      !data.defaultRateUSD ||
      (data.defaultRateINR / data.defaultRateUSD >= 60 &&
        data.defaultRateINR / data.defaultRateUSD <= 120),
    {
      message: "INR and USD rates seem inconsistent",
      path: ["defaultRateINR"],
    },
  )
  .strict();

export type ProfileUpdateDto = z.infer<typeof ProfileUpdateSchema>;
