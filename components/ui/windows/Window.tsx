"use client";

import { X } from "lucide-react";
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
        <div className="computer-font fixed inset-0 z-50 flex items-center justify-center bg-(--bg-dark)/40 backdrop-blur-xs">
            <div
                className="flex flex-col overflow-hidden rounded-lg border-t-stone-300 border border-(--border) bg-(--bg)/95 text-(--text) shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
                style={{ width, height }}
            >
                <div className="flex items-center justify-between border-b border-(--border-muted) bg-(--bg-dark)/90 text-(--text)">
                    <h2 className="mx-4 text-sm font-semibold uppercase tracking-[0.3em]">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--danger)/80"
                        aria-label="Close window"
                    >
                        <X/>
                    </button>
                </div>
                <div className="flex-1 overflow-auto bg-(--bg)/80 p-5 text-sm leading-relaxed text-(--text-muted)">
                    {children}
                </div>
            </div>
        </div>
    );
}

