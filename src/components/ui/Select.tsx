"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, error, id, options, placeholder, ...props }, ref) => {
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
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={`w-full px-4 py-3 bg-[#1A1A1E] border border-[#2A2A2E] rounded-md text-[#EAEAEA] focus:outline-none focus:border-[#3461D2] focus:ring-1 focus:ring-[#3461D2] transition-colors appearance-none cursor-pointer ${
              error ? "border-[#D23434]" : ""
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] pointer-events-none"
          />
        </div>
        {error && <p className="mt-1 text-sm text-[#D23434]">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
