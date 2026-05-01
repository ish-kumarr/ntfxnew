'use client';

import React from 'react';
import { Zap, Shield, TrendingUp, Globe, BarChart3 } from 'lucide-react';

const row1 = [
    { text: "40K+ ASSETS", icon: <BarChart3 size={18} className="text-[#2E62FF]" /> },
    { text: "TIER-1 LIQUIDITY", icon: <Shield size={18} className="text-[#22C55E]" /> },
    { text: "0.0 PIP SPREADS", icon: <TrendingUp size={18} className="text-[#2E62FF]" /> },
    { text: "< 10ms EXECUTION", icon: <Zap size={18} className="text-[#F59E0B]" /> },
    { text: "GLOBAL MARKETS", icon: <Globe size={18} className="text-[#2E62FF]" /> }
];

const row2 = [
    "INSTITUTIONAL GRADE",
    "DEEP ORDER BOOKS",
    "MULTI-ASSET PRECISION",
    "SECURE ECOSYSTEM",
    "NANOSECOND LATENCY"
];

export function PremiumMarquee() {
    return (
        <section className="relative w-full py-12 bg-white overflow-hidden select-none border-y border-neutral-100/50">
            <style jsx>{`
                .marquee-content {
                    display: flex;
                    width: max-content;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }
                .animate-scroll-left {
                    animation-name: scroll-left;
                    animation-duration: 35s;
                }
                .animate-scroll-right {
                    animation-name: scroll-right;
                    animation-duration: 40s;
                }
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            {/* Subtlest Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="space-y-10">
                {/* Top Row: Clean & Professional with Icons */}
                <div className="flex overflow-hidden">
                    <div className="marquee-content animate-scroll-left">
                        {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
                            <div key={i} className="flex items-center gap-8 md:gap-12 px-10 md:px-16 group">
                                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                    {item.icon}
                                </div>
                                <span className="text-xl md:text-3xl font-black text-neutral-900 tracking-tighter uppercase whitespace-nowrap leading-none">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Minimalist Serif */}
                <div className="flex overflow-hidden">
                    <div className="marquee-content animate-scroll-right">
                        {[...row2, ...row2, ...row2, ...row2].map((text, i) => (
                            <div key={i} className="flex items-center gap-8 md:gap-12 px-10 md:px-16">
                                <span 
                                    className="text-lg md:text-2xl font-black text-neutral-300 uppercase tracking-widest italic font-serif transition-colors duration-500 hover:text-[#2E62FF]/20 whitespace-nowrap leading-none" 
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    {text}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-100 shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clean Side Masks */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
