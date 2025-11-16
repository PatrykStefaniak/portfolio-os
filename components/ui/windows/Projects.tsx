"use client";

import { ReactNode } from "react";
import { Briefcase } from "lucide-react";
import { useWindowProvider } from "@/contexts/WindowProvider";
import { FileExplorerItemData, FileExplorerContentMap } from "@/types/types";

import Window from "./Window";
import FileExplorerItem from "./ui/FileExplorerItem";
import FileExplorerHeader from "./ui/FileExplorerHeader";
import { createDetailWindow } from "./utils/createDetailWindow";

const PROJECT_ITEMS: FileExplorerItemData[] = [
    { name: "Voipstudio.com.txt", icon: Briefcase, size: "2.4 MB", date: "2020-10-15" },
    { name: "VoIP Chrome Extension.txt", icon: Briefcase, size: "1.8 MB", date: "2021-02-20" },
    { name: "247livechat.com.txt", icon: Briefcase, size: "3.1 MB", date: "2022-03-10" },
    { name: "Live chat widget.txt", icon: Briefcase, size: "3.6 MB", date: "2022-04-10" },
    { name: "Call widget.txt", icon: Briefcase, size: "126 KB", date: "2023-01-05" },
    { name: "VoIP web plugin.txt", icon: Briefcase, size: "6.5 MB", date: "2024-04-05" },
    { name: "WeatherNalsi.txt", icon: Briefcase, size: "4.2 MB", date: "2025-10-12" },
];

const PROJECT_CONTENT: FileExplorerContentMap = {
    "Voipstudio.com.txt": (
        <div className="space-y-3">
            <p>
                Led the front-end for Voipstudio&apos;s main dashboard, focusing on multi-tenant routing, live call supervision, and bulk provisioning.
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Built reusable widgets for call queues, agents, and analytics.</li>
                <li>Integrated WebRTC diagnostics and real-time monitoring tools.</li>
                <li>Introduced theme tokens that later powered the entire design system.</li>
            </ul>
            <p className="text-(--text-muted)">Stack: React, WebRTC, Tailwind CSS, Zustand</p>
        </div>
    ),
    "VoIP Chrome Extension.txt": (
        <div className="space-y-3">
            <p>Built a lightweight chrome extension enabling agents to make calls from any CRM tab.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Implemented context-aware actions and keyboard shortcuts.</li>
                <li>Secured OAuth flow that reuses the main platform session.</li>
                <li>Published and maintained the plug-in across multiple releases.</li>
            </ul>
        </div>
    ),
    "247livechat.com.txt": (
        <div className="space-y-3">
            <p>Rebuilt the live chat platform UI with customer journey analytics and SLA tracking.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Designed data-rich widgets with collapsible panes for agents.</li>
                <li>Exposed a design kit later reused by the marketing website.</li>
                <li>Collaborated with backend to stream conversation events via SSE.</li>
            </ul>
        </div>
    ),
    "Live chat widget.txt": (
        <div className="space-y-3">
            <p>
                Built an embeddable widget used by hundreds of customers, customizable via a JSON theme.
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Introduced lazy hydration and CDN delivery.</li>
                <li>Added plug-ins for knowledge-base suggestions and canned replies.</li>
            </ul>
        </div>
    ),
    "Call widget.txt": (
        <div className="space-y-3">
            <p>Minimal widget that turns any landing page into a fully functional call-me module.</p>
            <p className="text-(--text-muted)">Focus: accessibility, 30 KB gzip budget, <abbr title="Progressive Enhancement">PE</abbr>.</p>
        </div>
    ),
    "VoIP web plugin.txt": (
        <div className="space-y-3">
            <p>Customizable plugin that integrates Voipstudio soft phone into any SaaS.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Shipped a sandbox environment so partners can preview configs.</li>
                <li>Built exhaustive documentation and code samples generated from MDX.</li>
            </ul>
        </div>
    ),
    "WeatherNalsi.txt": (
        <div className="space-y-3">
            <p>Personal experiment mixing weather APIs with generative art.</p>
            <p className="text-(--text-muted)">Stack: Next.js App Router, Three.js, WebGL shaders.</p>
        </div>
    ),
};

export default function ProjectsWindow() {
    const { addWindow } = useWindowProvider();

    const openProjectWindow = (item: FileExplorerItemData) => {
        const windowId = item.name;
        const content = PROJECT_CONTENT[windowId];

        addWindow(windowId, createDetailWindow(windowId, content));
    };

    return (
        <Window title="Projects">
            <div className="font-mono">
                <FileExplorerHeader />
                {PROJECT_ITEMS.map((project) => (
                    <FileExplorerItem
                        key={project.name}
                        {...project}
                        onOpen={() => openProjectWindow(project)}
                    />
                ))}
            </div>
        </Window>
    );
}

