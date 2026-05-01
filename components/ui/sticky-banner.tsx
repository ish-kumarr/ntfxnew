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
    return (
        <div
            className={cn(
                "relative w-full flex min-h-10 items-center justify-center px-4 py-2 pointer-events-auto",
                className,
            )}
        >
            {children}

            <button
                className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors"
                onClick={onClose}
            >
                <CloseIcon className="h-4 w-4 text-white/80 hover:text-white transition-colors" />
            </button>
        </div>
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
