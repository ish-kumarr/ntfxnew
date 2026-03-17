'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    BarChart3, 
    Users, 
    LineChart, 
    Layers, 
    Cpu, 
    Zap 
} from 'lucide-react';

const features = [
    {
        title: "Advanced Analytical Tools",
        description: "Make smart decisions with precision using our suite of professional analysis tools and real-time performance metrics.",
        icon: <BarChart3 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-8 md:row-span-1",
    },
    {
        title: "Global Community",
        description: "Connect with experts and peers in our dedicated trading hub.",
        icon: <Users className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-4 md:row-span-1",
    },
    {
        title: "Pro Charting",
        description: "100+ technical indicators with zero lag.",
        icon: <LineChart className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-4 md:row-span-1",
    },
    {
        title: "Multi-Asset Liquidity",
        description: "Seamlessly trade Forex, Commodities, Indices, and Crypto markets from one professional-grade interface.",
        icon: <Layers className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1621416848446-24ea93ea8c7a?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-8 md:row-span-1",
    },
    {
        title: "Automated Trading Engine",
        description: "Deploy and manage algorithmic strategies with zero latency and ultra-precise execution parameters.",
        icon: <Cpu className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-6 md:row-span-1",
    },
    {
        title: "Lightning-Fast Execution",
        description: "Professional-grade execution powered by our fiber-optic network for the most demanding strategies.",
        icon: <Zap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
        className: "md:col-span-6 md:row-span-1",
    }
];

export function PlatformFeatures() {
    return (
        <section className="relative w-full bg-[#030712] py-24 lg:py-36 overflow-hidden antialiased">
            {/* Background Structural Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E62FF]/10 rounded-full blur-[160px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6">
                            <Cpu className="text-[#22C55E]" size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Our Technology</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
                            Advanced Platform for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2042B0] via-[#3B62F6] to-[#60A5FA]">
                                Modern Traders
                            </span>
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-neutral-400 text-lg md:text-xl leading-relaxed font-medium max-w-sm"
                    >
                        Experience elite performance and innovative tools designed to elevate your success in global markets.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr gap-4 lg:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-[2.5rem] overflow-hidden border border-white/[0.08] bg-neutral-900/40 backdrop-blur-sm transition-all duration-500 hover:border-[#2E62FF]/40 ${feature.className}`}
                        >
                            {/* Background Image with Parallax-like effect */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-luminosity brightness-75"
                                />
                                {/* Bottom-to-Top Gradient Mask */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/20 z-10" />
                                {/* Subtle Side Highlight */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                            </div>

                            {/* Content Overlays */}
                            <div className="relative z-20 h-full p-8 md:p-10 flex flex-col justify-end">
                                <div className="mb-auto">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:bg-[#2E62FF]/20 group-hover:text-[#2E62FF] group-hover:border-[#2E62FF]/40 transition-all duration-500">
                                        {feature.icon}
                                    </div>
                                </div>
                                
                                <div className="max-w-md">
                                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-400 font-medium leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Inner Border Glow Effect */}
                            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/0 group-hover:border-[#2E62FF]/20 rounded-[2.5rem] transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
