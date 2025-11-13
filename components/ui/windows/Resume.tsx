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
            <div className="h-full">
                <p className="h-full w-full">
                    <embed
                        className="h-full w-full"
                        type='application/pdf'
                        src={"/cv_PatrykStefaniak.pdf"}
                    />
                </p>
            </div>
        </Window>
    );
}