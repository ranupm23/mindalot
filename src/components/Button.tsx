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
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "text-slate-700 hover:bg-slate-100",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


