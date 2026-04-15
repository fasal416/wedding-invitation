"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({
  onComplete,
}: OpeningAnimationProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = useCallback(() => {
    setIsExiting(true);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="opening"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left door */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-emerald-dark flex items-center justify-end"
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Pattern on left door */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="text-gold">
                <defs>
                  <pattern
                    id="leftPattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M30,0 L60,30 L30,60 L0,30Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leftPattern)" />
              </svg>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gold/30" />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-emerald-dark flex items-center justify-start"
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="text-gold">
                <defs>
                  <pattern
                    id="rightPattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M30,0 L60,30 L30,60 L0,30Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#rightPattern)" />
              </svg>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/30" />
          </motion.div>

          {/* Center content */}
          <motion.div
            className="relative z-10 text-center px-8"
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Islamic arch frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <svg
                viewBox="0 0 300 380"
                className="w-[500px] md:w-[800px] mx-auto overflow-visible"
              >
                {/* Outer arch */}
                <path
                  d="M30,3000 L30,150 Q30,20 150,20 Q270,20 270,150 L270,3000"
                  fill="none"
                  stroke="rgba(201,169,110,0.4)"
                  strokeWidth="1"
                />
                {/* Inner arch */}
                <path
                  d="M50,3000 L50,155 Q50,45 150,45 Q250,45 250,155 L250,3000"
                  fill="none"
                  stroke="rgba(201,169,110,0.2)"
                  strokeWidth="0.5"
                />
                {/* Decorative elements inside */}
                <circle
                  cx="150"
                  cy="90"
                  r="15"
                  fill="none"
                  stroke="rgba(201,169,110,0.2)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="150"
                  cy="90"
                  r="8"
                  fill="none"
                  stroke="rgba(201,169,110,0.15)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Text overlay on the arch */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="font-[family-name:var(--font-amiri)] text-gold/80 text-4xl mb-3"
                  dir="rtl"
                >
                  بِسْمِ ٱللَّٰهِ
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="font-[family-name:var(--font-cormorant)] text-cream/60 text-xs tracking-[0.3em] uppercase mt-2 mb-1"
                >
                  You are invited to
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="font-[family-name:var(--font-cormorant)] text-cream/60 text-xs tracking-[0.3em] uppercase mb-6"
                >
                  the wedding of
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="font-[family-name:var(--font-playfair)] text-gold text-5xl md:text-6xl tracking-wider mb-1"
                >
                  Fida
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="font-[family-name:var(--font-amiri)] text-gold/60 text-xl"
                >
                  &
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="font-[family-name:var(--font-playfair)] text-gold text-5xl md:text-6xl tracking-wider mb-6"
                >
                  Sufair
                </motion.h2>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                  onClick={handleOpen}
                  className="px-4 py-3 border border-gold/40 rounded-full font-[family-name:var(--font-cormorant)] font-bold text-gold text-base tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-500 cursor-pointer min-w-[180px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Open Invitation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
