"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-[#C0C0C0] mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`w-full px-4 py-3 bg-[#1A1A1E] border border-[#2A2A2E] rounded-md text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#3461D2] focus:ring-1 focus:ring-[#3461D2] transition-colors ${
            error ? "border-[#D23434]" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[#D23434]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
