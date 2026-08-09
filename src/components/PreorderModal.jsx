import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function PreorderModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serialPreference: 'ANY',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#08080a] border border-[#FFFFFF]/20 rounded p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#FFFFFF]/60 hover:text-[#FFFFFF] p-2 rounded hover:bg-[#FFFFFF]/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#FFFFFF]/70 tracking-widest uppercase block">
                CONCIERGE RESERVATION
              </span>
              <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                RESERVE MANKIND TIMEPIECE
              </h3>
              <p className="text-[#FFFFFF]/70 text-xs leading-relaxed">
                Limited edition production. Complete your reservation inquiry for private allocation.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-[#FFFFFF]/80 mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#12141c] border border-[#FFFFFF]/20 rounded px-4 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#FFFFFF]/80 mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. marcus@vance.com"
                  className="w-full bg-[#12141c] border border-[#FFFFFF]/20 rounded px-4 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#FFFFFF]/80 mb-1">
                    PHONE (OPTIONAL)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#12141c] border border-[#FFFFFF]/20 rounded px-4 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#FFFFFF]/80 mb-1">
                    SERIAL PREFERENCE
                  </label>
                  <select
                    value={formData.serialPreference}
                    onChange={(e) => setFormData({ ...formData, serialPreference: e.target.value })}
                    className="w-full bg-[#12141c] border border-[#FFFFFF]/20 rounded px-4 py-2.5 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF]"
                  >
                    <option value="ANY">First Available</option>
                    <option value="LOW">Low Serial</option>
                    <option value="CUSTOM">Custom Number Inquiry</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" className="btn-primary w-full py-3.5 justify-center text-xs">
                CONFIRM RESERVATION REQUEST
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 flex items-center justify-center mx-auto text-[#FFFFFF]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                RESERVATION RECEIVED
              </h3>
              <p className="text-[#FFFFFF]/80 text-sm max-w-md mx-auto">
                Thank you, <span className="text-[#FFFFFF] font-bold">{formData.name || 'Valued Collector'}</span>. Your reservation inquiry for MANKIND has been registered.
              </p>
            </div>

            <button onClick={handleReset} className="btn-secondary text-xs py-3 px-6">
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
