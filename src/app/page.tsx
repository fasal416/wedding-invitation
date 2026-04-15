"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OpeningAnimation from "@/components/OpeningAnimation";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import FamiliesSection from "@/components/FamiliesSection";
import GallerySection from "@/components/GallerySection";
import VenueSection from "@/components/VenueSection";
import FooterSection from "@/components/FooterSection";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <OpeningAnimation onComplete={() => setIsOpen(true)} />}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FloatingParticles />
          <main className="relative z-10">
            <HeroSection />
            <EventDetails />
            <FamiliesSection />
            {/* <GallerySection /> */}
            <VenueSection />
            <FooterSection />
          </main>
        </motion.div>
      )}
    </>
  );
}
