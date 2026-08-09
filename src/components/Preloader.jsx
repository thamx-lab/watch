import React from 'react';

export default function Preloader({ loadedCount, totalFrames, isReady }) {
  const percentage = Math.min(100, Math.round((loadedCount / totalFrames) * 100));

  if (isReady && percentage >= 100) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] text-[#FFFFFF] transition-opacity duration-700 ${
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <span className="font-mono text-xs text-[#FFFFFF] tracking-[0.4em] uppercase animate-pulse">
          LOADING
        </span>
        <span className="font-mono text-[11px] text-[#FFFFFF]/50 tracking-widest">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
