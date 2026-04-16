"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OrnamentalDivider from "./OrnamentalDivider";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 1.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function AnimatedName({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ minWidth: char === " " ? "0.3em" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden geometric-pattern"
    >
      {/* Parallax background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Top arch decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-gold/10 rounded-b-full" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[580px] h-[290px] border border-gold/5 rounded-b-full" />

        {/* Corner ornaments */}
        <svg
          className="absolute top-8 left-8 w-24 h-24 text-gold/15"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 Q50,0 50,50 Q50,0 100,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M0,0 Q0,50 50,50 Q0,50 0,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
        </svg>
        <svg
          className="absolute top-8 right-8 w-24 h-24 text-gold/15 scale-x-[-1]"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 Q50,0 50,50 Q50,0 100,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M0,0 Q0,50 50,50 Q0,50 0,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-2xl text-emerald-dark leading-relaxed"
            dir="rtl"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-[family-name:var(--font-cormorant)] text-xs md:text-base text-warm-gray mt-3 tracking-[0.2em] uppercase"
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </motion.p>
        </motion.div>

        <OrnamentalDivider className="mb-4" symbol="•" />

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-[family-name:var(--font-cormorant)] text-sm md:text-base text-warm-gray tracking-[0.15em] uppercase mb-6"
        >
          Together with their families
        </motion.p>

        {/* Couple Names */}
        <div className="mb-1 flex gap-2 justify-center items-end">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl  font-light text-charcoal tracking-wide">
            <AnimatedName name="Fida" />
          </h1>{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6, ease: "backOut" }}
            className="my-1 md:my-4"
          >
            <span className="relative top-3 gold-shimmer font-[family-name:var(--font-amiri)] text-5xl md:text-6xl">
              &
            </span>
          </motion.div>
        </div>

        <div className="mb-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl  font-light text-charcoal tracking-wide">
            <AnimatedName name="Sufair" />
          </h1>
        </div>

        <OrnamentalDivider className="mb-8" />

        {/* Quranic verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="max-w-xl mx-auto"
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-lg text-emerald leading-loose mb-1"
            dir="rtl"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm md:text-base text-warm-gray italic leading-relaxed">
            &ldquo;And among His signs is that He created for you mates from
            among yourselves, that you may dwell in tranquility with them, and
            He has put love and mercy between your hearts.&rdquo;
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-xs text-gold mt-2 tracking-[0.15em] uppercase">
            — Surah Ar-Rum 30:21
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute -bottom-22 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] uppercase text-warm-gray">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
