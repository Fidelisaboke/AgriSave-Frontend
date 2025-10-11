import { z } from 'zod';

export const cropRecommendationSchema = z.object({
  N: z
    .number()
    .min(0, 'Nitrogen must be at least 0')
    .max(200, 'Nitrogen must not exceed 200'),
  P: z
    .number()
    .min(0, 'Phosphorus must be at least 0')
    .max(200, 'Phosphorus must not exceed 200'),
  K: z
    .number()
    .min(0, 'Potassium must be at least 0')
    .max(200, 'Potassium must not exceed 200'),
  temperature: z
    .number()
    .min(-10, 'Temperature must be at least -10°C')
    .max(60, 'Temperature must not exceed 60°C'),
  humidity: z
    .number()
    .min(0, 'Humidity must be at least 0%')
    .max(100, 'Humidity must not exceed 100%'),
  ph: z
    .number()
    .min(0, 'pH must be at least 0')
    .max(14, 'pH must not exceed 14'),
  rainfall: z
    .number()
    .min(0, 'Rainfall must be at least 0mm')
    .max(500, 'Rainfall must not exceed 500mm'),
});

export type CropRecommendationFormData = z.infer<typeof cropRecommendationSchema>;