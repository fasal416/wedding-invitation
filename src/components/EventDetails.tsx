"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import OrnamentalDivider from "./OrnamentalDivider";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function EventCard({
  title,
  arabicTitle,
  time,
  description,
  delay,
  icon,
}: {
  title: string;
  arabicTitle: string;
  time: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      custom={delay}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group pb-4"
    >
      <div className="relative bg-white/60 backdrop-blur-md border border-gold/15 rounded-2xl p-8 md:p-10 text-center overflow-hidden transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(201,169,110,0.15)]">
        {/* Top arc decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 border-b border-gold/10 rounded-b-full" />

        <div className="relative z-10">
          <p
            className="font-[family-name:var(--font-amiri)] text-2xl text-emerald mb-1"
            dir="rtl"
          >
            {arabicTitle}
          </p>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-charcoal mb-6 tracking-wide">
            {title}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-warm-gray">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="font-[family-name:var(--font-cormorant)] text-lg">
                Saturday, May 17, 2025
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 text-warm-gray">
              <Clock className="w-4 h-4 text-gold" />
              <span className="font-[family-name:var(--font-cormorant)] text-lg">
                {time}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 text-warm-gray">
              {icon}
              <span className="font-[family-name:var(--font-cormorant)] text-lg">
                {description}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/20 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/20 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/20 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/20 rounded-br-sm" />
      </div>
    </motion.div>
  );
}

export default function EventDetails() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />

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
            تفاصيل الحفل
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal tracking-wide mb-4">
            Celebration Details
          </h2>
          <OrnamentalDivider symbol="✧" />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 md:mb-24"
        >
          <p className="text-center font-[family-name:var(--font-cormorant)] text-warm-gray text-lg tracking-[0.15em] uppercase mb-8">
            Counting down to the blessed day
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 overflow-visible">
          <EventCard
            title="The Nikah"
            arabicTitle="النكاح"
            time="11:00 AM onwards"
            description="Kodakad Bank Auditorium, Kasargod"
            delay={0.2}
            icon={<MapPin className="w-4 h-4 text-gold" />}
          />
          <EventCard
            title="The Reception"
            arabicTitle="حفل الاستقبال"
            time="12:00 PM onwards"
            description="Kodakad Bank Auditorium, Kasargod"
            delay={0.4}
            icon={<MapPin className="w-4 h-4 text-gold" />}
          />
        </div>
      </div>
    </section>
  );
}
