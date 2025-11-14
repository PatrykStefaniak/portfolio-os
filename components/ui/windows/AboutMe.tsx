import { WindowProps } from "@/types/types";
import Window from "./Window";

export default function AboutMeWindow(props: WindowProps) {
    const {isOpen, onClose, onMinimize} = props;

    return (
        <Window
            title="AboutMe.txt"
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
        >
            <div className="text-(--text) p-5">
                <p>
                    I am a Frontend Developer with 5 years of professional experience building enterprise web applications. Skilled in JavaScript, React, ExtJs, and modern frontend workflows.
                </p>
                <p className="mt-3">
                    I&apos;ve implemented and optimized applications for customer-facing websites, led frontend development for complex multi-user VoIP dashboards, and developed and integrated Web CRM solutions with Salesforce among others.
                </p>
                <p className="mt-3">
                    With a background in developing software for a telecomunications company, I had the chance to gain plenty of experience with SaaS and CRM-oriented web applications.
                </p>
                <p className="mt-3">
                    I&apos;m always excited to learn new technologies and constantly strive to improve, not just professionally, but personally as well. I believe self-improvement is key to genuine accomplishment. I&apos;m confident in my abilities, but also open to feedback, collaboration, and both mentoring and being mentored.
                </p>
                <p className="mt-3">
                    When I&apos;m away from the computer, I love working out, stuff like running, weight lifting, bouldering and swimming. I&apos;m also into social psychology and philosophy audio books, love motorcycling, catching a pretty sunset/ sunrise, hiking, and occasionally gaming.
                </p>
            </div>
        </Window>
    );
}