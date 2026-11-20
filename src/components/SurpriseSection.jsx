"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Heart, Star, Smile } from "lucide-react";
import confetti from "canvas-confetti";
import { FloralVineDivider } from "./FloralDecorations";

export default function SurpriseSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [extraHearts, setExtraHearts] = useState([]);

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Gentle sparkle burst matching palette
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C98291", "#F5DDE3", "#DCE6D8", "#F4E3C9", "#FFF9F5", "#73545B"],
          scalar: 0.9,
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleTapHeart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    setExtraHearts((prev) => [...prev.slice(-10), { id, x, y }]);
    setTimeout(() => {
      setExtraHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  };

  return (
    <section
      id="surprise"
      className="relative min-h-screen w-full py-24 lg:min-h-0 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9F5] via-[#F5DDE3]/30 to-[#FFF9F5] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] bg-gradient-to-tr from-[#F5DDE3]/50 via-[#F4E3C9]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium tracking-[0.25em] uppercase text-[#73545B] bg-[#F5DDE3]/80 border border-[#C98291]/40 mb-4"
        >
          <Gift className="w-3.5 h-3.5 text-[#C98291]" />
          A Special Token
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#73545B] font-normal tracking-tight mb-4"
        >
          A Little Surprise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-[#73545B]/85 max-w-md mb-12 lg:mb-8 font-light italic"
        >
          {isOpen
            ? "A wish wrapped in warmth and endless tenderness."
            : "Untie the ribbon to reveal a heartfelt wish waiting inside."}
        </motion.p>

        {/* 3D Interactive Gift Box */}
        <div className="relative flex flex-col items-center">
          <div
            onClick={handleOpenGift}
            className={`cursor-pointer group relative w-48 sm:w-60 h-48 sm:h-60 perspective-1000 select-none transition-transform duration-300 ${
              !isOpen ? "hover:scale-105 active:scale-95" : ""
            }`}
            role="button"
            tabIndex={0}
            aria-label="Open gift box"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenGift();
            }}
          >
            {/* Ambient glow behind box */}
            <div className="absolute inset-0 bg-[#F5DDE3]/50 rounded-3xl blur-2xl group-hover:bg-[#F5DDE3]/75 transition-colors duration-500" />

            {/* Gift Box Base */}
            <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-44 rounded-2xl bg-gradient-to-br from-[#F5DDE3] via-[#EAB1BE] to-[#D88A9A] border border-[#C98291] shadow-2xl shadow-[#C98291]/25 overflow-hidden flex items-center justify-center">
              {/* Vertical Ribbon */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-gradient-to-r from-[#C98291] via-[#F4E3C9] to-[#C98291] shadow-inner" />
              {/* Horizontal Ribbon */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 sm:h-10 bg-gradient-to-b from-[#C98291] via-[#F4E3C9] to-[#C98291] shadow-inner" />

              {/* Shimmer light */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Gift Box Lid (Animates off when open) */}
            <motion.div
              animate={
                isOpen
                  ? { y: -70, rotate: -18, opacity: 0.85 }
                  : { y: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-4 sm:top-6 -left-2 -right-2 h-14 sm:h-18 rounded-xl bg-gradient-to-r from-[#FFF0F3] via-[#F5DDE3] to-[#E8AAB8] border border-[#C98291] shadow-lg shadow-[#73545B]/15 z-20 flex items-center justify-center"
            >
              {/* Lid Ribbon */}
              <div className="w-8 sm:w-10 h-full bg-gradient-to-r from-[#C98291] via-[#F4E3C9] to-[#C98291]" />

              {/* Satin Bow on Top of Lid */}
              <div className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 sm:w-24 h-12 sm:h-14 drop-shadow-md"
                >
                  {/* Left Bow Loop */}
                  <path
                    d="M50 30 C30 10 10 15 15 32 C20 48 45 35 50 30 Z"
                    fill="#C98291"
                    stroke="#73545B"
                    strokeWidth="1"
                  />
                  {/* Right Bow Loop */}
                  <path
                    d="M50 30 C70 10 90 15 85 32 C80 48 55 35 50 30 Z"
                    fill="#C98291"
                    stroke="#73545B"
                    strokeWidth="1"
                  />
                  {/* Center Knot */}
                  <circle cx="50" cy="30" r="7" fill="#F4E3C9" stroke="#73545B" strokeWidth="1" />
                  {/* Ribbon Tails */}
                  <path
                    d="M47 34 Q38 52 28 58"
                    stroke="#C98291"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M53 34 Q62 52 72 58"
                    stroke="#C98291"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Click hint when closed */}
            {!isOpen && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#73545B] font-medium tracking-wider whitespace-nowrap animate-pulse">
                Click to unwrap
              </div>
            )}
          </div>

          {/* Reveal Card / Wish Message */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-14 lg:mt-10 w-full max-w-xl p-8 sm:p-10 rounded-3xl bg-white/95 border border-[#F5DDE3] shadow-2xl shadow-[#73545B]/10 backdrop-blur-md relative overflow-hidden"
                onClick={handleTapHeart}
              >
                {/* Floating hearts tapped */}
                {extraHearts.map((h) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 1, scale: 0.5, y: 0 }}
                    animate={{ opacity: 0, scale: 1.5, y: -60 }}
                    transition={{ duration: 1.2 }}
                    style={{ left: h.x, top: h.y }}
                    className="absolute pointer-events-none text-[#C98291]"
                  >
                    <Heart className="w-6 h-6 fill-current" />
                  </motion.div>
                ))}

                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#F5DDE3] text-[#C98291]">
                    <Smile className="w-8 h-8" />
                  </div>
                </div>

                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#C98291] mb-3">
                  A Heartfelt Wish
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#73545B] font-normal leading-snug mb-4">
                  &ldquo;If I could make one wish for you, it would be that you always find reasons to smile.&rdquo;
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#73545B]/80 font-light mt-4">
                  (Tap anywhere inside this card to send little hearts)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full mt-20 lg:mt-10 max-w-xs sm:max-w-md mx-auto">
        <FloralVineDivider />
      </div>
    </section>
  );
}
