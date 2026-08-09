import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#000000] px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-6 max-w-2xl relative z-10">
        <span className="font-mono text-xs text-[#FFFFFF]/70 tracking-[0.4em] uppercase">
          MANKIND HOROLOGY
        </span>

        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-[#FFFFFF] uppercase leading-none">
          PRECISION <br />
          IN MOTION
        </h1>

        <p className="text-[#FFFFFF]/70 font-mono text-xs sm:text-sm tracking-widest uppercase max-w-md">
          MECHANICAL DISASSEMBLY
        </p>
      </div>

      {/* Scroll Cue */}
      <div
        onClick={onExploreClick}
        className="absolute bottom-10 flex flex-col items-center gap-3 cursor-pointer group z-20"
      >
        <span className="font-mono text-[10px] tracking-[0.35em] text-[#FFFFFF]/50 group-hover:text-[#FFFFFF] transition-colors uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-[#FFFFFF]/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#FFFFFF] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
