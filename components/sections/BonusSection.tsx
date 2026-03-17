'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';

export function BonusSection() {
    return (
        <section className="relative w-full bg-[#030712] overflow-hidden antialiased">
            {/* Desktop View (lg and above) */}
            <div className="hidden lg:flex min-h-[35rem] items-center justify-center py-20 relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-20 items-center w-full">
                    {/* Left Column: High Impact Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-end justify-center text-right overflow-visible py-10"
                    >
                        <div className="relative group overflow-visible">
                            <div className="absolute -inset-12 bg-[#2E62FF]/20 rounded-full blur-[80px] group-hover:bg-[#2E62FF]/30 transition-all duration-700 pointer-events-none"></div>
                            <div className="relative px-12 overflow-visible">
                                <h3 className="text-[15rem] font-black leading-none tracking-tighter italic overflow-visible">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 select-none inline-block pr-16">
                                        20%
                                    </span>
                                </h3>
                                <div className="mt-[-1.5rem]">
                                    <span className="text-3xl font-black text-[#2E62FF] uppercase tracking-[0.4em] mr-4">
                                        Bonus
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col items-start text-left space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                                <Sparkles className="text-[#22C55E]" size={14} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Available Bonuses</span>
                            </div>
                            <h2 className="text-6xl font-black text-white tracking-tight leading-[1.1]">
                                Elevate Your <br />
                                <span className="text-[#2E62FF]">Trading Potential</span>
                            </h2>
                        </div>

                        <div className="space-y-6 max-w-lg">
                            <p className="text-xl text-neutral-400 leading-relaxed font-medium">
                                Experience professional-grade advantages. Get a tradable bonus of up to <span className="text-white font-bold underline decoration-[#2E62FF]/50 underline-offset-4">$10,000</span> to support your strategy.
                            </p>

                            <div className="flex items-center gap-6">
                                <Link
                                    href="https://dashboard.tradefxservices.com/register"
                                    target="_blank"
                                    className="px-10 py-5 bg-[#2E62FF] hover:bg-white hover:text-[#030712] text-white font-black rounded-full transition-all duration-300 shadow-[0_20px_50px_rgba(46,98,255,0.2)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.1)] active:scale-95 text-center"
                                >
                                    Claim Your Bonus
                                </Link>
                                <Link
                                    href="/deposit-bonus-terms"
                                    className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-bold"
                                >
                                    View Terms & Conditions
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile/Tablet View (Bespoke Poster Structure) */}
            <div className="lg:hidden flex flex-col items-center justify-center py-16 px-6 relative z-10 w-full min-h-[45rem]">
                {/* Fixed Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 backdrop-blur-md">
                        <Sparkles className="text-[#22C55E]" size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#22C55E]">Trading Bonus</span>
                    </div>
                </motion.div>

                {/* Vertical Poster Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-12 flex flex-col items-center"
                >
                    {/* Centralized Aura */}
                    <div className="absolute inset-0 bg-[#2E62FF]/30 rounded-full blur-[60px] pointer-events-none"></div>

                    <div className="relative text-center">
                        <h3 className="text-[8rem] xs:text-[10rem] font-black leading-none tracking-tighter italic">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/10 pr-4">
                                20%
                            </span>
                        </h3>
                        <div className="mt-[-1rem]">
                            <span className="text-2xl font-black text-[#2E62FF] uppercase tracking-[0.5em]">
                                BONUS
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Content Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full text-center space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl xs:text-5xl font-black text-white tracking-tight leading-tight">
                            Elevate Your <br />
                            <span className="text-[#2E62FF]">Potential</span>
                        </h2>
                        <p className="text-base text-neutral-400 leading-relaxed font-medium mx-auto max-w-sm px-4">
                            Professional-grade advantages. Tradable bonus up to <span className="text-white font-bold">$10,000</span> for your strategy.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto pt-4">
                        <Link
                            href="https://dashboard.tradefxservices.com/register"
                            target="_blank"
                            className="w-full py-5 bg-[#2E62FF] text-white font-black rounded-xl transition-all shadow-[0_15px_40px_rgba(46,98,255,0.3)] text-center active:scale-95"
                        >
                            Claim Bonus Now
                        </Link>
                        <Link
                            href="/deposit-bonus-terms"
                            className="text-neutral-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-neutral-800 pb-1"
                        >
                            General Terms & Policy →
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Global Background Animation */}
            <BackgroundBeams className="opacity-100" />

            {/* Gradient Masking */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}
