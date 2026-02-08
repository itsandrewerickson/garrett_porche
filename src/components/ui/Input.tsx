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
            className="block text-sm font-medium text-[#999999] mb-2 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`w-full px-4 py-3 bg-[#1C1C1C] border border-[#2A2A2A] text-[#F5F5F5] placeholder-[#666] focus:outline-none focus:border-[#D5001C] focus:ring-1 focus:ring-[#D5001C] transition-colors ${
            error ? "border-[#D5001C]" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[#D5001C]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
