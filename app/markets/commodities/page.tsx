'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
    Star, Zap, Shield, TrendingUp, ArrowRight, CheckCircle2, Globe, 
    BarChart3, Clock, Wallet, Flame, Gem, Droplets, 
    ArrowUpCircle, ArrowDownCircle, Activity, Award, Headphones, Lock
} from 'lucide-react';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';

import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { TradingViewWidget } from '@/components/TradingViewWidget';
import { useIsMobile } from '@/hooks/use-mobile';

export default function CommoditiesPage() {
    const [active, setActive] = React.useState<(typeof marketCards)[number] | null>(null);
    const [mobileTab, setMobileTab] = React.useState<'chart' | 'info'>('chart');
    const [headerOffset, setHeaderOffset] = React.useState(100);
    const id = React.useId();
    const ref = React.useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    React.useEffect(() => {
        const updateOffset = () => {
             const header = document.querySelector('header') || document.querySelector('nav');
             if (header) {
                 setHeaderOffset(Math.max(0, header.getBoundingClientRect().bottom));
             }
        };
        updateOffset();
        window.addEventListener('resize', updateOffset);
        window.addEventListener('scroll', updateOffset);
        const observer = new MutationObserver(updateOffset);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => {
            window.removeEventListener('resize', updateOffset);
            window.removeEventListener('scroll', updateOffset);
            observer.disconnect();
        };
    }, []);

    React.useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    const [selectedPair, setSelectedPair] = React.useState<string>('');

    useOutsideClick(ref, () => setActive(null));

    return (
        <main className="relative bg-[#030712] min-h-screen">
            
            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO SECTION                                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
                {/* Background Image Layer (Responsive) */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/backgrounds/stripesbg.png" 
                        alt="Background Desktop"
                        className="hidden md:block w-full h-full object-cover opacity-60"
                    />
                    <img 
                        src="/backgrounds/stipesbgvertical.png" 
                        alt="Background Mobile"
                        className="block md:hidden w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#030712] via-[#030712]/60 to-[#030712]/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column — Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: isMobile ? 0.5 : 0.8 }}
                                className="flex flex-col items-center lg:items-start"
                            >
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-5 md:mb-6 backdrop-blur-md">
                                    <Droplets size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Commodity CFDs</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-5 md:mb-6 max-w-2xl">
                                    Trade Global <br className="hidden md:block" />
                                    <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400" style={{ fontFamily: 'var(--font-playfair), serif' }}>Commodities.</span>
                                </h1>
                                
                                <p className="text-sm md:text-base text-white/45 font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                                    Speculate on the price movements of gold, silver, and oil <span className="text-white/80">without owning the underlying asset</span>. Capitalize on both rising and falling markets with high leverage and institutional execution.
                                </p>

                                {/* Stat Badges — Optimized for Mobile Flow */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 md:mb-10 max-w-md lg:max-w-none">
                                    {[
                                        { label: 'Asset Classes', value: '4 Major' },
                                        { label: 'Long/Short', value: 'Enabled' },
                                        { label: 'Execution', value: '<30ms' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
                                            <span className="text-[10px] font-black text-white uppercase tracking-wide">{stat.value}</span>
                                            <span className="text-[8px] font-medium text-white/30 uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                                    <Link 
                                        href="/register" 
                                        className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-[#2E62FF] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all shadow-xl shadow-blue-500/20 text-center flex items-center justify-center gap-3"
                                    >
                                        <motion.div 
                                            initial={{ left: "-100%" }}
                                            whileHover={{ left: "100%" }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute top-0 h-full w-full -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-0"
                                        />
                                        <span className="relative z-10">Start Trading</span>
                                        <TrendingUp size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                    
                                    {/* Social Proof */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2.5">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-neutral-800 overflow-hidden">
                                                    <img 
                                                        src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                                                        alt="Trader" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-[#2E62FF] flex items-center justify-center text-[8px] font-bold text-white">
                                                +15k
                                            </div>
                                        </div>
                                        <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest leading-tight text-left">
                                            Trusted by <br />
                                            <span className="text-white/80">15k+ Commodity Traders</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column — Commodities Image (Hidden on Mobile) */}
                        <div className="hidden lg:flex items-center justify-center relative">
                            <img 
                                src="/assets/hero/commodities-hero.png"
                                alt="Commodities Gold and Oil"
                                className="w-full max-w-[750px] h-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(46,98,255,0.15)] scale-125 translate-x-12"
                            />
                        </div>
                    </div>
                </div>

                {/* Seamless bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* THE MECHANICS OF CFDs — Educational Section              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Trading Mechanics</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                                How <span className="text-[#2E62FF]">CFD</span> <br />
                                <span className="italic font-serif text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>Speculation Works.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-medium leading-relaxed">
                                CFD trading allows you to capitalize on price volatility without the burden of physical asset storage. 
                                Whether the market is climbing or crashing, you have the tools to navigate both directions.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Long Card */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? -15 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500">
                                    <ArrowUpCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Buy (Go Long)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If you believe the price of a commodity like <strong>Gold</strong> will rise, you enter a "Buy" position. Your profit grows in proportion to the price increase.
                            </p>
                            <div className="h-1 w-20 bg-emerald-500/40 rounded-full" />
                        </motion.div>

                        {/* Short Card */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 15 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-rose-500/[0.02] border border-rose-500/10 hover:border-rose-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-500">
                                    <ArrowDownCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Sell (Go Short)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If you anticipate a decline in <strong>Crude Oil</strong> prices, you enter a "Sell" position. This allows you to potentially profit from downward market trends.
                            </p>
                            <div className="h-1 w-20 bg-rose-500/40 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* INSTITUTIONAL ADVANTAGES — The 6 Website Pillars        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Why New TradeFX</p>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-[#0a0a0a]">
                                New TradeFx <br />
                                <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Advantages.</span>
                            </h2>
                        </div>
                        <p className="text-sm text-neutral-400 font-medium max-w-sm leading-relaxed md:text-right">
                            Engineered to deliver cutting-edge technology and exceptional service to traders worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Diverse Market Access',
                                desc: 'Trade a wide range of global commodities, indices, and shares all from a single, unified platform.',
                                icon: <Globe size={24} />,
                            },
                            {
                                title: 'Real-Time Market Data',
                                desc: 'Stay ahead with live datasets and professional analytics to capitalize on every price movement.',
                                icon: <Activity size={24} />,
                            },
                            {
                                title: 'Transparent & Trusted',
                                desc: 'Operating under strict regulatory standards, ensuring your trading environment is safe and secure.',
                                icon: <Award size={24} />,
                            },
                            {
                                title: 'Sleek Performance',
                                desc: 'Experience seamless trading with zero spreads, ultra-fast execution, and institutional-grade pricing.',
                                icon: <Zap size={24} />,
                            },
                            {
                                title: 'Constant 24/5 Support',
                                desc: 'Dedicated support team providing expert professional assistance whenever you need it most.',
                                icon: <Headphones size={24} />,
                            },
                            {
                                title: 'Secure Trading',
                                desc: 'Your funds are safeguarded with high-level encryption and top-tier security measures for peace of mind.',
                                icon: <Lock size={24} />,
                            },
                        ].map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                transition={{ delay: isMobile ? 0 : idx * 0.1 }}
                                className="group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-neutral-100 hover:border-[#2E62FF]/20 hover:shadow-[0_20px_60px_-15px_rgba(46,98,255,0.1)] transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-neutral-50 group-hover:bg-[#2E62FF] flex items-center justify-center text-neutral-400 group-hover:text-white transition-all duration-500 mb-8">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-[#0a0a0a]">{benefit.title}</h3>
                                <p className="text-neutral-500 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* MARKET STRUCTURE — Expanded Commodity Cards              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Explore Assets</p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-[#0a0a0a]">
                            Popular <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>CFD Markets.</span>
                        </h2>
                    </div>

                    {/* Modal dynamically moved to root to prevent z-10 stacking context clipping */}

                    {/* ── Cards Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {marketCards.map((card, idx) => (
                            <motion.div
                                key={card.title}
                                onClick={() => { setActive(card); setSelectedPair(card.pairs[0]); setMobileTab('chart'); }}
                                initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                transition={{ delay: isMobile ? 0 : idx * 0.1 }}
                                className="group relative bg-white rounded-[2.5rem] p-8 cursor-pointer border border-neutral-200 hover:border-[#2E62FF]/30 hover:shadow-[0_20px_60px_-15px_rgba(46,98,255,0.1)] transition-all duration-500"
                            >
                                <div className="absolute top-0 left-8 right-8 h-0.5 bg-transparent group-hover:bg-[#2E62FF] transition-colors rounded-full" />
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="p-3 rounded-xl bg-neutral-50 group-hover:bg-[#2E62FF] transition-all">
                                            <div className="text-[#2E62FF] group-hover:text-white transition-colors">{card.icon}</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-300">0{idx + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{card.title}</h3>
                                    <p className="text-xs text-neutral-500 mb-8 leading-relaxed">{card.description}</p>
                                    <div className="mt-auto">
                                        <div className="text-2xl font-black text-[#0a0a0a] group-hover:text-[#2E62FF] transition-colors">{card.stats[0].value}</div>
                                        <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mt-1 mb-6">{card.stats[0].label}</div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2E62FF]">
                                            <span>Learn More</span> <ArrowRight size={10} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* PORTFOLIO DIVERSIFICATION — Full-Width Spline Section  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative pt-12 pb-0 bg-[#030712] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — Content */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: isMobile ? 0.5 : 0.8 }}
                            className="pb-10 lg:pb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-md">
                                <Shield size={10} className="text-blue-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Institutional Strategy</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.95]">
                                Strategic <br />
                                <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Portfolio Edge.</span>
                            </h2>

                            <div className="space-y-3 max-w-lg mb-6">
                                <p className="text-base text-white/60 font-medium leading-relaxed">
                                    Maximize alpha by distributing risk across uncorrelated global commodity benchmarks.
                                </p>
                                <p className="text-sm text-white/30 leading-relaxed font-medium">
                                    Our platform provides tiered liquidity for <span className="text-white/70">Spot Metals</span>, <span className="text-white/70">Global Energy</span>, and <span className="text-white/70">Macro Indices</span>, allowing you to build a resilient trading architecture with unified institutional margin.
                                </p>
                            </div>

                            {/* Asset Highlight Cards */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { asset: 'GOLD', label: 'Safety', color: 'from-amber-500/10 to-amber-600/5', border: 'border-amber-500/10', text: 'text-amber-500/70' },
                                    { asset: 'OIL', label: 'Growth', color: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-500/10', text: 'text-blue-400/70' },
                                    { asset: 'NAS100', label: 'Tech', color: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/10', text: 'text-purple-400/70' },
                                ].map((item) => (
                                    <div key={item.asset} className={`py-3 px-3 rounded-xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-sm flex flex-col items-center group hover:border-white/10 transition-colors`}>
                                        <div className="text-lg font-black text-white/90 mb-0.5">{item.asset}</div>
                                        <div className={`text-[8px] font-black ${item.text} uppercase tracking-[0.2em]`}>{item.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Key Stats Row */}
                            <div className="flex gap-8 md:gap-10 py-4 border-t border-white/5">
                                {[
                                    { value: '4+', label: 'Asset Classes' },
                                    { value: '1:500', label: 'Max Leverage' },
                                    { value: '<30ms', label: 'Latency' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-2xl font-black text-white/90">{stat.value}</div>
                                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Frameless Image sticking from bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: isMobile ? 0.6 : 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pointer-events-none flex justify-center items-center"
                        >
                            <img 
                                src="/assets/commodities/market1x.png" 
                                className="w-full h-auto object-contain object-bottom select-none"
                                alt="Markets Infrastructure"
                            />
                            {/* Subtle light effect behind image */}
                            <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* TRADINGVIEW MARKET INSIGHTS                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-20 bg-[#030712]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0.4 : 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-md">
                            <Activity size={10} className="text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Live Market Data</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                            Commodity <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Insights.</span>
                        </h2>
                        <p className="text-sm text-white/30 mt-3 max-w-md">
                            Real-time performance data, technical signals, and institutional-grade market analysis powered by TradingView.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0 : 0.15 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        {/* Market Overview Widget */}
                        <div className="rounded-2xl border border-white/5 overflow-hidden bg-[#0c1a2e]/50 backdrop-blur-sm">
                            <TradingViewWidget 
                                widgetType="market-overview"
                                config={{
                                    colorTheme: "dark",
                                    dateRange: "12M",
                                    showChart: true,
                                    locale: "en",
                                    width: "100%",
                                    height: "500",
                                    largeChartUrl: "",
                                    isTransparent: true,
                                    showSymbolLogo: true,
                                    showFloatingTooltip: true,
                                    plotLineColorGrowing: "rgba(46, 98, 255, 1)",
                                    plotLineColorFalling: "rgba(255, 75, 75, 1)",
                                    gridLineColor: "rgba(255,255,255,0.03)",
                                    scaleFontColor: "rgba(255,255,255,0.3)",
                                    belowLineFillColorGrowing: "rgba(46, 98, 255, 0.06)",
                                    belowLineFillColorFalling: "rgba(255, 75, 75, 0.06)",
                                    belowLineFillColorGrowingBottom: "rgba(46, 98, 255, 0)",
                                    belowLineFillColorFallingBottom: "rgba(255, 75, 75, 0)",
                                    symbolActiveColor: "rgba(46, 98, 255, 0.12)",
                                    tabs: [
                                        {
                                            title: "Metals",
                                            symbols: [
                                                { s: "OANDA:XAUUSD", d: "Gold / USD" },
                                                { s: "OANDA:XAGUSD", d: "Silver / USD" },
                                                { s: "TVC:PLATINUM", d: "Platinum" },
                                                { s: "TVC:PALLADIUM", d: "Palladium" },
                                            ]
                                        },
                                        {
                                            title: "Energy",
                                            symbols: [
                                                { s: "TVC:USOIL", d: "Crude Oil WTI" },
                                                { s: "TVC:UKOIL", d: "Brent Crude" },
                                                { s: "NYMEX:NG1!", d: "Natural Gas" },
                                                { s: "NYMEX:RB1!", d: "Gasoline" },
                                            ]
                                        },
                                    ]
                                }}
                            />
                        </div>

                        {/* Technical Analysis Widget */}
                        <div className="rounded-2xl border border-white/5 overflow-hidden bg-[#0c1a2e]/50 backdrop-blur-sm">
                            <TradingViewWidget 
                                widgetType="technical-analysis"
                                config={{
                                    interval: "1D",
                                    width: "100%",
                                    height: "500",
                                    isTransparent: true,
                                    symbol: "OANDA:XAUUSD",
                                    showIntervalTabs: true,
                                    displayMode: "multiple",
                                    locale: "en",
                                    colorTheme: "dark",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Standard Global Sections */}
            <PremiumMarquee />
            <DownloadSection />
            <FAQSection />

            {/* Global Modals — Moved to Root to escape z-index stacking context */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.25 } }}
                        className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm h-[100vh] w-full z-[90]"
                        onClick={() => setActive(null)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {active ? (
                    <div 
                        className="fixed inset-x-0 bottom-0 flex items-center justify-center z-[90] p-4 md:p-8"
                        style={{ top: `${headerOffset}px` }}
                    >
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            className="absolute top-4 right-4 md:top-6 md:right-8 lg:top-8 lg:right-10 z-[95] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all shadow-xl backdrop-blur-md"
                            onClick={() => setActive(null)}
                        >
                            <X size={14} className="text-white" />
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.92, y: isMobile ? 50 : 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: isMobile ? 0.3 : 0.35, ease: [0.22, 1, 0.36, 1] } }}
                            exit={{ opacity: 0, scale: isMobile ? 1 : 0.95, y: isMobile ? 30 : 10, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
                            ref={ref}
                            className="w-full max-w-[1140px] h-full max-h-[85vh] md:max-h-[850px] bg-[#0c1a2e] rounded-2xl overflow-y-auto overflow-x-hidden md:overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row pointer-events-auto"
                        >
                            {/* Mobile Toggle Strip */}
                            <div className="flex md:hidden pt-8 px-6 pb-2 items-center justify-center bg-[#0c1a2e] flex-shrink-0">
                                <div className="flex bg-[#0f1b2e] rounded-full p-1.5 border border-white/10 w-full shadow-inner">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setMobileTab('chart'); }} 
                                        className={`flex-1 py-3 text-[10px] font-black rounded-full uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 ${mobileTab === 'chart' ? 'bg-[#2E62FF] text-white shadow-[0_0_20px_rgba(46,98,255,0.4)]' : 'text-white/30 hover:text-white/60'}`}
                                    >
                                        <BarChart3 size={14} /> View Chart
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setMobileTab('info'); }} 
                                        className={`flex-1 py-3 text-[10px] font-black rounded-full uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 ${mobileTab === 'info' ? 'bg-white text-[#0a0a0a] shadow-lg' : 'text-white/30 hover:text-white/60'}`}
                                    >
                                        <Activity size={14} /> Market Info
                                    </button>
                                </div>
                            </div>

                            {/* LEFT — Dark Chart Panel */}
                            <div className={`w-full md:w-[55%] flex-col h-full flex-shrink-0 border-b border-white/5 md:border-b-0 ${mobileTab === 'chart' ? 'flex' : 'hidden md:flex'}`}>
                                <div className="p-8 pb-4 flex-shrink-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-[#2E62FF]/15">
                                            {active.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{active.title}</h3>
                                            <p className="text-xs text-white/35 font-medium">{active.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-8 flex gap-1 flex-shrink-0">
                                    {active.pairs.map((pair: string) => (
                                        <button
                                            key={pair}
                                            onClick={(e) => { e.stopPropagation(); setSelectedPair(pair); }}
                                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                                                selectedPair === pair ? 'bg-[#2E62FF] text-white' : 'text-white/35'
                                            }`}
                                        >
                                            {pair}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex-1 p-6 pt-3 min-h-0">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0f1b2e]">
                                        <iframe
                                            key={selectedPair}
                                            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview&symbol=${selectedPair.replace('/', '')}&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=0c1a2e&theme=dark&style=1&timezone=exchange&withdateranges=1&locale=en`}
                                            className="w-full absolute inset-0 h-full border-none"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>

                                <div className="px-8 pb-8 flex gap-8 flex-shrink-0">
                                    {active.stats.map((s: { label: string; value: string }) => (
                                        <div key={s.label}>
                                            <div className="text-sm font-bold text-white">{s.value}</div>
                                            <div className="text-[9px] font-medium text-[#2E62FF]/60 uppercase tracking-wider">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT — Light Content Panel */}
                            <div className={`w-full md:w-[45%] bg-white flex-col h-full ${mobileTab === 'info' ? 'flex' : 'hidden md:flex'}`}>
                                <div className="flex-1 overflow-y-auto p-8">
                                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                        {typeof active.content === "function" ? active.content() : active.content}
                                    </motion.div>
                                </div>
                                <div className="p-8 pt-0">
                                    <Link href={active.ctaLink} className="flex items-center justify-center gap-2 w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl bg-[#2E62FF] text-white shadow-lg shadow-[#2E62FF]/20">
                                        {active.ctaText} <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <div className="h-20 bg-white" />
        </main>
    );
}

const X = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const marketCards = [
    {
        title: 'Precious Metals',
        description: 'Trade gold and silver as ultimate safe-havens during global instability.',
        ctaText: 'Trade Metals',
        ctaLink: '/register',
        icon: <Gem size={24} />,
        pairs: ['XAUUSD', 'XAGUSD'],
        stats: [
            { label: 'Deep Liquidity', value: 'Tier-1' },
            { label: 'Max Leverage', value: '1:500' },
            { label: 'Execution', value: '<30ms' },
            { label: 'Margin', value: '0.2%' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Gem size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4"><strong>Gold (XAU/USD)</strong> and <strong>Silver (XAG/USD)</strong> are recognized globally as the ultimate stores of value. Precious metal CFDs are highly utilized by institutional investors to hedge against inflation, un-anchored fiat monetary policies, and black-swan geopolitical events.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">Silver inherently carries higher industrial demand logic (electronics, solar), causing it to often exhibit greater percentage volatility compared to gold during economic expansions.</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Why Trade Precious Metals?</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Zap size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Inverse USD Correlation:</strong> Capitalize on direct inversely proportional market movements relative to the US Dollar strength index (DXY).</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Zero Custody Constraints:</strong> Trade spot metals entirely digitally without the massive overhead costs, insurance premiums, or transportation logistics of holding physical bullion.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <BarChart3 size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>High Liquidity & Margin:</strong> Speculate with exceptional leverage during high-impact US economic news releases (NFP, CPI) without slippage.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Energy Market',
        description: 'Speculate on Crude Oil and Brent — the pulse of global movement.',
        ctaText: 'Trade Energy',
        ctaLink: '/register',
        icon: <Droplets size={24} />,
        pairs: ['USOIL', 'UKOIL'],
        stats: [
            { label: 'Market Volatility', value: 'High' },
            { label: 'Max Leverage', value: '1:500' },
            { label: 'Spread', value: '3.0 Pips' },
            { label: 'Pricing', value: 'Real-Time' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Droplets size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">The global energy matrix completely revolves around two standard pricing benchmarks: <strong>US Crude Oil (WTI)</strong> and <strong>UK Brent Oil</strong>. Energy CFD markets are inherently hypersensitive to major infrastructural shifts, OPEC+ production caps, supply chain embargoes, and changing macroeconomic consumption forecasts.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">Unlike purchasing oil contracts expiring at physical delivery, trading Cash CFDs allows for seamless continuous speculation without roll-over friction.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                        <h4 className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-wider mb-2">UK Brent</h4>
                        <p className="text-xs text-neutral-500">Global benchmark pricing. Tends to react more aggressively to Middle Eastern geopolitical risks and European supply concerns.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                        <h4 className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-wider mb-2">WTI Crude</h4>
                        <p className="text-xs text-neutral-500">North American benchmark. Deeply influenced by domestic US shale production and Cushing pipeline capacities.</p>
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-blue-50 border border-blue-100/50">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="text-xs text-blue-700 font-bold uppercase tracking-widest">Fundamental Pro Tip</p>
                    </div>
                    <p className="text-sm text-blue-800 leading-relaxed">Monitor the weekly <strong>DOE/EIA Crude Oil Inventories report</strong>. Massive deviations from strategic supply forecasts frequently catalyze extraordinary breakout opportunities.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Natural Gas',
        description: 'Trade one of the most dynamic and seasonally sensitive energy assets.',
        ctaText: 'Trade Gas',
        ctaLink: '/register',
        icon: <Flame size={24} />,
        pairs: ['NATGAS'],
        stats: [
            { label: 'Pricing', value: 'CFD Spot' },
            { label: 'Leverage', value: '1:200' },
            { label: 'Vol', value: 'Extreme' },
            { label: 'Access', value: '24/5' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Flame size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4"><strong>Natural Gas (NATGAS)</strong> is infamous among experienced energy traders for its extreme directional volatility and highly structured seasonal cycles. Based principally on the Henry Hub benchmark, it is a localized market driven strictly by weather forecasts, industrial power generation needs, and pipeline export capacities.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">During severe winter storms or peak summer cooling conditions, extreme temporary demand can cause enormous price gaps. With leveraged CFDs, traders seek to ride these powerful trend injections.</p>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Key Volatility Drivers</h4>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Weather Anomalies:</strong> Unexpected temperature changes natively affect utility reserves and directly influence intraday pricing.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Storage Reports:</strong> The weekly Thursday EIA Natural Gas storage report heavily directs short-term market trajectory.</p>
                        </div>
                    </div>
                </div>
                
                <p className="text-xs text-neutral-400 italic">Access Natural Gas with exact institutional sub-millisecond execution engines, completely free of exchange fees.</p>
            </div>
        )
    },
    {
        title: 'Indices & More',
        description: 'Complete your market exposure with Global Indices like US30 and NAS100.',
        ctaText: 'View Indices',
        ctaLink: '/markets/indices',
        icon: <TrendingUp size={24} />,
        pairs: ['US30', 'NAS100', 'GER40'],
        stats: [
            { label: 'Daily Range', value: '200+ Pips' },
            { label: 'Leverage', value: '1:500' },
            { label: 'Execution', value: '<30ms' },
            { label: 'Markets', value: 'Global' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs text-neutral-800 font-bold mb-3 uppercase tracking-widest flex items-center gap-2">
                        <Globe size={14} className="text-[#2E62FF]" /> Sector Exposure
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">Why trade individual companies when you can speculate on the trajectory of an entire continental economy? Cash Indices CFD trading allows you to capitalize on the aggregated performance of global markets.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">From the tech-heavy <strong>NASDAQ 100</strong> and the industrial giants of the <strong>Dow Jones (US30)</strong>, to the manufacturing backbone of the <strong>DAX (GER40)</strong>—indices offer structural diversification and protect against single-stock collapse risks.</p>
                </div>

                <div className="p-5 rounded-xl border border-dashed border-neutral-200">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Core Advantages</h4>
                    <ul className="text-sm text-neutral-500 space-y-2 list-inside list-disc marker:text-[#2E62FF]">
                        <li>Trade global hours seamlessly (nearly 24/5 access).</li>
                        <li>High intraday volatility with defined technical levels.</li>
                        <li>Immunity to isolated individual company earnings shocks.</li>
                    </ul>
                </div>

                <Link href="/markets/indices" className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-neutral-900 text-white gap-2 font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors">
                    Explore Advanced Indices <ArrowRight size={14} />
                </Link>
            </div>
        )
    }
];
