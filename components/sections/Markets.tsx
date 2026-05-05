'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import NumberFlow from '@number-flow/react';

const markets = [
    {
        id: 'forex',
        label: 'Forex',
        image: '/markets/forex.png',
        heading: 'Trade the Global Forex Market With Confidence',
        description: 'Access over 55 major, minor, and exotic currency pairs with reliable execution and competitive spreads. Navigate the world\'s most liquid market with tools designed to support clear, confident, and well-timed trading decisions.',
        stats: [
            { value: 0.0, suffix: '* Pips', label: 'Tightest spreads in the industry', decimals: 1 },
            { value: 55, suffix: '+', label: 'Major, minor & exotic pairs' },
            { value: 500, prefix: '1:', label: 'Highest levels of leverage' },
        ],
    },
    {
        id: 'metals',
        label: 'Metals',
        image: '/markets/metals.png',
        heading: 'Invest in Metals',
        description: 'Trade metals like gold and silver with New TradeFx Services and explore new opportunities. With global market access and expert support, enjoy seamless and reliable metal trading.',
        stats: [
            { value: 2, suffix: ' Cents', label: 'Tightest spreads on Gold' },
            { value: 1, suffix: ' Cent', label: 'Tightest spreads on Silver' },
            { value: 500, prefix: '1:', label: 'Highest levels of leverage' },
        ],
    },
    {
        id: 'indices',
        label: 'Indices',
        image: '/markets/indices.png',
        heading: 'Invest in Indices',
        description: 'Gain instant access and trade major stock exchange indices from across the globe, including NASDAQ 100, German DAX 40, Dow Jones 30, and more.',
        stats: [
            { value: 200, prefix: '1:', label: 'Leverage' },
            { value: 0, label: 'The lowest spreads in the market', customDisplay: 'Tightest Spreads' },
            { value: 0, suffix: '%', label: 'Commission' },
        ],
    },
    {
        id: 'commodities',
        label: 'Commodities',
        image: '/markets/commodities.png',
        heading: 'Invest in Commodities',
        description: 'Diversify your portfolio by trading commodities like crude oil and natural gas. Leverage global market trends to maximize your investment potential.',
        stats: [
            { value: 0, suffix: '%', label: 'Commission' },
            { value: 0, label: 'At Zero Commission', customDisplay: 'Tightest Spreads' },
            { value: 0, label: 'On All Commodities', customDisplay: 'Low Margin' },
        ],
    },
    {
        id: 'shares',
        label: 'Shares',
        image: '/markets/shares.png',
        heading: 'Invest in Shares',
        description: 'Buy and sell shares on over 20,000 equities of the largest multinational companies listed on the top stock exchanges in the world with margins as low as 5%.',
        stats: [
            { value: 20000, suffix: '+', label: 'Shares', formatNumber: true },
            { value: 20, prefix: '1:', label: 'Level of Leverage' },
            { value: 0, suffix: '%', label: 'Commission' },
        ],
    },
    {
        id: 'crypto',
        label: 'Digital Assets',
        image: '/markets/crypto.png',
        heading: 'Invest in Digital Assets',
        description: 'Trade leading cryptocurrencies like Bitcoin, Ethereum, and Ripple with New TradeFx Services. Seize market volatility and capitalize on dynamic price movements for greater trading potential.',
        stats: [
            { value: 20, prefix: '<', suffix: 'ms', label: 'Stable and nanosecond execution' },
            { value: 0, suffix: '%', label: 'Commission' },
            { value: 20, prefix: '1:', label: 'Leverage on cryptocurrencies', topLabel: 'Up to' },
        ],
    },
];

interface StatType {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    decimals?: number;
    customDisplay?: string;
    formatNumber?: boolean;
    topLabel?: string;
}

function StatItem({ stat, index, activeKey }: { stat: StatType; index: number; activeKey: string }) {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        setTriggered(false);
        const timer = setTimeout(() => setTriggered(true), 500 + index * 200);
        return () => clearTimeout(timer);
    }, [activeKey, index]);

    return (
        <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-1 mb-1.5">
                {stat.topLabel && (
                    <span className="text-sm sm:text-base font-bold text-[#2E62FF] tracking-tight leading-none">
                        {stat.topLabel}
                    </span>
                )}
                {stat.prefix && (
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tighter leading-none">
                        {stat.prefix}
                    </span>
                )}
                {stat.customDisplay ? (
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight leading-none">
                        {stat.customDisplay}
                    </span>
                ) : (
                    <NumberFlow
                        value={triggered ? stat.value : 0}
                        format={stat.decimals
                            ? { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals }
                            : stat.formatNumber
                                ? { useGrouping: true, maximumFractionDigits: 0 }
                                : { maximumFractionDigits: 0 }
                        }
                        className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tighter leading-none"
                        transformTiming={{ duration: 1600, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                        spinTiming={{ duration: 1600, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                    />
                )}
                {stat.suffix && (
                    <span className="text-sm sm:text-base lg:text-lg font-bold text-[#2E62FF] tracking-tight leading-none">
                        {stat.suffix}
                    </span>
                )}
            </div>
            <p className="text-[11px] sm:text-xs text-[#94A3B8] leading-snug">
                {stat.label}
            </p>
        </div>
    );
}

export function Markets() {
    const [activeTab, setActiveTab] = useState(0);
    const [visible, setVisible] = useState(true);
    const activeMarket = markets[activeTab];

    const switchTab = (index: number) => {
        if (index === activeTab) return;
        setVisible(false);
        setTimeout(() => {
            setActiveTab(index);
            setVisible(true);
        }, 250);
    };

    return (
        <section className="relative py-24 sm:py-32 md:py-40 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

                {/* Section Label + Header */}
                <motion.div
                    className="mb-14 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#22C55E] mb-5 bg-[#22C55E]/10 px-3.5 py-1.5 rounded-full border border-[#22C55E]/20">
                        <Globe size={14} className="text-[#22C55E]" />
                        Tradeable Markets
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5 max-w-4xl">
                        Access Global Financial Markets{' '}
                        <span className="text-[#2E62FF]">Through One Powerful Platform</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                        One of the key advantages of trading with New TradeFX Services is the ability to access multiple financial markets through a single trading account.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="relative -mx-5 sm:mx-0 px-5 sm:px-0 mb-16 md:mb-20">
                    <div className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-2.5 hide-scrollbar pb-4">
                        {markets.map((market, index) => (
                            <button
                                key={market.id}
                                onClick={() => switchTab(index)}
                                className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-500 whitespace-nowrap flex-shrink-0 ${activeTab === index
                                    ? 'bg-[#2E62FF] text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                                    }`}
                            >
                                {market.label}
                            </button>
                        ))}
                    </div>
                    {/* Shadow indicators for scrollable content */}
                    <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden" />
                </div>

                {/* Content — single CSS transition, no AnimatePresence */}
                <div
                    className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image */}
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={activeMarket.image}
                                alt={activeMarket.heading}
                                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] object-contain"
                            />
                        </div>

                        {/* Text + Stats */}
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-5">
                                {activeMarket.heading}
                            </h3>
                            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 max-w-lg">
                                {activeMarket.description}
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8 sm:gap-10 lg:gap-14">
                                {activeMarket.stats.map((stat, idx) => (
                                    <StatItem
                                        key={`${activeMarket.id}-${idx}`}
                                        stat={stat}
                                        index={idx}
                                        activeKey={activeMarket.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
