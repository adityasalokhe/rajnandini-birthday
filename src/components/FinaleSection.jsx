"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { RoseIllustration, FloralVineDivider, CornerFlourish } from "./FloralDecorations";

export default function FinaleSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="finale"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:min-h-0 lg:py-16 bg-gradient-to-b from-[#FFF9F5] via-[#F5DDE3]/40 to-[#FFF9F5] overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#F5DDE3] via-[#F4E3C9]/40 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Decorative Botanical Corners */}
      <div className="absolute top-8 left-8 hidden md:block opacity-65">
        <CornerFlourish className="w-24 h-24" />
      </div>
      <div className="absolute top-8 right-8 hidden md:block opacity-65">
        <CornerFlourish className="w-24 h-24" flip />
      </div>
      <div className="absolute bottom-12 left-8 hidden md:block opacity-65 scale-y-[-1]">
        <CornerFlourish className="w-24 h-24" />
      </div>
      <div className="absolute bottom-12 right-8 hidden md:block opacity-65 scale-y-[-1]">
        <CornerFlourish className="w-24 h-24" flip />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Floating Rose Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 lg:mb-5"
        >
          <div className="relative p-4 rounded-full bg-white/85 shadow-md border border-[#F5DDE3] animate-float-slow">
            <RoseIllustration className="w-14 h-14 sm:w-16 sm:h-16" color="#C98291" />
          </div>
        </motion.div>

        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#73545B] bg-[#F5DDE3]/80 border border-[#C98291]/40 mb-6 lg:mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C98291]" />
          With All My Heart
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#73545B] tracking-tight leading-tight mb-6 lg:mb-4"
        >
          Happy Birthday, <br />
          <span className="text-shimmer">Rajnandini ❤️</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-[#73545B]/90 max-w-2xl leading-relaxed mb-6 lg:mb-4"
        >
          &ldquo;You deserve all the love, happiness and beautiful things this world has to offer.&rdquo;
        </motion.p>

        {/* Delicate Floral Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full my-4 lg:my-3"
        >
          <FloralVineDivider className="max-w-xs sm:max-w-md mx-auto" />
        </motion.div>

        {/* Final Memorable Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif italic text-xl sm:text-3xl text-[#C98291] font-medium tracking-wide mt-2 mb-12 lg:mb-7"
        >
          &ldquo;Keep smiling, beautiful. Today and always.&rdquo;
        </motion.p>

        {/* Scroll To Top / Replay Moments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={scrollToTop}
            type="button"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase text-[#73545B] bg-white/90 border border-[#F5DDE3] hover:bg-[#F5DDE3] hover:border-[#C98291] shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-[#C98291] group-hover:-translate-y-0.5 transition-transform" />
            <span>Relive The Moments</span>
          </button>

          <p className="text-[11px] sm:text-xs text-[#73545B]/70 font-light tracking-widest uppercase mt-4">
            Created with endless love • 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
