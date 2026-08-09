import React from 'react';
import { watchComponents } from '../config/watchTimeline';

export default function ComponentTimeline({ activeComponent, onSelectComponent }) {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end space-y-2 z-30 select-none">
      <div className="font-mono text-[10px] text-[#FFFFFF]/40 tracking-[0.25em] uppercase mb-2 pr-2">
        TIMELINE
      </div>

      <div className="flex flex-col items-end space-y-2 border-r border-[#FFFFFF]/15 pr-3">
        {watchComponents.map((comp) => {
          const isActive = activeComponent?.id === comp.id;

          return (
            <button
              key={comp.id}
              onClick={() => onSelectComponent(comp.startFrame)}
              className={`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 text-right flex items-center gap-2 group cursor-pointer ${
                isActive
                  ? 'text-[#FFFFFF] font-bold scale-105'
                  : 'text-[#FFFFFF]/30 hover:text-[#FFFFFF]/70'
              }`}
            >
              <span className="group-hover:translate-x-[-2px] transition-transform">
                {comp.shortName}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? 'bg-[#FFFFFF] scale-125' : 'bg-[#FFFFFF]/20'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
