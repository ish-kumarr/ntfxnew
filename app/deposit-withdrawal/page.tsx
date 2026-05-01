'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
    Shield, Zap, Clock, Headphones, ArrowRight, CreditCard,
    Building2, CheckCircle2, ExternalLink, Sparkles, Lock, Eye,
    Fingerprint, ArrowUpRight, Wallet, ShieldCheck, BadgeCheck,
    FileCheck, UserCheck, AlertTriangle
} from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ShinyButton } from '@/components/ui/shiny-button';
import ResponsiveHeroBanner from '@/components/ui/responsive-hero-banner';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { PremiumMarquee } from '@/components/sections/PremiumMarquee';
import { ShaderAnimation } from '@/components/ui/shader-animation';



/* ─── Payment Methods Data ─── */
const paymentMethods = [
    { name: 'Mastercard', color: '#EB001B', imgSrc: '/assets/depositwith/tab-mastercard.png' },
    { name: 'Visa', color: '#1A1F71', imgSrc: '/assets/depositwith/tab-visa.png' },
    { name: 'Neteller', color: '#83CA3E', imgSrc: '/assets/depositwith/tab-neteller.png' },
    { name: 'Skrill', color: '#80244C', imgSrc: '/assets/depositwith/tab-skrill.png' },
    { name: 'Webmoney', color: '#0070B5', imgSrc: '/assets/depositwith/tab-webmoney.png' },
    { name: 'Bank Transfer', color: '#0a0a0a', imgSrc: '/assets/depositwith/pm-04.svg' },
];

