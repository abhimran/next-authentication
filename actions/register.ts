"use server";

import { RegisterFormValues, RegisterSchema } from "@/schemas";

export const registerAc = async (values: RegisterFormValues) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalidates field!" };
  }

  return { success: "Email sent! " };
};
