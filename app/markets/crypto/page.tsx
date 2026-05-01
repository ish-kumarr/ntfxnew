'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
    Star, Zap, Shield, TrendingUp, ArrowRight, CheckCircle2, Globe, 
    BarChart3, Clock, Wallet, LineChart, Landmark, Building2,
    ArrowUpCircle, ArrowDownCircle, Activity, Award, Headphones, Lock,
    Layers, Cpu, ShieldCheck, Repeat, Coins, Eye, Fingerprint
} from 'lucide-react';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';

import { AuroraText } from '@/components/ui/aurora-text';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { TradingViewWidget } from '@/components/TradingViewWidget';

export default function CryptoPage() {
    const [active, setActive] = React.useState<(typeof marketCards)[number] | null>(null);
    const [mobileTab, setMobileTab] = React.useState<'chart' | 'info'>('chart');
    const [headerOffset, setHeaderOffset] = React.useState(100);
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
            <section id="crypto-hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-40 md:pt-48 pb-40">
                {/* Background Curvature & Deep Space Glow */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {/* Top dark fade */}
                    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#030712] to-transparent z-10" />
                    
                    {/* The glowing horizon curve */}
                    <div className="absolute top-[60%] md:top-[67%] left-1/2 -translate-x-1/2 w-[200%] sm:w-[150%] h-[1200px] rounded-[100%] bg-[#030712] border-t-2 border-[#5271ff]/80 shadow-[0_-80px_200px_rgba(82,113,255,0.45)] z-0" />
                    
                    {/* Central ambient glow behind coins */}
                    <div className="absolute top-[55%] md:top-[62%] left-1/2 -translate-x-1/2 w-[50%] h-[250px] bg-indigo-500/30 blur-[150px] rounded-[100%] z-0" />
                </div>

                <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5271ff]/10 border border-[#5271ff]/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(82,113,255,0.15)]">
                            <span className="text-[#5271ff] text-sm">✦</span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#8ea5ff] uppercase">The Ultimate Web3 Gateway</span>
                        </div>
                        
                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.0] mb-6">
                            Trade the Future of <br className="hidden md:block" />
                            <span className="italic font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5271ff] to-[#8ea5ff]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Digital Finance.</span>
                        </h1>
                        
                        {/* Subheadline */}
                        <p className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed font-medium mb-4">
                            Access Bitcoin, Ethereum, and 50+ cryptocurrencies with institutional-grade execution, 24/7 market access, and ultra-competitive spreads.
                        </p>
                    </motion.div>

                    {/* Coins Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full max-w-[550px] md:max-w-[750px] flex items-center justify-center mt-6 md:mt-12 mb-8 z-20"
                    >
                        <img 
                            src="/assets/hero/cypto-coins.png" 
                            alt="Cryptocurrency Trading Assets"
                            draggable={false}
                            className="w-full h-auto object-contain drop-shadow-[0_-15px_40px_rgba(82,113,255,0.4)] pointer-events-none select-none z-20 scale-[1.1]"
                        />
                        {/* Under-coin extra reflection */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-white/20 blur-[25px] rounded-[100%] z-10" />
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 z-30"
                    >
                        <Link 
                            href="/register" 
                            id="crypto-cta-hero"
                            className="group relative px-8 py-4 bg-[#5271ff] text-white text-[12px] font-bold uppercase tracking-widest rounded-full transition-all flex items-center gap-3 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10">Start Trading</span>
                            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <Link 
                            href="/platforms" 
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-[12px] font-bold uppercase tracking-widest rounded-full transition-all backdrop-blur-md"
                        >
                            View Live Markets
                        </Link>
                    </motion.div>
                </div>

                {/* Seamless bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHAT IS CRYPTO — Educational Section                    */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-what-is" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Understanding Crypto</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                                What is <span className="text-[#2E62FF]">Cryptocurrency</span> <br />
                                <span className="italic font-serif text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>& How Trading Works.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-medium leading-relaxed max-w-3xl mx-auto">
                                Cryptocurrencies are decentralized digital currencies powered by blockchain technology. Unlike traditional currencies controlled by central banks, 
                                crypto operates on peer-to-peer networks, providing transparency, security, and 24/7 global accessibility. With CFD trading, you can speculate 
                                on price movements without owning the underlying asset — profiting from both rising and falling markets.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Bull Market */}
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
                                <h3 className="text-2xl font-bold tracking-tight text-white">Buy the Rally (Long)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                When institutional adoption surges, major protocol upgrades launch, or favorable regulations emerge, crypto markets can experience 
                                explosive upward momentum. Place a <strong className="text-white/70">"Buy"</strong> trade on Bitcoin or Ethereum to capitalize on 
                                bullish sentiment and ride the wave higher.
                            </p>
                            <div className="h-1 w-20 bg-emerald-500/40 rounded-full" />
                        </motion.div>

                        {/* Bear Market */}
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
                                <h3 className="text-2xl font-bold tracking-tight text-white">Short the Dip (Short)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                Crypto markets are highly volatile. When regulatory crackdowns hit, exchange failures occur, or market sentiment turns bearish, 
                                prices can drop sharply. With CFDs, you can <strong className="text-white/70">"Sell"</strong> to profit from declining prices — 
                                something traditional crypto exchanges don't allow.
                            </p>
                            <div className="h-1 w-20 bg-rose-500/40 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY TRADE CRYPTO — Key Benefits                        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-benefits" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
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
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-6 backdrop-blur-md">
                                <Zap size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Why Trade Crypto</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-white">
                                The World's Most <br />
                                Exciting Asset <br />
                                <AuroraText className="italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>Class Awaits.</AuroraText>
                            </h2>

                            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg mb-8">
                                Cryptocurrency markets never sleep. With 24/7 access, extreme volatility, and a rapidly evolving ecosystem, crypto provides 
                                unmatched trading opportunities for those who understand the market dynamics.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link 
                                    href="/register" 
                                    id="crypto-cta-benefits"
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
                                    title: '24/7 Market Access',
                                    desc: 'Crypto markets never close. Trade Bitcoin, Ethereum, and altcoins around the clock, including weekends and holidays — no downtime, ever.',
                                    icon: <Clock size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '02',
                                    title: 'Extreme Volatility',
                                    desc: 'Crypto regularly delivers 5-20% daily moves. This volatility creates extraordinary trading opportunities for skilled CFD traders seeking alpha.',
                                    icon: <Activity size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '03',
                                    title: 'No Wallet Needed',
                                    desc: 'Trade crypto CFDs without the complexity of wallets, private keys, or cold storage. Simply speculate on price — zero custody risk.',
                                    icon: <Wallet size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '04',
                                    title: 'Leveraged Positions',
                                    desc: 'Amplify your crypto exposure with competitive leverage. Go long or short with professional-grade margin requirements optimized for digital assets.',
                                    icon: <Zap size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '05',
                                    title: 'Institutional Liquidity',
                                    desc: 'Our deep liquidity pools aggregate pricing from tier-1 exchanges, ensuring ultra-tight spreads and minimal slippage even during high-volatility events.',
                                    icon: <Layers size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '06',
                                    title: 'Advanced Charting',
                                    desc: 'Analyze crypto markets with professional TradingView charts, 100+ technical indicators, and real-time on-chain sentiment data.',
                                    icon: <BarChart3 size={20} className="text-[#2E62FF]" />,
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
            {/* PLATFORM ADVANTAGES — Light Section                     */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-advantages" className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
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
                            Engineered for the next generation of digital asset traders with institutional-grade infrastructure and unmatched reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Multi-Exchange Pricing',
                                desc: 'Our smart order routing aggregates live prices from Binance, Coinbase, Kraken, and more — ensuring you always get the best available price.',
                                icon: <Globe size={24} />,
                            },
                            {
                                title: 'Real-Time Market Data',
                                desc: 'Monitor live crypto prices, order book depth, and volume analysis with sub-second data updates directly on your trading dashboard.',
                                icon: <Activity size={24} />,
                            },
                            {
                                title: 'Regulated & Trusted',
                                desc: 'Trade digital assets in a fully regulated environment. Your funds are segregated and protected under strict compliance frameworks.',
                                icon: <Award size={24} />,
                            },
                            {
                                title: 'Zero Custody Risk',
                                desc: 'No wallets, no private keys, no hacking risk. CFD trading means you speculate on price without ever holding the underlying crypto asset.',
                                icon: <ShieldCheck size={24} />,
                            },
                            {
                                title: '24/7 Expert Support',
                                desc: 'Our dedicated crypto support team operates around the clock — mirroring the markets they serve. Get answers anytime, day or night.',
                                icon: <Headphones size={24} />,
                            },
                            {
                                title: 'Bank-Grade Security',
                                desc: 'Enterprise-level SSL encryption, 2FA authentication, and continuous system monitoring protect every transaction and login on our platform.',
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
            {/* MARKET STRUCTURE — Crypto Cards with Modals             */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-market-structure" className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Digital Markets</p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-[#0a0a0a]">
                            Popular <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Crypto Assets.</span>
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
            {/* KEY FACTORS — What Influences Crypto Prices             */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-factors" className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Market Drivers</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Key Factors <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Influencing Crypto.</span>
                        </h2>
                        <p className="text-sm text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed mt-6">
                            Understanding the fundamental catalysts behind cryptocurrency price movements is essential for informed trading decisions in this rapidly evolving market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Regulatory Developments',
                                desc: 'SEC rulings, EU MiCA regulations, and country-level crypto bans or approvals can trigger massive market-wide price swings within hours.',
                                icon: <Landmark size={22} />,
                            },
                            {
                                title: 'Institutional Adoption',
                                desc: 'When major corporations like Tesla, MicroStrategy, or BlackRock announce crypto positions or ETF products, it signals mainstream validation.',
                                icon: <Building2 size={22} />,
                            },
                            {
                                title: 'Bitcoin Halving Cycles',
                                desc: 'Every ~4 years, Bitcoin mining rewards are cut in half. Historically, halvings have preceded major bull runs due to reduced supply pressure.',
                                icon: <Repeat size={22} />,
                            },
                            {
                                title: 'Network Upgrades',
                                desc: "Major protocol upgrades (like Ethereum's Merge or Bitcoin's Taproot) improve scalability and security, often driving positive price action.",
                                icon: <Cpu size={22} />,
                            },
                            {
                                title: 'Market Sentiment & Social',
                                desc: 'Crypto is uniquely influenced by social media, influencer endorsements, and on-chain whale activity. Sentiment shifts can be sudden and dramatic.',
                                icon: <Eye size={22} />,
                            },
                            {
                                title: 'Macro Liquidity',
                                desc: 'Global interest rates, Federal Reserve policy, and USD strength directly impact crypto. Low rates = risk-on = crypto rallies; high rates = sell-offs.',
                                icon: <TrendingUp size={22} />,
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
            {/* BLOCKCHAIN — Dribbble-Style Bento Grid                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-blockchain" className="relative py-24 md:py-36 bg-[#030712] overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[15%] left-[-8%] w-[500px] h-[500px] bg-[#2E62FF]/[0.06] rounded-full blur-[180px]" />
                    <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-8 backdrop-blur-md">
                            <Layers size={12} className="text-[#5271ff]" />
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#8ea5ff] uppercase">Blockchain Technology</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                            The Infrastructure <br />
                            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#5271ff] to-[#8ea5ff]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Behind Crypto.</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                            A decentralized, immutable ledger powering the future of finance — recording every transaction across thousands of nodes simultaneously.
                        </p>
                    </motion.div>

                    {/* ── MagicUI Bento Grid ── */}
                    <div className="max-w-[1100px] mx-auto mt-12 w-full">
                        <BentoGrid className="lg:grid-cols-3">
                            <BentoCard
                                name="Bitcoin & The Genesis Block"
                                description="The first decentralized cryptocurrency. Operating on a proof-of-work network, Bitcoin has a hard-capped supply of exactly 21 million BTC, creating absolute mathematical scarcity."
                                href="/register"
                                cta="Explore Bitcoin Protocol"
                                Icon={Coins}
                                className="col-span-3 lg:col-span-2"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2E62FF]/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Ethereum Virtual Machine"
                                description="Unlike standard networks, Ethereum acts as a globally distributed computer. Complex conditional logic—Smart Contracts—can be deployed natively, powering DeFi."
                                href="/register"
                                cta="Discover Smart Contracts"
                                Icon={Cpu}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Cryptographic Security"
                                description="Blockchain data is secured by complex mathematics. Utilizing algorithms like SHA-256 and asymmetric cryptography, every transaction is securely signed."
                                href="/register"
                                cta="Learn Cryptography"
                                Icon={ShieldCheck}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00ffd1]/5 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="24/7 Global Markets"
                                description="The blockchain never sleeps. Transact and transfer value globally without closing bells, weekend pauses, or centralized circuit breakers."
                                href="/register"
                                cta="View Markets"
                                Icon={Globe}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                            <BentoCard
                                name="Decentralized Finance (DeFi)"
                                description="DeFi algorithms utilize smart contracts to recreate traditional financial instruments. Code becomes law, allowing trustless asset swaps using liquidity pools."
                                href="/register"
                                cta="Explore DeFi"
                                Icon={Repeat}
                                className="col-span-3 lg:col-span-1"
                                background={
                                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent pointer-events-none opacity-50" />
                                }
                            />
                        </BentoGrid>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* HOW TO START — Conversion Focused Section               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-start" className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Get Started</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Start Trading Crypto <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>in 3 Simple Steps.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                step: '01',
                                title: 'Create Your Account',
                                desc: 'Complete our streamlined online registration in under 2 minutes. Provide your details and verify your identity to unlock full platform access.',
                                icon: <Wallet size={28} />,
                            },
                            {
                                step: '02',
                                title: 'Fund Your Account',
                                desc: 'Deposit funds securely using bank transfer, credit card, or digital payment methods. Funds are credited instantly for most payment options.',
                                icon: <Coins size={28} />,
                            },
                            {
                                step: '03',
                                title: 'Start Trading',
                                desc: 'Access 50+ crypto CFDs with real-time pricing. Analyze markets with advanced charting, set your strategy, and execute trades with one click.',
                                icon: <TrendingUp size={28} />,
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative text-center p-10 rounded-[3rem] bg-neutral-50 border border-neutral-100 group hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(46,98,255,0.1)] hover:border-[#2E62FF]/20 transition-all duration-500"
                            >
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#2E62FF] flex items-center justify-center text-white text-sm font-black shadow-lg shadow-[#2E62FF]/30">
                                    {item.step}
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-[#2E62FF]/5 group-hover:bg-[#2E62FF] flex items-center justify-center text-[#2E62FF] group-hover:text-white transition-all duration-500 mx-auto mb-6 mt-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{item.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[3rem] bg-[#030712] p-12 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4ff]0/5 via-[#2E62FF]/5 to-purple-500/5 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">
                                Ready to Trade the <span className="italic font-serif text-blue-400" style={{ fontFamily: 'var(--font-playfair), serif' }}>Digital Revolution?</span>
                            </h3>
                            <p className="text-sm text-white/40 max-w-lg mx-auto mb-8 leading-relaxed">
                                Join 25,000+ traders who are already capitalizing on the world's fastest-growing asset class. Open your account today and trade Bitcoin, Ethereum, and 50+ altcoins with professional-grade tools.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link 
                                    href="/register" 
                                    id="crypto-cta-final"
                                    className="group relative overflow-hidden px-10 py-5 bg-[#2E62FF] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3"
                                >
                                    <motion.div 
                                        initial={{ left: "-100%" }}
                                        whileHover={{ left: "100%" }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute top-0 h-full w-full -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-0"
                                    />
                                    <span className="relative z-10">Open Free Account</span>
                                    <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link 
                                    href="/platforms" 
                                    className="px-10 py-5 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
                                >
                                    Explore Platforms
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* TRADINGVIEW MARKET INSIGHTS                             */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-live-data" className="relative py-20 bg-[#030712]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E62FF]/10 border border-[#2E62FF]/20 mb-4 backdrop-blur-md">
                            <Activity size={10} className="text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Live Market Data</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                            Crypto <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Insights.</span>
                        </h2>
                        <p className="text-sm text-white/30 mt-3 max-w-md">
                            Real-time crypto pricing, technical analysis, and market-wide sentiment indicators powered by TradingView.
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
                                            title: "Major Crypto",
                                            symbols: [
                                                { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
                                                { s: "BINANCE:ETHUSDT", d: "Ethereum" },
                                                { s: "BINANCE:SOLUSDT", d: "Solana" },
                                                { s: "BINANCE:BNBUSDT", d: "BNB" },
                                            ]
                                        },
                                        {
                                            title: "Altcoins",
                                            symbols: [
                                                { s: "BINANCE:ADAUSDT", d: "Cardano" },
                                                { s: "BINANCE:DOTUSDT", d: "Polkadot" },
                                                { s: "BINANCE:LINKUSDT", d: "Chainlink" },
                                                { s: "BINANCE:AVAXUSDT", d: "Avalanche" },
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
                                    symbol: "BINANCE:BTCUSDT",
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

            {/* ═══════════════════════════════════════════════════════ */}
            {/* SEO CONTENT — Rich Text Block for Search Engines        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="crypto-seo" className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4 text-center">In-Depth Guide</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a] text-center mb-12">
                            Complete Guide to <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Cryptocurrency Trading.</span>
                        </h2>
                    </motion.div>

                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">What is Cryptocurrency Trading?</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                    Cryptocurrency trading involves speculating on the price movements of digital currencies through a trading platform. 
                                    Unlike traditional investing where you buy and hold coins on an exchange or wallet, CFD trading allows you to profit from 
                                    both upward and downward price movements without ever taking ownership of the underlying asset.
                                </p>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    At New Trade FX Services, our cryptocurrency CFD offering provides access to 50+ digital asset pairs with institutional-grade 
                                    execution, competitive leverage, and zero custody risk. You don't need a crypto wallet, private keys, or any blockchain knowledge 
                                    — just a trading account and your analysis.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">How Does Crypto CFD Trading Work?</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                    When you trade crypto CFDs, you enter into a contract that mirrors the price movement of the cryptocurrency. 
                                    If you believe Bitcoin will rise, you open a "Buy" position. If it does rise, you profit from the difference. 
                                    Conversely, if you expect a drop, you can "Sell" and profit from the decline.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    {[
                                        { label: 'Leverage Available', value: 'Up to 1:100' },
                                        { label: 'Trading Hours', value: '24/7, 365 Days' },
                                        { label: 'Minimum Trade', value: 'From 0.01 Lot' },
                                        { label: 'Commission', value: 'From 0%' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-100">
                                            <CheckCircle2 size={14} className="text-[#2E62FF] flex-shrink-0" />
                                            <div>
                                                <span className="text-xs font-bold text-[#0a0a0a]">{item.value}</span>
                                                <span className="text-xs text-neutral-400 ml-2">{item.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">Risk Management in Crypto Markets</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                    Cryptocurrency markets are among the most volatile in the world. Bitcoin regularly moves 5-10% in a single day, 
                                    and altcoins can experience even more extreme swings. This volatility creates both opportunity and risk.
                                </p>
                                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                                    New Trade FX Services provides comprehensive risk management tools including Stop-Loss orders, Take-Profit orders, 
                                    Negative Balance Protection, and real-time margin monitoring. We strongly recommend that all crypto traders:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        'Never risk more than 1-2% of your account on a single trade',
                                        'Always use Stop-Loss orders to limit potential losses',
                                        'Diversify across multiple crypto assets rather than concentrating in one',
                                        'Stay informed about regulatory developments that can impact prices',
                                        'Start with smaller position sizes until you understand market dynamics',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-neutral-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
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
                            <XIcon size={14} className="text-white" />
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

                                <div className="px-8 flex flex-wrap gap-1 flex-shrink-0">
                                    {active.pairs.map((pair: string) => (
                                        <button
                                            key={pair}
                                            onClick={(e) => { e.stopPropagation(); setSelectedPair(pair); }}
                                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                                                selectedPair === pair ? 'bg-[#2E62FF] text-white' : 'text-white/35'
                                            }`}
                                        >
                                            {pair.split(':')[1] || pair}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex-1 p-6 pt-3 min-h-0">
                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0f1b2e]">
                                        <iframe
                                            key={selectedPair}
                                            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview&symbol=${selectedPair}&interval=D&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=0c1a2e&theme=dark&style=1&timezone=exchange&withdateranges=1&locale=en`}
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

const XIcon = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const marketCards = [
    {
        title: 'Bitcoin & Layer 1s',
        description: 'Trade BTC and the foundational Layer 1 blockchains powering the crypto ecosystem.',
        ctaText: 'Trade Bitcoin',
        ctaLink: '/register',
        icon: <Coins size={24} />,
        pairs: ['BINANCE:BTCUSDT', 'BINANCE:ETHUSDT', 'BINANCE:SOLUSDT', 'BINANCE:AVAXUSDT'],
        stats: [
            { label: 'Market Dominance', value: '~50%' },
            { label: 'Volatility', value: 'High' },
            { label: 'Liquidity', value: 'Maximum' },
            { label: 'Market', value: '24/7' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff]/50 border border-[#2E62FF]/30">
                    <div className="flex items-center gap-2 mb-3">
                        <Coins size={16} className="text-[#2E62FF]" />
                        <p className="text-[11px] font-black text-[#2E62FF] uppercase tracking-widest">Layer 1 Intelligence</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        <strong>Bitcoin</strong> remains the undisputed king of crypto with ~50% market dominance. Its fixed 21 million supply cap makes it 
                        fundamentally deflationary, while institutional adoption via ETFs has cemented its status as "digital gold."
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Max Supply</p>
                            <p className="text-sm font-black text-[#0a0a0a]">21M BTC</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Next Halving</p>
                            <p className="text-sm font-black text-[#2E62FF]">~2028</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Activity size={12} className="text-[#2E62FF]" /> Key Trading Catalysts
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Zap size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Halving Cycle</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Bitcoin's mining reward halves every ~4 years, historically preceding major bull runs. The supply shock creates upward pressure as new BTC issuance shrinks.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Shield size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">ETF Inflows</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Spot Bitcoin ETFs have attracted billions in institutional capital. Daily inflow/outflow data from BlackRock's IBIT and Fidelity's FBTC directly impacts BTC price.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Star size={14} /> Trading Strategy
                    </p>
                    <p className="text-xs text-indigo-900/70 leading-relaxed">
                        BTC typically leads the market. When Bitcoin breaks key resistance levels, altcoins tend to follow with amplified moves. Use BTC as your "market compass" and trade alts for higher beta.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'DeFi & Smart Contracts',
        description: 'Trade the protocols powering decentralized finance and the Web3 ecosystem.',
        ctaText: 'Trade DeFi Tokens',
        ctaLink: '/register',
        icon: <Layers size={24} />,
        pairs: ['BINANCE:ETHUSDT', 'BINANCE:LINKUSDT', 'BINANCE:UNIUSDT'],
        stats: [
            { label: 'TVL', value: '$100B+' },
            { label: 'Growth', value: 'Explosive' },
            { label: 'Category', value: 'DeFi' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-200/30">
                    <div className="flex items-center gap-2 mb-3">
                        <Layers size={16} className="text-purple-600" />
                        <p className="text-[11px] font-black text-purple-600 uppercase tracking-widest">DeFi Ecosystem</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        DeFi protocols enable lending, borrowing, and trading without intermediaries. <strong>Ethereum</strong> hosts ~60% of all DeFi TVL, 
                        while <strong>Chainlink</strong> provides the critical oracle infrastructure connecting blockchains to real-world data.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-purple-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Total TVL</p>
                            <p className="text-sm font-black text-[#0a0a0a]">$100B+</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-purple-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Active Users</p>
                            <p className="text-sm font-black text-purple-600">Millions</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Globe size={12} className="text-[#2E62FF]" /> Protocol Insights
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <CheckCircle2 size={18} className="text-purple-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Ethereum Staking Yield</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Post-Merge, ETH staking provides ~3-5% annual yield, attracting institutional capital and reducing circulating supply. This makes ETH deflationary during high network usage.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Zap size={18} className="text-purple-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Oracle Networks</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Chainlink (LINK) is the dominant oracle provider, connecting smart contracts to external data. Every new DeFi protocol integration increases LINK's fundamental value.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Activity size={14} /> Correlation Alert
                    </p>
                    <p className="text-xs text-purple-900/70 leading-relaxed">
                        DeFi tokens are highly correlated with ETH. When Ethereum rallies, the entire DeFi sector typically follows with amplified gains due to increased network activity and gas revenue.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'High-Speed Chains',
        description: 'Speculate on next-gen blockchain platforms built for speed and scalability.',
        ctaText: 'Trade Alt L1s',
        ctaLink: '/register',
        icon: <Zap size={24} />,
        pairs: ['BINANCE:SOLUSDT', 'BINANCE:AVAXUSDT', 'BINANCE:NEARUSDT'],
        stats: [
            { label: 'TPS', value: '65,000+' },
            { label: 'Fees', value: '<$0.01' },
            { label: 'Beta', value: 'Very High' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/30">
                    <div className="flex items-center gap-2 mb-3">
                        <Zap size={16} className="text-emerald-600" />
                        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Speed & Scale</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        <strong>Solana</strong>, <strong>Avalanche</strong>, and <strong>NEAR</strong> represent the next evolution of blockchain — achieving thousands of transactions per second at near-zero cost. These "Ethereum Killers" compete for developer mindshare and DeFi TVL.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-emerald-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Solana TPS</p>
                            <p className="text-sm font-black text-[#0a0a0a]">65,000+</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-emerald-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Avg Fee</p>
                            <p className="text-sm font-black text-emerald-600">$0.001</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Activity size={12} className="text-[#2E62FF]" /> Growth Signals
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <TrendingUp size={18} className="text-emerald-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Developer Ecosystem</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">The number of active developers building on a chain is the strongest leading indicator. Solana's developer count has grown 3x, signaling long-term ecosystem health.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Globe size={18} className="text-emerald-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Real-World Adoption</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Visa processes on Solana, while Avalanche partners with institutional asset managers for tokenized bonds. Real-world utility drives sustained price appreciation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Star size={14} /> High-Beta Strategy
                    </p>
                    <p className="text-xs text-emerald-900/70 leading-relaxed">
                        Alt L1s provide the highest beta in crypto. During bull markets, SOL and AVAX can deliver 3-5x the returns of BTC. However, they also fall harder in downturns — so position sizing and stop-losses are critical.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'Meme & Trending',
        description: 'Trade the most viral, community-driven crypto assets in the market.',
        ctaText: 'Trade Trending Coins',
        ctaLink: '/register',
        icon: <Star size={24} />,
        pairs: ['BINANCE:DOGEUSDT', 'BINANCE:SHIBUSDT', 'BINANCE:PEPEUSDT'],
        stats: [
            { label: 'Volatility', value: 'Extreme' },
            { label: 'Risk', value: 'Very High' },
            { label: 'Driver', value: 'Social Media' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50/50 border border-rose-200/30">
                    <div className="flex items-center gap-2 mb-3">
                        <Star size={16} className="text-rose-600" />
                        <p className="text-[11px] font-black text-rose-600 uppercase tracking-widest">Community Tokens</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        Meme coins like <strong>DOGE</strong>, <strong>SHIB</strong>, and <strong>PEPE</strong> are uniquely driven by community sentiment, social media virality, and celebrity endorsements. They represent the highest-risk, highest-reward segment of crypto markets.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-rose-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Key Driver</p>
                            <p className="text-sm font-black text-[#0a0a0a]">Social Virality</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-rose-200/20">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Risk Level</p>
                            <p className="text-sm font-black text-rose-600">Extreme</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Eye size={12} className="text-[#2E62FF]" /> Sentiment Drivers
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Activity size={18} className="text-rose-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Social Volume</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Meme coin rallies are preceded by spikes in Twitter/X mentions, Reddit posts, and Telegram group activity. Monitoring social volume can provide early entry signals.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Shield size={18} className="text-rose-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">CFD Advantage</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">CFDs let you short meme coins when hype fades — a crucial advantage. Most meme coin rallies reverse just as fast, and short positions let you profit from the inevitable correction.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Shield size={14} /> Critical Warning
                    </p>
                    <p className="text-xs text-rose-900/70 leading-relaxed">
                        Meme coins can rally 1,000%+ or crash 90%+ within days. Never allocate more than 5% of your portfolio to meme tokens. Always use tight stop-losses and be prepared for extreme volatility.
                    </p>
                </div>
            </div>
        )
    }
];
