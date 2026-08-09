import React from 'react';

export default function Header({ onOpenPreorder }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-6 px-8 flex items-center justify-between pointer-events-none">
      <a href="#" className="font-display font-bold text-sm tracking-[0.3em] text-[#FFFFFF] pointer-events-auto select-none uppercase">
        MANKIND
      </a>

      <button
        onClick={onOpenPreorder}
        className="font-mono text-xs text-[#FFFFFF] border border-[#FFFFFF]/40 px-3.5 py-1.5 rounded hover:bg-[#FFFFFF]/10 transition-all tracking-widest pointer-events-auto select-none"
      >
        RESERVE
      </button>
    </header>
  );
}
