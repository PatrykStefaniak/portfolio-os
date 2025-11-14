import { WindowProps } from "@/types/types";
import Window from "../ui/windows/Window";

export default function ExperienceWindow(props: WindowProps) {
    const {isOpen, onClose, onMinimize} = props;

    return (
        <Window
            title="Experience"
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
        >
            <div className="text-white">
                <p>TODO</p>
            </div>
        </Window>
    );
}

