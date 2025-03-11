import React from "react";

const Button = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  const baseStyle = "px-4 py-2 font-semibold transition-all";
  const variants = {
    default:
      "hover:bg-[#cdcfc0] text-[#423f32] transition-all duration-500 ease-in-out",
    outline: "border-2 border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
