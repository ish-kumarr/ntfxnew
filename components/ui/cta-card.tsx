"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      title = "Take the Next Step In Your Trading Journey",
      description = "Join thousands of professional traders experiencing sub-millisecond execution and deep liquidity.",
      primaryButtonText = "Open Live Account",
      primaryButtonHref = "#",
      secondaryButtonText = "Client Login",
      secondaryButtonHref = "#",
      ...props
    },
    ref
  ) => {
    return (
      <div 
        className={cn("relative w-full max-w-[1200px] mx-auto rounded-[2rem] overflow-hidden shadow-2xl", className)} 
        ref={ref} 
        {...props}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/backgrounds/cta.png" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to ensure text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-transparent mix-blend-multiply" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-start justify-center p-8 sm:p-12 md:p-16 lg:p-20 min-h-[400px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-white mb-4 leading-[1.1]">
              {title}
            </h2>
            
            <p className="text-white/80 text-base sm:text-lg lg:text-xl font-light mb-10 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href={primaryButtonHref} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-[#2E62FF] text-white hover:bg-[#1f4ae0] h-12 px-8 rounded-xl font-medium tracking-wide border border-[#2E62FF]"
                >
                  {primaryButtonText}
                </Button>
              </a>
              <a href={secondaryButtonHref} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white h-12 px-8 rounded-xl font-medium tracking-wide backdrop-blur-sm"
                >
                  {secondaryButtonText}
                </Button>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
