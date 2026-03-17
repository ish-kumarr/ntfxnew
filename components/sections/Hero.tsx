'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-end">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="/sample desktop bg.mp4"
                        type="video/mp4"
                    />
                    <img
                        src="/hero-bg.png"
                        alt="TradeFX Trading Background"
                        className="w-full h-full object-cover"
                    />
                </video>
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Progressive Dark Floor — Single layer, GPU-friendly */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Multi-stop gradient simulating progressive blur darkening */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(
                            to top,
                            rgba(0,0,0,1) 0%,
                            rgba(0,0,0,0.95) 5%,
                            rgba(0,0,0,0.85) 12%,
                            rgba(0,0,0,0.7) 20%,
                            rgba(0,0,0,0.5) 30%,
                            rgba(0,0,0,0.3) 40%,
                            rgba(0,0,0,0.15) 55%,
                            rgba(0,0,0,0.05) 70%,
                            transparent 85%
                        )`,
                    }}
                />
                {/* Single subtle backdrop-blur only on the bottom 25% for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[25%] backdrop-blur-[6px] [mask-image:linear-gradient(to_top,black_60%,transparent)]" />
            </div>


            {/* Content Container */}
            <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-16 pb-10 sm:pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">

                    {/* Main Content Area */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">

                        {/* Left: Headline + Subtitle */}
                        <motion.div
                            className="max-w-4xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter mb-6 md:mb-8 uppercase">
                                <span
                                    className="italic text-white"
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    Elite
                                </span>{' '}Trading <br className="hidden sm:block" />
                                Infrastructure.
                            </h1>

                            {/* Feature Tags */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-5 md:mb-8">
                                {[
                                    { label: 'Secure', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
                                    { label: 'Fast Execution', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
                                    { label: 'Multi-Asset', icon: <><path d="M2 20h20" /><path d="M5 20V8l5-5 5 5v12" /><path d="M19 20v-6l-4-4" /></> },
                                ].map((tag) => (
                                    <div key={tag.label} className="flex items-center gap-1.5 sm:gap-2 group">
                                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E]/20 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                {tag.icon}
                                            </svg>
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-white/40 group-hover:text-white/70 transition-colors">
                                            {tag.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Subtitle */}
                            <p className="text-xs sm:text-sm md:text-base text-white/50 font-medium max-w-xl leading-relaxed tracking-tight">
                                <span className="text-white/80">New TradeFX Services</span> provides a modern trading environment designed for{' '}
                                <span className="text-[#22C55E]">speed, transparency, and reliability.</span>{' '}
                                Access global financial markets including Forex, commodities, indices, and cryptocurrencies through a secure and advanced trading platform.
                            </p>
                        </motion.div>

                        {/* Right: Trust Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="shrink-0"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-xl transition-all duration-500 cursor-pointer shadow-2xl w-fit">
                                {/* Avatar Stack */}
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-black/50 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                            <img
                                                src={`https://i.pravatar.cc/100?u=tradefx${i}`}
                                                alt="Global Trader"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Trust Message */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-white/80 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap">
                                        10K+ <span className="opacity-50 font-medium">Traders</span>
                                    </span>
                                    <div className="w-[1px] h-3 bg-white/20" />
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#22C55E] fill-current drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
