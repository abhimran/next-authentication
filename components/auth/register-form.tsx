import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterFormValues } from "@/schemas";
import CardWrapper from "@/components/CardWrapper";
import { FormError } from "@/components/FormError";
import { registerAc } from "@/actions/register";
import { useState, useTransition } from "react";
import { FormSuccess } from "../FormSuccess";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "", name: "" },
  });

  const onSubmit = (data: RegisterFormValues) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      registerAc(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
      register
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            {...register("name")}
            disabled={isPending}
            className="w-full px-4 py-2 border rounded"
            placeholder="Jhon doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            {...register("email")}
            disabled={isPending}
            placeholder="Jhon@gmail.com"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            {...register("password")}
            disabled={isPending}
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Create an account
        </button>
      </form>
    </CardWrapper>
  );
};

export default RegisterForm;
