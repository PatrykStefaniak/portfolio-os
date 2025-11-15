import { WindowProps } from "@/types/types";
import Window from "../Window";

const PROJECTS = [
    
]

export default function ProjectsWindow(props: WindowProps) {
    const {isOpen, onClose, onMinimize} = props;

    return (
        <Window
            title="Projects"
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
        >
            <div className="text-(--text)">
                
            </div>
        </Window>
    );
}

