"use client";

import React from "react";
import RosePetals from "@/components/RosePetals";
import MusicControl from "@/components/MusicControl";
import WelcomeSection from "@/components/WelcomeSection";
import BirthdaySection from "@/components/BirthdaySection";
import SpecialThingsSection from "@/components/SpecialThingsSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import SurpriseSection from "@/components/SurpriseSection";
import FinaleSection from "@/components/FinaleSection";

export default function BirthdayPage() {
  const handleOpenSurprise = () => {
    const celebrationEl = document.getElementById("celebration");
    if (celebrationEl) {
      celebrationEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFF9F5] text-[#73545B] overflow-x-hidden selection:bg-[#F5DDE3] selection:text-[#C98291]">
      {/* Global Interactive Falling Rose Petals & Dreamy Dust */}
      <RosePetals />

      {/* Floating Ambient Music Controller */}
      <MusicControl />

      {/* Section 1: Cinematic Welcome */}
      <WelcomeSection onOpenSurprise={handleOpenSurprise} />

      {/* Section 2: Birthday Celebration & Interactive Cake */}
      <BirthdaySection />

      {/* Section 3: Why You Are Special (Staggered Artistic Cards) */}
      <SpecialThingsSection />

      {/* Section 4: A Letter From My Heart (Interactive Envelope & Wax Seal) */}
      <LoveLetterSection />

      {/* Section 5: A Little Surprise (3D Interactive Gift Box & Ribbon) */}
      <SurpriseSection />

      {/* Section 6: Grand Finale & Farewell */}
      <FinaleSection />
    </main>
  );
}
