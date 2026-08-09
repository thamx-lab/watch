import React from 'react';

export default function ComponentHotspot({ activeComponent }) {
  if (
    !activeComponent ||
    !activeComponent.hotspot ||
    activeComponent.id === 'intro' ||
    activeComponent.id === 'final'
  ) {
    return null;
  }

  const { x, y } = activeComponent.hotspot;

  return (
    <div
      className="absolute z-30 flex items-center gap-2.5 pointer-events-none transition-all duration-500 ease-out animate-fadeIn select-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Small White Hotspot Dot with subtle pulse */}
      <div className="relative flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-full shadow-sm" />
        <div className="absolute w-5 h-5 rounded-full border border-[#FFFFFF]/60 animate-ping pointer-events-none" />
      </div>

      {/* Small Plain White Technical Label (No box, no card, no background) */}
      <span className="font-mono text-[11px] text-[#FFFFFF] tracking-widest uppercase font-semibold drop-shadow-md whitespace-nowrap">
        ● {activeComponent.title}
      </span>
    </div>
  );
}
