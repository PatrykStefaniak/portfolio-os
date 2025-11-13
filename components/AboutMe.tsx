import { WindowProps } from "@/types/types";
import Window from "./ui/Window";

export default function AboutMeWindow(props: WindowProps) {
    const {isOpen, onClose} = props;

    return (
        <Window
            title="AboutMe.txt"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="text-white">
                <p>TODO</p>
            </div>
        </Window>
    );
}