import { WindowProps } from "@/types/types";
import Window from "../Window";

export default function ExperienceWindow(props: WindowProps) {
    const {isOpen, onClose, onMinimize, onMaximize} = props;

    return (
        <Window
            title="Experience"
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            onMaximize={onMaximize}
        >
            <div className="text-(--text)">
                <p>Welp, looks like this is under construction!</p>
            </div>
        </Window>
    );
}

