import React, { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  register?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
  register,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-4">{headerLabel}</h1>
      {showSocial && (
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Google
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">
            GitHub
          </button>
        </div>
      )}
      {children}
      <p className="text-sm text-center mt-4">
        {backButtonLabel}{" "}
        <a href={backButtonHref} className="text-blue-600">
          {register ? "Login" : "Register"}
        </a>
      </p>
    </div>
  );
};

export default CardWrapper;
