"use client";

import { Building2, School } from "lucide-react";
import { useWindowProvider } from "@/contexts/WindowProvider";
import { FileExplorerItemData, FileExplorerContentMap } from "@/types/types";
import Window from "./Window";
import FileExplorerItem from "./ui/FileExplorerItem";
import FileExplorerHeader from "./ui/FileExplorerHeader";
import { createDetailWindow } from "./utils/createDetailWindow";

const EXPERIENCE_ITEMS: FileExplorerItemData[] = [
    { name: "Software Developer at Voipstudio.com.txt", icon: Building2, size: "5.2MB", date: "2020-2025" },
    { name: "Education.txt", icon: School, size: "4.8MB", date: "2016-2020" },
];

const EXPERIENCE_CONTENT: FileExplorerContentMap = {
    "Software Developer at Voipstudio.com.txt": (
        <div className="space-y-3">
            <p>Built enterprise-grade VoIP and chat experiences used by distributed sales teams.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Owned the front-end for call supervision, IVR builders, and analytics.</li>
                <li>Mentored juniors, ran design crits, and helped shape coding standards.</li>
                <li>Collaborated closely with product, QA, and support on release trains.</li>
            </ul>
            <p className="text-(--text-muted)">Highlights: real-time dashboards, accessibility audits, DX tooling.</p>
        </div>
    ),
    "Education.txt": (
        <div className="space-y-3">
            <p>BSc in Computer Science with a focus on human-computer interaction.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Graduated with honors; thesis explored collaborative UIs for remote teams.</li>
                <li>Ran the campus dev club, shipping projects with React and Three.js.</li>
            </ul>
        </div>
    ),
};

export default function ExperienceWindow() {
    const { addWindow } = useWindowProvider();

    const openExperienceWindow = (item: FileExplorerItemData) => {
        const windowId = item.name;
        const content = EXPERIENCE_CONTENT[windowId];

        addWindow(windowId, createDetailWindow(windowId, content));
    };

    return (
        <Window title="Experience">
            <div className="font-mono">
                <FileExplorerHeader />
                {EXPERIENCE_ITEMS.map((exp) => (
                    <FileExplorerItem
                        key={exp.name}
                        {...exp}
                        onOpen={() => openExperienceWindow(exp)}
                    />
                ))}
            </div>
        </Window>
    );
}

