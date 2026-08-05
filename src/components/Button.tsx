import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ label, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
