"use server";

import { RegisterFormValues, RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/users";
import { db } from "@/lib/db";
export const registerAc = async (values: RegisterFormValues) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalidates field!" };
  }

  const { email, password, name } = validateFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists!" };
  }

  await db.user.create({ data: { email, password: hashedPassword, name } });

  return { success: "User created!" };
};
