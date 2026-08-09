import React from 'react';

export default function WatchDescriptionPanel({ stage }) {
  if (!stage || (!stage.title && !stage.text)) return null;

  return (
    <div
      key={stage.id}
      className="animate-fadeIn transition-opacity duration-300 pointer-events-none space-y-2 select-none"
    >
      {stage.title && (
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-widest text-[#FFFFFF] uppercase">
          {stage.title}
        </h3>
      )}
      {stage.text && (
        <p className="font-sans text-xs sm:text-sm text-[#FFFFFF] leading-relaxed tracking-wide font-normal max-w-[260px] sm:max-w-xs">
          {stage.text}
        </p>
      )}
    </div>
  );
}
