"use client";

import { useWindowProvider } from "@/contexts/WindowProvider";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import { ReactNode, useState } from "react";

interface WindowProps {
    title: string;
    children: ReactNode;
};

export default function Window(props: WindowProps) {
    const { title, children } = props;
    const {getWindowById, closeWindow, minimizeWindow} = useWindowProvider();
    const [isMaximized, setIsMaximized] = useState(false);
    const win = getWindowById(title);

    const handleMaximizeClick = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        <div
            className={`${win!.isMinimized ? "hidden" : ""} w-screen h-screen font-mono fixed inset-0 flex items-center justify-center bg-(--bg-dark)/40 backdrop-blur-xs`}
            style={{ zIndex: win?.zIndex ?? 50 }}
        >
            <div
                className={`${isMaximized ? "" : "sm:w-[60vw] sm:h-[70vh] sm:rounded-lg"} w-screen h-screen flex flex-col border border-(--border) border-t-0 bg-(--bg)/95 text-(--text) shadow-[0_24px_48px_rgba(0,0,0,0.55)] transition-all overflow-hidden`}
            >
                <div className="flex items-center justify-between border-b border-(--border-muted) bg-(--bg-dark)/90 text-(--text) window-border-top">
                    <h2 className="mx-4 text-sm font-semibold uppercase tracking-[0.3em]">
                        {title}
                    </h2>
                    <div className="flex items-center">
                        <button
                            onClick={() => minimizeWindow(title)}
                            className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--bg-light)/20"
                            aria-label="Minimize window"
                        >
                            <Minus size={16} />
                        </button>
                        <button
                            onClick={handleMaximizeClick}
                            className="hidden sm:flex cursor-pointer py-2 px-4 items-center justify-center text-(--text) transition hover:bg-(--bg-light)/20"
                            aria-label={isMaximized ? "Restore window" : "Maximize window"}
                        >
                            {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                        </button>
                        <button
                            onClick={() => closeWindow(title)}
                            className="cursor-pointer py-2 px-4 flex items-center justify-center text-(--text) transition hover:bg-(--danger)/80"
                            aria-label="Close window"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
                <div className="flex-1 bg-(--bg)/80 text-sm text-(--text-muted) overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

