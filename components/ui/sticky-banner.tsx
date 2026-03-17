"use client";
import React, { SVGProps, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
    className,
    children,
    onClose,
}: {
    className?: string;
    children: React.ReactNode;
    onClose?: () => void;
}) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={cn(
                        "fixed inset-x-0 top-0 z-[200] flex min-h-10 w-full items-center justify-center px-4 py-2",
                        className,
                    )}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {children}

                    <button
                        className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors"
                        onClick={handleClose}
                    >
                        <CloseIcon className="h-4 w-4 text-white/80 hover:text-white transition-colors" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};
