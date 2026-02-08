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
    default: "bg-[#1C1C1C] text-[#999999] border-[#2A2A2A]",
    accent: "bg-[#D5001C]/10 text-[#D5001C] border-[#D5001C]/30",
    gold: "bg-[#B8A97F]/10 text-[#B8A97F] border-[#B8A97F]/30",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider border ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
