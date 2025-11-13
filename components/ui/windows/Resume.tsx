import { WindowProps } from "@/types/types";
import Window from "./Window";

export default function ResumeWindow(props: WindowProps) {
    const {isOpen, onClose} = props;

    return (
        <Window
            title="Resume.pdf"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="text-white">
                <p>TODO</p>
            </div>
        </Window>
    );
}