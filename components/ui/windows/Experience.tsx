"use client";

import { Building2, School } from "lucide-react";
import { useWindowProvider } from "@/contexts/WindowProvider";
import { FileExplorerItemData, FileExplorerContentMap } from "@/types/types";
import Window from "./Window";
import FileExplorerItem from "./ui/FileExplorerItem";
import FileExplorerHeader from "./ui/FileExplorerHeader";
import { createDetailWindow } from "./utils/createDetailWindow";

const EXPERIENCE_ITEMS: FileExplorerItemData[] = [
    { name: "Voipstudio.com.txt", icon: Building2, size: "5.2MB", date: "2020-2025" },
    { name: "Education.txt", icon: School, size: "4.8MB", date: "2016-2020" },
];

const EXPERIENCE_CONTENT: FileExplorerContentMap = {
    "Voipstudio.com.txt": (
        <div className="space-y-3">
            <b>Frontend Developer at VoIPstudio <small className="text-(--text-muted)">2020-2025</small></b><br />
            <i>SaaS communication platform</i>
            <ul className="list-disc space-y-1 pl-5 mt-5">
                <li>Built and maintained complex multi-user dashboards and real-time interfaces.</li>
                <li>Developed chat, VoIP call UI, and reception console features.</li>
                <li>Integrated the platform with Salesforce, HubSpot, Zapier, and other external systems.</li>
                <li>Improved UI performance, state management, and overall frontend architecture.</li>
                <li>Collaborated with a cross-functional team and wrote feature test cases.</li>
            </ul>
            <p className="text-(--text-muted) mt-5">Tech stack:</p>
            React, Extjs, Javascript, HTML, CSS, Selenium, Chai, SCSS, WebRTC, Highcharts, leaflet
        </div>
    ),
    "Education.txt": (
        <div className="space-y-3">
            <b>Vocaneer school for Higher Technician in Web Application Development <small className="text-(--text-muted)">2016-2020</small></b>
            <ul className="list-disc space-y-1 pl-5 mt-5">
                <li>Built full-stack projects using JavaScript, Java Servlets, and JSP.</li>
                <li>Designed and implemented MySQL databases.</li>
                <li>Developed responsive interfaces with HTML and CSS.</li>
                <li>Learned core principles of frontend, backend development and HTTP.</li>
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

