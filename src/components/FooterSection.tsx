"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import OrnamentalDivider from "./OrnamentalDivider";

export default function FooterSection() {
  return (
    <footer className="relative py-20 md:py-32 pb-20 md:pb-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-cream to-emerald-dark opacity-85" />
      <div className="absolute z-20 inset-0 geometric-pattern opacity-30" />

      <div className="relative z-30 max-w-3xl mx-auto text-center">
        {/* Closing Dua */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-3xl md:text-4xl text-emerald leading-loose mb-4"
            dir="rtl"
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ
            أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm md:text-base text-charcoal leading-relaxed mb-2">
            &ldquo;Our Lord, grant us from among our spouses and offspring
            comfort to our eyes and make us a leader for the righteous.&rdquo;
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-xs text-charcoal tracking-[0.15em] uppercase">
            — Surah Al-Furqan 25:74
          </p>
        </motion.div>

        <OrnamentalDivider className="my-12" symbol="❦" />

        {/* Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-blush leading-relaxed">
            Your presence and prayers are the greatest gift you can give us.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-blush leading-relaxed mt-2">
            We humbly request your duas for a blessed union.
          </p>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-blush">
              Fida
            </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5 text-gold fill-gold/30" />
            </motion.div>
            <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-blush">
              Sufair
            </span>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-blush tracking-[0.15em] text-sm">
            17 . 05 . 2025
          </p>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-4xl text-emerald mb-4"
            dir="rtl"
          >
            ما شاء الله
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-emerald font-bold tracking-[0.2em] uppercase">
            With love and blessings
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
