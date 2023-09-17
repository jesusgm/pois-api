import z, { number } from "zod";

export const poiSchema = z.object({
  id: number().optional(),
  name: z.string().min(3).max(255),
  latitude: z.number(),
  longitude: z.number(),
  altitude: z.number().optional().default(0),
  status_id: z.number().optional(),
  category_id: z.number().optional(),
});
