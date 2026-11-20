"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Music } from "lucide-react";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const timerRef = useRef(null);
  const isWebAudioFallbackRef = useRef(false);

  // Gentle backup chime notes in case perfect.mp3 is not loaded
  const chimeNotesRef = useRef([
    349.23, 440.0, 523.25, 659.25, 523.25, 440.0, 392.0, 493.88, 587.33, 659.25, 523.25, 392.0,
  ]);

  const playChimeNote = useCallback((freq, time) => {
    const ctx = audioContextRef.current;
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.06, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 1.8);
    } catch {
      // Cleanup
    }
  }, []);

  const startChimes = useCallback(() => {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    let idx = 0;
    const loop = () => {
      if (!audioContextRef.current) return;
      const now = audioContextRef.current.currentTime;
      const notes = chimeNotesRef.current;
      playChimeNote(notes[idx % notes.length], now);
      idx++;
      timerRef.current = setTimeout(loop, 540);
    };
    loop();
  }, [playChimeNote]);

  const stopChimes = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  }, []);

  // Set default volume 35% and enable looping
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.loop = true;
    }
  }, []);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.35;
      audio.loop = true;
      await audio.play();
      isWebAudioFallbackRef.current = false;
      setIsPlaying(true);
    } catch {
      try {
        isWebAudioFallbackRef.current = true;
        startChimes();
        setIsPlaying(true);
      } catch {
        // Audio policy error fallback
      }
    }
  }, [startChimes]);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopChimes();
    setIsPlaying(false);
  }, [stopChimes]);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }, [isPlaying, pauseMusic, playMusic]);

  // Start when "Open Your Surprise" is clicked, and continue throughout website
  useEffect(() => {
    window.startBackgroundMusic = () => {
      if (!isPlaying) {
        playMusic();
      }
    };
    return () => {
      window.startBackgroundMusic = null;
      stopChimes();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [isPlaying, playMusic, stopChimes]);

  return (
    <>
      {/* Background Audio Source */}
      <audio
        ref={audioRef}
        src="/audio/perfect.mp3"
        loop
        preload="auto"
        aria-hidden="true"
      />

      {/* Extremely minimal tiny music icon in the top-right corner */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-5 z-50">
        <button
          onClick={toggleMusic}
          type="button"
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          title={isPlaying ? "Mute music" : "Play music"}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-md border border-[#F5DDE3] text-[#C98291] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
        >
          {isPlaying ? (
            <>
              {/* Subtle pulsing halo when music is playing */}
              <span className="absolute inset-0 rounded-full bg-[#F5DDE3]/40 animate-ping opacity-50 pointer-events-none" />
              <Music className="w-3.5 h-3.5 animate-pulse text-[#C98291]" />
            </>
          ) : (
            <Music className="w-3.5 h-3.5 text-[#73545B]/50" />
          )}
        </button>
      </div>
    </>
  );
}
