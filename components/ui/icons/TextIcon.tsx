import DesktopIcon from "./DesktopIcon";

type TextIconProps = {
    label: string;
    handler: () => void;
}

export default function TextIcon({ label, handler }: TextIconProps) {
    return (
        <DesktopIcon label={label} handler={handler}>
            <div className="flex h-16 w-12 flex-col overflow-hidden rounded-sm border border-white/40 bg-white/90 text-[10px] font-semibold uppercase text-zinc-600 shadow-[0_6px_12px_-6px_rgba(0,0,0,0.6)] transition group-hover:border-white/70">
                <div className="h-3 w-full bg-blue-500/70" />
                <div className="flex flex-1 items-center justify-center bg-white/70 tracking-[0.2em]">
                    TXT
                </div>
            </div>
        </DesktopIcon>
    );
}