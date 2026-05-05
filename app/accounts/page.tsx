'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
    ArrowRight, ExternalLink, CheckCircle2, XCircle,
    ChevronRight, Users, Zap, Globe, Clock, Shield,
    TrendingUp, Crown, Bot, BarChart3, Star, Sparkles
} from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import dynamic from 'next/dynamic';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';
import { useIsMobile } from '@/hooks/use-mobile';

const Beams = dynamic(() => import('@/components/ui/Beams'), { ssr: false });
const Hyperspeed = dynamic(() => import('@/components/ui/Hyperspeed'), { ssr: false });

/* ─── Account Data (Verified from Legacy Site) ─── */
const accountPlans = [
    {
        id: 'standard',
        name: 'Standard',
        subtitle: 'For startups & small traders',
        deposit: 100,
        highlight: false,
        accent: '#2E62FF',
        icon: <Shield size={22} />,
        specs: {
            spread: 'From 2.5 Pips',
            commission: 'Zero',
            leverage: '1:500',
            eas: true,
            scalping: false,
            newsTrading: false,
        }
    },
    {
        id: 'pro',
        name: 'Pro',
        subtitle: 'For professional traders',
        deposit: 500,
        highlight: true,
        accent: '#2E62FF',
        icon: <TrendingUp size={22} />,
        specs: {
            spread: 'From 1.5 Pips',
            commission: 'Zero',
            leverage: '1:500',
            eas: true,
            scalping: false,
            newsTrading: false,
        }
    },
    {
        id: 'ecn',
        name: 'ECN',
        subtitle: 'For advanced traders',
        deposit: 1000,
        highlight: false,
        accent: '#22C55E',
        icon: <Zap size={22} />,
        specs: {
            spread: 'Raw Spread',
            commission: '$8',
            leverage: '1:500',
            eas: true,
            scalping: false,
            newsTrading: false,
        }
    },
    {
        id: 'robo',
        name: 'Robo',
        subtitle: 'For advanced traders',
        deposit: 1500,
        highlight: false,
        accent: '#A855F7',
        icon: <Bot size={22} />,
        specs: {
            spread: '3.5 Pips',
            commission: 'Zero',
            leverage: '1:500',
            eas: true,
            scalping: false,
            newsTrading: false,
        }
    },
];

const comparisonRows = [
    { feature: 'Trading Platform', classic: 'MT5', premium: 'MT5', vip: 'MT5' },
    { feature: 'Commission (per lot)', classic: '$2 spot / $5 futures', premium: '$2 spot / $5 futures', vip: '$2 spot / $5 futures' },
    { feature: 'Spreads from (pips)', classic: '10 points', premium: '10 points', vip: '10 points' },
    { feature: 'Starting Deposit', classic: '$500.00', premium: '$500.00', vip: '$500.00' },
    { feature: 'Leverage', classic: '1:100', premium: '1:100', vip: '1:100' },
    { feature: 'Maximum Deposit', classic: 'Unlimited', premium: 'Unlimited', vip: 'Unlimited' },
    { feature: 'Micro Lot (0.01)', classic: 'Enabled', premium: 'Enabled', vip: 'Enabled' },
    { feature: 'Stop Out Level', classic: '20.0%', premium: '20.0%', vip: '20.0%' },
    { feature: 'One Click Trading', classic: 'Yes', premium: 'Yes', vip: 'Yes' },
    { feature: 'Islamic Accounts', classic: 'Yes', premium: 'Yes', vip: 'Yes' },
    { feature: 'Trading Styles', classic: 'Normal', premium: 'Normal', vip: 'Normal' },
];

