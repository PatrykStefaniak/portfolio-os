"use client";

import { ReactNode } from "react";

type WindowProps = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    width?: string;
    height?: string;
};

export default function Window({ title, isOpen, onClose, children, width = "600px", height = "400px" }: WindowProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div 
                className="flex flex-col rounded-lg border border-white/30 bg-gradient-to-b from-[#1b63bc] to-[#0d4e92] shadow-2xl"
                style={{ width, height }}
            >
                <div className="flex items-center rounded-t-lg justify-between border-b border-white/20 bg-gradient-to-r from-[#0d4e92] to-[#1b63bc] px-4 py-2">
                    <h2 className="text-sm font-semibold text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="flex h-6 w-6 items-center justify-center rounded hover:bg-red-500/80 transition-colors"
                        aria-label="Close window"
                    >
                        <span className="text-white text-lg leading-none">×</span>
                    </button>
                </div>
                <div className="flex-1 overflow-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

