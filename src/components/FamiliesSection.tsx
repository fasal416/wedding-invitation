"use client";

import { motion } from "framer-motion";
import OrnamentalDivider from "./OrnamentalDivider";

const cardReveal = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay,
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function FamilyCard({
  side,
  name,
  arabicLabel,
  fatherName,
  motherName,
  delay,
}: {
  side: "bride" | "groom";
  name: string;
  arabicLabel: string;
  fatherName: string;
  motherName: string;
  delay: number;
}) {
  return (
    <motion.div
      custom={delay}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="perspective-1000 pb-4"
    >
      <div className="relative bg-white/50 backdrop-blur-md border border-gold/15 rounded-3xl p-8 md:p-12 text-center overflow-hidden group hover:bg-white/70 transition-all duration-700">
        {/* Islamic arch at top */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-96 h-[280px]">
          <svg viewBox="0 0 160 80" className="w-full h-full">
            <path
              d="M0,80 Q0,0 80,0 Q160,0 160,80"
              fill="none"
              stroke="rgba(201,169,110,0.15)"
              strokeWidth="1"
            />
            <path
              d="M10,80 Q10,10 80,10 Q150,10 150,80"
              fill="none"
              stroke="rgba(201,169,110,0.08)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Arabic label */}
          <p
            className="font-[family-name:var(--font-amiri)] text-xl text-gold mb-1"
            dir="rtl"
          >
            {arabicLabel}
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-warm-gray tracking-[0.2em] uppercase mb-4">
            {side === "bride" ? "The Bride" : "The Groom"}
          </p>

          {/* Name */}
          <motion.h3
            className="font-[family-name:var(--font-playfair)] text-3xl text-charcoal tracking-wide mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/30 mx-auto mb-6" />

          {/* Parents */}
          <div className="space-y-4">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-xs text-warm-gray tracking-[0.2em] uppercase mb-1">
                {side === "bride" ? "Daughter" : "Son"} of
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-charcoal">
                {fatherName}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-warm-gray">
                &
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-charcoal">
                {motherName}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-96 h-[280px]">
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            className="text-gold/15"
          >
            <path
              d="M0,10 Q10,0 20,10 Q30,0 40,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M0,15 Q10,5 20,15 Q30,5 40,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function FamiliesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/30 to-cream" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-3xl text-emerald mb-2"
            dir="rtl"
          >
            العائلات
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal tracking-wide mb-4">
            The Families
          </h2>
          <OrnamentalDivider symbol="❦" />
        </motion.div>

        {/* Family cards */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-10 overflow-visible">
          <FamilyCard
            side="bride"
            name="Fida Shamsuddin"
            arabicLabel="العروس"
            fatherName="Shamsuddin U.K"
            motherName="Khadeeja Rahman"
            delay={0.1}
          />
          <FamilyCard
            side="groom"
            name="Sufair Ali"
            arabicLabel="العريس"
            fatherName="Muhammadali M.C"
            motherName="Sulaikha P.N"
            delay={0.3}
          />
        </div>

        {/* Dua for couple */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-2xl md:text-3xl text-emerald leading-loose mb-3"
            dir="rtl"
          >
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي
            خَيْرٍ
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm md:text-base text-warm-gray italic">
            &ldquo;May Allah bless you and shower His blessings upon you and
            bring you together in goodness.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
