"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrnamentalDivider from "./OrnamentalDivider";

export default function StorySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-8"
        >
          <p
            className="font-[family-name:var(--font-amiri)] text-2xl md:text-3xl text-emerald mb-2"
            dir="rtl"
          >
            بداية رحلتنا
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal tracking-wide">
            Our Story
          </h2>
          <OrnamentalDivider symbol="✧" />
        </motion.div>

        {/* The Animated Painting */}
        <div className="relative w-full max-w-sm md:max-w-xl mx-auto aspect-square mb-12">
          {/* Bride - Bottom Layer, animates from Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/bride-paint.png"
              alt="Bride childhood painting"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </motion.div>

          {/* Groom - Top Layer, animates from Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src="/groom-paint.png"
              alt="Groom childhood painting"
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </motion.div>
        </div>

        {/* Thematic Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-warm-gray leading-relaxed italic -mt-8">
            "Destined by the Almighty and blessed by our beloved families. Two
            distinct journeys, painted with joyful childhood memories, now
            coming together to create a shared masterpiece of lifelong
            togetherness."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
