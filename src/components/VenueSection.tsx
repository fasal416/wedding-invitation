"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import OrnamentalDivider from "./OrnamentalDivider";

export default function VenueSection() {
  const venueAddress = "Kodakad Bank Auditorium, Kasargod, Kerala, India";
  const mapsQuery = encodeURIComponent(
    "Kodakad+Bank+Auditorium+Kasargod+Kerala",
  );
  const mapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern" />

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
            موقع الحفل
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal tracking-wide mb-4">
            The Venue
          </h2>
          <OrnamentalDivider symbol="✧" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Venue info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/20 bg-white/50 mb-6">
              <MapPin className="w-6 h-6 text-gold" />
            </div>

            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-charcoal mb-4">
              Kodakad Bank Auditorium
            </h3>

            <p className="font-[family-name:var(--font-cormorant)] text-lg text-warm-gray mb-2">
              Kasargod, Kerala
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-warm-gray mb-8">
              India
            </p>

            <a
              href={mapsDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full border border-gold/30 bg-white/50 backdrop-blur-sm font-[family-name:var(--font-cormorant)] text-charcoal tracking-[0.1em] uppercase text-sm hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 group"
            >
              <Navigation className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              Get Directions
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/15 shadow-lg">
              {/* Map frame decoration */}
              <div className="absolute inset-0 z-10 pointer-events-none border-4 border-white/20 rounded-2xl" />
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
                className="w-full h-[350px] md:h-[400px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
