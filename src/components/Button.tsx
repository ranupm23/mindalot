import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary:
      "border border-[#e6dcd6] bg-white text-[#2f1f1a] hover:bg-[#f7f1ed]",
    ghost: "text-[#5a4741] hover:bg-[#f2e9e4]",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


