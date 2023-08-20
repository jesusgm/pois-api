import z, { number } from "zod";

export const statusSchema = z.object({
  id: number().optional(),
  name: z.string().min(3).max(255),
});
