"use client"

import React from "react"
import { motion } from "framer-motion"

export function ComingSoon() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* SaaS Typography: Clean, bold, high tracking, minimal */}
          <h1 className="text-white text-[12px] md:text-[14px] font-medium uppercase tracking-[0.6em] antialiased">
            Coming Soon
          </h1>
          
          {/* Subtle accent line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-[1px] bg-white/20 mt-4"
          />
        </motion.div>
      </div>

      {/* Optional: Minimalist back link if they want it, but they said "likh bs" (just write) */}
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-12 text-white text-[10px] font-medium uppercase tracking-[0.3em] transition-opacity"
      >
        Go Back
      </motion.button>
    </div>
  )
}
