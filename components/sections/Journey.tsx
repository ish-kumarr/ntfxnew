'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Headphones, Zap } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Create Your Account',
        description: 'Complete the online registration form to open your trading account in just a few minutes. Fast, streamlined, and fully digital.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Verify Your Information',
        description: 'Account verification ensures the utmost security of your transactions, complying with strict global financial standards and anti-fraud protocols.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Fund Your Account',
        description: 'Deposit funds instantly and securely using our supported, fee-free payment methods. Your capital is held securely in segregated tier-1 bank accounts.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Begin Trading',
        description: 'Access global markets and start executing your strategies through our elite professional platform, featuring nanosecond execution and deep liquidity.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
        ),
    },
];

const JourneyStep = ({ 
    step, 
    idx, 
    scrollYProgress 
}: { 
    step: typeof steps[0], 
    idx: number, 
    scrollYProgress: any 
}) => {
    // Calculate if this step is "completed" or "active"
    // Each step gets a 25% range of the total scroll
    const range = [idx * 0.25, idx * 0.25 + 0.1];
    
    const bgColor = useTransform(scrollYProgress, range, ["#ffffff", "#2E62FF"]);
    const iconColor = useTransform(scrollYProgress, range, ["#94a3b8", "#ffffff"]);
    const borderColor = useTransform(scrollYProgress, range, ["#f1f5f9", "#2E62FF"]);
    const shadow = useTransform(scrollYProgress, range, [
        "0 1px 2px rgba(0,0,0,0.05)", 
        "0 0 20px rgba(46,98,255,0.4)"
    ]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group pt-4"
        >
            {/* Node Icon */}
            <div className="absolute -left-[45px] sm:-left-[64px] lg:-left-[72px] top-6 z-20">
                <motion.div 
                    style={{ 
                        backgroundColor: bgColor,
                        color: iconColor,
                        borderColor: borderColor,
                        boxShadow: shadow
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                >
                    <div className="scale-90 transition-transform duration-500 group-hover:scale-100">
                        {step.icon}
                    </div>
                </motion.div>
            </div>

            {/* Card Content */}
            <div className="relative p-8 sm:p-10 md:p-12 bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden">
                {/* Large Serif Background Number */}
                <span className="absolute -bottom-8 -right-4 text-[10rem] sm:text-[12rem] md:text-[14rem] font-serif italic text-slate-100/50 pointer-events-none select-none leading-none tracking-tighter transition-colors group-hover:text-blue-50/80">
                    {step.num}
                </span>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-bold text-[#2E62FF] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100/50">
                            Phase {step.num}
                        </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-5 leading-tight">
                        {step.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed font-medium max-w-md">
                        {step.description}
                    </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </motion.div>
    );
};

export function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative w-full bg-white py-24 lg:py-36 overflow-clip">
            {/* Simple Gradient Blob for Modern Minimalist Look */}
            <div className="absolute top-0 right-0 w-[50%] h-[600px] bg-gradient-to-bl from-blue-50/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Fixed Context with Sticky Offset */}
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32 lg:h-fit mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-xl py-12"
                        >
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
                                <Zap className="text-[#22C55E]" size={14} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Onboarding Process</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-8">
                                Start Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2042B0] to-[#3B62F6]">
                                    Trading Journey
                                </span>
                            </h2>
                            <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-10 max-w-sm font-medium">
                                We've simplified our onboarding process, allowing you to go from registration to your first trade in minutes. Experience a seamless and secure entry into the global financial markets.
                            </p>
                            
                             {/* CTA Area: Grouped & Contained */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-2 rounded-[2rem] bg-slate-50 border border-slate-200/60 w-fit">
                                <button className="group relative px-8 py-4 bg-[#2E62FF] text-white rounded-[1.25rem] font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-[#1e4cd1] hover:-translate-y-0.5 overflow-hidden whitespace-nowrap">
                                    <motion.div 
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg]" 
                                    />
                                    <span className="relative flex items-center justify-center gap-3">
                                        Open Your Account
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </button>

                                <button className="group flex items-center justify-center gap-3 px-6 py-4 text-[#475569] hover:text-[#0F172A] font-bold text-sm tracking-wide transition-all whitespace-nowrap">
                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2E62FF] group-hover:border-blue-200 transition-all">
                                        <Headphones className="w-4 h-4" />
                                    </div>
                                    Talk to a Consultant
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: The Visual Path */}
                    <div className="w-full lg:w-7/12 relative pl-10 sm:pl-20 lg:pl-24">
                        {/* The Path Line */}
                        <div className="absolute left-[19px] sm:left-[44px] lg:left-[52px] top-[66px] bottom-[100px] w-[2px] bg-slate-200">
                            <motion.div 
                                style={{ scaleY }}
                                className="w-full h-full bg-gradient-to-b from-[#2E62FF] via-[#3B62F6] to-blue-200 origin-top shadow-[0_0_15px_rgba(46,98,255,0.3)]"
                            />
                        </div>

                        {/* Steps Loop */}
                        <div className="flex flex-col gap-24 lg:gap-40">
                            {steps.map((step, idx) => (
                                <JourneyStep 
                                    key={step.num} 
                                    step={step} 
                                    idx={idx} 
                                    scrollYProgress={scrollYProgress} 
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
}
