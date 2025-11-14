"use client";

import { WindowProps as BaseWindowProps } from "@/types/types";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import { ReactNode, useState } from "react";

interface WindowProps extends BaseWindowProps {
    title: string;
    children: ReactNode;
    width?: string;
    height?: string;
};

export default function Window(props: WindowProps) {
    const { title, isOpen, onClose, onMinimize, children, width = "600px", height = "400px" } = props;
    const [isMaximized, setIsMaximized] = useState(false);

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div className={`${!isOpen ? "hidden" : ""} computer-font fixed inset-0 z-50 flex items-center justify-center bg-(--bg-dark)/40 backdrop-blur-xs`}>
            <div
                className={`flex flex-col overflow-hidden rounded-lg border-t-stone-300 border border-(--border) bg-(--bg)/95 text-(--text) shadow-[0_24px_48px_rgba(0,0,0,0.55)] transition-all ${
                    isMaximized ? "w-full h-full rounded-none" : ""
                }`}
                style={isMaximized ? {} : { width, height }}
            >
                <div className="flex items-center justify-between border-b border-(--border-muted) bg-(--bg-dark)/90 text-(--text)">
                    <h2 className="mx-4 text-sm font-semibold uppercase tracking-[0.3em]">
                        {title}
                    </h2>
                    <div className="flex items-center">
                        <button
                            onClick={onMinimize || (() => {})}
                            className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--bg-light)/20"
                            aria-label="Minimize window"
                        >
                            <Minus size={16} />
                        </button>
                        <button
                            onClick={handleMaximize}
                            className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--bg-light)/20"
                            aria-label={isMaximized ? "Restore window" : "Maximize window"}
                        >
                            {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                        </button>
                        <button
                            onClick={onClose}
                            className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--danger)/80"
                            aria-label="Close window"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-auto bg-(--bg)/80 text-sm leading-relaxed text-(--text-muted)">
                    {children}
                </div>
            </div>
        </div>
    );
}