export default function AccountsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const isMobile = useIsMobile();

    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden">

            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO — BEAMS BG + FLEX LAYOUT                           */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#030712]">
                {/* React Bits Beams Background */}
                <div className="absolute inset-0 z-0">
                    <Beams
                        beamWidth={3}
                        beamHeight={20}
                        beamNumber={14}
                        lightColor="#2E62FF"
                        speed={3.5}
                        noiseIntensity={2.5}
                        scale={0.3}
                        rotation={30}
                    />
                </div>

                {/* Gradient overlays for readability - Reduced opacity to show beams */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712]/80 pointer-events-none" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* LEFT — Hero Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? -15 : -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: isMobile ? 0.5 : 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex-1 max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(46,98,255,0.08)]"
                            >
                                <Sparkles size={12} className="text-[#2E62FF]" />
                                <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.25em]">Premium Accounts</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] text-white font-black tracking-[-0.04em] leading-[0.88] mb-8">
                                Choose Your <br className="hidden md:block" />
                                <span className="text-[#2E62FF] italic font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>Trading Edge.</span>
                            </h1>

                            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg mb-10">
                                From beginner-friendly Standard features to institutional-grade ECN and Robo setups. Choose the perfect New TradeFX environment tailored to your trading volume, strategy, and risk profile.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link
                                    href="https://dashboard.tradefxservices.com/register"
                                    target="_blank"
                                    className="group w-full sm:w-auto px-8 py-4 premium-gradient shimmer-button text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(46,98,255,0.25)] hover:shadow-[0_0_60px_rgba(46,98,255,0.4)] active:scale-[0.97] transition-all"
                                >
                                    Open Live Account
                                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <Link
                                    href="#accounts-grid"
                                    className="w-full sm:w-auto px-8 py-4 text-white/50 text-[11px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10 hover:border-white/20 hover:text-white/80 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                                >
                                    Compare Accounts
                                </Link>
                            </div>
                        </motion.div>

                        {/* RIGHT — Platform Image (Centered on mobile, right-anchored on desktop) */}
                        <div className="flex-1 relative lg:absolute right-auto lg:right-[-8%] top-0 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center lg:justify-end z-[5] pointer-events-none select-none mt-8 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: isMobile ? 0.6 : 1, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0.2 : 0.4 }}
                                className="relative flex justify-center lg:justify-end items-center"
                            >
                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#2E62FF]/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none z-0" />
                                
                                <img 
                                    src="/assets/hero/hero-accounts.png"
                                    alt="New TradeFX Trading Accounts"
                                    className="w-auto h-[40vh] lg:h-[85vh] max-w-none object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] lg:drop-shadow-[-40px_0_80px_rgba(0,0,0,0.3)] translate-x-0 lg:translate-x-[15%] opacity-100"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* ACCOUNT CARDS — DARK PREMIUM GLASSMORPHISM               */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="accounts-grid" className="relative py-16 md:py-24 bg-[#030712] text-white">
                {/* Ambient glows */}
                <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-[#2E62FF]/[0.06] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-[15%] w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-[1380px] mx-auto px-6">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        className="text-center mb-16"
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-4">Choose Your Edge</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.95]">
                            Four Powerful <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#2E62FF] to-[#8ea5ff]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Account Types.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {accountPlans.map((plan, idx) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: isMobile ? 15 : 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                transition={{ delay: isMobile ? 0 : idx * 0.1, duration: isMobile ? 0.4 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative flex flex-col rounded-[1.75rem] transition-all duration-500 overflow-hidden ${
                                    plan.highlight
                                        ? 'bg-gradient-to-b from-[#2E62FF]/15 via-[#0c1a2e] to-[#0a0f1c] border-[#2E62FF]/30 shadow-[0_0_60px_rgba(46,98,255,0.15)] lg:scale-[1.03] z-10'
                                        : 'bg-[#0a0f1c]/80 border-white/[0.05] hover:border-white/[0.1]'
                                } border backdrop-blur-xl`}
                            >
                                {/* Subtle top glow line */}
                                {plan.highlight && (
                                    <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#2E62FF] to-transparent" />
                                )}

                                {/* Popular Badge */}
                                {plan.highlight && (
                                    <div className="absolute -top-0 right-6 z-20">
                                        <div className="px-3 py-1.5 rounded-b-lg bg-[#2E62FF] text-white text-[8px] font-black uppercase tracking-[0.2em] shadow-lg shadow-[#2E62FF]/40">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col h-full p-7 md:p-8">
                                    {/* Icon + Name */}
                                    <div className="mb-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                                            plan.highlight 
                                                ? 'bg-[#2E62FF]/20 text-[#2E62FF] shadow-[0_0_20px_rgba(46,98,255,0.2)]' 
                                                : 'bg-white/[0.04] text-white/50 group-hover:text-[#2E62FF] group-hover:bg-[#2E62FF]/10'
                                        }`}>
                                            {plan.icon}
                                        </div>
                                        <h2 className="text-2xl font-black tracking-tight text-white">{plan.name}</h2>
                                        <p className="text-[11px] font-medium text-white/30 mt-1">{plan.subtitle}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6 pb-6 border-b border-white/[0.06]">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-4xl font-black tracking-tight text-white">${plan.deposit.toLocaleString()}</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mt-1.5">Minimum Deposit</p>
                                    </div>

                                    {/* Specs */}
                                    <div className="flex-1 space-y-3.5 mb-8">
                                        <SpecRow label="Spread" value={plan.specs.spread} />
                                        <SpecRow label="Commission" value={plan.specs.commission} />
                                        <SpecRow label="Max Leverage" value={plan.specs.leverage} />
                                        <SpecBool label="EAs" allowed={plan.specs.eas} />
                                        <SpecBool label="Scalping" allowed={plan.specs.scalping} />
                                        <SpecBool label="News Trading" allowed={plan.specs.newsTrading} />
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="https://dashboard.tradefxservices.com/register"
                                        target="_blank"
                                        className={`group/btn w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.97] ${
                                            plan.highlight
                                                ? 'bg-[#2E62FF] text-white hover:bg-[#3d6fff] shadow-lg shadow-[#2E62FF]/30'
                                                : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/[0.06]'
                                        }`}
                                    >
                                        Get Started
                                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* COMPARISON TABLE — ELEVATED LIGHT DATA GRID             */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="comparison-table" className="relative py-20 md:py-28 bg-[#f7f8fa]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        className="text-center mb-16"
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2E62FF] mb-4">Detailed Comparison</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Account <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Comparison.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        transition={{ delay: isMobile ? 0 : 0.1 }}
                        className="rounded-[1.5rem] border border-neutral-200 overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
                    >
                        {/* Header */}
                        <div className="grid grid-cols-4 bg-neutral-50 border-b border-neutral-200">
                            <div className="p-5 md:p-6 flex items-center">
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Feature</span>
                            </div>
                            {[
                                { name: 'Classic', color: '#2E62FF' },
                                { name: 'Premium', color: '#22C55E' },
                                { name: 'VIP', color: '#F59E0B' },
                            ].map((tier) => (
                                <div key={tier.name} className="p-5 md:p-6 text-center border-l border-neutral-200">
                                    <span className="text-xs font-black tracking-tight" style={{ color: tier.color }}>{tier.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Rows */}
                        {comparisonRows.map((row, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-4 transition-colors hover:bg-neutral-50/80 ${
                                    i < comparisonRows.length - 1 ? 'border-b border-neutral-100' : ''
                                }`}
                            >
                                <div className="p-4 md:p-5 flex items-center">
                                    <span className="text-[11px] font-bold text-neutral-500">{row.feature}</span>
                                </div>
                                <div className="p-4 md:p-5 text-center border-l border-neutral-100">
                                    <span className="text-[11px] font-semibold text-[#0a0a0a]">{row.classic}</span>
                                </div>
                                <div className="p-4 md:p-5 text-center border-l border-neutral-100">
                                    <span className="text-[11px] font-semibold text-[#0a0a0a]">{row.premium}</span>
                                </div>
                                <div className="p-4 md:p-5 text-center border-l border-neutral-100">
                                    <span className="text-[11px] font-semibold text-[#0a0a0a]">{row.vip}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WHY CHOOSE US — LIGHT MODE CARDS                        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                {/* Ambient glows */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] bg-[#2E62FF]/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#2E62FF]/5 border border-[#2E62FF]/10 mb-8">
                            <Star size={12} className="text-[#2E62FF]" />
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#2E62FF] uppercase">Why New TradeFX</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tighter leading-[0.95] mb-6">
                            How to Choose the <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Right Account.</span>
                        </h2>
                        <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                            The right account depends on your trading experience, investment goals, and trading volume. Start with what fits today — upgrade anytime.
                        </p>
                    </motion.div>

                    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[18rem]">
                        {[
                            {
                                name: "Assess Your Experience",
                                description: "New to trading? The Standard account gives you full market access with user-friendly tools. No complexity, just pure opportunity at a low entry point.",
                                cta: "Start as Standard",
                                Icon: Users,
                                classes: "md:col-span-2 bg-[#f8faff] border-[#2E62FF]/10",
                                ctaClasses: "text-[#2E62FF] hover:text-[#1a44e6]",
                                iconColor: "text-[#2E62FF]"
                            },
                            {
                                name: "Define Your Goals",
                                description: "Prioritize raw spreads for scalping? Need zero commission? Match your account to your exact trading strategy.",
                                cta: "Explore Pro",
                                Icon: BarChart3,
                                classes: "md:col-span-1 bg-emerald-50/50 border-emerald-500/10",
                                ctaClasses: "text-emerald-600 hover:text-emerald-700",
                                iconColor: "text-emerald-500"
                            },
                            {
                                name: "Volume Matters",
                                description: "High-volume traders save significantly on ECN raw spreads where per-trade cost savings compound daily.",
                                cta: "Go ECN",
                                Icon: TrendingUp,
                                classes: "md:col-span-1 bg-indigo-50/50 border-indigo-500/10",
                                ctaClasses: "text-indigo-600 hover:text-indigo-700",
                                iconColor: "text-indigo-500"
                            },
                            {
                                name: "Upgrade Anytime",
                                description: "Start at any tier and seamlessly upgrade as your strategy evolves and capital grows. One platform, infinite potential.",
                                cta: "View All Accounts",
                                Icon: Crown,
                                classes: "md:col-span-2 bg-amber-50/50 border-amber-500/10",
                                ctaClasses: "text-amber-600 hover:text-amber-700",
                                iconColor: "text-amber-500"
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                transition={{ delay: isMobile ? 0 : idx * 0.1 }}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border transition-all duration-500 p-8 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-white ${card.classes.split(' ')[0]}`}
                            >
                                <div className={`absolute inset-0 z-0 opacity-50 pointer-events-none ${card.classes.split(' ')[1]}`} />
                                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                    <card.Icon className={`h-10 w-10 mb-6 ${card.iconColor}`} />
                                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">{card.name}</h3>
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed mb-6">{card.description}</p>
                                    <div className="mt-auto pointer-events-auto">
                                        <Link href="https://dashboard.tradefxservices.com/register" target="_blank" className={`inline-flex items-center text-[11px] font-bold uppercase tracking-widest ${card.ctaClasses} transition-colors`}>
                                            {card.cta}
                                            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* TRUST STATS — LIGHT CONTRAST STRIP                      */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-20 border-y border-neutral-100 bg-[#f7f8fa]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                        {[
                            { value: '55+', label: 'Currency Pairs', icon: <Globe size={18} /> },
                            { value: '24/5', label: 'Market Access', icon: <Clock size={18} /> },
                            { value: '<50ms', label: 'Avg. Execution', icon: <Zap size={18} /> },
                            { value: '40k+', label: 'Active Traders', icon: <Users size={18} /> },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: isMobile ? 8 : 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                transition={{ delay: isMobile ? 0 : i * 0.08 }}
                                className="text-center"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white text-[#2E62FF] border border-neutral-100 shadow-sm flex items-center justify-center mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-1">{stat.value}</div>
                                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* CLOSING CTA — HYPERSPEED BACKGROUND                     */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-36 overflow-hidden bg-[#030712] border-t border-white/[0.05]">
                <div className="absolute inset-0 z-0">
                    <Hyperspeed
                        effectOptions={{
                            onSpeedUp: () => { },
                            onSlowDown: () => { },
                            distortion: 'turbulentDistortion',
                            length: 400,
                            roadWidth: 10,
                            islandWidth: 2,
                            lanesPerRoad: 3,
                            fov: 90,
                            fovSpeedUp: 150,
                            speedUp: 2,
                            carLightsFade: 0.4,
                            totalSideLightSticks: 20,
                            lightPairsPerRoadWay: 40,
                            shoulderLinesWidthPercentage: 0.05,
                            brokenLinesWidthPercentage: 0.1,
                            brokenLinesLengthPercentage: 0.5,
                            lightStickWidth: [0.12, 0.5],
                            lightStickHeight: [1.3, 1.7],
                            movingAwaySpeed: [60, 80],
                            movingCloserSpeed: [-120, -160],
                            carLightsLength: [12, 80],
                            carLightsRadius: [0.05, 0.14],
                            carWidthPercentage: [0.3, 0.5],
                            carShiftX: [-0.8, 0.8],
                            carFloorSeparation: [0, 5],
                            colors: {
                                roadColor: 0x080808,
                                islandColor: 0x0a0a0a,
                                background: 0x000000,
                                shoulderLines: 0x131318,
                                brokenLines: 0x131318,
                                leftCars: [0x2E62FF, 0x8ea5ff, 0x1a44e6],
                                rightCars: [0x22C55E, 0x5271ff, 0x03B3C3],
                                sticks: 0x2E62FF
                            }
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[0.95] mb-6 drop-shadow-2xl">
                            Start Trading With <br className="hidden md:block" />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Absolute Confidence.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                            Join thousands of traders worldwide. Select the account tier that aligns with your strategy and gain immediate access to institutional-grade liquidity and our premium trading platform.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="https://dashboard.tradefxservices.com/register"
                                target="_blank"
                                className="premium-gradient shimmer-button text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] shadow-[0_0_40px_rgba(46,98,255,0.25)] active:scale-[0.97] transition-all flex items-center justify-center gap-3"
                            >
                                Open Live Account <ExternalLink size={14} />
                            </Link>
                            <Link
                                href="/platforms"
                                className="bg-transparent border border-white/10 hover:border-white/20 text-white/50 hover:text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all flex items-center justify-center gap-3"
                            >
                                Explore Platform
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Shared Sections */}
            <DownloadSection />
            <PremiumMarquee />
            <FAQSection />
        </main>
    );
}

/* ─── Helper Sub-Components ─── */

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-white/30">{label}</span>
            <span className="text-[11px] font-bold text-white/80">{value}</span>
        </div>
    );
}

function SpecBool({ label, allowed }: { label: string; allowed: boolean }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-white/30">{label}</span>
            {allowed ? (
                <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span className="text-[11px] font-bold text-emerald-400">Allowed</span>
                </div>
            ) : (
                <div className="flex items-center gap-1.5">
                    <XCircle size={12} className="text-white/15" />
                    <span className="text-[11px] font-bold text-white/20">Not Allowed</span>
                </div>
            )}
        </div>
    );
}
