"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Feather } from "lucide-react";
import { FloralVineDivider, RoseIllustration } from "./FloralDecorations";

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section
      id="letter"
      className="relative min-h-screen w-full py-20 sm:py-24 lg:min-h-0 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9F5] via-[#F5DDE3]/30 to-[#FFF9F5] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Soft Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-gradient-to-tr from-[#F5DDE3]/50 via-[#F4E3C9]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium tracking-[0.25em] uppercase text-[#73545B] bg-[#F5DDE3]/80 border border-[#C98291]/40 mb-4"
        >
          <Feather className="w-3.5 h-3.5 text-[#C98291]" />
          A Secret Keepsake
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#73545B] font-normal tracking-tight mb-4"
        >
          A Letter From My Heart
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-[#73545B]/85 max-w-md mb-10 lg:mb-6 font-light italic"
        >
          {isOpen
            ? "Written with endless tenderness, sealed with all my love."
            : "Tap the wax seal to unlock the words kept just for you."}
        </motion.p>

        {/* Envelope Container */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Closed / Interactive Envelope */}
          <div
            onClick={toggleEnvelope}
            className="cursor-pointer group relative w-full max-w-[340px] sm:max-w-[420px] h-[210px] sm:h-[250px] perspective-1000 select-none"
            role="button"
            tabIndex={0}
            aria-label={isOpen ? "Close letter envelope" : "Open letter envelope"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleEnvelope();
              }
            }}
          >
            {/* Envelope Body */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#F5DDE3] to-[#E3B6C1] border border-[#C98291] shadow-2xl shadow-[#C98291]/25 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Inner paper lining */}
              <div className="absolute inset-2 rounded-xl bg-[#FFF9F5] border border-[#F5DDE3] opacity-80" />

              {/* Envelope Flap Creases (SVG) */}
              <svg
                viewBox="0 0 420 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <path
                  d="M0 0 L180 125 L0 250 Z"
                  fill="#EAA8B6"
                  opacity="0.8"
                  stroke="#C98291"
                  strokeWidth="0.8"
                />
                <path
                  d="M420 0 L240 125 L420 250 Z"
                  fill="#EAA8B6"
                  opacity="0.8"
                  stroke="#C98291"
                  strokeWidth="0.8"
                />
                <path
                  d="M0 250 L210 110 L420 250 Z"
                  fill="#DF99A8"
                  opacity="0.9"
                  stroke="#C98291"
                  strokeWidth="0.8"
                />
              </svg>

              {/* Top Flap (Animated 3D Fold) */}
              <motion.div
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "top center" }}
                className="absolute top-0 left-0 right-0 h-1/2 transform-style-3d z-20 pointer-events-none"
              >
                <svg
                  viewBox="0 0 420 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M0 0 L210 125 L420 0 Z"
                    fill="#D98A99"
                    stroke="#C98291"
                    strokeWidth="1"
                  />
                  <path
                    d="M20 0 L210 113 L400 0 Z"
                    stroke="#F5DDE3"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>

              {/* Rose Gold Wax Seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: isOpen ? 0.75 : [1, 1.05, 1],
                    opacity: isOpen ? 0.35 : 1,
                  }}
                  transition={{
                    scale: { duration: 2.5, repeat: isOpen ? 0 : Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.4 },
                  }}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#EBB0BC] via-[#C98291] to-[#73545B] border-2 border-[#FFF9F5]/80 shadow-lg shadow-[#73545B]/35 flex items-center justify-center text-white"
                >
                  <span className="font-serif italic text-xl sm:text-2xl font-bold tracking-wider text-[#F4E3C9] drop-shadow">
                    R
                  </span>
                  <span className="absolute inset-1 rounded-full border border-dashed border-rose-100/40" />
                </motion.div>
              </div>

              {/* Envelope Hint */}
              {!isOpen && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 text-[11px] font-medium tracking-wider uppercase text-white drop-shadow flex items-center gap-1.5 animate-pulse">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Click to open</span>
                </div>
              )}
            </div>
          </div>

          {/* Letter Reveal: Complete, Natural Scrolling, Uncut Text */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-8 w-full"
              >
                <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-[#FFF9F5] border border-[#F5DDE3] shadow-2xl shadow-[#73545B]/10 text-left overflow-hidden">
                  {/* Subtle Rose Watermark */}
                  <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
                    <RoseIllustration className="w-28 h-28" color="#C98291" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-15 pointer-events-none scale-x-[-1]">
                    <RoseIllustration className="w-24 h-24" color="#C98291" />
                  </div>

                  {/* Letter Salutation - EXACT UNTOUCHED TEXT */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-6"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#C98291]">
                      Happy Birthday, my love! 🥹❤️🎂
                    </h3>
                  </motion.div>

                  {/* Letter Body - EXACT UNTOUCHED TEXT */}
                  <div className="space-y-5 font-serif text-base sm:text-lg md:text-xl text-[#73545B] leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="font-normal"
                    >
                      Today is all about you, the most special person in my life. I don&apos;t know how to put into words how much you mean to me, but I want you to know that having you in my life is one of the most beautiful things that has ever happened to me. 🫶🏻 Your smile is my favourite sight, your happiness means everything to me, and every little moment with you becomes a beautiful memory. 💗
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="font-normal"
                    >
                      I wish I could make every single day as special as you make my life. May you always keep smiling, achieve everything you&apos;ve ever dreamed of, and never run out of reasons to be happy. 🌸✨
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="font-normal"
                    >
                      Thank you for being my happiness, my favourite person, and my sweetest blessing. I may not be perfect with words or expressions, but one thing will always remain true — you are very special to me, and I love you more than words can ever explain. 🥺❤️
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="font-medium text-[#C98291]"
                    >
                      Once again, Happy Birthday, my princess! 👑💋
                    </motion.p>
                  </div>

                  {/* Letter Sign-off - EXACT UNTOUCHED TEXT */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="mt-8 pt-6 border-t border-[#F5DDE3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-handwriting text-2xl sm:text-3xl text-[#C98291]">
                        With all my love,
                      </p>
                      <p className="font-serif italic text-lg sm:text-xl text-[#73545B] mt-1">
                        Yours forever ❤️🧿
                      </p>
                    </div>

                    <button
                      onClick={toggleEnvelope}
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide text-[#73545B] bg-[#F5DDE3]/80 hover:bg-[#F5DDE3] transition-colors border border-[#C98291]/40 cursor-pointer"
                    >
                      <MailOpen className="w-3.5 h-3.5" />
                      <span>Fold Letter Back</span>
                    </button>
                  </motion.div>
                </div>
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
