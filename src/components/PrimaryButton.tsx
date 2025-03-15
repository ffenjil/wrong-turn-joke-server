
import React from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "subtle";
  size?: "default" | "sm" | "lg";
}

const PrimaryButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: PrimaryButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
    subtle: "bg-primary/10 text-primary hover:bg-primary/20",
  };
  
  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "group overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className="absolute inset-0 -translate-y-full bg-primary/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
      <span className="absolute inset-0 translate-y-full bg-primary/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
    </button>
  );
};

export default PrimaryButton;
