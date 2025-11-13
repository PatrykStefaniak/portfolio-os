import { WindowProps } from "@/types/types";
import Window from "../Window";

export default function ProjectsWindow(props: WindowProps) {
    const {isOpen, onClose} = props;

    return (
        <Window
            title="Projects"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="text-(--text)">
                <p>Welp, looks like this is under construction!</p>
            </div>
        </Window>
    );
}

