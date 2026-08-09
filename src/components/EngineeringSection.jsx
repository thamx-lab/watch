import React from 'react';
import { Cpu, ShieldCheck, Layers, Zap } from 'lucide-react';

export default function EngineeringSection({ onOpenPreorder }) {
  const pillars = [
    {
      icon: Cpu,
      title: 'CALIBER AE-9001 MOVEMENT',
      subtitle: 'IN-HOUSE AUTOMATIC ARCHITECTURE',
      description:
        'Engineered with 38 synthetic ruby jewel bearings and a free-sprung titanium balance wheel operating at 28,800 vibrations per hour (4Hz) for micro-chronometric accuracy.',
      highlight: '72-HR POWER RESERVE',
    },
    {
      icon: ShieldCheck,
      title: 'SYNTHETIC SAPPHIRE ENCLOSURE',
      subtitle: '9 MOHS HARDNESS SCALE',
      description:
        'Custom-cut synthetic sapphire crystal featuring anti-reflective double-layer internal coating, providing absolute optical transparency.',
      highlight: 'DOUBLE AR COATED',
    },
    {
      icon: Layers,
      title: 'GRADE 5 MONOBLOC TITANIUM',
      subtitle: 'AEROSPACE-GRADE MATRIX',
      description:
        'Precision-milled from aerospace titanium billet with micron-level tolerances (±0.002mm), combining ultra-lightweight wear with structural rigidity.',
      highlight: '45% LIGHTER THAN STEEL',
    },
    {
      icon: Zap,
      title: 'TRIPLE-GASKET HERMETIC SEAL',
      subtitle: '10 ATM WATER RESISTANCE',
      description:
        'A multi-stage fluoroelastomer compression sealing matrix protects the mechanical core against pressure differentials and humidity.',
      highlight: '100 METERS RATED',
    },
  ];

  return (
    <section id="engineering" className="relative w-full py-28 px-6 bg-[#000000] border-t border-[#FFFFFF]/10">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 max-w-3xl">
          <span className="font-mono text-xs text-[#FFFFFF]/70 tracking-widest uppercase">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight uppercase">
            ENGINEERED TO <br />
            MICRON PRECISION.
          </h2>
          <p className="text-[#FFFFFF]/70 text-base font-normal leading-relaxed">
            Every curve, gear tooth, and titanium surface of the Aethel Chrono Skeleton is designed with zero excess.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded flex flex-col justify-between space-y-6 bg-[#050507]"
              >
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FFFFFF]" />
                  </div>
                  <span className="font-mono text-[11px] text-[#FFFFFF]/70 tracking-widest uppercase block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#FFFFFF] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[#FFFFFF]/70 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FFFFFF]/10 flex items-center justify-between font-mono text-xs relative z-10">
                  <span className="text-[#FFFFFF]/50">HIGHLIGHT:</span>
                  <span className="text-[#FFFFFF] font-bold">{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="p-8 sm:p-12 rounded flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#FFFFFF]/10 bg-[#050507]">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="font-mono text-xs text-[#FFFFFF]/70 tracking-widest uppercase block">
              LIMITED EDITION PRODUCTION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              LIMITED TO 300 INDIVIDUALLY NUMBERED UNITS.
            </h3>
            <p className="text-[#FFFFFF]/70 text-sm">
              Each unit is assembled by hand in Switzerland and laser-etched with its unique serial number.
            </p>
          </div>

          <button
            onClick={onOpenPreorder}
            className="btn-primary text-xs py-4 px-8 whitespace-nowrap"
          >
            REQUEST CONCIERGE INQUIRY
          </button>
        </div>
      </div>
    </section>
  );
}
