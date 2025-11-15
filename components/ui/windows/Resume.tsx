import Window from "./Window";

export default function ResumeWindow() {
    return (
        <Window
            title="Resume.pdf"
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