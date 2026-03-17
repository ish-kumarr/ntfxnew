'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const packages = [
    {
        name: "Standard",
        target: "Startups & Small Traders",
        deposit: "$100",
        tagline: "The perfect entry point for new market participants.",
        popular: false,
        features: [
            { name: "Spread", value: "From 2.5 Pips", active: true },
            { name: "Commission", value: "Zero", active: true },
            { name: "Max Leverage", value: "1:500", active: true },
            { name: "EAs", value: "Allowed", active: true },
            { name: "Scalping", value: "Not Allowed", active: false },
            { name: "News Trading", value: "No", active: false },
        ]
    },
    {
        name: "Pro",
        target: "Professional Traders",
        deposit: "$500",
        tagline: "Professional performance for active active traders.",
        popular: true,
        features: [
            { name: "Spread", value: "From 1.5 Pips", active: true },
            { name: "Commission", value: "Zero", active: true },
            { name: "Max Leverage", value: "1:500", active: true },
            { name: "EAs", value: "Allowed", active: true },
            { name: "Scalping", value: "Not Allowed", active: false },
            { name: "News Trading", value: "No", active: false },
        ]
    },
    {
        name: "ECN",
        target: "Advanced Traders",
        deposit: "$1,000",
        tagline: "Direct raw-spread access with zero compromise.",
        popular: false,
        features: [
            { name: "Spread", value: "Raw Spread", active: true },
            { name: "Commission", value: "Standard", active: true },
            { name: "Max Leverage", value: "1:500", active: true },
            { name: "EAs", value: "Allowed", active: true },
            { name: "Scalping", value: "Not Allowed", active: false },
            { name: "News Trading", value: "No", active: false },
        ]
    },
    {
        name: "Robo",
        target: "Algorithmic Traders",
        deposit: "$1,500",
        tagline: "Optimized pathways for automated precision trading.",
        popular: false,
        features: [
            { name: "Spread", value: "3.5 Pips", active: true },
            { name: "Commission", value: "Zero", active: true },
            { name: "Max Leverage", value: "1:500", active: true },
            { name: "EAs", value: "Allowed", active: true },
            { name: "Scalping", value: "Not Allowed", active: false },
            { name: "News Trading", value: "No", active: false },
        ]
    }
];

export function TradingPackages() {
    return (
        <section className="relative w-full bg-[#FAFAFA] py-24 lg:py-36 overflow-hidden antialiased">
            {/* Structural Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#2E62FF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
                            <Target className="text-[#22C55E]" size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Our Plans</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                            Tailored for <br />
                            <span className="italic font-serif text-[#2E62FF]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                Every Advantage.
                            </span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                            Choose the perfect professional-grade environment matching your capital requirements and trading strategies.
                        </p>
                    </motion.div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 bg-white border border-slate-200/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2`}
                        >
                            {/* Pro Card Magical Aura */}
                            {pkg.popular && (
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                                    {/* Multi-layered atmospheric aura */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-[radial-gradient(circle,rgba(46,98,255,0.12)_0%,transparent_60%)] opacity-80" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(46,98,255,0.08)_0%,transparent_50%)] opacity-100" />
                                    
                                    {/* Animated subtle light sweep */}
                                    <motion.div 
                                        animate={{ x: ['-200%', '200%'] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12 pointer-events-none"
                                    />
                                </div>
                            )}

                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="bg-[#2E62FF] text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/20">
                                        Popular
                                    </div>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-8 relative z-10">
                                <span className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-[0.2em] mb-4 block opacity-80">
                                    {pkg.target}
                                </span>
                                <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{pkg.name}</h3>
                                <p className={`text-sm text-slate-500 font-medium leading-relaxed h-10 opacity-70`}>
                                    {pkg.tagline}
                                </p>
                                
                                <div className="mt-10 flex flex-col gap-1.5">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">Starting from</span>
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-4xl font-black text-slate-900 tracking-tighter">{pkg.deposit}</span>
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">USD</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="flex-1 flex flex-col mb-10 relative z-10">
                                {pkg.features.map((feature, fIndex) => (
                                    <div key={fIndex} className={`flex items-center justify-between py-4 border-b border-slate-50/80 last:border-0`}>
                                        <span className={`text-[11px] font-bold uppercase tracking-widest ${feature.active ? 'text-slate-400' : 'text-slate-200'}`}>
                                            {feature.name}
                                        </span>
                                        <span className={`text-sm font-bold ${
                                            feature.active ? 'text-slate-900' : 'text-slate-200'
                                        } tracking-tight`}>
                                            {feature.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Action */}
                            <div className="mt-auto relative z-10">
                                <button className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
                                    pkg.popular
                                        ? 'bg-[#2E62FF] text-white hover:bg-[#1e4cd1] shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5'
                                        : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300'
                                }`}>
                                    Open {pkg.name}
                                </button>
                            </div>

                            {/* Card Accent Glow */}
                            {pkg.popular && (
                                <div className="absolute inset-0 border-2 border-blue-500/10 rounded-[2.5rem] pointer-events-none group-hover:border-blue-500/20 transition-colors" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

