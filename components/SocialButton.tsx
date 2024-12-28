interface SocialButtonProps {
  platform: "Google" | "GitHub";
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, onClick }) => {
  const platformStyles = platform === "Google" ? "bg-blue-600" : "bg-gray-800";

  return (
    <button
      onClick={onClick}
      className={`${platformStyles} text-white px-4 py-2 rounded`}
    >
      {platform}
    </button>
  );
};

export default SocialButton;
