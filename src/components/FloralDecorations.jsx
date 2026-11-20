"use client";

import React from "react";

// Delicate SVG botanical ornaments and rose illustrations matching Fresh Floral Luxury theme
export function RoseIllustration({ className = "w-12 h-12", color = "#C98291" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rose Center Petals */}
      <path
        d="M50 30 C45 22 35 25 35 35 C35 48 50 55 50 55 C50 55 65 48 65 35 C65 25 55 22 50 30 Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M48 27 C42 32 44 42 50 45 C56 42 58 32 52 27 C50 25 50 25 48 27 Z"
        fill="#F5DDE3"
        fillOpacity="0.75"
      />
      {/* Outer Layer Petals */}
      <path
        d="M34 35 C24 38 22 52 32 60 C40 66 50 68 50 68 C50 68 60 66 68 60 C78 52 76 38 66 35 C60 45 40 45 34 35 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="#FFF9F5"
        fillOpacity="0.5"
      />
      <path
        d="M28 48 C20 58 28 72 42 75 C48 76 50 76 50 76 C50 76 52 76 58 75 C72 72 80 58 72 48"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Stem & Eucalyptus Green Leaves (#7E967A) */}
      <path
        d="M50 76 C50 82 48 90 46 95"
        stroke="#7E967A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M49 83 C42 81 36 84 34 88 C38 89 44 87 48 84"
        fill="#DCE6D8"
        fillOpacity="0.8"
        stroke="#7E967A"
        strokeWidth="1"
      />
      <path
        d="M50 87 C57 85 63 87 65 91 C61 92 55 91 50 88"
        fill="#DCE6D8"
        fillOpacity="0.8"
        stroke="#7E967A"
        strokeWidth="1"
      />
    </svg>
  );
}

export function FloralVineDivider({ className = "w-full max-w-md h-8" }) {
  return (
    <div className={`flex items-center justify-center space-x-3 text-[#C98291] ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F5DDE3] to-[#C98291]/70" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C98291]">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFF9F5" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#F5DDE3] to-[#C98291]/70" />
    </div>
  );
}

export function CornerFlourish({ className = "w-16 h-16", flip = false }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M5 55 C5 25 25 5 55 5"
        stroke="#C98291"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <path
        d="M12 55 C12 30 30 12 55 12"
        stroke="#F5DDE3"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="55" cy="5" r="2.5" fill="#C98291" />
      <circle cx="5" cy="55" r="2.5" fill="#C98291" />
      <path
        d="M32 24 C28 20 22 21 21 27 C20 33 28 38 28 38 C28 38 36 33 35 27 C34 21 28 20 24 24"
        fill="#F5DDE3"
        stroke="#C98291"
        strokeWidth="0.8"
      />
    </svg>
  );
}
