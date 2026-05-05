"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CinematicHero({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mockupWrapRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightLogoRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const widget1Ref = useRef<HTMLDivElement>(null);
  const widget2Ref = useRef<HTMLDivElement>(null);
  const widget3Ref = useRef<HTMLDivElement>(null);
  const widget4Ref = useRef<HTMLDivElement>(null);
  const widget5Ref = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // Mouse parallax on mockup
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mockupRef.current) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (!mockupRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(mockupRef.current, { rotationY: x * 12, rotationX: -y * 12, ease: "power3.out", duration: 1.2 });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => { window.removeEventListener("mousemove", handleMouseMove); cancelAnimationFrame(requestRef.current); };
  }, []);

  // Scroll timeline
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer || !cardRef.current || !heroTextRef.current || !ctaRef.current || !mockupWrapRef.current || !leftTextRef.current || !rightLogoRef.current || !badge1Ref.current || !badge2Ref.current || !progressRef.current || !counterRef.current) return;

    const widgets = [widget1Ref.current, widget2Ref.current, widget3Ref.current, widget4Ref.current, widget5Ref.current].filter(Boolean);

    // Intro text animation (auto, not scroll-linked)
    const introTl = gsap.timeline({ delay: 0.3 });
    const l1 = heroTextRef.current.querySelector(".cin-l1");
    const l2 = heroTextRef.current.querySelector(".cin-l2");
    if (l1 && l2) {
      gsap.set(l1, { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)" });
      gsap.set(l2, { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      introTl
        .to(l1, { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.8, ease: "expo.out" })
        .to(l2, { clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power4.inOut" }, "-=1.0");
    }

    // Scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: { trigger: outer, start: "top top", end: "bottom bottom", scrub: true },
    });

    const isDesktop = window.innerWidth >= 1024;
    const startWidth = isDesktop ? "85vw" : "92vw";
    const startHeight = "85vh";

    tl
      // Phase 1: Hero fades, card slides up
      .to(heroTextRef.current, { scale: 1.15, filter: "blur(20px)", opacity: 0.2, duration: 2 }, 0)
      .fromTo(cardRef.current, 
        { y: "110vh", width: startWidth, height: startHeight, borderRadius: "40px" }, 
        { y: 0, width: startWidth, height: startHeight, borderRadius: "40px", duration: 2, ease: "power3.inOut" }, 0)
      // Phase 2: Card expands to fullscreen
      .to(cardRef.current, { width: "100vw", height: "100vh", borderRadius: "0px", duration: 1.5, ease: "power3.inOut" })
      // Phase 3: Mockup flies in with 3D rotation
      .fromTo(mockupWrapRef.current,
        { y: 300, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
        { y: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, duration: 2.5, ease: "expo.out" }, "-=0.8")
      // Phase 4: Phone widgets stagger in
      .fromTo(widgets, { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.12, duration: 1.2, ease: "back.out(1.2)" }, "-=1.2")
      // Phase 5: Progress ring draws + counter counts
      .fromTo(progressRef.current, { strokeDashoffset: 402 }, { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.0")
      .to(counterRef.current, { innerHTML: 30, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
      // Phase 6: Floating badges fly in
      .fromTo([badge1Ref.current, badge2Ref.current],
        { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
        { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, stagger: 0.2, duration: 1.5, ease: "back.out(1.5)" }, "-=1.5")
      // Phase 7: Left text + right logo slide in
      .fromTo(leftTextRef.current, { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.5, ease: "power4.out" }, "-=1.2")
      .fromTo(rightLogoRef.current, { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1.5, ease: "expo.out" }, "<")
      // Phase 8: Hold
      .to({}, { duration: 2 })
      // Phase 9: Everything out, CTA in
      .to([mockupWrapRef.current, badge1Ref.current, badge2Ref.current, leftTextRef.current, rightLogoRef.current],
        { scale: 0.9, y: -40, autoAlpha: 0, duration: 1.2, stagger: 0.05, ease: "power3.in" })
      .to(heroTextRef.current, { autoAlpha: 0, duration: 0.1 })
      .fromTo(ctaRef.current, { autoAlpha: 0, scale: 0.85, filter: "blur(20px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 1.8, ease: "expo.out" }, "-=0.8")
      // Phase 10: Hold CTA
      .to({}, { duration: 2 });

    return () => { introTl.kill(); tl.kill(); };
  }, []);

  return (
    <div ref={outerRef} className={cn("relative w-full", className)} style={{ height: "500vh" }} {...props}>
      <div ref={stickyRef} className="sticky top-0 w-screen h-screen overflow-hidden flex items-center justify-center bg-[#030712]" style={{ perspective: "1500px" }}>
        {/* Grid + Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30" style={{ backgroundSize: "60px 60px", backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)", maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }} />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/8 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

        {/* HERO TEXT */}
        <div ref={heroTextRef} className="absolute z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h2 className="cin-l1 text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-3 text-white" style={{ textShadow: "0 8px 30px rgba(255,255,255,0.08)" }}>Master the markets,</h2>
          <h2 className="cin-l2 text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-white/40">with precision execution.</h2>
        </div>

        {/* THE CARD */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
          <div ref={cardRef} className="relative overflow-hidden flex items-center justify-center pointer-events-auto w-[92%] lg:w-[85%] h-[85%]" style={{ borderRadius: "40px", transform: "translateY(110vh)", background: "linear-gradient(145deg, #162C6D 0%, #0A101D 100%)", boxShadow: "0 40px 100px -20px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.04)" }}>

            <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
              {/* Logo */}
              <div ref={rightLogoRef} className="order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full" style={{ opacity: 0, visibility: "hidden" }}>
                <div className="relative w-[180px] h-[50px] md:w-[280px] md:h-[80px] lg:w-[360px] lg:h-[100px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
                  <Image src="/new tradefx logo wide rectangle.png" alt="NTFx" fill className="object-contain brightness-0 invert" priority />
                </div>
              </div>

              {/* Mockup wrapper */}
              <div ref={mockupWrapRef} className="order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px", opacity: 0, visibility: "hidden" }}>
                <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-[0.8] lg:scale-100">
                  <div ref={mockupRef} className="relative w-[280px] h-[580px] rounded-[3rem]" style={{ backgroundColor: "#111", boxShadow: "inset 0 0 0 2px #52525B, inset 0 0 0 7px #000, 0 40px 80px -15px rgba(0,0,0,0.9)", transformStyle: "preserve-3d" }}>
                    <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] rounded-l-md" style={{ background: "linear-gradient(90deg, #404040, #171717)" }} />
                    <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] rounded-l-md" style={{ background: "linear-gradient(90deg, #404040, #171717)" }} />
                    <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] rounded-l-md" style={{ background: "linear-gradient(90deg, #404040, #171717)" }} />
                    <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] rounded-r-md" style={{ background: "linear-gradient(90deg, #171717, #404040)" }} />
                    <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden text-white z-10" style={{ boxShadow: "inset 0 0 15px rgba(0,0,0,1)" }}>
                      <div className="absolute inset-0 z-40 pointer-events-none" style={{ background: "linear-gradient(110deg, rgba(255,255,255,0.08) 0%, transparent 45%)" }} />
                      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: "0 0 8px rgba(34,197,94,0.8)" }} /></div>
                      <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                        <div ref={widget1Ref} className="flex justify-between items-center mb-8" style={{ opacity: 0, visibility: "hidden" }}>
                          <div><span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mb-1">Live Feed</span><span className="text-xl font-bold tracking-tight text-white">Markets</span></div>
                          <div className="w-9 h-9 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-sm border border-white/10">FX</div>
                        </div>
                        <div ref={widget2Ref} className="relative w-44 h-44 mx-auto flex items-center justify-center mb-8" style={{ opacity: 0, visibility: "hidden" }}>
                          <svg className="absolute inset-0 w-full h-full"><circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" /><circle ref={progressRef} cx="88" cy="88" r="64" fill="none" stroke="#3B82F6" strokeWidth="12" strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "center", strokeDasharray: 402, strokeDashoffset: 402 }} /></svg>
                          <div className="text-center z-10"><span ref={counterRef} className="text-4xl font-extrabold tracking-tighter text-white block">0</span><span className="text-[8px] text-blue-200/50 uppercase tracking-[0.1em] font-bold">ms Execution</span></div>
                        </div>
                        <div className="space-y-3">
                          <div ref={widget3Ref} className="rounded-2xl p-3 flex items-center" style={{ opacity: 0, visibility: "hidden", background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: "1px solid rgba(255,255,255,0.03)" }}>
                            <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center mr-3 border border-blue-400/20"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                            <div className="flex-1"><div className="h-2 w-20 bg-neutral-300 rounded-full mb-2" /><div className="h-1.5 w-12 bg-neutral-600 rounded-full" /></div>
                          </div>
                          <div ref={widget4Ref} className="rounded-2xl p-3 flex items-center" style={{ opacity: 0, visibility: "hidden", background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))", border: "1px solid rgba(255,255,255,0.03)" }}>
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mr-3 border border-emerald-400/20"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></div>
                            <div className="flex-1"><div className="h-2 w-16 bg-neutral-300 rounded-full mb-2" /><div className="h-1.5 w-24 bg-neutral-600 rounded-full" /></div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div ref={badge1Ref} className="absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30" style={{ opacity: 0, visibility: "hidden", background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))", backdropFilter: "blur(24px)", boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2)" }}>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-500/15 flex items-center justify-center border border-blue-400/30">
                      <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                    </div>
                    <div><p className="text-white text-xs lg:text-sm font-bold">Active Trade</p><p className="text-blue-200/50 text-[10px] lg:text-xs">Profit target reached</p></div>
                  </div>
                  <div ref={badge2Ref} className="absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30" style={{ opacity: 0, visibility: "hidden", background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))", backdropFilter: "blur(24px)", boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2)" }}>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-indigo-500/15 flex items-center justify-center border border-indigo-400/30">
                      <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-indigo-400" />
                    </div>
                    <div><p className="text-white text-xs lg:text-sm font-bold">Fast Execution</p><p className="text-blue-200/50 text-[10px] lg:text-xs">Sub-30ms verified</p></div>
                  </div>
                </div>
              </div>

              {/* Left text */}
              <div ref={leftTextRef} className="order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0" style={{ opacity: 0, visibility: "hidden" }}>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">Institutional Power, in your pocket.</h3>
                <div className="hidden md:block text-blue-100/60 text-sm lg:text-lg leading-relaxed max-w-sm lg:max-w-none"><span className="text-white font-semibold">New Trade FX Services</span> provides direct market access with sub-millisecond execution, institutional-grade liquidity, and advanced trading analytics.</div>
              </div>
            </div>

            <div ref={ctaRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 md:px-12 pointer-events-auto" style={{ opacity: 0, visibility: "hidden" }}>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold mb-4 md:mb-6 tracking-tight text-white leading-[1.1]" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                Powerful Trading.<br />
                <span className="text-white/50">On Every Device.</span>
              </h2>
              
              <p className="text-blue-100/60 text-base md:text-xl lg:text-2xl mb-10 md:mb-14 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto font-medium leading-relaxed">
                Take the full power of New TradeFX&apos;s elite professional-grade liquidity and millisecond precision wherever you go.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-none mx-auto">
                {/* Windows */}
                <a href="https://download.mql5.com/cdn/web/new.tradefx.services/mt5/newtradefxservices5setup.exe" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5 overflow-hidden w-full sm:w-auto" style={{ background: "#0078D7", boxShadow: "0 8px 20px -4px rgba(0,120,215,0.4), inset 0 1px 1px rgba(255,255,255,0.2)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="fill-white shrink-0 group-hover:scale-110 transition-transform"><path d="M6,6h17v17H6V6z"/><path d="M25.042,22.958V6H42v16.958H25.042z"/><path d="M6,25h17v17H6V25z"/><path d="M25,42V25h17v17H25z"/></svg>
                  <div className="text-left"><span className="text-[9px] text-blue-100 font-bold uppercase tracking-wider block mb-0.5">Desktop App</span><span className="text-[15px] font-black text-white leading-none">Windows</span></div>
                </a>
                
                {/* iOS */}
                <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=NewTradeFxServices-Server" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5 overflow-hidden w-full sm:w-auto" style={{ background: "linear-gradient(180deg, #FFFFFF, #F1F5F9)", color: "#0F172A", boxShadow: "0 8px 20px -4px rgba(0,0,0,0.5), inset 0 1px 1px #fff" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 50 50" className="fill-black shrink-0 group-hover:scale-110 transition-transform"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/></svg>
                  <div className="text-left"><span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">App Store</span><span className="text-[15px] font-black text-black leading-none">iOS</span></div>
                </a>
                
                {/* Android */}
                <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=NewTradeFxServices-Server" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center sm:justify-start gap-3.5 px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5 overflow-hidden w-full sm:w-auto" style={{ background: "#0F141A", boxShadow: "0 8px 20px -4px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)", border: "1px solid rgba(61,220,132,0.2)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48" className="fill-[#3DDC84] shrink-0 group-hover:scale-110 transition-transform"><path d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"/><path d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"/><path d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"/></svg>
                  <div className="text-left"><span className="text-[9px] text-[#3DDC84]/90 font-bold uppercase tracking-wider block mb-0.5">Play Store</span><span className="text-[15px] font-black text-white leading-none">Android</span></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
