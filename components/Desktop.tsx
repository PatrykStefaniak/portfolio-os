"use client";

import ImageIcon from "./ui/ImageIcon";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";

export default function Desktop() {
    return (
        <div className="flex min-h-screen flex-col bg-[#1556a3] font-sans text-white">
            <main className="flex flex-1 flex-col overflow-hidden bg-gradient-to-br from-[#1b63bc] via-[#0d4e92] to-[#0a2d57] p-6">
                <div className="pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
                <div className="">
                    <Resume/>
                    <AboutMe/>
                    <Projects/>
                    <Experience/>
                    <Resume/>
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
        </div>
    );
}
