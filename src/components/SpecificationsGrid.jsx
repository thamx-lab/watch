import React, { useState } from 'react';

export default function SpecificationsGrid() {
  const [activeTab, setActiveTab] = useState('movement');

  const categories = [
    { id: 'movement', label: 'MOVEMENT' },
    { id: 'case', label: 'CASE & CRYSTAL' },
    { id: 'dial', label: 'DIAL & HANDS' },
    { id: 'strap', label: 'STRAP & CLASP' },
  ];

  const specsData = {
    movement: [
      { name: 'Caliber', value: 'In-House AE-9001 Automatic Skeleton' },
      { name: 'Frequency', value: '28,800 vibrations per hour (4 Hz)' },
      { name: 'Power Reserve', value: '72 Hours (3 Days)' },
      { name: 'Jewels', value: '38 Synthetic Rubies' },
      { name: 'Winding Mechanism', value: 'Bi-directional rotor with ceramic ball bearings' },
      { name: 'Complications', value: 'Hours, Minutes, Central Seconds, Skeletonized Tourbillon' },
    ],
    case: [
      { name: 'Case Material', value: 'Grade 5 Aerospace Titanium' },
      { name: 'Case Diameter', value: '42.5 mm' },
      { name: 'Case Thickness', value: '11.8 mm' },
      { name: 'Crystal Front', value: 'Domed synthetic sapphire with double anti-reflective coating' },
      { name: 'Caseback Window', value: 'Flat exhibition sapphire crystal' },
      { name: 'Water Resistance', value: '10 ATM / 100 Meters / 330 Feet' },
    ],
    dial: [
      { name: 'Dial Construction', value: 'Multi-layer 3D open-worked architecture' },
      { name: 'Hour Markers', value: 'Hand-applied titanium indices filled with Super-LumiNova X1' },
      { name: 'Hands', value: 'Skeletonized diamond-cut titanium' },
      { name: 'Luminescence', value: 'Swiss Super-LumiNova Grade X1' },
    ],
    strap: [
      { name: 'Strap Material', value: 'High-density vulcanized rubber with titanium inlay' },
      { name: 'Lug Width', value: '22 mm (Quick-release mechanism)' },
      { name: 'Clasp Type', value: 'Titanium Grade 5 micro-adjustable deployant buckle' },
    ],
  };

  return (
    <section id="specifications" className="py-24 px-6 bg-[#000000] border-t border-[#FFFFFF]/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#FFFFFF]/10 pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#FFFFFF]/70 tracking-widest uppercase block">
              TECHNICAL DATASHEET
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF]">
              PRODUCT SPECIFICATIONS
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 p-1 rounded border border-[#FFFFFF]/10 bg-[#050507]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-mono text-xs px-4 py-2 rounded transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#FFFFFF] text-[#000000] font-bold'
                    : 'text-[#FFFFFF]/60 hover:text-[#FFFFFF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specs Table List */}
        <div className="rounded p-6 sm:p-10 border border-[#FFFFFF]/10 bg-[#050507]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {specsData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 border-b border-[#FFFFFF]/5 gap-2"
              >
                <span className="font-mono text-xs text-[#FFFFFF]/60">{item.name}</span>
                <span className="font-sans text-sm text-[#FFFFFF] font-medium sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
