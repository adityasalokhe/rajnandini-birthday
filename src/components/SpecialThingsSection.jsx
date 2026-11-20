"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, Feather, Star } from "lucide-react";
import { FloralVineDivider } from "./FloralDecorations";

export default function SpecialThingsSection() {
  const qualities = [
    {
      numeral: "I",
      title: "Your smile makes everything brighter.",
      highlight: "A burst of pure light.",
      description:
        "Whenever you smile, the world feels softer, kinder, and infinitely more radiant. It has an effortless warmth that can chase away any shadow.",
      icon: Sun,
      accentColor: "#C98291",
      bgGradient: "from-[#FFF9F5] via-[#F5DDE3]/40 to-[#F4E3C9]/30",
    },
    {
      numeral: "II",
      title: "You make ordinary moments beautiful.",
      highlight: "Everyday magic.",
      description:
        "The gentle way you speak, the quiet joy you share, and how you see wonder in the simplest things turn everyday fleeting moments into unforgettable poetry.",
      icon: Feather,
      accentColor: "#C98291",
      bgGradient: "from-[#FFF9F5] via-[#DCE6D8]/35 to-[#F5DDE3]/30",
    },
    {
      numeral: "III",
      title: "Your presence makes everything feel special.",
      highlight: "A quiet, comforting grace.",
      description:
        "Just being near you brings an unspoken serenity. Your laughter, your kindness, and your genuine heart make anywhere you are feel like home.",
      icon: Sparkles,
      accentColor: "#C98291",
      bgGradient: "from-[#FFF9F5] via-[#F4E3C9]/35 to-[#FFF9F5]",
    },
    {
      numeral: "IV",
      title: "You deserve all the happiness in the world.",
      highlight: "Endless love & joy.",
      description:
        "For all the sweetness and love you pour into the universe, you deserve every tender prayer, every dream fulfilled, and a lifetime filled with deep bliss.",
      icon: Heart,
      accentColor: "#C98291",
      bgGradient: "from-[#FFF9F5] via-[#F5DDE3]/45 to-[#FFF9F5]",
    },
  ];

  return (
    <section
      id="special"
      className="relative min-h-screen w-full py-24 lg:min-h-0 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9F5] via-[#DCE6D8]/20 to-[#FFF9F5] overflow-hidden"
    >
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#F5DDE3]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#DCE6D8]/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium tracking-[0.25em] uppercase text-[#73545B] bg-[#F5DDE3]/80 border border-[#C98291]/40 mb-4"
          >
            <Star className="w-3.5 h-3.5 text-[#C98291]" />
            What Makes You Unique
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#73545B] font-normal tracking-tight mb-4"
          >
            There&apos;s something special about you...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-[#73545B]/85 font-light italic"
          >
            A gentle reminder of why you are so deeply loved and treasured.
          </motion.p>
        </div>

        {/* Editorial Asymmetrical Staggered Layout */}
        <div className="space-y-8 sm:space-y-14 lg:space-y-8">
          {qualities.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Large Artistic Numeral & Icon Badge */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative group">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-white/95 to-[#F5DDE3]/80 border border-[#C98291]/50 shadow-md shadow-[#C98291]/10 flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                      <span className="font-serif text-2xl sm:text-3xl font-light text-[#C98291]">
                        {item.numeral}
                      </span>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#73545B] mt-1 stroke-[1.5]" />
                    </div>
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 -z-10 rounded-3xl bg-[#F5DDE3]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Editorial Content Block */}
                <div
                  className={`flex-1 w-full p-6 sm:p-8 lg:p-7 rounded-3xl bg-gradient-to-br ${item.bgGradient} border border-[#F5DDE3] shadow-lg shadow-[#73545B]/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#C98291]/60 transition-all duration-300`}
                >
                  {/* Subtle corner shimmer */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C98291] mb-2">
                      {item.highlight}
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#73545B] font-normal leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#73545B]/85 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-20 lg:mt-10 max-w-xs sm:max-w-md mx-auto">
        <FloralVineDivider />
      </div>
    </section>
  );
}
