'use client';

import React from 'react';
import { motion } from 'framer-motion';

const words = [
    "INSTITUTIONAL LIQUIDITY",
    "GLOBAL MARKET ACCESS",
    "MILLISECOND EXECUTION",
    "ELITE TRADING INFRASTRUCTURE",
    "PROFESSIONAL GRADE PRECISION",
    "ULTRA-LOW LATENCY",
    "SECURE ECOSYSTEM"
];

export function BrandMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-transparent py-4 flex flex-col gap-2">
            <div className="flex overflow-hidden select-none">
                <motion.div
                    animate={{
                        x: [0, -1035],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex flex-nowrap shrink-0 items-center gap-12 sm:gap-20"
                >
                    {[...words, ...words].map((word, i) => (
                        <div key={i} className="flex items-center gap-4 sm:gap-8">
                            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white/[0.03] hover:text-[#2E62FF]/40 transition-colors uppercase tracking-tighter whitespace-nowrap leading-none select-none">
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2E62FF]/20 shrink-0" />
                        </div>
                    ))}
                </motion.div>
            </div>
            
            <div className="flex overflow-hidden select-none">
                <motion.div
                    animate={{
                        x: [-1035, 0],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    className="flex flex-nowrap shrink-0 items-center gap-12 sm:gap-20"
                >
                    {[...words, ...words].reverse().map((word, i) => (
                        <div key={i} className="flex items-center gap-4 sm:gap-8">
                            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white/[0.03] hover:text-[#2E62FF]/40 transition-colors uppercase tracking-tighter whitespace-nowrap leading-none select-none italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]/20 shrink-0" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
