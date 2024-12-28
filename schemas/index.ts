import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required! " }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export const registerSchema = LoginSchema.extend({
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
