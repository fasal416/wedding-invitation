"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2026-05-17T11:00:00+05:30").getTime();

    function calculate() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft([
          { value: 0, label: "Days" },
          { value: 0, label: "Hours" },
          { value: 0, label: "Minutes" },
          { value: 0, label: "Seconds" },
        ]);
        return;
      }

      setTimeLeft([
        { value: Math.floor(diff / (1000 * 60 * 60 * 24)), label: "Days" },
        { value: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), label: "Hours" },
        { value: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), label: "Minutes" },
        { value: Math.floor((diff % (1000 * 60)) / 1000), label: "Seconds" },
      ]);
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || timeLeft.length === 0) {
    return (
      <div className="flex justify-center gap-3 md:gap-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-gold/20 bg-cream/50 backdrop-blur-sm" />
            <span className="font-[family-name:var(--font-cormorant)] text-xs text-warm-gray mt-2 tracking-[0.15em] uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3 md:gap-8">
      {timeLeft.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl border border-gold/25 bg-white/60 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-sm">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={unit.value}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-charcoal font-light"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-xs text-warm-gray mt-2 tracking-[0.15em] uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
