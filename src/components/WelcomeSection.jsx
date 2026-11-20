"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, ChevronDown } from "lucide-react";

// ============================================================================
// LUXURY INVITATION ORNAMENTS
// ============================================================================

function LuxuryCornerFlourish({ className = "w-12 h-12", flipX = false, flipY = false }) {
  const transform = `${flipX ? "scaleX(-1)" : ""} ${flipY ? "scaleY(-1)" : ""}`.trim();
  return (
    <svg
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      <path
        d="M2 68 L2 22 C2 10.954 10.954 2 22 2 L68 2"
        stroke="#C98291"
        strokeWidth="1"
        strokeOpacity="0.55"
      />
      <path
        d="M8 68 L8 26 C8 16.059 16.059 8 26 8 L68 8"
        stroke="#F5DDE3"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        strokeOpacity="0.7"
      />
      <path
        d="M2 22 C6 22 14 18 16 12 C18 6 12 2 22 2"
        stroke="#C98291"
        strokeWidth="0.9"
        strokeOpacity="0.6"
      />
      <circle cx="22" cy="22" r="2.5" fill="#C98291" fillOpacity="0.8" />
      <circle cx="2" cy="68" r="1.5" fill="#C98291" fillOpacity="0.6" />
      <circle cx="68" cy="2" r="1.5" fill="#C98291" fillOpacity="0.6" />
    </svg>
  );
}

