"use client";

import { useState, useRef } from "react";
import PdfIcon from "./ui/icons/PdfIcon";
import TextIcon from "./ui/icons/TextIcon";
import FolderIcon from "./ui/icons/FolderIcon";
import ImageIcon from "./ui/icons/ImageIcon";
import ResumeWindow from "./Resume";
import AboutMeWindow from "./AboutMe";
import ProjectsWindow from "./projects/Projects";
import ExperienceWindow from "./experience/Experience";

type WindowState = {
    id: string;
    component: React.ComponentType<{ isOpen: boolean; onClose: () => void }>;
    label: string;
    isMinimized: boolean;
    position: { x: number; y: number }; // might delete later
    zIndex: number; // might delete later
};

export default function Desktop() {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const nextZIndexRef = useRef(1000);

    const openWindow = (label: string, component: React.ComponentType<{ isOpen: boolean; onClose: () => void }>) => {
        const existingWindow = windows.find(w => w.id === label);

        if (existingWindow) {
            return setWindows(prev => prev.map(win =>
                win.id === label
                    ? { ...win, isMinimized: false, zIndex: nextZIndexRef.current++ }
                    : win
            ));
        }

        setWindows(prev => [...prev, {
            id: label,
            component,
            label,
            isMinimized: false,
            position: { x: 0, y: 0 },
            zIndex: nextZIndexRef.current++
        }]);
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#1556a3] font-sans text-white">
            <main className="flex flex-1 flex-col overflow-hidden bg-gradient-to-br from-[#1b63bc] via-[#0d4e92] to-[#0a2d57] p-6">
                <div className="pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
                <div className="">
                    <PdfIcon
                        label="Resume.pdf"
                        handler={() => openWindow("Resume.pdf", ResumeWindow)}
                    />
                    <TextIcon
                        label="AboutMe.txt"
                        handler={() => openWindow("AboutMe.txt", AboutMeWindow)}
                    />
                    <FolderIcon
                        label="Projects"
                        handler={() => openWindow("Projects", ProjectsWindow)}
                    />
                    <FolderIcon
                        label="Experience"
                        handler={() => openWindow("Experience", ExperienceWindow)}
                    />
                    <ImageIcon
                        label="Me!.png"
                        handler={() => {}}
                    />
                </div>
            </main>
            <footer className="flex h-14 items-center justify-between border-t border-white/20 bg-black/60 px-4">
                <div className="w-full flex justify-between items-center text-xs">
                    <div className="flex-1"/>
                    <span className="flex-1 text-right">
                        12:45 PM
                        13/11/2025
                    </span>
                </div>
            </footer>
            {windows.map((window) => {
                return (
                    <window.component
                        key={window.id}
                        isOpen={!window.isMinimized}
                        onClose={() => closeWindow(window.id)}
                    />
                );
            })}
        </div>
    );
}
