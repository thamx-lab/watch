import React from 'react';

export default function CraftsmanshipSection() {
  const steps = [
    {
      num: '01',
      title: '5-AXIS MICRON MILLING',
      desc: 'Each Titanium Grade 5 case component is sculpted over 18 hours of multi-axis CNC milling to achieve tolerances under ±0.002mm.',
    },
    {
      num: '02',
      title: 'HAND ANGLAGE & POLISHING',
      desc: 'Master watchmakers perform traditional bevel chamfering (Anglage) on visible bridges using gentian wood pegs and diamond paste.',
    },
    {
      num: '03',
      title: '500-HOUR CERTIFICATION',
      desc: 'Prior to casing, every AE-9001 caliber undergoes 500 consecutive hours of multi-position temperature variation and shock testing.',
    },
  ];

  return (
    <section id="craftsmanship" className="py-28 px-6 bg-[#000000] border-t border-[#FFFFFF]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs text-[#FFFFFF]/70 tracking-widest uppercase block">
            HOROLOGICAL MASTERY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] uppercase">
            WHERE ARCHITECTURE MEETS <br />
            ARTISANAL CRAFT.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 rounded border border-[#FFFFFF]/10 flex flex-col justify-between space-y-6 bg-[#050507]"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl font-extrabold text-[#FFFFFF]/30 block">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-bold text-[#FFFFFF] tracking-wide">
                  {step.title}
                </h3>
                <p className="text-[#FFFFFF]/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#FFFFFF]/10 font-mono text-[10px] text-[#FFFFFF]/60 tracking-widest uppercase">
                LE LOCLE, SWITZERLAND
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