function LuxuryInvitationDivider({ className = "w-full max-w-sm sm:max-w-md h-6" }) {
  return (
    <div className={`flex items-center justify-center space-x-3 text-[#C98291] ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F5DDE3] to-[#C98291]" />
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-[#C98291] opacity-75">
        <path
          d="M19 6 C14 6 10 1 5 1 C1.5 1 0 3.5 1 6 C2 8.5 4.5 9.5 7 8 C10 6 13 6 19 6"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </svg>
      <div className="relative flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#C98291]">
          <path
            d="M12 1 L14.8 8.8 L23 12 L14.8 15.2 L12 23 L9.2 15.2 L1 12 L9.2 8.8 Z"
            fill="currentColor"
            fillOpacity="0.85"
          />
          <circle cx="12" cy="12" r="2.2" fill="#FFF9F5" />
        </svg>
      </div>
      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-[#C98291] opacity-75 scale-x-[-1]">
        <path
          d="M19 6 C14 6 10 1 5 1 C1.5 1 0 3.5 1 6 C2 8.5 4.5 9.5 7 8 C10 6 13 6 19 6"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#F5DDE3] to-[#C98291]" />
    </div>
  );
}

function FacetedSparkle({ className = "w-4 h-4", delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.6, rotate: 0 }}
      animate={{
        scale: [0.7, 1.25, 0.7],
        opacity: [0.4, 1, 0.4],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: 3.4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(245,221,227,0.85)]">
        <path
          d="M12 0 C12 7.2 16.8 12 24 12 C16.8 12 12 16.8 12 24 C12 16.8 7.2 12 0 12 C7.2 12 12 7.2 12 0 Z"
          fill="url(#sparkle-grad)"
        />
        <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
        <defs>
          <radialGradient id="sparkle-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF9F5" />
            <stop offset="80%" stopColor="#F5DDE3" />
            <stop offset="100%" stopColor="#C98291" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// ============================================================================
// MAIN WELCOME / HERO COMPONENT
// ============================================================================

export default function WelcomeSection({ onOpenSurprise }) {
  const handleOpen = () => {
    if (typeof window !== "undefined" && window.startBackgroundMusic) {
      window.startBackgroundMusic();
    }
    if (onOpenSurprise) {
      onOpenSurprise();
    } else {
      const target = document.getElementById("celebration");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="welcome"
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 py-6 sm:py-9 md:py-11 lg:py-8 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#F5DDE3]/30 to-[#FFF9F5] selection:bg-[#F5DDE3] selection:text-[#C98291]"
    >
      {/* 1. CINEMATIC AMBIENT LIGHTING & GLOWS */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[640px] md:w-[920px] h-[340px] sm:h-[640px] md:h-[920px] bg-[radial-gradient(ellipse_at_center,_rgba(245,221,227,0.6)_0%,_rgba(244,227,201,0.25)_38%,_rgba(255,249,245,0)_70%)] blur-2xl sm:blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 -left-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#DCE6D8]/35 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-[#F5DDE3]/55 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top spacer */}
      <div className="w-full h-1 sm:h-2" aria-hidden="true" />

      {/* 2. CENTERED LUXURY ROMANTIC INVITATION CARD */}
      <div className="relative z-10 w-full max-w-[840px] mx-auto my-auto flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.95, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full px-6 sm:px-12 md:px-16 py-8 sm:py-12 md:py-14 rounded-[2rem] sm:rounded-[2.6rem] bg-white/70 backdrop-blur-md border border-[#F5DDE3] luxury-invitation-card flex flex-col items-center text-center overflow-hidden"
        >
          {/* Subtle dual hairline inner border */}
          <div
            className="absolute inset-2.5 sm:inset-3 rounded-[1.6rem] sm:rounded-[2.2rem] border border-[#C98291]/25 pointer-events-none"
            aria-hidden="true"
          />

          {/* 4 Classical Filigree Corner Flourishes */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-75 pointer-events-none" aria-hidden="true">
            <LuxuryCornerFlourish className="w-9 h-9 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-75 pointer-events-none" aria-hidden="true">
            <LuxuryCornerFlourish className="w-9 h-9 sm:w-12 sm:h-12" flipX />
          </div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 opacity-75 pointer-events-none" aria-hidden="true">
            <LuxuryCornerFlourish className="w-9 h-9 sm:w-12 sm:h-12" flipY />
          </div>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-75 pointer-events-none" aria-hidden="true">
            <LuxuryCornerFlourish className="w-9 h-9 sm:w-12 sm:h-12" flipX flipY />
          </div>

          {/* Required Text 1: Poetic Whisper */}
          <motion.p
            initial={{ opacity: 0.95, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif italic font-normal text-base sm:text-xl md:text-2xl text-[#73545B] mt-1 sm:mt-2 mb-2 sm:mb-3 tracking-wide"
          >
            &ldquo;A little world made just for you...&rdquo;
          </motion.p>

          {/* Required Text 2: Centerpiece Name: Rajnandini */}
          <motion.div
            initial={{ opacity: 0.95, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative my-2 sm:my-3 select-none"
          >
            {/* Warm radiant aura behind the name */}
            <div
              className="absolute -inset-4 sm:-inset-6 bg-[radial-gradient(ellipse_at_center,_rgba(245,221,227,0.55)_0%,_transparent_70%)] blur-lg pointer-events-none"
              aria-hidden="true"
            />

            {/* Faceted Luxury Star Sparkles */}
            <div className="absolute -top-3 sm:-top-4 left-0 sm:-left-3 pointer-events-none">
              <FacetedSparkle className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" delay={0.2} />
            </div>
            <div className="absolute top-1 sm:top-2 left-[40%] pointer-events-none">
              <FacetedSparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5" delay={1.4} />
            </div>
            <div className="absolute -top-2 sm:-top-3 right-[16%] pointer-events-none">
              <FacetedSparkle className="w-3 h-3 sm:w-4 sm:h-4" delay={0.8} />
            </div>
            <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-3 pointer-events-none">
              <FacetedSparkle className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" delay={2.0} />
            </div>

            {/* The Visual Centerpiece Heading */}
            <h1 className="relative font-luxury-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-normal tracking-[0.02em] leading-[1.08] sm:leading-[1.1] text-rose-gold-foil luxury-text-shadow">
              Rajnandini
            </h1>
          </motion.div>

          {/* Delicate Luxury Floral Divider */}
          <motion.div
            initial={{ opacity: 0.9, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full my-3 sm:my-4 flex justify-center"
          >
            <LuxuryInvitationDivider className="max-w-[240px] sm:max-w-md mx-auto" />
          </motion.div>

          {/* Required Text 3: Subtitle */}
          <motion.p
            initial={{ opacity: 0.95, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base font-medium tracking-[0.24em] sm:tracking-[0.3em] uppercase text-[#73545B] mb-7 sm:mb-9 max-w-md"
          >
            Today is all about you.
          </motion.p>

          {/* Required Text 4: Cinematic Call To Action Button */}
          <motion.div
            initial={{ opacity: 0.95, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C98291] via-[#F5DDE3] to-[#C98291] opacity-45 blur-md group-hover:opacity-80 transition-opacity duration-500 group-hover:blur-lg"
                aria-hidden="true"
              />

              <button
                onClick={handleOpen}
                type="button"
                className="relative inline-flex items-center gap-2.5 sm:gap-3 px-8 sm:px-11 py-3.5 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium tracking-wide text-white bg-gradient-to-r from-[#B95B6E] via-[#C98291] to-[#A44C5E] border border-[#F5DDE3]/70 shadow-[0_12px_28px_-6px_rgba(201,130,145,0.45)] hover:shadow-[0_16px_36px_-4px_rgba(201,130,145,0.6)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none"
              >
                <span
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-[160%] group-hover:translate-x-[360%] transition-transform duration-1000 ease-in-out"
                  aria-hidden="true"
                />

                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 fill-white/85 transition-transform duration-300 group-hover:scale-125" />
                <span className="font-sans font-medium tracking-wide drop-shadow-sm">
                  Open Your Surprise
                </span>
                <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/90 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            <span className="mt-3 sm:mt-3.5 text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#73545B]/70 font-light">
              Tap to begin your celebration
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. REFINED FLOATING SCROLL CUE */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        className="relative z-10 my-2 flex flex-col items-center text-[#73545B]/70 cursor-pointer hover:text-[#C98291] transition-colors"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpen();
          }
        }}
      >
        <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase mb-1 font-medium opacity-80">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 opacity-80" />
      </motion.div>
    </section>
  );
}
