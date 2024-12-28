interface LoginButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Login"}
    </button>
  );
};

export default LoginButton;
