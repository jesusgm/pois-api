import z from "zod";

export const categorySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3).max(255),
  parent_id: z.number(),
});
