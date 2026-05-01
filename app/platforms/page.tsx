'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Monitor, Smartphone, Globe, Activity, Layers, ShieldCheck, 
    Cpu, BarChart3, Lock, MessageSquare, Zap, Clock, Code,
    Calendar, ArrowRight, ExternalLink, ChevronRight, LayoutGrid
} from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';
import { FAQSection } from '@/components/sections/FAQSection';

export default function PlatformsPage() {
    const [activeFeatureTab, setActiveFeatureTab] = useState(0);

    const platformFeatures = [
        { title: 'Advanced Charting', icon: <BarChart3 size={24}/>, desc: 'Analyze market trends with comprehensive and detailed multi-timeframe charting tools. Over 80+ pre-built technical indicators directly integrated into your charts.' },
        { title: 'Market Depth', icon: <Layers size={24}/>, desc: 'Access real-time Level 2 market depth information to gauge liquidity, evaluate order book pressure, and make significantly better trading decisions.' },
        { title: 'Multi-Device', icon: <Monitor size={24}/>, desc: 'Trade seamlessly across desktop, web terminal, and mobile devices. Your accounts, preferences, and open positions are synced instantaneously.' },
        { title: 'Algorithmic Trading', icon: <Code size={24}/>, desc: 'Implement automated trading strategies with Expert Advisors (EAs). Utilize the integrated MQL5 environment for institutional-grade algorithmic programming.' },
        { title: 'Technical Indicators', icon: <Activity size={24}/>, desc: 'Deploy an extensive library of technical indicators and graphical objects to enhance your market analysis and pinpoint perfect entry and exit zones.' },
        { title: 'Economic Calendar', icon: <Calendar size={24}/>, desc: 'Stay informed with an integrated real-time economic calendar. Anticipate market volatility and timely updates directly within the trading terminal.' },
    ];

    return (
        <main className="relative min-h-screen bg-[#030712] text-white selection:bg-[#2E62FF]/30">
            
            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO SECTION - RE-ARCHITECTED FOR IMPACT                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center">
                {/* Immersive Background (Forex/Commodities Style) */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/backgrounds/stripesbg.png" 
                        alt="Background Desktop"
                        className="hidden md:block w-full h-full object-cover opacity-40"
                    />
                    <img 
                        src="/backgrounds/stipesbgvertical.png" 
                        alt="Background Mobile"
                        className="block md:hidden w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-[#030712]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50" />
                    
                    {/* Premium Grid Pattern */}
                    <div 
                        className="absolute inset-0 opacity-[0.03]" 
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
                    />

                    {/* Subtle Glows */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
                        
                        {/* Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-3xl"
                        >
                            {/* Available Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-8 backdrop-blur-xl">
                                <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                                <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Live Infrastructure Status</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] mb-8 text-white drop-shadow-2xl">
                                Master the <br />
                                Markets with <br />
                                <span className="text-white/40">Superior Tech.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium mb-12 max-w-xl">
                                Unleash your potential with our high-performance trading infrastructure. 
                                Institutional-grade tools, lightning-fast execution, and unmatched reliability across all platforms.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link 
                                    href="#platform-downloads"
                                    className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-white text-[#030712] text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center"
                                >
                                    <span className="relative z-10">Get the Platform</span>
                                    <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                
                                <Link 
                                    href="https://dashboard.tradefxservices.com/"
                                    target="_blank"
                                    className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-white/[0.03] border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center hover:bg-white/[0.08]"
                                >
                                    <span className="relative z-10">Client Portal</span>
                                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Asset (Hero Image) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="relative hidden lg:flex justify-center items-center"
                        >
                            <div className="relative w-full aspect-square max-w-[600px]">
                                <Image 
                                    src="/assets/hero/hero-downlaods.png" 
                                    alt="MetaTrader 5 Infrastructure" 
                                    fill
                                    priority
                                    className="object-contain drop-shadow-[0_0_50px_rgba(46,98,255,0.2)]"
                                />
                                
                                {/* Decorative Floating Elements (Subtle) */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full animate-pulse" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}

            {/* ═══════════════════════════════════════════════════════ */}
            {/* PLATFORM DOWNLOAD ACCESS                                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div id="platform-downloads">
                <DownloadSection />
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* BENTO GRID: ADVANCED INSTRUMENTS                        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 bg-[#050B14]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                                Advanced Instruments <br />
                                for <span className="text-[#2E62FF] italic font-serif leading-none" style={{ fontFamily: 'var(--font-playfair), serif' }}>Professionals.</span>
                            </h2>
                            <p className="text-white/40 text-lg leading-relaxed">
                                Expand your trading potential with a wide selection of advanced instruments, each supported by superior execution, deep liquidity, and reliable market data.
                            </p>
                        </div>
                    </div>

                    {/* Bento Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Forex - Large Span */}
                        <div className="md:col-span-2 group relative p-10 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#0c1322] to-[#0A0D15] border border-white/[0.04] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                                        <Globe size={28} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4">Trade Forex With<br/>Institutional Precision</h3>
                                    <p className="text-white/40 leading-relaxed font-medium max-w-lg">
                                        Navigate the global currency markets with New Trade Fx Services’ powerful trading infrastructure. Access 55+ major, minor, and exotic pairs supported by lightning-fast execution, tight pricing, and real-time market data.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CFDs/Commodities - Tall */}
                        <div className="group relative p-10 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#0c1322] to-[#0A0D15] border border-white/[0.04] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-700" />
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 border border-amber-500/20">
                                        <Layers size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight text-white mb-4">World's Leading CFD Markets</h3>
                                    <p className="text-white/40 leading-relaxed text-sm font-medium">
                                        Trade major commodities like Gold, Oil, and Silver through our robust CFD environment. Capture market trends and capitalize on price movements with dependable liquidity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Metals - Standard */}
                        <div className="group relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#0c1322] to-[#0A0D15] border border-white/[0.04] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-400/10 rounded-full blur-[80px] group-hover:bg-slate-400/20 transition-all duration-700" />
                            <div className="relative z-10">
                                <ShieldCheck size={28} className="text-slate-400 mb-6" />
                                <h3 className="text-xl font-black tracking-tight text-white mb-3">Precious Metals</h3>
                                <p className="text-white/40 leading-relaxed text-sm font-medium">
                                    Gain exposure to dynamic metals markets. Execute trades quickly, analyze price movements with advanced tools, and take advantage of one of the most active asset classes.
                                </p>
                            </div>
                        </div>

                        {/* Indices - Span 2 */}
                        <div className="md:col-span-2 group relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#0c1322] to-[#0A0D15] border border-white/[0.04] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
                                <div className="max-w-md">
                                    <Activity size={28} className="text-emerald-500 mb-6" />
                                    <h3 className="text-xl font-black tracking-tight text-white mb-3">Leading Global Indices</h3>
                                    <p className="text-white/40 leading-relaxed text-sm font-medium">
                                        Gain access to major indices including NAS100, US30, GER40, UK100. Benefit from fast execution, transparent pricing, and in-depth insights. Ideal for capturing volatility across world's largest economies.
                                    </p>
                                </div>
                                <div className="hidden md:flex gap-4">
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/70">NAS100</div>
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/70">US30</div>
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/70">GER40</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY CHOOSE NEW TRADE FX? (The 6 Reasons)                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 bg-[#0A0D15] border-y border-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            Why Trade on <span className="text-[#2E62FF]">New Trade Fx?</span>
                        </h2>
                        <p className="text-white/40 text-lg leading-relaxed">
                            Here are six compelling reasons to choose our MT5 platform infrastructure for your trading needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { title: 'Multi-Asset Platform', icon: <LayoutGrid/>, desc: 'Trade forex, stocks, and commodities all from one platform, ensuring a versatile trading experience.' },
                            { title: 'Superior Analysis', icon: <BarChart3/>, desc: 'Leverage advanced analytical tools to make well-informed trading decisions instantly.' },
                            { title: 'Automated Trading', icon: <Cpu/>, desc: 'Utilize Expert Advisors (EAs) to automate your trading strategies and execute trades seamlessly.' },
                            { title: 'High Flexibility', icon: <Zap/>, desc: 'Customize your trading environment to match your unique preferences and strategies effortlessly.' },
                            { title: 'Secure Environment', icon: <Lock/>, desc: 'With the web-based, Android, and iOS platforms, enjoy a heavily encrypted trading experience.' },
                            { title: 'Comprehensive Support', icon: <MessageSquare/>, desc: 'Access 24/5 dedicated customer support to assist you with any platform-related inquiries.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[1.5rem] bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-[#2E62FF]/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white/[0.03] rounded-xl flex items-center justify-center text-[#2E62FF] mb-6 group-hover:scale-110 group-hover:bg-[#2E62FF]/10 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* PLATFORM FEATURES - INTERACTIVE TABS STYLE              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 bg-[#030712] overflow-hidden leading-relaxed">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                            Boost Your Trading <br />
                            <AuroraText className="italic font-serif normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Efficiency.</AuroraText>
                        </h2>
                        <p className="text-white/40 text-lg">
                            Explore the features that make New Trade Fx Services the leading choice for MT5 terminal traders worldwide.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
                        {/* Left: Featured Interactive List */}
                        <div className="flex flex-col gap-2">
                            {platformFeatures.map((feat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveFeatureTab(idx)}
                                    className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                                        activeFeatureTab === idx 
                                        ? 'bg-white/[0.03] border border-white/10 shadow-[0_0_40px_rgba(46,98,255,0.05)]' 
                                        : 'border border-transparent hover:bg-white/[0.01]'
                                    }`}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className={`mt-1 font-black text-sm transition-colors ${activeFeatureTab === idx ? 'text-[#2E62FF]' : 'text-white/20'}`}>
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 transition-colors ${activeFeatureTab === idx ? 'text-white' : 'text-white/60'}`}>
                                                {feat.title}
                                            </h3>
                                            <AnimatePresence>
                                                {activeFeatureTab === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-white/40 text-sm mt-2">{feat.desc}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: Dynamic Visual Output */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] bg-gradient-to-tr from-[#0a0f1c] to-[#0f172a] border border-white/10 flex items-center justify-center p-8 overflow-hidden">
                            {/* Decorative background glow based on active tab */}
                            <div className="absolute inset-0 bg-[#2E62FF]/5 opacity-50 mix-blend-screen transition-opacity" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeatureTab}
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8"
                                >
                                    <div className="w-24 h-24 rounded-full bg-[#2E62FF]/10 flex items-center justify-center text-[#2E62FF] mb-8 shadow-[0_0_60px_rgba(46,98,255,0.3)]">
                                        {platformFeatures[activeFeatureTab].icon}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4">{platformFeatures[activeFeatureTab].title}</h4>
                                    <p className="text-white/40 font-medium max-w-sm">{platformFeatures[activeFeatureTab].desc}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* FINAL CTA                                               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-[#2E62FF] overflow-hidden text-center flex flex-col items-center">
                <div className="absolute inset-0 bg-[url('/backgrounds/stripesbg.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                        Take the Next Step In <br /> Your Trading Journey.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="https://dashboard.tradefxservices.com/register"
                            target="_blank" 
                            className="bg-white text-[#2E62FF] px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            Open Live Account <ChevronRight size={16} />
                        </Link>
                        <Link 
                            href="https://dashboard.tradefxservices.com/"
                            target="_blank" 
                            className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2"
                        >
                            Client Login
                        </Link>
                    </div>
                </div>
            </section>

            <FAQSection />

        </main>
    );
} 
