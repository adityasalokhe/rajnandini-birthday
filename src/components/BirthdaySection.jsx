"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Flame, RefreshCw, Heart } from "lucide-react";
import { FloralVineDivider } from "./FloralDecorations";

export default function BirthdaySection() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishing, setWishing] = useState(false);

  const handleMakeWish = () => {
    if (candlesBlown) return;
    setWishing(true);

    // Candle flame blow out after brief puff
    setTimeout(() => {
      setCandlesBlown(true);
      setWishing(false);

      // Elegant celebratory confetti burst
      try {
        const count = 200;
        const defaults = {
          origin: { y: 0.65 },
          zIndex: 1000,
        };

        const fire = (particleRatio, opts) => {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
            colors: ["#C98291", "#F5DDE3", "#DCE6D8", "#F4E3C9", "#FFF9F5", "#73545B"],
          });
        };

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
      } catch (err) {
        console.error("Confetti error", err);
      }
    }, 600);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
  };

  return (
    <section
      id="celebration"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 lg:min-h-0 lg:py-14 bg-gradient-to-b from-[#FFF9F5] via-[#F5DDE3]/30 to-[#FFF9F5] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-gradient-to-br from-[#F5DDE3]/50 via-[#F4E3C9]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[#73545B] bg-[#F5DDE3]/80 border border-[#C98291]/40 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C98291]" />
          A Sacred Celebration
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#73545B] font-normal tracking-tight mb-4"
        >
          Today, the universe celebrates you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-[#73545B]/85 max-w-md mb-8 lg:mb-5 font-light"
        >
          Close your eyes, make a gentle wish from your heart, and blow out the candles.
        </motion.p>

        {/* Artistic CSS/SVG Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative my-4 lg:my-2 flex flex-col items-center"
        >
          {/* Cake Illustration SVG */}
          <div className="relative w-64 sm:w-80 h-64 sm:h-72 flex items-center justify-center">
            <svg
              viewBox="0 0 320 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="cakePlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF9" />
                  <stop offset="50%" stopColor="#E8B4B8" />
                  <stop offset="100%" stopColor="#B76E79" />
                </linearGradient>

                <linearGradient id="bottomTierGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FCD5DC" />
                  <stop offset="50%" stopColor="#FFF0F3" />
                  <stop offset="100%" stopColor="#F7CAD5" />
                </linearGradient>

                <linearGradient id="topTierGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFF0F3" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FFE4E8" />
                </linearGradient>

                <linearGradient id="frostingDripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#BE6B7B" />
                  <stop offset="100%" stopColor="#D48B97" />
                </linearGradient>

                <linearGradient id="candleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8B4B8" />
                  <stop offset="50%" stopColor="#FFF8F0" />
                  <stop offset="100%" stopColor="#B76E79" />
                </linearGradient>
              </defs>

              {/* Pedestal / Cake Stand */}
              <ellipse cx="160" cy="245" rx="110" ry="16" fill="url(#cakePlateGrad)" opacity="0.9" />
              <path d="M140 245 L145 270 L175 270 L180 245 Z" fill="#D48B97" opacity="0.75" />
              <ellipse cx="160" cy="270" rx="35" ry="6" fill="#B76E79" />

              {/* Bottom Tier Base */}
              <rect x="75" y="155" width="170" height="75" rx="12" fill="url(#bottomTierGrad)" />
              {/* Bottom tier decorative scallops / piping */}
              <path
                d="M75 165 C85 175 95 175 105 165 C115 175 125 175 135 165 C145 175 155 175 165 165 C175 175 185 175 195 165 C205 175 215 175 225 165 C235 175 240 170 245 165"
                stroke="#D48B97"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Pearl bead row on bottom tier */}
              {[90, 110, 130, 150, 170, 190, 210, 230].map((cx, idx) => (
                <circle key={idx} cx={cx} cy="220" r="3.5" fill="#FFFDF9" stroke="#E8B4B8" strokeWidth="1" />
              ))}

              {/* Top Tier */}
              <rect x="105" y="100" width="110" height="60" rx="10" fill="url(#topTierGrad)" />
              {/* Top tier frosting drips */}
              <path
                d="M105 108 C112 120 118 120 125 108 C132 124 138 124 145 108 C152 118 158 118 165 108 C172 126 178 126 185 108 C192 118 198 118 205 108 C210 115 212 110 215 108"
                stroke="#BE6B7B"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Top pearl row */}
              {[120, 136, 152, 168, 184, 200].map((cx, idx) => (
                <circle key={idx} cx={cx} cy="150" r="2.8" fill="#FFFDF9" stroke="#E8B4B8" strokeWidth="0.8" />
              ))}

              {/* Delicate sugar flowers on cake corner */}
              <circle cx="108" cy="155" r="7" fill="#BE6B7B" opacity="0.9" />
              <circle cx="108" cy="155" r="3" fill="#FFF8F0" />
              <circle cx="212" cy="155" r="7" fill="#BE6B7B" opacity="0.9" />
              <circle cx="212" cy="155" r="3" fill="#FFF8F0" />

              {/* Golden Candle Wick & Body */}
              <rect x="156" y="55" width="8" height="46" rx="4" fill="url(#candleGrad)" stroke="#B76E79" strokeWidth="0.8" />
              {/* Spiral ribbon on candle */}
              <path d="M156 65 Q160 70 164 68" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M156 78 Q160 83 164 81" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M156 90 Q160 95 164 93" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />

              {/* Candle Wick */}
              <line x1="160" y1="55" x2="160" y2="47" stroke="#5A3D46" strokeWidth="2" strokeLinecap="round" />

              {/* Candle Flame (Active / Animated) */}
              {!candlesBlown && (
                <g className="candle-glow animate-flicker">
                  {/* Outer Warm Halo */}
                  <ellipse cx="160" cy="36" rx="14" ry="18" fill="rgba(255, 183, 77, 0.4)" />
                  {/* Outer Flame */}
                  <path
                    d="M160 16 C152 28 152 42 160 46 C168 42 168 28 160 16 Z"
                    fill="url(#candleFlameGrad)"
                  />
                  {/* Inner Flame Core */}
                  <path
                    d="M160 27 C156 34 156 42 160 45 C164 42 164 34 160 27 Z"
                    fill="#FFF9C4"
                  />
                </g>
              )}

              {/* Candle Flame Gradient */}
              <defs>
                <linearGradient id="candleFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF176" />
                  <stop offset="40%" stopColor="#FFB74D" />
                  <stop offset="100%" stopColor="#FF7043" />
                </linearGradient>
              </defs>
            </svg>

            {/* Smoke Puff when blown */}
            {candlesBlown && (
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300 animate-smoke" />
                <span className="w-4 h-4 rounded-full bg-stone-200 animate-smoke [animation-delay:0.2s]" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Button: Make a Wish */}
        <div className="mt-4 flex flex-col items-center">
          {!candlesBlown ? (
            <button
              onClick={handleMakeWish}
              disabled={wishing}
              type="button"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-medium tracking-wide text-white bg-gradient-to-r from-[#B95B6E] via-[#C98291] to-[#A44C5E] shadow-lg shadow-[#C98291]/30 hover:shadow-xl hover:shadow-[#C98291]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <Flame className="w-5 h-5 text-amber-200 fill-amber-300 animate-bounce" />
              <span>{wishing ? "Making your wish..." : "Make a Wish"}</span>
              <Sparkles className="w-4 h-4 text-white/80" />
            </button>
          ) : (
            <button
              onClick={handleRelight}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#73545B] bg-[#F5DDE3] hover:bg-[#EED1D8] transition-colors border border-[#C98291]/50 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Relight the candles</span>
            </button>
          )}
        </div>

        {/* Revealed Birthday Wish Message after blowing candles */}
        <AnimatePresence>
          {candlesBlown && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#F5DDE3] shadow-xl shadow-[#C98291]/15 backdrop-blur-md max-w-xl mx-auto"
            >
              <div className="flex justify-center mb-3">
                <Heart className="w-7 h-7 text-[#C98291] fill-[#C98291]/25 animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#73545B] mb-3 font-normal">
                May your sweetest dreams come true!
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#73545B]/90 leading-relaxed font-light">
                Happy Birthday, beautiful Rajnandini! May every heartfelt wish whispered in your soul
                today blossom into boundless joy. You bring light, grace, and pure magic to this world.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full mt-16 lg:mt-8 max-w-xs sm:max-w-md mx-auto">
        <FloralVineDivider />
      </div>
    </section>
  );
}
