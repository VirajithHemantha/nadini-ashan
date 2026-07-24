import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const HeroContent: React.FC = () => {
  const [guestString, setGuestString] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const prefix = searchParams.get('prefix');
    const name = searchParams.get('name');
    
    if (prefix && name) {
      setGuestString(`${prefix} ${name}`);
    } else if (name) {
      setGuestString(name);
    }
  }, []);

  return (
    <section className="relative min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
      <CornerFlowers position="all" opacity={0.8} scale={1.8} />
      {/* Background Image with Elegant Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-primary-deep via-brand-primary to-brand-primary-light">
        {/* Watermark Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("/pre/WhatsApp Image 2026-07-22 at 01.20.32.jpeg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-deep/60 via-brand-primary/40 to-brand-primary-light/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle top decoration */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-brand-primary/60 to-transparent" />
            <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/40 drop-shadow-sm" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-brand-primary/60 to-transparent" />
          </div>

          <span className="text-stone-900 font-bold uppercase tracking-[0.6em] text-xs sm:text-sm mb-10 block drop-shadow-sm font-sans">
            The Celebration of Love
          </span>

          <div className="relative mb-12 w-full flex justify-center">
            <h1 className="relative text-6xl sm:text-8xl lg:text-9xl font-serif text-stone-800 leading-tight drop-shadow-sm">
              Nadini <br className="sm:hidden" />
              <span className="text-brand-primary-deep italic font-medium mx-4 sm:mx-8 text-5xl sm:text-7xl lg:text-8xl inline-block -translate-y-2 sm:-translate-y-4">&</span>
              <br className="sm:hidden" />
              Ashan
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-r from-transparent to-brand-primary/40" />
            <p className="text-xl sm:text-3xl font-serif italic text-stone-700 tracking-wide px-4 text-center max-w-2xl leading-relaxed">
              {guestString 
                ? <>Together with our families, we cordially invite <br/><span className="text-stone-900 font-bold not-italic block mt-2 text-2xl sm:text-4xl drop-shadow-sm">{guestString}</span> to join us</>
                : "Together with our families, we joyfully invite you to join us"
              }
            </p>
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-l from-transparent to-brand-primary/40" />
          </div>

          {/* Enhanced Date pill with premium glass effect */}
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/40 via-brand-primary-light/40 to-brand-primary/40 rounded-full blur-[8px] opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 transform group-hover:scale-105" />
            <div className="relative px-8 sm:px-16 py-4 sm:py-6 bg-white/70 backdrop-blur-lg border border-brand-primary/50 rounded-full shadow-[0_8px_30px_rgba(142,122,93,0.1)] flex items-center justify-center">
              <span className="relative text-xl sm:text-4xl font-serif text-brand-primary tracking-[0.2em] sm:tracking-[0.3em] font-medium drop-shadow-sm flex items-center gap-2 sm:gap-4 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
                12 . 09 . 2026
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
