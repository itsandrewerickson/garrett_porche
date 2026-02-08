"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "gold";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[#1A1A1E] text-[#C0C0C0] border-[#2A2A2E]",
    accent: "bg-[#3461D2]/10 text-[#3461D2] border-[#3461D2]/30",
    gold: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 text-xs font-mono font-medium border rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
