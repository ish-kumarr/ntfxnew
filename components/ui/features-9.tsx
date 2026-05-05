'use client'
import { Activity, Map as MapIcon, MessageCircle, Shield, Zap, Globe } from 'lucide-react'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

export function PlatformEfficiencyFeatures() {
    const isMobile = useIsMobile();
    return (
        <section className="px-4 py-16 md:py-32 bg-white text-slate-900 overflow-hidden">
            <div className="mx-auto max-w-7xl mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                    Elite Trading <span className="text-[#2E62FF]">Infrastructure.</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                    Experience the power of New Trade FX Services with our advanced global tracking and high-performance monitoring systems.
                </p>
            </div>

            <div className="w-full mx-auto grid max-w-6xl border border-slate-100 md:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-white">
                <div className="border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="p-6 sm:p-8 md:p-12">
                        <span className="text-[#2E62FF] font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <Globe className="size-4" />
                            Global Asset Monitoring
                        </span>

                        <p className="mt-6 md:mt-8 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-900 break-words">
                            Real-time Global <br className="hidden sm:block"/>Infrastructure Tracking.
                        </p>
                        <p className="mt-4 text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                            Instantly monitor all your trading assets across our global server network with sub-millisecond precision.
                        </p>
                    </div>

                    <div aria-hidden className="relative bg-slate-50/50 pt-12">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <motion.div 
                                initial={{ opacity: 0, y: isMobile ? 5 : 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                                className="rounded-2xl bg-white z-[1] relative flex size-fit w-fit items-center gap-3 border border-slate-100 px-4 py-2 text-xs font-bold shadow-xl shadow-slate-200/50"
                            >
                                <span className="text-lg">🌐</span> NTFx Server Node: London (LD4)
                            </motion.div>
                            <div className="rounded-2xl bg-slate-100/50 absolute inset-2 -bottom-2 mx-auto border border-slate-100 px-3 py-4 text-xs font-medium shadow-sm"></div>
                        </div>

                        <div className="relative overflow-hidden opacity-40 grayscale contrast-125 scale-110">
                            <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 from-transparent to-white absolute inset-0 to-90%"></div>
                            <Map />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50/30 p-6 sm:p-8 md:p-12">
                    <div className="relative z-10">
                        <span className="text-[#2E62FF] font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <MessageCircle className="size-4" />
                            24/7 Premium Support
                        </span>

                        <p className="mt-6 md:mt-8 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-900 break-words">
                            Instant Multi-Channel <br className="hidden sm:block"/>Support Ecosystem.
                        </p>
                        <p className="mt-4 text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                            Our dedicated expert team is available around the clock to ensure your trading operations remain seamless.
                        </p>
                    </div>
                    
                    <div aria-hidden className="mt-12 flex flex-col gap-6">
                        <motion.div 
                            initial={{ opacity: 0, x: isMobile ? -10 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex items-center gap-2">
                                <span className="flex justify-center items-center size-5 rounded-full border border-slate-200">
                                    <span className="size-2 rounded-full bg-[#2E62FF]"/>
                                </span>
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Client Inquiry</span>
                            </div>
                            <div className="rounded-2xl bg-white w-[85%] border border-slate-100 p-4 text-sm font-medium text-slate-600 shadow-sm">
                                Can you confirm the execution speed on the ECN Pro account?
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: isMobile ? 10 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                            transition={{ delay: isMobile ? 0.1 : 0.2 }}
                            className="flex flex-col gap-2 items-end"
                        >
                            <div className="rounded-2xl mb-1 w-[85%] bg-[#2E62FF] p-4 text-sm font-bold text-white shadow-lg shadow-blue-200">
                                Certainly! Our ECN Pro accounts average sub-30ms execution via our Equinix LD4 data center integration.
                            </div>
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">NTFx Support Representative</span>
                        </motion.div>
                    </div>
                </div>

                <div className="col-span-full border-y border-slate-100 p-8 sm:p-12 md:p-20 bg-slate-50/20 text-center">
                    <motion.div
                        initial={{ scale: isMobile ? 0.95 : 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: isMobile ? "-30px" : "0px" }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mb-2 md:mb-4">
                            <Shield className="size-3" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Guaranteed Uptime</span>
                        </div>
                        <p className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter text-slate-900 break-words">
                            99.99% <span className="text-[#2E62FF]">Uptime</span>
                        </p>
                        <p className="text-slate-500 font-medium text-sm sm:text-base md:text-lg">Reliable infrastructure you can trust for mission-critical trading.</p>
                    </motion.div>
                </div>

                <div className="relative col-span-full bg-white overflow-hidden">
                    <div className="absolute z-10 max-w-xl px-6 pt-6 sm:px-8 sm:pt-8 md:px-12 md:pt-12">
                        <span className="text-[#2E62FF] font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <Activity className="size-4" />
                            Performance Feed
                        </span>

                        <p className="my-4 md:my-6 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-900 break-words">
                            Real-time Execution <br className="hidden sm:block"/>Metrics Monitoring.
                        </p>
                        <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                            Stay ahead with direct insights into platform performance and network latency across all global trading sessions.
                        </p>
                    </div>
                    <div className="pt-[22rem] sm:pt-48 md:pt-32">
                        <MonitoringChart />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Removed dotted-map dependency and implemented native SVG dot pattern for reliability
const Map = () => {
    return (
        <div className="w-full aspect-[2/1] relative">
            <svg viewBox="0 0 120 60" className="w-full h-full">
                <defs>
                    <pattern id="dotPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.8" fill="#CBD5E1" />
                    </pattern>
                    <mask id="mapMask">
                        {/* Simple world map shape fallback using paths if needed, 
                            but for now a stylized rectangular grid works best for infrastructure visualization */}
                        <rect x="0" y="0" width="120" height="60" fill="white" fillOpacity="0.4" />
                        <path 
                            d="M20,25 Q30,15 45,20 T70,30 T100,25" 
                            stroke="white" 
                            strokeWidth="12" 
                            fill="none" 
                            strokeLinecap="round"
                            className="opacity-60"
                        />
                    </mask>
                </defs>
                <rect x="0" y="0" width="120" height="60" fill="url(#dotPattern)" mask="url(#mapMask)" />
            </svg>
        </div>
    )
}

const chartConfig = {
    desktop: {
        label: 'Platform Load',
        color: '#2E62FF',
    },
    mobile: {
        label: 'Execution Speed',
        color: '#94A3B8',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 156, mobile: 124 },
    { month: 'June', desktop: 156, mobile: 124 },
    { month: 'Jan', desktop: 186, mobile: 152 },
    { month: 'Feb', desktop: 205, mobile: 110 },
    { month: 'Mar', desktop: 250, mobile: 126 },
    { month: 'Apr', desktop: 300, mobile: 100 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-[300px] md:h-[450px] w-full" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.15} />
                        <stop offset="70%" stopColor="var(--color-desktop)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                        <stop offset="70%" stopColor="var(--color-mobile)" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="bg-white border-slate-100 shadow-xl" />} />
                <Area strokeWidth={3} dataKey="mobile" type="monotone" fill="url(#fillMobile)" fillOpacity={1} stroke="var(--color-mobile)" />
                <Area strokeWidth={3} dataKey="desktop" type="monotone" fill="url(#fillDesktop)" fillOpacity={1} stroke="var(--color-desktop)" />
            </AreaChart>
        </ChartContainer>
    )
}
