"use client";

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
            <b>VoIPStudio - Lead Frontend Developer</b>
            <p>VoIPStudio is a SaaS communication platform used by thousands of business users.</p>
            <p className="mb-0 mt-5">Major milestones:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Added new AI sentiment analysis panel to the platform.</li>
                <li>Built from scratch a responsive version of the platform&apos;s main dashboard.</li>
                <li>Optimized complex multi-user dashboards.</li>
                <li>Delivered features like live call views, user activity panels, and object management screens.</li>
                <li>Improved reception console UI rerendering to improve performance and workflow speed.</li>
                <li>Created an entirely new Supervisor Dashboard and introduced a Supervisor user role with custom permissions.</li>
                <li>Implemented integrations with external systems like Salesforce, HubSpot, Zapier, and others.</li>
                <li>Delivered a full Dark Theme implementation across the platform.</li>
                <li>Designed and built new features end-to-end, from UI architecture to implementation.</li>
            </ul>
        </div>
    ),
    "VoIP Chrome Extension.txt": (
        <div className="space-y-3">
            <b>VoIPstudio Chrome Extension - Lead Frontend Developer</b>
            <p>Built a lightweight chrome extension enabling agents to make calls from any CRM tab thanks to click2call functionality.</p>
            <p className="mb-0 mt-5">Major milestones:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Led the full migration from Manifest V2 to Manifest V3, overcoming major limitations introduced for security (service worker lifecycle, background script restrictions, offscreen documents, etc.).</li>
                <li>Implemented SMS feature, allowing sending and receiving SMS</li>
                <li>Built a multiple simultaneous calls feature, and real-time call controls directly from the extension.</li>
                <li>Built and improved click-to-call functionality that works on any website by detecting phone numbers and triggering calls through the VoIPstudio platform.</li>
            </ul>
        </div>
    ),
    "247livechat.com.txt": (
        <div className="space-y-3">
            <b>247livechat.com - Lead Frontend Developer</b>
            <p>247LiveChat is a live chat software service for businesses that allows website visitors to communicate with support or sales representatives in real-time.</p>
            <p className="mb-0 mt-5">Major milestones:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Led the frontend rebuild of a new live chat platform, replacing a heavily outdated legacy system.</li>
                <li>Built interfaces to display real-time visitor tracking data collected from an embedded widget on customer websites.</li>
                <li>Created richer chat profiles with detailed visitor info, and history.</li>
                <li>Developed expanded website configuration options, giving customers more control over their chat widget, appearance, and behavior.</li>
                <li>Implemented infinite scroll to handle thousands of visitors efficiently without killing performance.</li>
            </ul>
        </div>
    ),
    "Live chat widget.txt": (
        <div className="space-y-3">
            <b>Live Chat Widget - Lead Frontend Developer</b>
            <p>Built an embeddable live-chat widget used by hundreds of customers, customizable via 247livechat dashboard.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Implemented real-time user activity tracking and status updates (online, idle, browsing behavior).</li>
                <li>Enabled live chat sessions between visitors and operators.</li>
                <li>Added full multi-language support and dynamic localization.</li>
                <li>Designed various customization options: chat routing rules, customer-provided icons, widget behavior settings, proactive chat invitations, and more.</li>
            </ul>
        </div>
    ),
    "Call widget.txt": (
        <div className="space-y-3">
            <b>Call Me Back Widget - Lead Frontend Developer</b>
            <p>Lightweight widget embedded in customer websites, allows users to provide a phone number which will be called back by an operator.</p>
            <ul className="list-disc pl-5 space-y-1">
            <li>Implemented real-time user activity tracking and status updates (online, idle, browsing behavior).</li>
                <li>Added full multi-language support and dynamic localization.</li>
                <li>Customizable with custom icons, calling strategy, and max call rate.</li>
            </ul>
        </div>
    ),
    "VoIP web plugin.txt": (
        <div className="space-y-3">
            <b>Web Softphone - Lead Frontend Developer</b>
            <p>Web Softphone embeddable in customer websites, CRM tabs, and apps integrated with VoIPstudio platform.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Built a fully functional web softphone, allowing users to make and receive calls directly from their browser.</li>
                <li>Implemented handling of webhooks defined in the VoIPstudio platform and sent by customer systems, allowing for custom behavior as per customer needs.</li>
                <li>Fully embedded into the salesforce reception console, with OpenCTI API, allowing automatic salesforce object creation and management.</li>
            </ul>
        </div>
    ),
    "WeatherNalsi.txt": (
        <div className="space-y-3">
            <b>WeatherNalsi - Personal Project</b>
            <p>Small personal weather app project. Goal was to familiarize myself with Next.js</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Implemented search by city and country name, and coordinates.</li>
                <li>Implemented multiple server-side components.</li>
            </ul>
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

