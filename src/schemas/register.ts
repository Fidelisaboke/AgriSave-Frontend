import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters long.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    password2: z.string(),
    first_name: z.string().min(2, { message: 'First name is required.' }),
    last_name: z.string().min(2, { message: 'Last name is required.' }),
    phone_number: z.string().optional(),
    location: z.string().min(2, { message: 'Location is required.' }),
    farm_size: z.number({ message: 'Farm size must be a number.' }).min(0, { message: 'Farm size must be positive.' }),
  })
  // Custom rule to check if passwords match
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match.",
    path: ["password2"],
  });

// Infer the TypeScript type from the schema
export type RegisterData = z.infer<typeof registerSchema>;
