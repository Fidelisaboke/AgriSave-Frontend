import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
});

// Infer the TypeScript type from the schema
export type LoginCredentials = z.infer<typeof loginSchema>;
