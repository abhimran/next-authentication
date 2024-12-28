import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, LoginSchema } from "@/schemas";
import CardWrapper from "@/components/CardWrapper";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
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
            type="password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </CardWrapper>
  );
};

export default LoginForm;
