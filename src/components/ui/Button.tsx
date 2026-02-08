"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      type = "button",
      onClick,
      href,
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5001C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-[#D5001C] text-white hover:bg-[#E31B2E] active:bg-[#B5001A]",
      secondary:
        "bg-transparent text-[#F5F5F5] border border-[#2A2A2A] hover:border-[#D5001C] hover:text-[#D5001C]",
      ghost:
        "bg-transparent text-[#999999] hover:text-[#F5F5F5] hover:bg-[#141414]",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-sm",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // If href is provided, render as a Link
    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        className={combinedClassName}
        disabled={disabled || isLoading}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.01 }}
        whileTap={{ scale: disabled ? 1 : 0.99 }}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
