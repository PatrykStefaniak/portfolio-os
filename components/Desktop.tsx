"use client";

import { useState } from "react";
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
import Footer from "./footer/Footer";
import { WindowProps, WindowState } from "@/types/types";

export default function Desktop() {
    const [windows, setWindows] = useState<WindowState[]>([]);

    const getWindowById = (id: string) => {
        return windows.find(w => w.id === id);
    };

    const openWindow = (label: string, component: React.ComponentType<WindowProps>) => {
        const existingWindow = getWindowById(label);

        if (existingWindow) {
            return setWindows(prev => prev.map(win =>
                win.id === label
                    ? { ...win, isMinimized: false }
                    : win
            ));
        }

        setWindows(prev => [...prev, {
            id: label,
            component,
            label,
            isMinimized: false
        }]);
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    };

    const minimizeWindow = (id: string) => {
        setWindows(prev => prev.map(w =>
            w.id === id
                ? { ...w, isMinimized: true }
                : w
        ));
    };

    const tabClickHandler = (win: WindowState) => {
        setWindows(windowss => windowss.map(prev => (
            prev.id !== win.id
                ? prev
                : {
                    ...win,
                    isMinimized: !prev.isMinimized
                }
        )));
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
                <div className="computer-font pl-10 w-150 z-5 mt-10 grid grid-flow-col grid-cols-5 grid-rows-3 grid-rows-[120px_120px_120px] gap-y-2">
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
            <Footer
                windows={windows}
                onTabClick={tabClickHandler}
            />
            {windows.map((window) => (
                <window.component
                    key={window.id}
                    isOpen={!window.isMinimized}
                    onClose={() => closeWindow(window.id)}
                    onMinimize={() => minimizeWindow(window.id)}
                />
            ))}
        </div>
    );
}
