"use server";

import { LoginFormValues, LoginSchema } from "@/schemas";

export const loginAc = async (values: LoginFormValues) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalidates field!" };
  }

  return { success: "Email sent! " };
};
