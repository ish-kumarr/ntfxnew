'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
    Zap, Shield, Cpu, Globe, Award, Headphones, 
    ArrowRight, CheckCircle2, TrendingUp, Lock,
    BarChart3, Activity, Layers, Sparkles
} from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { useIsMobile } from '@/hooks/use-mobile';
import { CtaCard } from '@/components/ui/cta-card';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';

export default function WhyChooseUsPage() {
    const isMobile = useIsMobile();

    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden">
            
            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO — CINEMATIC FULL-BLEED                              */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/backgrounds/cta.png" 
                        alt="Why Choose Us" 
                        className="w-full h-full object-cover"
                    />
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                            <Sparkles size={14} className="text-blue-300" />
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">The Elite Choice</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
                            Uncompromising <br />
                            <AuroraText>Performance.</AuroraText>
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
                            Experience the intersection of institutional-grade technology and client-centric service. Why settle for average when you can trade with the best?
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="https://dashboard.tradefxservices.com/register"
                                className="w-full sm:w-auto px-10 py-5 bg-[#2E62FF] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-blue-600/30"
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </Link>
                            <Link 
                                href="#why-bento"
                                className="w-full sm:w-auto px-10 py-5 bg-white/10 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all backdrop-blur-md hover:bg-white/20"
                            >
                                Explore Reasons
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* VALUE PROPS — BENTO GRID                                 */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="why-bento" className="py-24 md:py-32 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter mb-6">
                            Beyond the <span className="text-[#2E62FF]">Standard.</span>
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
                            We've re-engineered every aspect of the trading experience to provide you with an unfair advantage in the markets.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* 01. Technology - Large */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-neutral-950 p-10 md:p-12 text-white border border-neutral-800"
                        >
                            {/* Background Stock Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                                alt="Institutional Tech"
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                            {/* Premium Black-ish Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />
                            
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E62FF]/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-[#2E62FF]">
                                    <Cpu size={28} />
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Institutional Tech Stack</h3>
                                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8">
                                    Our infrastructure is built on the Equinix LD4 data center ecosystem, providing direct cross-connects to Tier-1 liquidity providers.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Sub-30ms Average Execution', 
                                        'Equinix LD4 Server Network', 
                                        'Institutional-Grade Liquidity',
                                        'Direct Fibre Cross-Connects'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm font-bold text-neutral-300">
                                            <CheckCircle2 size={16} className="text-[#2E62FF]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* 02. Execution - Small */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            transition={{ delay: isMobile ? 0 : 0.1 }}
                            className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-[#2E62FF] p-10 md:p-12 text-white shadow-2xl shadow-blue-600/20"
                        >
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8 border border-white/30">
                                        <Zap size={28} className="fill-white text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tight">Zero Latency. Zero Requotes.</h3>
                                    <p className="text-white/80 leading-relaxed font-medium">
                                        We operate a pure NDD (No Dealing Desk) model, ensuring your orders are filled at the best possible price with no intervention.
                                    </p>
                                </div>
                                <div className="mt-12 text-6xl font-black opacity-20 tracking-tighter italic">99.9%</div>
                            </div>
                        </motion.div>

                        {/* 03. Global - Small */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            transition={{ delay: isMobile ? 0 : 0.2 }}
                            className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-neutral-50 p-10 md:p-12 border border-neutral-200"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#2E62FF]/5 flex items-center justify-center mb-8 border border-[#2E62FF]/10 text-[#2E62FF]">
                                    <Globe size={28} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight text-neutral-900">Global Reach</h3>
                                <p className="text-neutral-500 leading-relaxed font-medium mb-8">
                                    Serving clients across 100+ countries with localized support and global market access 24 hours a day.
                                </p>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white overflow-hidden shadow-sm">
                                            <div className="w-full h-full bg-gradient-to-br from-[#2E62FF]/20 to-[#2E62FF]/50" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-[#2E62FF] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                                        +10k
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 04. Support - Large */}
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            transition={{ delay: isMobile ? 0 : 0.3 }}
                            className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-neutral-50 p-10 md:p-12 border border-neutral-200"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-[#2E62FF]/5 flex items-center justify-center mb-8 border border-[#2E62FF]/10 text-[#2E62FF]">
                                        <Headphones size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tight text-neutral-900">Human-Centric Support</h3>
                                    <p className="text-neutral-500 text-lg leading-relaxed mb-6 font-medium">
                                        No bots. No waiting. Access dedicated account managers and technical support specialists 24/5.
                                    </p>
                                    <Link 
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-[#2E62FF] font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform mb-8"
                                    >
                                        Contact our team
                                        <ArrowRight size={16} />
                                    </Link>
                                    <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-neutral-200">
                                        <img 
                                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                                            alt="Customer Support"
                                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                                    {[
                                        { label: 'Avg. Response', value: '2 mins' },
                                        { label: 'Satisfaction', value: '98%' },
                                        { label: 'Available', value: '24/5' },
                                        { label: 'Languages', value: '12+' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm">
                                            <div className="text-2xl font-black text-neutral-900 mb-1">{stat.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* CORE REASONS SECTION — LIGHT THEME                       */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? -10 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="relative"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                                <Shield size={14} className="text-emerald-500" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600">Secure & Regulated</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-[1.05] mb-8">
                                Trust is the <br />
                                <span className="text-[#2E62FF]">Ultimate Asset.</span>
                            </h2>
                            <p className="text-lg text-neutral-500 leading-relaxed mb-10 max-w-xl">
                                We understand that security is your primary concern. That's why we've implemented institutional-grade protection across all layers of our service.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: <Lock />, title: 'Negative Balance Protection', desc: 'Your losses will never exceed your account balance.' },
                                    { icon: <Activity />, title: 'Segregated Client Funds', desc: 'Client capital is held in Tier-1 banks, completely separate from company funds.' },
                                    { icon: <Shield />, title: 'SSL Encrypted Infrastructure', desc: 'Military-grade encryption for all transactions and data transfers.' },
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-5"
                                    >
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-neutral-100 flex items-center justify-center text-[#2E62FF] shadow-sm">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-neutral-900 mb-1">{item.title}</h4>
                                            <p className="text-sm text-neutral-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-auto h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2070&auto=format&fit=crop" 
                                alt="Security" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                    <TrendingUp className="size-10 text-emerald-400 mb-4" />
                                    <p className="text-xl font-bold mb-2">Steady & Secure</p>
                                    <p className="text-white/60 text-sm">Our platform maintains 99.99% uptime, ensuring you never miss a market opportunity.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <PremiumMarquee />

            {/* ═══════════════════════════════════════════════════════ */}
            {/* TRADING CONDITIONS SECTION — DARK THEME                   */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[#2E62FF]/5 rounded-full blur-[150px]" />
                </div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-[0.8fr_1fr] gap-20 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Raw Spreads', value: '0.0 pips', icon: <BarChart3 /> },
                                { title: 'Max Leverage', value: '1:500', icon: <Zap /> },
                                { title: 'Commission', value: '$0.00', icon: <TrendingUp /> },
                                { title: 'Execution', value: '<30ms', icon: <Cpu /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#2E62FF]/40 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#2E62FF]/10 flex items-center justify-center text-[#2E62FF] mb-6">
                                        {item.icon}
                                    </div>
                                    <div className="text-3xl font-black mb-1 tracking-tight">{item.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{item.title}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 10 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
                                Built for <br />
                                <span className="text-[#2E62FF]">Competitive Traders.</span>
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-10 font-medium">
                                We've optimized every trading parameter to ensure you keep more of your profits. Experience the most competitive pricing in the retail trading industry.
                            </p>
                            <Link 
                                href="/accounts"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-neutral-900 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all active:scale-95"
                            >
                                View Account Types
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQSection />

            {/* ═══════════════════════════════════════════════════════ */}
            {/* FINAL CTA                                               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <CtaCard 
                        title="Ready to Trade With the Elite?"
                        description="Join a global community of traders who demand more from their broker. Open your live account today and experience the NTFx advantage."
                        primaryButtonText="Open Live Account"
                        primaryButtonHref="https://dashboard.tradefxservices.com/register"
                        secondaryButtonText="Try Demo"
                        secondaryButtonHref="https://dashboard.tradefxservices.com/register"
                    />
                </div>
            </section>

        </main>
    );
}
