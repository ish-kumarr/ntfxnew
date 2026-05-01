'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/sections/Marquee';
import { BonusSection } from '@/components/sections/BonusSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import Silk from '@/components/ui/Silk';
import { ArrowRight, Zap, Shield, BarChart3, TrendingUp, Coins, CandlestickChart, Landmark, Star } from 'lucide-react';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';
import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-2';

export default function MarketsPage() {
    return (
        <main className="relative bg-[#030712] min-h-screen">
            
            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO SECTION — Premium Dark Block                      */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#030712] z-10">
                
                {/* Silk Background & Ethereal Glowing Orb */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#2E62FF]/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none" />
                    <Silk 
                        speed={0.4} 
                        scale={0.9} 
                        color="#111827" 
                        noiseIntensity={0.6} 
                        rotation={0.1} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712] pointer-events-none" />
                    
                    {/* Subtle Top-Down Grid overlay for structural depth */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_100%)] pointer-events-none" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 pt-44 pb-36">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        
                        {/* Trust pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex justify-center mb-16"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/15 px-5 py-2.5 rounded-full backdrop-blur-3xl transition-all duration-700 cursor-pointer shadow-[0_0_40px_rgba(46,98,255,0.1)]">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-black overflow-hidden hover:-translate-y-1 transition-transform duration-500">
                                            <img
                                                src={`https://i.pravatar.cc/100?u=tradefx${i}`}
                                                alt="Global Trader"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-white/90 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] whitespace-nowrap">
                                        10K+ <span className="opacity-50 font-medium tracking-widest text-[#2E62FF]">Traders globally</span>
                                    </span>
                                    <div className="w-px h-4 bg-white/20 mx-1" />
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-2.5 h-2.5 text-[#22C55E] fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-[10.5rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12 drop-shadow-2xl"
                        >
                            <span className="italic font-serif block mb-3 opacity-95" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                <AuroraText className="italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>Elite</AuroraText>
                            </span>
                            <span className="bg-gradient-to-br from-white via-white to-white/60 text-transparent bg-clip-text">Markets.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg md:text-2xl text-white/50 font-medium max-w-4xl mx-auto leading-relaxed mb-16 px-4"
                        >
                            Master the world&apos;s most liquid financial markets with institutional-grade <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">liquidity</span> and nanosecond <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">execution</span>.
                        </motion.p>
                        
                        {/* CTA buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Link href="/contact" className="group relative overflow-hidden w-full sm:w-auto px-12 py-6 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:scale-105 duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Start Trading</span>
                                <div className="absolute inset-0 bg-[#2E62FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                            </Link>
                            <Link href="#assets" className="group w-full sm:w-auto px-12 py-6 bg-[#030712]/40 border border-white/10 text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] backdrop-blur-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden relative">
                                <span className="relative z-10">Explore Assets</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Statistics Bar — Glassmorphic Ultra-Premium, protruding into white */}
                <div className="relative z-40 max-w-6xl mx-auto px-6 hidden md:block">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-3 bg-[#030712]/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_-10px_rgba(0,0,0,0.9),inset_0__1px_1px_rgba(255,255,255,0.1)] translate-y-1/2 overflow-hidden"
                    >
                        {/* Shimmer effect inside the stats bar */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                        {[
                            { label: 'Instruments', value: '40,000+', icon: <BarChart3 size={20} /> },
                            { label: 'Execution', value: '< 10ms', icon: <Zap size={20} /> },
                            { label: 'Liquidity', value: 'Tier-1', icon: <Shield size={20} /> }
                        ].map((stat, i) => (
                            <div key={i} className={`relative flex items-center justify-center gap-6 py-10 px-8 hover:bg-white/[0.04] transition-all duration-700 group ${i !== 2 ? 'border-r border-white/[0.04]' : ''}`}>
                                <div className="text-[#2E62FF] opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_15px_rgba(46,98,255,0.6)] transition-all duration-500">{stat.icon}</div>
                                <div className="text-left">
                                    <div className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40 mb-1.5 group-hover:text-[#2E62FF] transition-colors duration-500">{stat.label}</div>
                                    <div className="text-2xl font-black text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Section 2: Market Categories (REDESIGNED) */}
            <section id="assets" className="pt-48 pb-32 relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 text-left mb-24">
                        <div className="max-w-3xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-8"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2E62FF]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#2E62FF]">Market Ecosystem</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl font-black text-neutral-900 uppercase tracking-tighter leading-[0.9] mb-8">
                                Exceptional <br /><span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Global</span> Assets.
                            </h2>
                            <p className="text-neutral-500 font-medium max-w-md text-base leading-relaxed">
                                Curated institutional liquidity across primary global market cycles, engineered specifically for high-frequency precision.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {[
                            { 
                                name: 'FOREX TRADING', 
                                items: '70+ Pairs', 
                                icon: <TrendingUp size={24} />, 
                                desc: 'Trade major, minor, and exotic currency pairs with ultra-tight spreads and institutional liquidity across global sessions.', 
                                image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop',
                                link: '/markets/forex'
                            },
                            { 
                                name: 'CRYPTO MARKETS', 
                                items: '100+ Coins', 
                                icon: <Coins size={24} />, 
                                desc: 'Access 24/7 institutional liquidity across leading digital assets including Bitcoin, Ethereum, and emerging DeFi tokens.', 
                                image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop',
                                link: '/markets/crypto'
                            },
                            { 
                                name: 'GLOBAL INDICES', 
                                items: '20+ Markets', 
                                icon: <Landmark size={24} />, 
                                desc: 'Speculate on the performance of global economies with low-margin trading on US30, UK100, and GER40 indices.', 
                                image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
                                link: '/markets/indices'
                            },
                            { 
                                name: 'GLOBAL SHARES', 
                                items: '500+ Stocks', 
                                icon: <CandlestickChart size={24} />, 
                                desc: 'Build your institutional portfolio with CFDs on blue-chip companies across US, UK, and European stock exchanges.', 
                                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                                link: '/markets/shares'
                            }
                        ].map((category, i) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative h-[550px] md:h-[600px] rounded-[3.5rem] overflow-hidden border border-neutral-200/50 shadow-2xl transition-all duration-700 cursor-pointer"
                            >
                                <Link href={category.link} className="absolute inset-0 z-30" />
                                
                                {/* Background Image with Smooth Zoom */}
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={category.image} 
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />
                                    {/* Multi-layered Overlays for Depth */}
                                    <div className="absolute inset-0 bg-neutral-900/60 group-hover:bg-neutral-900/40 transition-colors duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-10 p-12 md:p-14 flex flex-col justify-between pointer-events-none">
                                    {/* Top Row: Icon & Items Count */}
                                    <div className="flex items-start justify-between">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#2E62FF] group-hover:border-[#2E62FF] transition-all duration-500">
                                            {category.icon}
                                        </div>
                                        <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.3em]">
                                            {category.items}
                                        </div>
                                    </div>

                                    {/* Bottom Content: Title & Desc */}
                                    <div className="relative">
                                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.85] group-hover:translate-x-2 transition-transform duration-700">
                                            {category.name}
                                        </h3>
                                        <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-sm group-hover:text-white transition-all duration-700">
                                            {category.desc}
                                        </p>
                                        
                                        <div className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-[#2E62FF] transition-all group/btn">
                                            <span className="relative">
                                                EXPLORE ECOSYSTEM
                                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2E62FF] transition-all duration-500 group-hover/btn:w-full" />
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-[#2E62FF] group-hover/btn:bg-[#2E62FF] transition-all duration-500 text-white">
                                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Abstract Hover Accent */}
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2E62FF]/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Spotlight Section */}
            <section className="py-32 bg-white overflow-hidden border-t border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <Zap size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#2E62FF]">Why New TradeFX?</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.85]">
                            NEW TRADEFX <br />
                            <span className="text-[#2E62FF] font-serif italic normal-case tracking-normal" style={{ fontFamily: 'var(--font-playfair), serif' }}>Advantage</span>
                        </h2>
                        <p className="mt-8 text-base md:text-lg text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            We've built a trading environment that combines professional-grade power with 
                            the simplicity you need to focus on what matters most: your results.
                        </p>
                    </motion.div>
                </div>
                <FeaturesSectionDemo />
            </section>


            {/* Institutional Supporting Sections */}
            <BonusSection />
            <DownloadSection />
            <PremiumMarquee />
            <FAQSection />

            {/* Bottom Footer Spacer */}
            <div className="h-32 bg-white" />
        </main>
    );
}