export default function FundingPage() {
    return (
        <main className="relative min-h-screen bg-white overflow-x-hidden">

            {/* ═══════════════════════════════════════════════════════ */}
            {/* HERO — DARK NAVY CENTERED (TRACKOIN-INSPIRED)            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <ResponsiveHeroBanner
                backgroundImageUrl="/assets/hero/hero-deposit.png"
                badgeLabel="Secure"
                badgeText="Instant Funding & Fast Withdrawals"
                title="Seamless Funding."
                titleLine2="Unmatched Speed."
                description="Deposit and withdraw your trading capital with total confidence. New Trade FX offers institutional-grade security, lightning-fast processing, and multiple global funding methods."
                primaryButtonText="Open an Account"
                primaryButtonHref="https://dashboard.tradefxservices.com/register"
                secondaryButtonText="Learn More"
                secondaryButtonHref="#deposit-section"
                partnersTitle="Supported Payment Networks"
            />

            {/* ═══════════════════════════════════════════════════════ */}
            {/* DEPOSITING FUNDS — LIGHT MODE                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            {/* ═══════════════════════════════════════════════════════ */}
            {/* DEPOSITING FUNDS — LIGHT MODE                            */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section id="deposit-section" className="py-24 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        {/* Left: Content & Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E62FF]/5 border border-[#2E62FF]/10 mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#2E62FF] animate-pulse" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2E62FF]">Deposit Capital</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tighter leading-[1.05] mb-6">
                                Make your first <span className="text-[#2E62FF]">deposit.</span>
                            </h2>
                            
                            <p className="text-lg text-neutral-500 leading-relaxed mb-10">
                                Enter the markets without delay. Our secure payment infrastructure ensures your capital is available immediately, with zero hidden costs. Minimum deposits start at just $1.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f8f9fa] flex items-center justify-center border border-neutral-100 group-hover:bg-white group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <Zap size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Instant Processing</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">Your deposit is credited to your account instantly, allowing you to execute trades without waiting.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f8f9fa] flex items-center justify-center border border-neutral-100 group-hover:bg-white group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <Shield size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Zero Deposit Fees</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">We cover your deposit costs. 100% of your transferred capital is available for trading margin.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f8f9fa] flex items-center justify-center border border-neutral-100 group-hover:bg-white group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <Building2 size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Tier-1 Security</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">All transactions are processed through encrypted, regulated gateways for maximum protection.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Wallet Deposit Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full max-w-2xl relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2E62FF]/[0.03] rounded-full blur-[80px] -z-10" />
                            
                            <img 
                                src="/assets/depositwith/wallet-deposit.png" 
                                alt="Secure Deposits" 
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* WITHDRAWAL PROCESS — ALTERNATING LAYOUT                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
                        
                        {/* Left: Withdrawal Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full max-w-2xl relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2E62FF]/[0.03] rounded-full blur-[80px] -z-10" />
                            
                            <img 
                                src="/assets/depositwith/withdawal-section.png" 
                                alt="Fast Withdrawals" 
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>

                        {/* Right: Content & Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E62FF]/5 border border-[#2E62FF]/10 mb-8">
                                <Clock size={12} className="text-[#2E62FF]" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2E62FF]">Fast & Reliable</span>
                            </div>
                            
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tighter leading-[1.05] mb-6">
                                Withdraw your <span className="text-[#2E62FF]">profits.</span>
                            </h2>
                            
                            <p className="text-lg text-neutral-500 leading-relaxed mb-10">
                                Enjoy frictionless access to your funds. Our optimized withdrawal process guarantees that your profits reach your preferred account quickly and securely.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-neutral-100 group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <Wallet size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Flexible Limits</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">Withdraw your available balance efficiently. The minimum withdrawal amount is just $100.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-neutral-100 group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <Clock size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Same-Day Processing</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">Requests are handled by our dedicated finance team rapidly, often processed within 1-3 business hours.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-neutral-100 group-hover:border-[#2E62FF]/20 group-hover:shadow-sm transition-all">
                                        <CheckCircle2 size={22} className="text-[#2E62FF]" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1.5">Transparent Tracking</h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed">Monitor your withdrawal status in real-time through your dashboard, from request to settlement.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* PAYMENT METHODS TABLE                                    */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
                                <CreditCard size={12} className="text-neutral-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600">Payment Gateways</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tighter mb-4">
                                Accepted <span className="text-[#2E62FF]">Payment Methods.</span>
                            </h2>
                            <p className="text-base text-neutral-500 max-w-2xl mx-auto">
                                Choose from our range of trusted, SSL-encrypted payment channels to fund your account instantly.
                            </p>
                        </motion.div>
                    </div>

                    {/* Methods Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
                        {paymentMethods.map((method, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-2xl border border-neutral-100 bg-white hover:shadow-2xl hover:shadow-[#2E62FF]/5 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="h-8 w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                                    <img src={method.imgSrc} alt={method.name} className="max-h-full max-w-full object-contain grayscale-[0.6] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Info Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-neutral-100 overflow-hidden shadow-sm bg-white"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-white border-b border-neutral-100">
                                    <tr>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Method</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Commission</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Execution</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Min. Deposit</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Min. Withdrawal</th>
                                        <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-50 bg-white">
                                    {paymentMethods.map((method, idx) => (
                                        <tr key={idx} className="group hover:bg-[#fafafa] transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="w-16 h-8 flex items-center justify-start">
                                                    <img src={method.imgSrc} alt={method.name} className="max-h-full max-w-full object-contain" />
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-semibold text-neutral-600">0%</td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-2">
                                                    <Clock size={14} className="text-[#2E62FF]" />
                                                    <span className="text-sm font-semibold text-neutral-600">1-3 Hours</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-sm font-black text-[#0a0a0a]">$1.00</td>
                                            <td className="px-8 py-5 text-sm font-black text-[#0a0a0a]">$100.00</td>
                                            <td className="px-8 py-5 text-right">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    Available
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* CLIENT FUND SECURITY — DARK BAND                        */}
            {/* ═══════════════════════════════════════════════════════ */}
            {/* ═══════════════════════════════════════════════════════ */}
            {/* CLIENT FUND SECURITY — DARK BAND                        */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16 bg-[#030712] text-white overflow-hidden relative flex flex-col justify-center">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                    <ShaderAnimation className="w-full h-full" />
                </div>
                
                {/* Seamless Edge Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />
                
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E62FF]/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 z-0 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 z-0 pointer-events-none" />

                {/* Cinematic Edge Shield */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-32 md:-right-64 z-10 pointer-events-none opacity-[0.03] transform rotate-[-15deg]">
                    <Shield className="w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] text-white drop-shadow-2xl" strokeWidth={0.2} />
                </div>

                <div className="max-w-[1400px] w-full mx-auto px-6 relative z-20">
                    <div className="text-center mb-16">
                         <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-black tracking-tighter mb-6 text-white flex items-center justify-center flex-wrap gap-x-3">
                                Client Fund 
                                <span className="text-[#2E62FF] inline-flex items-center gap-1">
                                    Security 
                                    <Shield className="w-10 h-10 md:w-14 md:h-14 text-[#2E62FF] rotate-12 drop-shadow-[0_0_20px_rgba(46,98,255,0.6)]" strokeWidth={2} />
                                    <span className="-ml-1">.</span>
                                </span>
                            </h2>
                            <p className="text-white/50 text-base max-w-2xl mx-auto font-medium">
                                New Trade FX Services places strong emphasis on protecting client funds and ensuring financial transaction security.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Lock size={24} />,
                                title: 'Encrypted Gateways',
                                desc: 'All payment transactions are secured using industry-standard SSL encryption and monitored in real-time.'
                            },
                            {
                                icon: <Eye size={24} />,
                                title: 'Continuous Monitoring',
                                desc: 'Transaction monitoring systems actively detect and prevent unauthorized or suspicious financial activity.'
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: 'Segregated Accounts',
                                desc: 'Client funds are held in fully segregated accounts, separate from company operational capital at all times.'
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                            >
                                {/* Inner Hover Glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#2E62FF]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E62FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#2E62FF] group-hover:border-[#2E62FF] group-hover:shadow-[0_0_30px_rgba(46,98,255,0.3)] transition-all duration-500">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* IMPORTANT GUIDELINES — LIGHT MODE                       */}
            {/* ═══════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-[#f7f8fa]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                                <ShieldCheck size={14} className="text-emerald-600" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Client Protection</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tighter leading-[1.05] mb-8">
                                Trusted <span className="text-emerald-600">Verification.</span>
                            </h2>
                            <p className="text-base text-neutral-500 leading-relaxed mb-8">
                                To guarantee the utmost security of your funds, we employ a streamlined verification process. This vital step shields your account from unauthorized access and ensures you trade in a fully compliant, protected environment.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 max-w-lg w-full"
                        >
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: <UserCheck size={20} />, title: 'KYC Verification', desc: 'Government-issued ID required for account verification before first withdrawal.' },
                                    { icon: <FileCheck size={20} />, title: 'Proof of Address', desc: 'Recent utility bill or bank statement to verify residential address.' },
                                    { icon: <Fingerprint size={20} />, title: 'Anti-Fraud Protection', desc: 'Advanced systems to protect against unauthorized access and fraudulent activity.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-neutral-100 hover:shadow-lg hover:shadow-[#2E62FF]/[0.03] transition-shadow duration-500"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#2E62FF]/5 text-[#2E62FF] flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#0a0a0a] mb-1">{item.title}</h4>
                                            <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Shared Sections */}
            <DownloadSection />
            <PremiumMarquee />
            <FAQSection />
        </main>
    );
}
