import z, { number } from "zod";

export const poiSchema = z.object({
  id: number().optional(),
  name: z.string().min(3).max(255),
  latitude: z.number(),
  longitude: z.number(),
  status_id: z.number().optional(),
  category_id: z.number().optional(),
});
