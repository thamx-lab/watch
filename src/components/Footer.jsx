import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenPreorder }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#000000] text-slate-400 py-16 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-bold text-xl tracking-widest text-white block">
              AETHEL
            </span>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Pioneering next-generation mechanical timepieces through computational watchmaking and aerospace titanium engineering. Swiss Made.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-3">
              <span className="text-white font-bold tracking-widest block uppercase text-[11px]">
                NAVIGATION
              </span>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#animation-section" className="hover:text-[#34d399] transition-colors">
                    300-FRAME DISASSEMBLY
                  </a>
                </li>
                <li>
                  <a href="#craftsmanship" className="hover:text-[#34d399] transition-colors">
                    CRAFTSMANSHIP
                  </a>
                </li>
                <li>
                  <a href="#engineering" className="hover:text-[#34d399] transition-colors">
                    ENGINEERING
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white font-bold tracking-widest block uppercase text-[11px]">
                CONCIERGE
              </span>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button onClick={onOpenPreorder} className="hover:text-[#34d399] transition-colors text-left">
                    PRIVATE ALLOCATION
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-[#34d399] transition-colors">
                    SERVICING
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="text-white font-bold tracking-widest block uppercase text-[11px]">
                MANUFACTURE
              </span>
              <p className="text-[11px] text-slate-500 leading-normal">
                Manufacture Aethel SA
                <br />
                2400 Le Locle, Switzerland
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} AETHEL HOROLOGY SA.</p>
          <button onClick={scrollToTop} className="text-[#34d399] hover:underline flex items-center gap-1">
            BACK TO TOP <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
