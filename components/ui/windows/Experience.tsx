import Window from "./Window";
import FileExplorerItem from "./ui/FileExplorerItem";
import FileExplorerHeader from "./ui/FileExplorerHeader";
import { Building2, School } from "lucide-react";

const experiences = [
    { name: "Software Developer", icon: Building2, size: "5.2MB", date: "2020-2025" },
    { name: "Education", icon: School, size: "4.8MB", date: "2016-2020" },
];

export default function ExperienceWindow() {
    return (
        <Window title="Experience">
            <div className="font-mono">
                <FileExplorerHeader />
                {experiences.map((exp, index) => (
                    <FileExplorerItem
                        key={index}
                        name={exp.name}
                        icon={exp.icon}
                        size={exp.size}
                        date={exp.date}
                    />
                ))}
            </div>
        </Window>
    );
}

