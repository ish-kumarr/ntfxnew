'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        title: "Advanced Trading Technology",
        description: "Our trading platform is built using modern infrastructure designed to provide reliable performance and fast execution speeds. Traders can access real-time market data and execute trades with minimal delay through advanced charting systems and multiple analytical tools.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop", // Trading charts/screens
        alt: "Professional trading setup with multiple monitors showing market data"
    },
    {
        title: "Competitive Trading Conditions",
        description: "Transparent pricing and competitive spreads are essential components of a professional trading environment. New Trade FX Services provides fair and flexible trading conditions that support both beginner and experienced traders across all asset classes.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data/Analytics/Business
        alt: "Data analytics displayed on a digital screen"
    },
    {
        title: "Secure Trading Environment",
        description: "Security is a critical aspect of online trading. Our platform incorporates modern encryption technologies and secure data management systems to protect user information and financial transactions at all times.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop", // Abstract security/data center
        alt: "Secure digital payment terminal indicating financial security"
    },
    {
        title: "Dedicated Customer Support",
        description: "Our support team is available to assist traders with account setup, platform navigation, and general inquiries. Providing responsive and reliable customer support ensures that traders can resolve issues quickly and continue trading without interruptions.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop", // Professional support/office
        alt: "Professional in an office environment representing customer support"
    }
];

export function WhyChooseUs() {
    return (
        <section className="relative w-full bg-[#030712] py-24 lg:py-32 overflow-x-clip antialiased">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2E62FF]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
                        <ShieldCheck className="text-[#22C55E]" size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Platform Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                        Why Choose <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E62FF] to-blue-400">New Trade FX Services</span>
                    </h2>
                    <p className="mt-8 text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Experience a trading environment built on transparency, performance, and professional-grade technology. We provide the tools and security you need to trade with confidence.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8 pb-[10vh] md:pb-0 pt-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-[#0A0F1C] border border-white/5 rounded-3xl overflow-hidden hover:border-[#2E62FF]/30 transition-all duration-500 md:relative sticky shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.8)] md:shadow-none top-[var(--stick-offset)] md:top-auto"
                            style={{ '--stick-offset': `calc(100px + ${index * 32}px)` } as React.CSSProperties}
                        >
                            {/* Hover Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2E62FF]/0 to-[#2E62FF]/0 group-hover:from-[#2E62FF]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                            
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent z-10"></div>
                                <Image 
                                    src={feature.image} 
                                    alt={feature.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content Block */}
                            <div className="relative z-20 flex flex-col flex-1 p-8 lg:p-10 -mt-20">
                                {/* Glass Panel Effect behind text */}
                                <div className="absolute inset-0 bg-[#0A0F1C]/80 backdrop-blur-md rounded-t-3xl -z-10 transition-all duration-300 group-hover:bg-[#0A0F1C]/90"></div>
                                
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#2E62FF]/10 text-[#2E62FF] flex items-center justify-center font-bold text-xl border border-[#2E62FF]/20 group-hover:scale-110 transition-transform duration-300">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-neutral-400 font-medium leading-relaxed flex-1 mt-2 group-hover:text-neutral-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Edge Gradients */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}
