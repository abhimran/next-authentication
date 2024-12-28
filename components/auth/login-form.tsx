import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginFormValues } from "@/schemas";
import CardWrapper from "@/components/CardWrapper";
import { FormError } from "@/components/FormError";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginFormValues) => {
    startTransition(() => {
      login(data);
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            {...register("email")}
            disabled={isPending}
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
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* <FormError message="error occurred" /> */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </CardWrapper>
  );
};

export default LoginForm;
