"use client";

import { useState, useRef } from "react";
import PdfIcon from "./ui/icons/PdfIcon";
import TextIcon from "./ui/icons/TextIcon";
import FolderIcon from "./ui/icons/FolderIcon";
import ImageIcon from "./ui/icons/ImageIcon";
import ResumeWindow from "./ui/windows/Resume";
import AboutMeWindow from "./ui/windows/AboutMe";
import ProjectsWindow from "./ui/windows/projects/Projects";
import ExperienceWindow from "./ui/windows/experience/Experience";
import Background from "./three/Background";
import TopToolbar from "./TopToolbar";
import Footer from "./Footer";

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
        <div className="flex min-h-screen flex-col text-white">
            <main className="relative flex flex-1 flex-col text-(--text)">
                <div
                    className={`bg-radial-[at_5%_5%] to-(--bg-dark) from-(--bg-light) absolute inset-0`}
                >
                    <Background/>
                </div>
                <TopToolbar/>
                <div className="w-60 z-5 mt-10 grid grid-cols-2 grid-rows-3 grid-rows-[120px_120px_120px]">
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
                    <PdfIcon
                        label="Resume.pdf"
                        handler={() => openWindow("Resume.pdf", ResumeWindow)}
                    />
                    <TextIcon
                        label="AboutMe.txt"
                        handler={() => openWindow("AboutMe.txt", AboutMeWindow)}
                    />
                </div>
            </main>
            <Footer/>
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
