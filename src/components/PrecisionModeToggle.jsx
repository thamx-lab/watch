import React from 'react';

export default function PrecisionModeToggle({ precisionMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 left-28 sm:left-36 z-40 font-mono text-xs text-[#FFFFFF]/80 hover:text-[#FFFFFF] tracking-widest uppercase transition-colors pointer-events-auto select-none border border-[#FFFFFF]/20 hover:border-[#FFFFFF]/60 px-3 py-1.5 rounded"
      aria-label="Toggle Precision Magnification Mode"
    >
      PRECISION MODE · <span className="font-bold">{precisionMode ? 'ON' : 'OFF'}</span>
    </button>
  );
}
