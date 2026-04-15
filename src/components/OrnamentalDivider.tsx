"use client";

import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  className?: string;
  symbol?: string;
}

export default function OrnamentalDivider({
  className = "",
  symbol = "✦",
}: OrnamentalDividerProps) {
  return (
    <motion.div
      className={`flex items-center gap-4 w-full max-w-md mx-auto ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold" />
      <span className="text-gold text-sm tracking-widest">{symbol}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold" />
    </motion.div>
  );
}
