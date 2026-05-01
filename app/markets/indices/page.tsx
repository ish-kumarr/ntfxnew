'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
    Star, Zap, Shield, TrendingUp, ArrowRight, CheckCircle2, Globe, 
    BarChart3, Clock, Wallet, LineChart, Landmark, Building2,
    ArrowUpCircle, ArrowDownCircle, Activity, Award, Headphones, Lock
} from 'lucide-react';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';

import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { TradingViewWidget } from '@/components/TradingViewWidget';

export default function IndicesPage() {
    const [active, setActive] = React.useState<(typeof marketCards)[number] | null>(null);
    const [mobileTab, setMobileTab] = React.useState<'chart' | 'info'>('chart');
    const [headerOffset, setHeaderOffset] = React.useState(100);
    const id = React.useId();
    const ref = React.useRef<HTMLDivElement>(null);

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
            <section id="indices-hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col items-center lg:items-start"
                            >
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-5 md:mb-6 backdrop-blur-md">
                                    <LineChart size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Index CFDs</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-5 md:mb-6 max-w-2xl">
                                    Trade Global <br className="hidden md:block" />
                                    <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400" style={{ fontFamily: 'var(--font-playfair), serif' }}>Market Indices.</span>
                                </h1>
                                
                                <p className="text-sm md:text-base text-white/45 font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                                    Access major indices from around the world and take your trading to the next level with our expert tools and support. Gain exposure to leading global indices with ease.
                                </p>

                                {/* Stat Badges — Optimized for Mobile Flow */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 md:mb-10 max-w-md lg:max-w-none">
                                    {[
                                        { label: 'Global Indices', value: '15+' },
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
                                        id="indices-cta-hero"
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
                                                        src={`https://i.pravatar.cc/100?img=${i + 30}`} 
                                                        alt="Trader" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-[#2E62FF] flex items-center justify-center text-[8px] font-bold text-white">
                                                +12k
                                            </div>
                                        </div>
                                        <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest leading-tight text-left">
                                            Trusted by <br />
                                            <span className="text-white/80">12k+ Index Traders</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column — Indices Hero Image (Hidden on Mobile) */}
                        <div className="hidden lg:flex items-center justify-center relative">
                            <img 
                                src="/assets/hero/indices-hero.png"
                                alt="Global Stock Market Indices Trading"
                                className="w-full max-w-[750px] h-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(46,98,255,0.15)] scale-125 translate-x-12"
                            />
                        </div>
                    </div>
                </div>

                {/* Seamless bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHAT IS AN INDEX — Educational Section                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-what-is" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Understanding Indices</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                                What is an <span className="text-[#2E62FF]">Index</span> <br />
                                <span className="italic font-serif text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>& How It Works.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-medium leading-relaxed">
                                A stock market index represents the combined value of a group of companies on a particular exchange. 
                                Instead of purchasing dozens of individual stocks, you can gain exposure to an entire economy through a single position.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Long Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[3rem] bg-emerald-500/[0.02] border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500">
                                    <ArrowUpCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Buy (Go Long)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If you believe the economy is growing and corporate earnings are rising, you enter a "Buy" position on an index like the <strong>S&P 500</strong>. Your profit grows as the index climbs higher.
                            </p>
                            <div className="h-1 w-20 bg-emerald-500/40 rounded-full" />
                        </motion.div>

                        {/* Short Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group p-10 rounded-[3rem] bg-rose-500/[0.02] border border-rose-500/10 hover:border-rose-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-500">
                                    <ArrowDownCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Sell (Go Short)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If you anticipate a market downturn or recession fears, you enter a "Sell" position. This allows you to potentially profit from declining markets like the <strong>NASDAQ 100</strong> during tech selloffs.
                            </p>
                            <div className="h-1 w-20 bg-rose-500/40 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY TRADE INDICES — Key Benefits for SEO                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-benefits" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
                {/* Decorative Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Left Column — The Pitch */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:sticky lg:top-32"
                        >
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-md">
                                <Zap size={10} className="fill-emerald-500 text-emerald-500" />
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-500">Why Trade Indices</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-white">
                                Broad Market <br />
                                Exposure in a <br />
                                <AuroraText className="italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>Single Trade.</AuroraText>
                            </h2>

                            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg mb-8">
                                Access major indices from top financial hubs worldwide. Enjoy round-the-clock trading, high leverage options, and profit potential in any market direction with our advanced trading platforms.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link 
                                    href="/register" 
                                    id="indices-cta-benefits"
                                    className="group relative overflow-hidden px-8 py-4 bg-[#2E62FF] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all shadow-lg shadow-blue-500/15 flex items-center gap-3"
                                >
                                    <motion.div 
                                        initial={{ left: "-100%" }}
                                        whileHover={{ left: "100%" }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute top-0 h-full w-full -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-0"
                                    />
                                    <span className="relative z-10">Open Live Account</span>
                                    <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link 
                                    href="/accounts" 
                                    className="px-8 py-4 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
                                >
                                    Compare Accounts
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column — Feature Blocks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    num: '01',
                                    title: 'Access Global Leaders',
                                    desc: 'Trade major indices from top financial hubs like the US, UK, and Europe, including Dow, Nasdaq, FTSE 100, and DAX30.',
                                    icon: <Globe size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '02',
                                    title: 'Round-the-Clock Trading',
                                    desc: 'Enjoy the flexibility of trading indices 24 hours a day, five days a week with no trading restrictions.',
                                    icon: <Clock size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '03',
                                    title: 'High Leverage Options',
                                    desc: 'Amplify your market exposure with competitive leverage, helping you make the most of your capital.',
                                    icon: <Zap size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '04',
                                    title: 'Profit in Any Market',
                                    desc: 'Take advantage of two-way trading to gain from both rising and falling market directions.',
                                    icon: <BarChart3 size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '05',
                                    title: 'Advanced Platforms',
                                    desc: 'Use powerful, user-friendly platforms equipped with sophisticated tools for smarter trading decisions.',
                                    icon: <Activity size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '06',
                                    title: 'Trade Entire Sectors',
                                    desc: 'Gain broad market exposure. Speculate on the performance of entire sectors or economies with a single trade.',
                                    icon: <Shield size={20} className="text-[#2E62FF]" />,
                                },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={feature.num}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="group p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-[#2E62FF]/20 hover:bg-[#2E62FF]/[0.04] transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="p-3 rounded-2xl bg-white/[0.05] group-hover:bg-[#2E62FF]/10 transition-colors duration-500">
                                            {feature.icon}
                                        </div>
                                        <span className="text-[11px] font-black text-white/10 group-hover:text-[#2E62FF]/30 tracking-widest transition-colors duration-500">{feature.num}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                                    <p className="text-[13px] text-white/35 leading-relaxed font-medium">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* INSTITUTIONAL ADVANTAGES — The 6 Website Pillars        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-advantages" className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
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
                            Engineered to deliver cutting-edge technology and exceptional service to index traders worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Diverse Market Access',
                                desc: 'Trade indices from the US, Europe, Asia, and beyond — all from a single, unified trading platform.',
                                icon: <Globe size={24} />,
                            },
                            {
                                title: 'Real-Time Market Data',
                                desc: 'Stay ahead with live index data and professional analytics to capitalize on every market movement.',
                                icon: <Activity size={24} />,
                            },
                            {
                                title: 'Transparent & Trusted',
                                desc: 'Operating under strict regulatory standards, ensuring your trading environment is safe and secure.',
                                icon: <Award size={24} />,
                            },
                            {
                                title: 'Sleek Performance',
                                desc: 'Experience seamless trading with tight spreads, ultra-fast execution, and institutional-grade pricing on all indices.',
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-white border border-neutral-100 hover:border-[#2E62FF]/20 hover:shadow-[0_20px_60px_-15px_rgba(46,98,255,0.1)] transition-all duration-500"
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
            {/* MARKET STRUCTURE — Expanded Index Cards                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-market-structure" className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Explore Indices</p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-[#0a0a0a]">
                            Popular <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Index Markets.</span>
                        </h2>
                    </div>

                    {/* ── Cards Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {marketCards.map((card, idx) => (
                            <motion.div
                                key={card.title}
                                onClick={() => { setActive(card); setSelectedPair(card.pairs[0]); setMobileTab('chart'); }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
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
            {/* KEY FACTORS — What Influences Index Prices               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-factors" className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Market Drivers</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Key Factors <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Influencing Indices.</span>
                        </h2>
                        <p className="text-sm text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed mt-6">
                            Understanding the fundamental catalysts behind index movements is essential for informed trading decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Economic Growth & GDP',
                                desc: 'GDP data and economic growth indicators are primary drivers of index performance. Strong economic output lifts corporate earnings and index valuations.',
                                icon: <TrendingUp size={22} />,
                            },
                            {
                                title: 'Central Bank Decisions',
                                desc: 'Interest rate decisions by the Fed, ECB, and BOE directly influence capital flows, borrowing costs, and equity market sentiment.',
                                icon: <Landmark size={22} />,
                            },
                            {
                                title: 'Corporate Earnings',
                                desc: 'Quarterly earnings reports from major index constituents like Apple, Microsoft, and Amazon can swing entire indices by hundreds of points.',
                                icon: <BarChart3 size={22} />,
                            },
                            {
                                title: 'Geopolitical Events',
                                desc: 'Trade wars, sanctions, elections, and military conflicts create uncertainty that drives volatility across global stock indices.',
                                icon: <Globe size={22} />,
                            },
                            {
                                title: 'Investor Confidence',
                                desc: 'Market sentiment indicators like the VIX (Fear Index) measure collective investor psychology and anticipate major index movements.',
                                icon: <Activity size={22} />,
                            },
                            {
                                title: 'Trade Policy',
                                desc: 'Tariffs, trade agreements, and supply chain disruptions between major economies can trigger sustained index trends in either direction.',
                                icon: <Building2 size={22} />,
                            },
                        ].map((factor, idx) => (
                            <motion.div
                                key={factor.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="group p-8 rounded-[2rem] bg-white border border-neutral-100 hover:border-[#2E62FF]/20 hover:shadow-[0_15px_40px_-10px_rgba(46,98,255,0.08)] transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-[#2E62FF] flex items-center justify-center text-neutral-400 group-hover:text-white transition-all duration-500 mb-6">
                                    {factor.icon}
                                </div>
                                <h3 className="text-lg font-bold tracking-tight mb-3 text-[#0a0a0a]">{factor.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed font-medium">{factor.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* PORTFOLIO DIVERSIFICATION — Full-Width Spline Section  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="indices-portfolio" className="relative pt-12 pb-0 bg-[#030712] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="pb-10 lg:pb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-md">
                                <Shield size={10} className="text-blue-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Institutional Strategy</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.95]">
                                Strategic <br />
                                <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Index Edge.</span>
                            </h2>

                            <div className="space-y-3 max-w-lg mb-6">
                                <p className="text-base text-white/60 font-medium leading-relaxed">
                                    Maximize your market exposure by trading the world&apos;s most powerful equity benchmarks — from Wall Street to Frankfurt.
                                </p>
                                <p className="text-sm text-white/30 leading-relaxed font-medium">
                                    Our platform provides tiered liquidity for <span className="text-white/70">US Indices</span>, <span className="text-white/70">European Blue-Chips</span>, and <span className="text-white/70">Asian Markets</span>, allowing you to build a resilient multi-regional trading strategy with unified institutional margin.
                                </p>
                            </div>

                            {/* Asset Highlight Cards */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { asset: 'US30', label: 'Industrials', color: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-500/10', text: 'text-blue-400/70' },
                                    { asset: 'NAS100', label: 'Tech', color: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/10', text: 'text-purple-400/70' },
                                    { asset: 'GER40', label: 'Europe', color: 'from-amber-500/10 to-amber-600/5', border: 'border-amber-500/10', text: 'text-amber-500/70' },
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
                                    { value: '15+', label: 'Global Indices' },
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
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pointer-events-none flex justify-center items-center"
                        >
                            <img 
                                src="/assets/markets/indices_portfolio.png" 
                                className="w-full h-auto object-contain object-bottom select-none"
                                alt="Global Indices Trading Infrastructure"
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
            <section id="indices-live-data" className="relative py-20 bg-[#030712]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-md">
                            <Activity size={10} className="text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Live Market Data</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                            Index <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Insights.</span>
                        </h2>
                        <p className="text-sm text-white/30 mt-3 max-w-md">
                            Real-time index performance data, technical signals, and institutional-grade market analysis powered by TradingView.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
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
                                            title: "US Indices",
                                            symbols: [
                                                { s: "FOREXCOM:DJI", d: "Dow Jones 30" },
                                                { s: "FOREXCOM:NSXUSD", d: "NASDAQ 100" },
                                                { s: "FOREXCOM:SPX500", d: "S&P 500" },
                                            ]
                                        },
                                        {
                                            title: "Europe & Asia",
                                            symbols: [
                                                { s: "FOREXCOM:DEU40", d: "DAX 40 (Germany)" },
                                                { s: "FOREXCOM:UK100", d: "FTSE 100 (UK)" },
                                                { s: "TVC:NI225", d: "Nikkei 225 (Japan)" },
                                                { s: "TVC:HSI", d: "Hang Seng (HK)" },
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
                                    symbol: "FOREXCOM:DJI",
                                    showIntervalTabs: true,
                                    displayMode: "single",
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
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                            exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
                            ref={ref}
                            className="w-full max-w-[1140px] h-full max-h-[850px] bg-[#0c1a2e] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row pointer-events-auto"
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
        title: 'US Indices',
        description: 'Trade the heartbeat of Wall Street — Dow Jones, NASDAQ, and S&P 500.',
        ctaText: 'Trade US Indices',
        ctaLink: '/register',
        icon: <TrendingUp size={24} />,
        pairs: ['US30', 'NAS100', 'SPX500'],
        stats: [
            { label: 'Daily Range', value: '300+ Pts' },
            { label: 'Max Leverage', value: '1:500' },
            { label: 'Execution', value: '<30ms' },
            { label: 'Access', value: '~24/5' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4"><strong>US indices</strong> represent the world&apos;s largest and most influential equity markets. The <strong>Dow Jones Industrial Average (US30)</strong> tracks 30 blue-chip industrial giants, while the <strong>NASDAQ 100 (NAS100)</strong> is heavily weighted toward technology leaders like Apple, Microsoft, and NVIDIA.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">The <strong>S&P 500 (SPX500)</strong> offers the broadest exposure to the American economy, covering 500 leading companies across all major sectors — making it the single most-watched equity benchmark globally.</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Why Trade US Indices?</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Zap size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Highest Liquidity:</strong> US indices are the most traded index instruments globally, ensuring tight spreads and minimal slippage even during volatile sessions.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Earnings Season Catalysts:</strong> Quarterly corporate earnings create massive intraday volatility events — perfect for directional CFD speculation.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <BarChart3 size={14} className="text-[#2E62FF] mx-1 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Fed Policy Sensitivity:</strong> US indices react instantly to Federal Reserve rate decisions, FOMC minutes, and inflation data — providing high-conviction trading setups.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'European Indices',
        description: 'Speculate on Europe\'s powerhouse economies — DAX, FTSE, and CAC 40.',
        ctaText: 'Trade Europe',
        ctaLink: '/register',
        icon: <Landmark size={24} />,
        pairs: ['GER40', 'UK100', 'FRA40'],
        stats: [
            { label: 'Market Volatility', value: 'High' },
            { label: 'Max Leverage', value: '1:500' },
            { label: 'Spread', value: 'From 0.8' },
            { label: 'Sessions', value: 'EU Hours' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Landmark size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">European indices capture the economic pulse of the continent&apos;s most powerful economies. The <strong>DAX 40 (GER40)</strong> represents Germany&apos;s manufacturing and automotive powerhouses, while the <strong>FTSE 100 (UK100)</strong> tracks London&apos;s blue-chip multinational corporations.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">The <strong>CAC 40 (FRA40)</strong> reflects France&apos;s luxury, energy, and industrial conglomerates. European indices tend to be more sensitive to ECB monetary policy, Brexit developments, and Eurozone GDP data.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                        <h4 className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-wider mb-2">DAX 40</h4>
                        <p className="text-xs text-neutral-500">Germany&apos;s premier index. Dominated by industrial giants like Siemens, SAP, and BMW. Highly sensitive to global manufacturing PMI data.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
                        <h4 className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-wider mb-2">FTSE 100</h4>
                        <p className="text-xs text-neutral-500">UK&apos;s benchmark index. Heavy commodity and financial sector weighting. Moves inversely to GBP strength due to export-heavy constituents.</p>
                    </div>
                </div>

                <div className="p-5 rounded-xl bg-blue-50 border border-blue-100/50">
                    <div className="flex items-center gap-2 mb-2">
                        <p className="text-xs text-blue-700 font-bold uppercase tracking-widest">Trading Pro Tip</p>
                    </div>
                    <p className="text-sm text-blue-800 leading-relaxed">Monitor the <strong>ECB interest rate decisions</strong> and <strong>German Industrial Production</strong> reports. These are primary catalysts for sharp DAX intraday moves — often creating 200+ point swings.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Asian Indices',
        description: 'Access the fast-growing Asian markets — Nikkei 225 and Hang Seng.',
        ctaText: 'Trade Asia',
        ctaLink: '/register',
        icon: <Globe size={24} />,
        pairs: ['JPN225', 'HK50'],
        stats: [
            { label: 'Pricing', value: 'CFD Cash' },
            { label: 'Leverage', value: '1:200' },
            { label: 'Vol', value: 'High' },
            { label: 'Access', value: 'Asian Session' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Globe size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Market Insight</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">The <strong>Nikkei 225 (JPN225)</strong> represents Japan&apos;s leading corporations — the world&apos;s third-largest economy. It is heavily influenced by Bank of Japan monetary policy, yen strength, and global semiconductor demand.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">The <strong>Hang Seng Index (HK50)</strong> provides exposure to Hong Kong and mainland Chinese equities, making it one of the most dynamic and volatile Asian benchmarks. It reacts strongly to China&apos;s economic data, regulatory shifts, and US-China trade dynamics.</p>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Key Volatility Drivers</h4>
                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>BOJ Policy:</strong> Japan&apos;s ultra-loose monetary policy and yield curve control create unique trading dynamics for the Nikkei 225.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>China PMI Data:</strong> Manufacturing and services PMI releases from China directly impact Hang Seng sentiment and direction.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-emerald-500 mt-1 flex-shrink-0" />
                            <p className="text-sm text-neutral-500"><strong>Tech Supply Chains:</strong> Both indices are heavily exposed to global semiconductor and electronics supply chain developments.</p>
                        </div>
                    </div>
                </div>
                
                <p className="text-xs text-neutral-400 italic">Access Asian indices with institutional-grade execution engines during the Asian trading session (00:00–09:00 GMT).</p>
            </div>
        )
    },
    {
        title: 'Specialty Indices',
        description: 'Diversify with the Russell 2000, VIX exposure, and other global benchmarks.',
        ctaText: 'Trade Specialty',
        ctaLink: '/register',
        icon: <LineChart size={24} />,
        pairs: ['US2000', 'AUS200'],
        stats: [
            { label: 'Daily Range', value: '150+ Pts' },
            { label: 'Leverage', value: '1:200' },
            { label: 'Execution', value: '<30ms' },
            { label: 'Markets', value: 'Global' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-100">
                    <p className="text-xs text-neutral-800 font-bold mb-3 uppercase tracking-widest flex items-center gap-2">
                        <LineChart size={14} className="text-[#2E62FF]" /> Sector Exposure
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">Beyond the major US and European indices, specialty benchmarks provide unique tactical opportunities. The <strong>Russell 2000 (US2000)</strong> tracks 2,000 small-cap American companies — offering a pure-play on domestic US economic growth.</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">The <strong>ASX 200 (AUS200)</strong> provides exposure to Australia&apos;s resource-heavy economy, heavily influenced by commodity prices and China&apos;s demand for raw materials.</p>
                </div>

                <div className="p-5 rounded-xl border border-dashed border-neutral-200">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Core Advantages</h4>
                    <ul className="text-sm text-neutral-500 space-y-2 list-inside list-disc marker:text-[#2E62FF]">
                        <li>Small-cap indices often lead or lag major indices — creating divergence trades.</li>
                        <li>Regional indices provide exposure to localized economic themes and policies.</li>
                        <li>Lower correlation to US majors — effective for portfolio diversification.</li>
                    </ul>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Star size={14} className="text-amber-500" />
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Pro Tip</p>
                    </div>
                    <p className="text-sm text-neutral-600">Compare the <strong>Russell 2000 vs S&P 500</strong> performance ratio. When small-caps outperform large-caps, it signals domestic economic strength — a powerful macro indicator for directional bias.</p>
                </div>
            </div>
        )
    }
];
