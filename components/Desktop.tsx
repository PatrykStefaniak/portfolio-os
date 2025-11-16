"use client";

import PdfIcon from "./ui/icons/PdfIcon";
import TextIcon from "./ui/icons/TextIcon";
import FolderIcon from "./ui/icons/FolderIcon";
import ResumeWindow from "./ui/windows/Resume";
import AboutMeWindow from "./ui/windows/AboutMe";
import ProjectsWindow from "./ui/windows/Projects";
import ExperienceWindow from "./ui/windows/Experience";
import Background from "./three/Background";
import TopToolbar from "./TopToolbar";
import Footer from "./footer/Footer";
import { useWindowProvider } from "@/contexts/WindowProvider";

export default function Desktop() {
    const {windows} = useWindowProvider();

    return (
        <div className="flex h-screen w-screen flex-col text-white">
            <main className="relative flex flex-1 flex-col text-(--text)">
                <div
                    className={`bg-radial-[at_5%_5%] to-(--bg-dark) from-(--bg-light) absolute inset-0`}
                >
                    <Background/>
                </div>
                <TopToolbar/>
                <div className="font-mono pl-10 w-60 z-5 mt-10 grid grid-flow-col grid-cols-2 grid-rows-2 grid-rows-[120px_120px] gap-y-2">
                    <FolderIcon
                        label="Projects"
                        window={ProjectsWindow}
                    />
                    <FolderIcon
                        label="Experience"
                        window={ExperienceWindow}
                    />
                    <PdfIcon
                        label="Resume.pdf"
                        window={ResumeWindow}
                    />
                    <TextIcon
                        label="AboutMe.txt"
                        window={AboutMeWindow}
                    />
                </div>
            </main>
            <Footer/>
            {windows.map((window) => (
                <window.component
                    key={window.id}
                />
            ))}
        </div>
    );
}
