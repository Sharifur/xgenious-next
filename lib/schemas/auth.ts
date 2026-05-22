import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Username or email is required'),
  password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z
  .object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
    password: z.string().min(12, 'Password must be at least 12 characters'),
    confirm: z.string().min(1, 'Please confirm your password'),
    terms: z.boolean().refine((v) => v === true, { message: 'You must accept the terms and conditions' }),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(12, 'Password must be at least 12 characters'),
    confirm: z.string().min(1, 'Please confirm your password'),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  });

export const resendVerificationSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
});

export const newTicketSchema = z.object({
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  product: z.string().min(1, 'Please select a product'),
  purchaseCode: z.string().min(3, 'Purchase code is required'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ResendVerificationInput = z.infer<typeof resendVerificationSchema>;
export type NewTicketInput = z.infer<typeof newTicketSchema>;
