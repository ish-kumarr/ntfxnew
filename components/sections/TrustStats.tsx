'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { useInView } from 'react-intersection-observer';

const stats = [
    {
        value: 500,
        prefix: '1:',
        suffix: '',
        label: 'Highest levels of leverage',
        sublabel: 'Leverage',
    },
    {
        value: 0.0,
        prefix: '',
        suffix: '* Pips',
        label: 'Tightest spreads in the industry',
        sublabel: 'Spreads',
        decimals: 1,
    },
    {
        value: 55,
        prefix: '',
        suffix: '+',
        label: 'Major, minor & exotic pairs',
        sublabel: 'Currency Pairs',
    },
    {
        value: 1,
        prefix: '<',
        suffix: 'ms',
        label: 'Ultra-fast order processing',
        sublabel: 'Execution',
    },
];

function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
    const [triggered, setTriggered] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setTriggered(true), index * 120);
            return () => clearTimeout(timer);
        }
    }, [inView, index]);

    return (
        <motion.div
            ref={ref}
            className="relative p-6 sm:p-8 md:p-10 flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {/* Sublabel */}
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#2E62FF] mb-4">
                {stat.sublabel}
            </span>

            {/* Animated Number */}
            <div className="flex items-baseline mb-2">
                {stat.prefix && (
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tighter leading-none">
                        {stat.prefix}
                    </span>
                )}
                <NumberFlow
                    value={triggered ? stat.value : 0}
                    format={stat.decimals ? { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals } : { maximumFractionDigits: 0 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tighter leading-none"
                    transformTiming={{ duration: 1200, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                    spinTiming={{ duration: 1200, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                />
                {stat.suffix && (
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#94A3B8] ml-1 tracking-tight leading-none">
                        {stat.suffix}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-relaxed mt-auto pt-4 border-t border-[#F1F5F9]">
                {stat.label}
            </p>
        </motion.div>
    );
}

export function TrustStats() {
    return (
        <section className="relative py-20 sm:py-28 md:py-36 bg-[#FAFBFC] overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
                backgroundSize: '24px 24px',
            }} />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                        Forex Trading
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#0F172A] tracking-tight leading-[1.08] mb-6">
                        Trade the Global Forex Market{' '}
                        <span className="text-[#2E62FF]">With Confidence</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                        Access over 55 major, minor, and exotic currency pairs with reliable execution and competitive spreads. Navigate the world&apos;s most liquid market with tools designed to support clear, confident, and well-timed trading decisions.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E8F0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    {stats.map((stat, index) => (
                        <div key={stat.sublabel} className="bg-white">
                            <AnimatedStat stat={stat} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
