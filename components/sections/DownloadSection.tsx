'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Monitor } from 'lucide-react';
import ColorBends from '@/components/ui/ColorBends';

const AppleButton = () => (
    <a
        href="https://download.mql5.com/cdn/mobile/mt5/ios?server=NewTradeFxServices-Server"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-white hover:bg-slate-50 active:bg-slate-200 rounded-[1.125rem] px-5 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:translate-y-0.5 min-w-[160px] flex-1 sm:flex-none border border-transparent hover:border-white"
    >
        <div className="w-8 h-8 flex justify-center items-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="w-[28px] h-[28px] fill-black group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">App Store</span>
            <span className="text-[14px] font-black text-black leading-none tracking-tight">iOS</span>
        </div>
    </a>
);

const WindowsButton = () => (
    <a
        href="https://download.mql5.com/cdn/web/new.tradefx.services/mt5/newtradefxservices5setup.exe"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#0078D7] hover:bg-[#0086F0] active:bg-[#005A9E] rounded-[1.125rem] px-5 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,120,215,0.25)] hover:shadow-[0_0_35px_rgba(0,120,215,0.5)] hover:-translate-y-1 active:translate-y-0.5 min-w-[160px] flex-1 sm:flex-none border border-[#0078D7] hover:border-[#3399FF]"
    >
        <div className="w-8 h-8 flex justify-center items-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-[26px] h-[26px] fill-white group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <path d="M6,6h17v17H6V6z"></path><path d="M25.042,22.958V6H42v16.958H25.042z"></path><path d="M6,25h17v17H6V25z"></path><path d="M25,42V25h17v17H25z"></path>
            </svg>
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[9px] text-blue-100 font-bold uppercase tracking-wider mb-0.5">Desktop App</span>
            <span className="text-[14px] font-black text-white leading-none tracking-tight">Windows</span>
        </div>
    </a>
);

const AndroidButton = () => (
    <a
        href="https://download.mql5.com/cdn/mobile/mt5/android?server=NewTradeFxServices-Server"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#0F141A] hover:bg-[#1A2533] active:bg-[#0A0E13] border border-[#3DDC84]/30 hover:border-[#3DDC84] rounded-[1.125rem] px-5 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(61,220,132,0.05)] hover:shadow-[0_0_30px_rgba(61,220,132,0.2)] hover:-translate-y-1 active:translate-y-0.5 min-w-[160px] flex-1 sm:flex-none"
    >
        <div className="w-8 h-8 flex justify-center items-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-[30px] h-[30px] fill-[#3DDC84] group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <path d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
            </svg>
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[9px] text-[#3DDC84]/90 font-bold uppercase tracking-wider mb-0.5">Play Store</span>
            <span className="text-[14px] font-black text-white leading-none tracking-tight">Android</span>
        </div>
    </a>
);

export function DownloadSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section id="downloads" className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 bg-white overflow-hidden z-20">
            <motion.div
                ref={containerRef}
                style={{ scale }}
                className="max-w-[1300px] w-full mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0D15] relative flex flex-col lg:flex-row items-stretch min-h-0 md:min-h-[460px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-800/60 group overflow-hidden"
            >

                {/* === Color Bends Background Style === */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <ColorBends 
                        colors={['#2563EB', '#6366F1', '#4F46E5', '#3B82F6', '#1E40AF']}
                        speed={0.2}
                        scale={1.0}
                        rotation={0}
                        autoRotate={0}
                        warpStrength={1.0}
                        frequency={1.0}
                        mouseInfluence={1.0}
                        parallax={0.5}
                        noise={0.1}
                    />
                    
                    {/* Darker, more purposeful overlay for depth without washing out shapes */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D15]/90 via-[#0A0D15]/40 to-transparent z-[1]" />

                    {/* Left edge subtle shine */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent z-[2]" />
                </div>

                {/* === Left Content Panel === */}
                <div className="relative z-10 w-full lg:w-[55%] xl:w-[55%] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Live Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6 md:mb-8 backdrop-blur-md shadow-inner text-[#22C55E]">
                            <Monitor size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">
                                Downloads
                            </span>
                        </div>

                        {/* Title Section */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 drop-shadow-sm">
                            Powerful Trading. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-indigo-400">
                                On Every Device.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-medium mb-8 md:mb-10 max-w-[420px] lg:max-w-md">
                            Take the full power of TradeFX's elite professional-grade liquidity and millisecond precision wherever you go. Seamless execution across desktop, web, and mobile platforms.
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6 md:mb-8" />

                        {/* Action Buttons Row */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                            <div className="flex-1 sm:flex-none"><WindowsButton /></div>
                            <div className="flex-1 sm:flex-none"><AppleButton /></div>
                            <div className="flex-1 sm:flex-none"><AndroidButton /></div>
                        </div>
                    </motion.div>
                </div>

                {/* === Right Image Presentation === */}
                <div className="relative z-10 w-full lg:w-[45%] xl:w-[45%] flex items-center justify-center pt-0 pb-10 sm:pb-12 lg:py-0 overflow-visible mt-4 lg:mt-0">
                    <motion.div
                        style={{ y: imageY }}
                        className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[480px] max-w-[400px] sm:max-w-[500px] lg:max-w-none ml-auto mr-auto lg:mr-0 lg:absolute lg:right-[-40px] xl:right-[-60px]"
                    >
                        {/* Shadow underneath image for depth */}
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-black/60 blur-[30px] rounded-[100%]" />

                        <Image
                            src="/assets/download-app.png"
                            alt="TradeFX Application Environment"
                            fill
                            className="object-contain object-center lg:object-right scale-[1.05] sm:scale-100 lg:scale-[1.15] xl:scale-[1.25] transform-origin-right drop-shadow-2xl z-10"
                            quality={100}
                            priority
                        />
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}
