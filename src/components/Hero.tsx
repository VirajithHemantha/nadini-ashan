import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ivory/50">

      {/* Background Image with Parallax & Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: y1, scale }}
      >
        <img
          src="/pre/WhatsApp Image 2026-07-22 at 01.20.42 (1).jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Subtle Dark Overlay to balance visibility and readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Central Content with Highlight Background */}
      <motion.div
        className="relative z-10 text-center px-6 mb-48 sm:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="relative inline-block">
          <motion.span 
            className="text-[10px] sm:text-xs uppercase tracking-[0.8em] text-white font-bold mb-6 block drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Save the Date
          </motion.span>
          <h1 className="text-white text-4xl sm:text-7xl font-serif tracking-widest drop-shadow-[0_10px_30px_rgba(0,0,0,1)] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-brand-champagne">NADINI</span>
            <span className="italic font-medium text-brand-primary-deep mx-4 sm:mx-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">&</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-brand-champagne">ASHAN</span>
          </h1>
          <motion.div 
            className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary-light to-transparent mx-auto mt-4 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 2, duration: 1 }}
          />
          <motion.p
            className="text-white font-serif italic text-lg sm:text-xl tracking-[0.2em] drop-shadow-[0_8px_16px_rgba(0,0,0,1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            12 . 09 . 2026
          </motion.p>
          <motion.span
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/90 font-medium mt-10 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Tangerine Beach Hotel • Kalutara
          </motion.span>
        </div>
      </motion.div>

      {/* Persistent subtle falling petals in background */}
      <div className="absolute inset-0 z-[5] opacity-60">
        <FloatingPetals />
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.4em] text-brand-champagne font-semibold drop-shadow-md">Scroll Down</span>
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-brand-primary/60 to-transparent animate-bounce" />
      </motion.div>

    </div>
  );
};
