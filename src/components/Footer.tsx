import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-white border-t border-brand-pink/20 pt-24 pb-12 text-center relative overflow-hidden">

      {/* Soft gradient bottom edge glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-pink/15 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Eye-catching Animated Spinning Seal */}
        <div className="relative w-48 h-48 mx-auto mb-16 group cursor-pointer flex items-center justify-center">

          {/* Animated decorative rings */}
          <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-brand-gold/40 animate-[spin_25s_linear_infinite_reverse]" />

          {/* SVG Spinning Typographic Ring */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite] opacity-80 group-hover:opacity-100 transition-opacity duration-700">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text>
              <textPath href="#circlePath" className="text-[9.5px] uppercase tracking-[0.2em] fill-brand-gold-deep font-sans font-bold">
                SANDUNI & SANJAYA • FOREVER AND ALWAYS •
              </textPath>
            </text>
          </svg>

          {/* Central Logo Disk */}
          <div className="absolute inset-[3rem] bg-white rounded-full shadow-[0_10px_30px_rgba(250,218,221,0.2)] flex flex-col items-center justify-center border-[4px] sm:border-[5px] border-brand-pink/30 group-hover:scale-110 group-hover:border-brand-pink/50 transition-all duration-700 ease-out z-10">
            <Heart className="w-4 h-4 text-brand-pink mb-0.5 fill-brand-pink/20 animate-pulse" />
            <span className="font-display text-3xl text-brand-gold-deep drop-shadow-sm leading-none tracking-tighter">S<span className="text-lg font-serif italic mx-0.5 text-stone-400">&</span>S</span>
          </div>

          {/* Interactive ambient hover glow */}
          <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-gold-deep/30 transition-colors duration-700 -z-10" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-display text-stone-800 mb-6 tracking-tight drop-shadow-sm">Sanduni & Sanjaya</h2>
        <p className="text-stone-500 font-serif italic text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          "A journey of a thousand miles begins with a single step, and we're so incredibly happy to take it together."
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mb-12" />

        <div className="max-w-xl mx-auto mb-12 rounded-3xl border border-brand-gold/30 bg-brand-champagne/60 px-6 py-7 sm:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-display text-stone-800 mb-2">Contact More Details</h3>
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-gold-deep font-semibold mb-4">Groom</p>
          <div className="flex flex-col gap-2 text-sm sm:text-base text-stone-700">
            <a
              href="tel:+94771234567"
              className="hover:text-brand-gold-deep transition-colors"
              aria-label="Call groom"
            >
              +94 77 123 4567
            </a>
            <a
              href="mailto:charukawedding@example.com"
              className="hover:text-brand-gold-deep transition-colors break-all"
              aria-label="Email groom"
            >
              charukawedding@example.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-[0.3em]">
            With all our love 💕
          </div>
          <div className="text-[9px] text-stone-300 tracking-widest uppercase font-medium">
            © 2026 Sanduni & Sanjaya Wedding
          </div>
        </div>
      </div>
    </footer>
  );
};
