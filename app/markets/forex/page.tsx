'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Star, Zap, Shield, TrendingUp, ArrowRight, CheckCircle2, Globe, BarChart3, Clock, Wallet } from 'lucide-react';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';
import Silk from '@/components/ui/Silk';
import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';

export default function ForexPage() {
    const [active, setActive] = React.useState<(typeof marketCards)[number] | null>(null);
    const id = React.useId();
    const ref = React.useRef<HTMLDivElement>(null);

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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col items-center lg:items-start"
                            >
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-5 md:mb-6 backdrop-blur-md">
                                    <Zap size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Forex Trading</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-5 md:mb-6 max-w-2xl">
                                    Trade the World's <br className="hidden md:block" />
                                    <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400" style={{ fontFamily: 'var(--font-playfair), serif' }}>Largest Market.</span>
                                </h1>
                                
                                <p className="text-sm md:text-base text-white/45 font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                                    Access <span className="text-white/80">70+ currency pairs</span> with spreads from 0.0 pips and institutional-grade Tier-1 liquidity on the global MetaTrader 5 platform.
                                </p>

                                {/* Stat Badges — Optimized for Mobile Flow */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 md:mb-10 max-w-md lg:max-w-none">
                                    {[
                                        { label: 'Daily Volume', value: '$7.5T+' },
                                        { label: 'Spreads From', value: '0.0 Pips' },
                                        { label: 'Leverage', value: '1:2000' },
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
                                                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                                                        alt="Trader" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-[#2E62FF] flex items-center justify-center text-[8px] font-bold text-white">
                                                +24k
                                            </div>
                                        </div>
                                        <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest leading-tight text-left">
                                            Trusted by <br />
                                            <span className="text-white/80">24k+ Traders</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column — Coins Image (Hidden on Mobile) */}
                        <div className="hidden lg:flex items-center justify-center relative">
                            <img 
                                src="/assets/hero/coins.png"
                                alt="Forex Currency Coins"
                                className="w-full max-w-[500px] h-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(46,98,255,0.15)]"
                            />
                        </div>
                    </div>
                </div>

                {/* Seamless bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
            </section>


            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY TRADE FOREX WITH US — Client Pitch Section          */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
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
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-500">Unfair Advantages</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-white">
                                Built for Traders <br />
                                Who Demand <br />
                                <AuroraText className="italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>More.</AuroraText>
                            </h2>

                            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg mb-8">
                                Stop settling for retail limitations. Our institutional-grade ecosystem is engineered to vanish the barriers between you and the global markets — giving you the ultimate edge.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link 
                                    href="/register" 
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
                                    title: 'Razor-Thin Spreads',
                                    desc: 'Raw spreads from 0.0 pips on major pairs with zero requotes — directly from our Tier-1 liquidity pool.',
                                    icon: <BarChart3 size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '02',
                                    title: 'Instant Execution',
                                    desc: 'Orders filled in under 30ms via co-located servers in Equinix data centers across NY, London & Tokyo.',
                                    icon: <Zap size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '03',
                                    title: 'Deep Liquidity',
                                    desc: 'Aggregated pricing from 12+ institutional liquidity providers ensures minimal slippage at any volume.',
                                    icon: <Globe size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '04',
                                    title: 'Dedicated Support',
                                    desc: 'Multi-lingual account managers and 24/5 priority support — because your capital deserves white-glove service.',
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
            {/* MARKET STRUCTURE — Currency Pair Categories              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Currency Pairs</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a]">
                                Market <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Structure</span>
                            </h2>
                        </div>
                        <p className="text-sm text-neutral-400 font-medium max-w-sm leading-relaxed md:text-right">
                            Three tiers of forex instruments — each with distinct liquidity profiles, spread dynamics, and strategic applications.
                        </p>
                    </div>

                    {/* ── Modal Overlay ── */}
                    <AnimatePresence>
                        {active && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                                className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm h-full w-full z-[9998]"
                                onClick={() => setActive(null)}
                            />
                        )}
                    </AnimatePresence>

                    {/* ── Modal ── */}
                    <AnimatePresence mode="wait">
                        {active ? (
                            <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 md:p-10">
                                {/* Close */}
                                <motion.button
                                    key={`close-btn`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                    className="absolute top-5 right-5 md:top-10 md:right-10 z-[10000] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200"
                                    onClick={() => setActive(null)}
                                >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5"><path d="M1 1l12 12M13 1L1 13" /></svg>
                                </motion.button>
                                <motion.div
                                    key={`modal-${active.title}`}
                                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
                                    ref={ref}
                                    className="w-full max-w-[1140px] max-h-[72vh] bg-[#0c1a2e] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
                                >
                                    {/* LEFT — Dark Chart Panel */}
                                    <div className="w-full md:w-[55%] flex flex-col flex-shrink-0">
                                        {/* Modal header info */}
                                        <div className="p-6 md:p-8 pb-4 flex-shrink-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 rounded-lg bg-[#2E62FF]/15">
                                                    {active.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                                        {active.title}
                                                    </h3>
                                                    <p className="text-xs text-white/35 font-medium">{active.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pair switcher tabs */}
                                        <div className="px-6 md:px-8 flex gap-1 flex-shrink-0">
                                            {active.pairs.map((pair: string) => (
                                                <button
                                                    key={pair}
                                                    onClick={(e) => { e.stopPropagation(); setSelectedPair(pair); }}
                                                    className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                                                        selectedPair === pair
                                                            ? 'bg-[#2E62FF] text-white'
                                                            : 'text-white/35 hover:text-white/60 hover:bg-white/5'
                                                    }`}
                                                >
                                                    {pair}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Chart */}
                                        <div className="flex-1 p-4 md:p-6 pt-3 min-h-0">
                                            <div className="relative w-full h-full min-h-[220px] rounded-xl overflow-hidden bg-[#0f1b2e]">
                                                <iframe
                                                    key={selectedPair}
                                                    src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=FX:${selectedPair.replace('/', '')}&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=0c1a2e&studies=[]&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=0&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&showpopupbutton=0&locale=en`}
                                                    className="w-full absolute inset-0"
                                                    style={{ height: 'calc(100% + 36px)' }}
                                                    allowFullScreen
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-[#0f1b2e] to-transparent pointer-events-none z-10" />
                                            </div>
                                        </div>

                                        {/* Stats row */}
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 flex gap-8 flex-shrink-0">
                                            {active.stats.map((s: { label: string; value: string }) => (
                                                <div key={s.label}>
                                                    <div className="text-sm font-bold text-white">{s.value}</div>
                                                    <div className="text-[9px] font-medium text-[#2E62FF]/60 uppercase tracking-wider">{s.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* RIGHT — Light Content Panel */}
                                    <div className="w-full md:w-[45%] bg-white flex flex-col max-h-[72vh]">
                                        <div className="flex-1 overflow-y-auto p-6 md:p-8" style={{ scrollbarWidth: 'none' }}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                                className="space-y-6"
                                            >
                                                {typeof active.content === "function"
                                                    ? active.content()
                                                    : active.content}
                                            </motion.div>
                                        </div>
                                        {/* Bottom CTA */}
                                        <div className="p-6 md:p-8 pt-0 flex-shrink-0">
                                            <a
                                                href={active.ctaLink}
                                                className="flex items-center justify-center gap-2 w-full py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg bg-[#2E62FF] text-white hover:bg-[#2452d8] transition-colors duration-200 shadow-lg shadow-[#2E62FF]/20"
                                            >
                                                {active.ctaText} <ArrowRight size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>

                    {/* ── Cards ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {marketCards.map((card, idx) => (
                            <motion.div
                                key={card.title}
                                onClick={() => { setActive(card); setSelectedPair(card.pairs[0]); }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group relative bg-white rounded-2xl p-8 md:p-10 cursor-pointer border border-neutral-100 hover:border-[#2E62FF]/20 hover:shadow-xl hover:shadow-[#2E62FF]/5 transition-all duration-500"
                            >
                                {/* Top accent line */}
                                <div className="absolute top-0 left-8 right-8 md:left-10 md:right-10 h-0.5 bg-transparent group-hover:bg-[#2E62FF] transition-colors duration-500 rounded-full" />
                                
                                <div className="flex flex-col h-full">
                                    {/* Icon + Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 rounded-xl bg-[#f0f4ff] group-hover:bg-[#2E62FF] transition-all duration-500">
                                            <div className="[&>svg]:text-[#2E62FF] group-hover:[&>svg]:text-white transition-colors duration-500">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-neutral-200 uppercase tracking-widest">0{idx + 1}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a] tracking-tight mb-2">
                                        {card.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                        {card.description}
                                    </p>

                                    {/* Key stat */}
                                    <div className="mb-8">
                                        <div className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tighter group-hover:text-[#2E62FF] transition-colors duration-500">{card.stats[0].value}</div>
                                        <div className="text-[10px] font-medium text-neutral-300 uppercase tracking-widest mt-1">{card.stats[0].label}</div>
                                    </div>

                                    {/* Pairs as inline text */}
                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6">
                                            {card.pairs.map((pair, i) => (
                                                <span key={pair} className="text-xs font-medium text-neutral-400">
                                                    {pair}{i < card.pairs.length - 1 && <span className="text-neutral-200 ml-2">·</span>}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Explore link */}
                                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-300 group-hover:text-[#2E62FF] transition-colors duration-300">
                                            <span>Explore</span>
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment & Data Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-[4rem] bg-[#030712] p-12 md:p-24 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <Silk speed={0.2} scale={1.2} color="#111827" />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                                    SMART <br />
                                    <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Investing</span>
                                </h2>
                                <p className="text-lg text-white/50 font-medium leading-relaxed mb-12">
                                    Trade CFDs on a diverse range of the world's most popular currency pairs. The Forex market is the most liquid financial market, with a daily turnover exceeding $7.5 trillion.
                                </p>
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                                        <div className="text-4xl font-black text-white mb-2">$7.5T+</div>
                                        <div className="text-[10px] font-black text-[#2E62FF] uppercase tracking-[0.2em]">Daily Turnover</div>
                                    </div>
                                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                                        <div className="text-4xl font-black text-white mb-2">24/5</div>
                                        <div className="text-[10px] font-black text-[#2E62FF] uppercase tracking-[0.2em]">Market Access</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                                    className="w-full h-[400px] object-cover rounded-[3rem] opacity-80"
                                    alt="Market Data"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 font-black text-[9px] uppercase tracking-widest text-blue-600">
                            The New TradeFX Standard
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                            WHY CHOOSE <br />
                            <span className="text-neutral-300">NEW TRADEFX</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { title: 'Transparency', desc: 'We deliver what we promise, ensuring a transparent trading experience for all our clients.', icon: <Shield size={24} /> },
                            { title: 'Performance', desc: 'Benefit from zero spreads, fast execution, and the best available prices in the market.', icon: <Zap size={24} /> },
                            { title: '24/5 Support', desc: 'Our professional support team is available 24/5 to assist you with any trading inquiries.', icon: <Clock size={24} /> },
                            { title: 'Secure Trading', desc: 'Trade confidently knowing your funds are fully protected and secure with us.', icon: <Wallet size={24} /> },
                            { title: 'Easy Access', desc: 'Open an account easily and start trading various instruments the very next day.', icon: <ArrowRight size={24} /> },
                            { title: '#1 Broker', desc: 'Trusted by millions of traders worldwide for their professional forex trading needs.', icon: <Star size={24} /> }
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[3rem] border border-neutral-100 hover:border-[#2E62FF]/20 hover:bg-blue-50/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-[#2E62FF] group-hover:text-white transition-all duration-500 mb-8">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{feature.title}</h3>
                                <p className="text-neutral-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Journey Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-[4rem] bg-gradient-to-br from-[#030712] via-[#0a1628] to-[#0c1a35] p-12 md:p-24 overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E62FF]/10 rounded-full blur-[150px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2E62FF]/5 rounded-full blur-[200px] pointer-events-none" />
                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                        </div>
                        
                        <div className="relative z-10">
                            {/* Top Content */}
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-8 backdrop-blur-md">
                                        <Zap size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Begin Your Journey</span>
                                    </div>
                                    
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                                        START TRADING <br />
                                        <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#2E62FF] via-[#5B8AFF] to-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Today.</span>
                                    </h2>
                                    
                                    <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-xl mx-auto mb-10">
                                        Experience the benefits of trading with a leading broker. Begin your trading journey on the platform of choice for traders seeking extensive resources.
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <Link 
                                            href="/register" 
                                            className="group relative overflow-hidden px-12 py-5 bg-[#2E62FF] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all shadow-xl shadow-[#2E62FF]/25 flex items-center gap-3"
                                        >
                                            <motion.div 
                                                initial={{ left: "-100%" }}
                                                whileHover={{ left: "100%" }}
                                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute top-0 h-full w-full -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-0"
                                            />
                                            <span className="relative z-10">Join Now</span>
                                            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link 
                                            href="/accounts" 
                                            className="px-10 py-5 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300"
                                        >
                                            View Accounts
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { value: '0.0', unit: 'Pips', label: 'Spreads From' },
                                    { value: '1:2000', unit: '', label: 'Max Leverage' },
                                    { value: '<30', unit: 'ms', label: 'Execution Speed' },
                                    { value: '24/5', unit: '', label: 'Market Access' },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                        className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-center hover:bg-white/[0.06] hover:border-[#2E62FF]/20 transition-all duration-500"
                                    >
                                        <div className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">
                                            {stat.value}<span className="text-sm font-bold text-[#2E62FF]">{stat.unit}</span>
                                        </div>
                                        <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Sections */}
            <PremiumMarquee />
            <DownloadSection />
            <FAQSection />

            {/* Bottom Spacer */}
            <div className="h-20 bg-white" />
        </main>
    );
}

const CloseIcon = () => (
    <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </motion.svg>
);

const marketCards = [
    {
        title: 'Major Pairs',
        description: 'The backbone of global forex — deepest liquidity, razor-thin spreads.',
        src: 'https://images.unsplash.com/photo-1611974717482-98007af4cde4?q=80&w=2070&auto=format&fit=crop',
        ctaText: 'Trade Majors',
        ctaLink: '/register',
        highlight: 'Tightest Spreads',
        icon: <Globe className="text-[#2E62FF]" size={24} />,
        pairs: ['EUR/USD', 'USD/JPY', 'GBP/USD', 'USD/CHF'],
        stats: [
            { label: 'Avg Spread', value: '0.1 Pips' },
            { label: 'Daily Vol', value: '$5.3T' },
            { label: 'Leverage', value: '1:2000' },
            { label: 'Execution', value: '<30ms' },
        ],
        content: () => (
            <div className="space-y-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Globe size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Trading 101</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">Major pairs always include the <strong>US Dollar (USD)</strong> on one side. They account for <strong>~85% of all forex volume</strong> — making them the most liquid instruments on the planet. Tighter spreads = lower cost per trade.</p>
                </div>
                <div>
                    <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-3">Why Traders Prefer Majors</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><Zap size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Spreads as low as <strong className="text-neutral-700">0.0 pips</strong> during peak sessions (London/NY overlap)</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><BarChart3 size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Deep order books mean virtually zero slippage up to <strong className="text-neutral-700">50+ lots</strong></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><TrendingUp size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Macro-driven movements — ideal for <strong className="text-neutral-700">fundamental analysis</strong> traders</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><CheckCircle2 size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Most technical indicators are optimized for major pair behavior</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Clock size={14} className="text-neutral-400" />
                        <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest">Key Sessions</p>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">EUR/USD peaks during <strong className="text-neutral-700">London–NY overlap (1PM–5PM GMT)</strong>. USD/JPY sees highest volume during <strong className="text-neutral-700">Tokyo–London overlap</strong>. Time your entries around these windows for optimal fills.</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Star size={14} className="text-amber-500" />
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Pro Tip</p>
                    </div>
                    <p className="text-sm text-neutral-600">Watch the <strong>DXY (Dollar Index)</strong> for broader USD strength. A rising DXY means USD is strengthening — bearish for EUR/USD, GBP/USD.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Minor Pairs',
        description: 'Cross-currency momentum — strong trends without USD dependency.',
        src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
        ctaText: 'Explore Crosses',
        ctaLink: '/register',
        highlight: 'High Volatility',
        icon: <BarChart3 className="text-[#2E62FF]" size={24} />,
        pairs: ['EUR/GBP', 'EUR/CHF', 'GBP/JPY', 'CHF/JPY'],
        stats: [
            { label: 'Avg Spread', value: '1.2 Pips' },
            { label: 'Volatility', value: 'Medium-High' },
            { label: 'Leverage', value: '1:1000' },
            { label: 'Pairs Available', value: '20+' },
        ],
        content: () => (
            <div className="space-y-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Trading 101</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">Minors (or "Crosses") pair two <strong>major currencies without the USD</strong>. They're less crowded than major pairs, which means <strong>trends tend to be cleaner</strong> and last longer — fewer algo-driven noise floors.</p>
                </div>
                <div>
                    <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-3">Strategic Edge</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><Zap size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">GBP/JPY</strong> — nicknamed "The Beast." Known for 100+ pip daily ranges. High risk, high reward.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><TrendingUp size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">EUR/GBP</strong> — a range trader's dream. Moves in tight channels perfect for scalping.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><Shield size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">EUR/CHF</strong> — heavily influenced by Swiss National Bank policy. Watch for intervention signals.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><CheckCircle2 size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Minors let you trade economic divergence between <strong className="text-neutral-700">two non-USD economies directly</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Clock size={14} className="text-neutral-400" />
                        <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest">When to Trade</p>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">EUR crosses move best during <strong className="text-neutral-700">European hours (7AM–4PM GMT)</strong>. JPY crosses spike during <strong className="text-neutral-700">Asian and early London sessions</strong>. Avoid low-volume periods like late NY session for crosses.</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Star size={14} className="text-amber-500" />
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Pro Tip</p>
                    </div>
                    <p className="text-sm text-neutral-600">If EUR/USD is rising and GBP/USD is falling, <strong>EUR/GBP will likely be bullish</strong>. Use major pair correlations to confirm cross-pair setups.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Exotic Pairs',
        description: 'Emerging market alpha — asymmetric R:R for bold strategies.',
        src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop',
        ctaText: 'Go Exotic',
        ctaLink: '/register',
        highlight: 'Wider Swings',
        icon: <TrendingUp className="text-[#2E62FF]" size={24} />,
        pairs: ['USD/NOK', 'USD/HKD', 'EUR/CZK', 'USD/SEK'],
        stats: [
            { label: 'Avg Spread', value: '5–15 Pips' },
            { label: 'Daily Range', value: '150+ Pips' },
            { label: 'Leverage', value: '1:500' },
            { label: 'Carry Trade', value: 'Yes' },
        ],
        content: () => (
            <div className="space-y-6">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-[#2E62FF]" />
                        <p className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-widest">Trading 101</p>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">Exotics pair a <strong>major currency with an emerging market currency</strong> (e.g., Norwegian Krone, Czech Koruna, Swedish Krona). They have <strong>wider spreads</strong> but can deliver <strong>200–500+ pip swings</strong> on fundamentals alone.</p>
                </div>
                <div>
                    <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-3">Why Go Exotic?</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><Wallet size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">Carry Trade Potential</strong> — many exotics have significant interest rate differentials, earning you swap income overnight</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><Zap size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">Less competition</strong> from institutional algos — retail edge is higher in exotic markets</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><TrendingUp size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500"><strong className="text-neutral-700">USD/NOK, USD/SEK</strong> — Scandinavian pairs are oil-sensitive and react sharply to commodity swings</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 p-1 rounded-md bg-[#2E62FF]/8 flex-shrink-0"><CheckCircle2 size={12} className="text-[#2E62FF]" /></div>
                            <p className="text-sm text-neutral-500">Central bank surprise decisions can create <strong className="text-neutral-700">asymmetric 5:1+ reward setups</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Shield size={14} className="text-neutral-400" />
                        <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-widest">Risk Management</p>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">Exotics demand tighter position sizing. Use <strong className="text-neutral-700">wider stop-losses</strong> (50–100 pips) to account for natural volatility but <strong className="text-neutral-700">reduce lot size proportionally</strong>. Never risk more than 1% per trade on exotics.</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-red-50/50 border border-red-200/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Shield size={14} className="text-red-400" />
                        <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">⚠ Heads Up</p>
                    </div>
                    <p className="text-sm text-neutral-600">Exotic spreads widen significantly during off-hours. <strong>Trade during the London session</strong> for the tightest execution. Avoid holding through weekend gaps.</p>
                </div>
            </div>
        )
    }
];
