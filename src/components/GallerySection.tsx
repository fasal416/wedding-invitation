"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OrnamentalDivider from "./OrnamentalDivider";

const images = [
  {
    src: "/gallery/placeholder-1.jpg",
    alt: "Wedding decoration",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/gallery/placeholder-2.jpg",
    alt: "Islamic calligraphy",
    aspect: "aspect-square",
  },
  {
    src: "/gallery/placeholder-3.jpg",
    alt: "Wedding flowers",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/gallery/placeholder-4.jpg",
    alt: "Henna art",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/gallery/placeholder-5.jpg",
    alt: "Wedding rings",
    aspect: "aspect-square",
  },
  {
    src: "/gallery/placeholder-6.jpg",
    alt: "Wedding venue",
    aspect: "aspect-[4/5]",
  },
];

function PlaceholderImage({ alt, index }: { alt: string; index: number }) {
  const patterns = [
    // Geometric star pattern
    <>
      <defs>
        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2D5A3D" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="#F5E6D8" />
      <g transform="translate(200,250)" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.4">
        {[0, 45, 90, 135].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <rect x="-60" y="-60" width="120" height="120" />
          </g>
        ))}
        <circle r="85" />
        <circle r="42" />
      </g>
      <text x="200" y="460" textAnchor="middle" fill="#C9A96E" fontSize="12" fontFamily="serif" opacity="0.6">{alt}</text>
    </>,
    // Arabesque curves
    <>
      <rect width="400" height="400" fill="#F0EBE1" />
      <g transform="translate(200,200)" stroke="#2D5A3D" strokeWidth="0.5" fill="none" opacity="0.3">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path d="M0,-80 Q40,-40 0,0 Q-40,-40 0,-80" />
          </g>
        ))}
        <circle r="20" fill="#C9A96E" fillOpacity="0.1" />
      </g>
      <text x="200" y="370" textAnchor="middle" fill="#2D5A3D" fontSize="12" fontFamily="serif" opacity="0.5">{alt}</text>
    </>,
    // Floral mandala
    <>
      <rect width="400" height="500" fill="#FAF7F2" />
      <g transform="translate(200,230)" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.35">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <ellipse cx="0" cy="-50" rx="15" ry="35" />
          </g>
        ))}
        <circle r="25" stroke="#2D5A3D" />
        <circle r="70" strokeDasharray="4 4" />
      </g>
      <text x="200" y="460" textAnchor="middle" fill="#C9A96E" fontSize="12" fontFamily="serif" opacity="0.6">{alt}</text>
    </>,
  ];

  return (
    <svg viewBox={`0 0 400 ${index % 3 === 1 ? 400 : 500}`} className="w-full h-full">
      {patterns[index % 3]}
    </svg>
  );
}

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white/50 to-cream" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            لحظات جميلة
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal tracking-wide mb-4">
            Moments of Beauty
          </h2>
          <OrnamentalDivider symbol="✦" />
        </motion.div>

        {/* Masonry-like grid with parallax */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, i) => (
            <motion.div
              key={i}
              style={{ x: i % 2 === 0 ? x1 : x2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`relative ${image.aspect} rounded-xl overflow-hidden border border-gold/10 bg-blush/30 cursor-pointer group`}
            >
              <PlaceholderImage alt={image.alt} index={i} />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 right-3 font-[family-name:var(--font-cormorant)] text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-[family-name:var(--font-cormorant)] text-warm-gray text-sm mt-8 italic"
        >
          Replace placeholders with your cherished moments
        </motion.p>
      </div>
    </section>
  );
}
