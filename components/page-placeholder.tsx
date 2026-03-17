'use client';

import { TradeFXLogo } from './tradefx-logo';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PagePlaceholderProps {
  title: string;
  message?: string;
  subtitle?: string;
  devNotes?: string;
}

export function PagePlaceholder({
  title,
  subtitle = "TradeFX Services",
  message = "Designing the future of professional trading.",
  devNotes = "Core ecosystem component pending content implementation."
}: PagePlaceholderProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative">
      {/* Premium Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="glass p-12 md:p-24 rounded-[3.5rem] w-full max-w-5xl flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Subtle decorative glow inside card */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-14"
        >
          <TradeFXLogo className="h-12 w-auto" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] font-black mb-8 text-primary/80"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-10 text-balance leading-[0.9]"
        >
          {title}
        </motion.h1>

        {/* Elegant Animated Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 100, opacity: 0.3 }}
          transition={{ delay: 0.7, duration: 1.5 }}
          className="h-[2px] bg-primary mb-12"
        ></motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed italic font-light font-serif"
        >
          {message}
        </motion.p>

        {/* Informative Dev Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 pt-10 border-t border-primary/10 w-full flex flex-col items-center"
        >
          <p className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-60">Developer Implementation Notes</p>
          <p className="text-sm font-mono max-w-md">{devNotes}</p>
        </motion.div>
      </motion.div>

      {/* Modern UI Metadata - Fixed position at bottom */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center px-4">
        <div className="flex flex-col gap-1">
          <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black">
            Logical Route: <span className="text-primary opacity-100">{pathname}</span>
          </div>
          <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black">
            Template: <span className="text-primary opacity-100">Professional Ecosystem v1.1</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-black">
            Status: <span className="text-accent opacity-100 animate-pulse">Architectural Stage</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-40 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-40 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
