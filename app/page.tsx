export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Auth App</h1>
        <p className="text-gray-600 mb-6">
          Get started by signing up or logging in
        </p>
        <div className="space-x-4">
          <a
            href="/auth/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="/auth/register"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
