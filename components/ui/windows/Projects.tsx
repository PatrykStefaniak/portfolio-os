import Window from "./Window";
import FileExplorerItem from "./ui/FileExplorerItem";
import FileExplorerHeader from "./ui/FileExplorerHeader";
import { Briefcase } from "lucide-react";

export default function ProjectsWindow() {
    const projects = [
        { name: "Voipstudio.com.txt", icon: Briefcase, size: "2.4 MB", date: "2020-10-15" },
        { name: "VoIP Chrome Extension.txt", icon: Briefcase, size: "1.8 MB", date: "2021-02-20" },
        { name: "247livechat.com.txt", icon: Briefcase, size: "3.1 MB", date: "2022-03-10" },
        { name: "Live chat widget.txt", icon: Briefcase, size: "3.6 MB", date: "2022-04-10" },
        { name: "Call widget.txt", icon: Briefcase, size: "126 KB", date: "2023-01-05" },
        { name: "VoIP web plugin.txt", icon: Briefcase, size: "6.5 MB", date: "2024-04-05" },
        { name: "WeatherNalsi.txt", icon: Briefcase, size: "4.2 MB", date: "2025-10-12" },
    ];

    return (
        <Window title="Projects">
            <div className="font-mono">
                <FileExplorerHeader />
                {projects.map((project, index) => (
                    <FileExplorerItem
                        key={index}
                        name={project.name}
                        icon={project.icon}
                        size={project.size}
                        date={project.date}
                    />
                ))}
            </div>
        </Window>
    );
}

