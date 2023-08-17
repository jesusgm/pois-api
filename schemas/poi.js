import z from "zod";

export const poiSchema = z.object({
  name: z.string().min(3).max(255),
  latitude: z.number(),
  longitude: z.number(),
  status_id: z.number().optional(),
  category: z.number().optional(),
  subcategory: z.number().optional(),
});
