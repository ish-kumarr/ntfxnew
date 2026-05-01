'use client';

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
    Star, Zap, Shield, TrendingUp, ArrowRight, CheckCircle2, Globe, 
    BarChart3, Clock, Wallet, LineChart, Landmark, Building2,
    ArrowUpCircle, ArrowDownCircle, Activity, Award, Headphones, Lock,
    Briefcase
} from 'lucide-react';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';

import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { TradingViewWidget } from '@/components/TradingViewWidget';

export default function SharesPage() {
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
            <section id="shares-hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
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
                                    <Briefcase size={10} className="fill-[#2E62FF] text-[#2E62FF]" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#2E62FF]">Share CFDs</span>
                                </div>
                                
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-5 md:mb-6 max-w-2xl">
                                    Trade Global <br className="hidden md:block" />
                                    <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400" style={{ fontFamily: 'var(--font-playfair), serif' }}>Stocks & Shares.</span>
                                </h1>
                                
                                <p className="text-sm md:text-base text-white/45 font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                                    Access over 20,000+ top global equities from the US, UK, Europe, and Asia. Trade shares of Apple, Tesla, Amazon, and more with institutional pricing, zero commission options, and fractional trading.
                                </p>

                                {/* Stat Badges — Optimized for Mobile Flow */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 md:mb-10 max-w-md lg:max-w-none">
                                    {[
                                        { label: 'Global Stocks', value: '20k+' },
                                        { label: 'Commission', value: 'From 0%' },
                                        { label: 'Dividends', value: 'Enabled' },
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
                                        id="shares-cta-hero"
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
                                                        src={`https://i.pravatar.cc/100?img=${i + 60}`} 
                                                        alt="Trader" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-[#030712] bg-[#2E62FF] flex items-center justify-center text-[8px] font-bold text-white">
                                                +40k
                                            </div>
                                        </div>
                                        <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest leading-tight text-left">
                                            Trusted by <br />
                                            <span className="text-white/80">40k+ Equity Traders</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column — Stock Visualization */}
                        <div className="hidden lg:flex items-center justify-center relative w-full h-full min-h-[500px]">
                            {/* Hero Asset Replacement */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative w-full max-w-[650px] flex items-center justify-center lg:translate-x-12"
                            >
                                <div className="absolute inset-x-0 bottom-10 top-1/4 bg-[#2E62FF]/10 blur-[120px] rounded-full pointer-events-none" />
                                
                                <div className="relative w-full mt-4 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] flex items-center justify-center">
                                    <img 
                                        src="/assets/hero/stocks.png" 
                                        alt="Global Stocks Trading"
                                        draggable={false}
                                        className="w-full h-auto object-contain object-center scale-[1.05] drop-shadow-[0_0_30px_rgba(46,98,255,0.1)] pointer-events-none select-none"
                                    />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Seamless bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* EDUCATIONAL SECTION — Trading Share CFDs                 */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="shares-what-is" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Equity Markets</p>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                                How Share <span className="text-[#2E62FF]">Trading</span> <br />
                                <span className="italic font-serif text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>Works with CFDs.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-medium leading-relaxed">
                                Share CFDs allow you to speculate on the price movements of global companies without actually owning the underlying shares. This means you can profit from both rising and falling markets with the added advantage of leverage.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Bullish Action */}
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
                                <h3 className="text-2xl font-bold tracking-tight text-white">Earnings Growth (Long)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If you believe a company is performing well—perhaps launching a new product or posting record earnings—you place a "Buy" trade. You profit as the company's stock price increases, capitalizing on positive market sentiment.
                            </p>
                            <div className="h-1 w-20 bg-emerald-500/40 rounded-full" />
                        </motion.div>

                        {/* Bearish Action */}
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
                                <h3 className="text-2xl font-bold tracking-tight text-white">Market Downturns (Short)</h3>
                            </div>
                            <p className="text-lg text-white/40 leading-relaxed mb-6 font-medium">
                                If a company faces supply chain issues, structural decline, or an economic recession is looming, you can place a "Sell" trade. This allows you to profit from the declining stock price—something traditional investing doesn't easily allow.
                            </p>
                            <div className="h-1 w-20 bg-rose-500/40 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY TRADE SHARES WITH US                                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="shares-benefits" className="relative py-28 md:py-36 bg-[#030712] text-white overflow-hidden">
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
                                <Briefcase size={10} className="fill-emerald-500 text-emerald-500" />
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-500">Why Trade Shares</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-white">
                                Invest in the <br />
                                World's Top <br />
                                <AuroraText className="italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>Corporations.</AuroraText>
                            </h2>

                            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg mb-8">
                                Seize opportunities in the global stock market. Whether it’s tech giants in New York or automotive leaders in Europe, trade with precision, deep liquidity, and institutional-grade charting tools.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link 
                                    href="/register" 
                                    id="shares-cta-benefits"
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
                                    title: 'Zero Commission',
                                    desc: 'Trade selected major US and EU equities with absolutely zero commission for more cost-effective investing.',
                                    icon: <Briefcase size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '02',
                                    title: 'Fractional Shares',
                                    desc: 'Don’t have $3,000 for a single share? Buy fractional CFDs so you can invest exactly the amount you want.',
                                    icon: <Activity size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '03',
                                    title: 'Dividend Payments',
                                    desc: 'Holding a long position? You’ll still receive dividend cash adjustments directly into your trading account.',
                                    icon: <Star size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '04',
                                    title: 'Earnings Season',
                                    desc: 'Capitalize on massive volatility during quarterly earnings reports—go long or short based on your analysis.',
                                    icon: <BarChart3 size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '05',
                                    title: 'Extended Hours',
                                    desc: 'React to after-hours earnings and pre-market news with our extended trading hour sessions for top US stocks.',
                                    icon: <Clock size={20} className="text-[#2E62FF]" />,
                                },
                                {
                                    num: '06',
                                    title: 'Leveraged Exposure',
                                    desc: 'Amplify your purchasing power with professional leverage, giving you more market exposure with less capital.',
                                    icon: <Zap size={20} className="text-[#2E62FF]" />,
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
            <section id="shares-advantages" className="relative py-28 md:py-36 bg-[#f7f8fa] overflow-hidden">
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
                            Engineered to deliver cutting-edge execution, low costs, and institutional liquidity for global stock traders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Direct Market Access',
                                desc: 'Advanced routing ensures your equity orders are executed directly within global exchanges rapidly.',
                                icon: <Globe size={24} />,
                            },
                            {
                                title: 'Real-Time Quotes',
                                desc: 'Receive instant Level 1 and Level 2 price quotes directly from the NYSE, NASDAQ, and LSE.',
                                icon: <Activity size={24} />,
                            },
                            {
                                title: 'Regulated & Trusted',
                                desc: 'Trade in a completely secure, heavily regulated environment ensuring your equity positions are safe.',
                                icon: <Award size={24} />,
                            },
                            {
                                title: 'Minimal Slippage',
                                desc: 'Our deep liquidity pools ensure large share volumes are filled instantly without aggressive price slippage.',
                                icon: <Zap size={24} />,
                            },
                            {
                                title: 'Corporate Actions',
                                desc: 'Automatic handling of stock splits, spin-offs, and dividends directly onto your balance.',
                                icon: <Building2 size={24} />,
                            },
                            {
                                title: 'Premium Charting',
                                desc: 'Conduct superior technical analysis on stocks using our built-in TradingView tools.',
                                icon: <LineChart size={24} />,
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
            {/* MARKET STRUCTURE — Expanded Shares Cards                 */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="shares-market-structure" className="relative py-28 md:py-36 bg-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Stock Markets</p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-[#0a0a0a]">
                            Global Equity <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Sectors.</span>
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
            {/* TRADINGVIEW MARKET INSIGHTS                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="shares-live-data" className="relative py-20 bg-[#030712]">
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
                            Equities <span className="italic font-serif text-[#2E62FF] normal-case" style={{ fontFamily: 'var(--font-playfair), serif' }}>Overview.</span>
                        </h2>
                        <p className="text-sm text-white/30 mt-3 max-w-md">
                            Real-time equity performance data, earnings signals, and volume analysis powered by TradingView.
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
                                            title: "Big Tech",
                                            symbols: [
                                                { s: "NASDAQ:AAPL", d: "Apple Inc." },
                                                { s: "NASDAQ:TSLA", d: "Tesla Inc." },
                                                { s: "NASDAQ:MSFT", d: "Microsoft Corp." },
                                                { s: "NASDAQ:NVDA", d: "Nvidia Corp." },
                                            ]
                                        },
                                        {
                                            title: "Blue Chips",
                                            symbols: [
                                                { s: "NYSE:JPM", d: "JPMorgan Chase" },
                                                { s: "NYSE:DIS", d: "Walt Disney" },
                                                { s: "NYSE:KO", d: "Coca-Cola" },
                                                { s: "NYSE:WMT", d: "Walmart" },
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
                                    symbol: "NASDAQ:AAPL",
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

const X = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const marketCards = [
    {
        title: 'US Technology',
        description: 'Trade the magnificent seven and Silicon Valley tech giants.',
        ctaText: 'Trade US Tech',
        ctaLink: '/register',
        icon: <TrendingUp size={24} />,
        pairs: ['NASDAQ:AAPL', 'NASDAQ:TSLA', 'NASDAQ:MSFT', 'NASDAQ:NVDA'],
        stats: [
            { label: 'Volatiliy', value: 'High' },
            { label: 'Market Cap', value: '$Trillions' },
            { label: 'Liquidity', value: 'Maximum' },
            { label: 'Session', value: 'US Hours' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/15">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={16} className="text-[#2E62FF]" />
                        <p className="text-[11px] font-black text-[#2E62FF] uppercase tracking-widest">Sector Intelligence</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        The <strong>US Tech Sector</strong> is the primary engine of global equity growth. Often referred to as "Growth Stocks," these companies prioritize research and innovation over immediate dividends. 
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Top Index</p>
                            <p className="text-sm font-black text-[#0a0a0a]">NASDAQ 100</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Avg Volatility</p>
                            <p className="text-sm font-black text-emerald-600">1.8% Daily</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Activity size={12} className="text-[#2E62FF]" /> Key Market Drivers
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Zap size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Interest Rate Sensitivity</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Tech valuations are highly sensitive to Fed rates. Low rates typically boost valuations, while rising rates can trigger sector-wide rotations into value stocks.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Shield size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Earnings Alpha</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">"The Magnificent Seven" (Apple, Microsoft, Alphabet, Amazon, NVIDIA, Meta, Tesla) contribute over 30% of S&P 500 performance. Their earnings reports are the most significant catalysts for intraday traders.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Star size={14} /> Trading Strategy Note
                    </p>
                    <p className="text-xs text-indigo-900/70 leading-relaxed">
                        For tech CFDs, utilize a "Breakout Strategy" during the first hour of the New York session (14:30 GMT). Volume is at its peak, and directional moves are typically established within this window.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'European Blue Chips',
        description: 'Invest in Europe’s premier luxury, automotive, and industrial brands.',
        ctaText: 'Trade Europe Shares',
        ctaLink: '/register',
        icon: <Landmark size={24} />,
        pairs: ['EURONEXT:MC', 'XETR:VOW3', 'XETR:SAP'],
        stats: [
            { label: 'Stability', value: 'High' },
            { label: 'Dividends', value: 'Consistent' },
            { label: 'Sectors', value: 'Industrial & Luxury' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/15">
                    <div className="flex items-center gap-2 mb-3">
                        <Landmark size={16} className="text-[#2E62FF]" />
                        <p className="text-[11px] font-black text-[#2E62FF] uppercase tracking-widest">European Market Dynamics</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        Europe offers access to <strong>"Quality Value"</strong> stocks. While US markets focus on tech growth, Europe dominates in luxury (LVMH), automotive excellence (Volkswagen), and industrial software (SAP).
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Core Markets</p>
                            <p className="text-sm font-black text-[#0a0a0a]">DAX 40 & CAC 40</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Dividends</p>
                            <p className="text-sm font-black text-emerald-600">Yield Optimized</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Globe size={12} className="text-[#2E62FF]" /> Regional Insights
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <CheckCircle2 size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Luxury Resilience</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Companies like LVMH and Hermès act as hedges against inflation. Their "pricing power" allows them to maintain margins even in high-inflation environments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Zap size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Energy & Industrials</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">European industrials (Siemens, Schneider Electric) are at the forefront of the global energy transition, providing structural growth within a value-stock framework.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Activity size={14} /> Dividend Capture Strategy
                    </p>
                    <p className="text-xs text-blue-900/70 leading-relaxed">
                        Our platform automatically credits dividend adjustments to your CFD account. Traders often accumulate positions in European stocks 1-2 weeks before the "Ex-Dividend" date to benefit from the run-up in price.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'Banking & Financials',
        description: 'Trade the institutions that power global commerce and markets.',
        ctaText: 'Trade Financials',
        ctaLink: '/register',
        icon: <Briefcase size={24} />,
        pairs: ['NYSE:JPM', 'NYSE:BAC', 'NYSE:V'],
        stats: [
            { label: 'Yield', value: 'High' },
            { label: 'Policy Sensivity', value: 'Extreme' },
            { label: 'Value', value: 'Cyclical' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/15">
                    <div className="flex items-center gap-2 mb-3">
                        <Briefcase size={16} className="text-[#2E62FF]" />
                        <p className="text-[11px] font-black text-[#2E62FF] uppercase tracking-widest">Financial Sector Profile</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        Financial institutions like <strong>JPMorgan Chase</strong> and <strong>Visa</strong> are the pulse of the economy. They are "Cyclical Stocks," meaning their performance tracks the boom and bust of the global business cycle.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Key Correlation</p>
                            <p className="text-sm font-black text-[#0a0a0a]">Treasury Yields</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Major Event</p>
                            <p className="text-sm font-black text-blue-600">Fed Meetings</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Landmark size={12} className="text-[#2E62FF]" /> Macro Drivers
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Activity size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Net Interest Margin (NIM)</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Higher interest rates generally increase the spread banks earn on loans. This is why financial stocks often rally when the Fed adopts a hawkish (higher rates) stance.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Shield size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">Regulatory Stress Tests</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Annual Federal Reserve stress tests dictate a bank's ability to return capital to shareholders. Bullish results often trigger multi-month rallies in US banking stocks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200">
                    <p className="text-[10px] font-black text-neutral-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Clock size={14} /> Historical Pattern
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        Financials are often the first sector to move at the start of a "Bull Market" cycle. Traders watch the "Yield Curve" closely; an un-inverting curve is a classic signal to go long on major US banks.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: 'Retail & E-Commerce',
        description: 'Speculate on consumer spending and global retail trends.',
        ctaText: 'Trade Retail',
        ctaLink: '/register',
        icon: <Globe size={24} />,
        pairs: ['NASDAQ:AMZN', 'NYSE:WMT', 'NYSE:BABA'],
        stats: [
            { label: 'Growth', value: 'Dynamic' },
            { label: 'Seasonality', value: 'Q4 Peak' },
            { label: 'Margins', value: 'Variable' },
        ],
        content: () => (
            <div className="space-y-6 pb-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f8faff] border border-[#2E62FF]/15">
                    <div className="flex items-center gap-2 mb-3">
                        <Globe size={16} className="text-[#2E62FF]" />
                        <p className="text-[11px] font-black text-[#2E62FF] uppercase tracking-widest">Consumer Sector Insight</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                        From <strong>Amazon's</strong> cloud-powered retail dominance to <strong>Walmart's</strong> massive physical footprint, this sector is the ultimate proxy for global consumer health.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Key Metric</p>
                            <p className="text-sm font-black text-[#0a0a0a]">Same-Store Sales</p>
                        </div>
                        <div className="p-3 bg-white/60 rounded-xl border border-[#2E62FF]/5">
                            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-1">Peak Season</p>
                            <p className="text-sm font-black text-orange-600">Golden Quarter (Q4)</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                        <Activity size={12} className="text-[#2E62FF]" /> Growth Catalysts
                    </h4>
                    <div className="grid gap-3">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <CheckCircle2 size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">CPI & Consumer Confidence</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">Retail stocks track the Consumer Confidence Index. High sentiment leads to increased discretionary spending, directly boosting the revenue of stocks like Amazon and Alibaba.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                            <Zap size={18} className="text-[#2E62FF] mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-[#0a0a0a]">E-Commerce Penetration</p>
                                <p className="text-xs text-neutral-500 leading-relaxed mt-1">The structural shift from physical to digital retail continues to provide long-term growth opportunities, even within a mature global economy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Star size={14} /> Trading The "Super-Cycle"
                    </p>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                        Retail stocks exhibit massive seasonality. Black Friday, Cyber Monday, and Single's Day (Alibaba) are high-impact events that often lead to "Earnings Surprises" in January and February.
                    </p>
                </div>
            </div>
        )
    }
];
