import { DesktopIconProps } from "@/types/types";
import DesktopIcon from "./DesktopIcon";

export default function TextIcon(props: DesktopIconProps) {
    return (
        <DesktopIcon {...props}>
            <div className="flex h-16 w-12 flex-col overflow-hidden rounded-sm border border-white/40 bg-white/90 text-[10px] font-semibold uppercase text-zinc-600 desktop-icon-shadow transition group-hover:border-white/70">
                <div className="h-3 w-full bg-blue-500/70" />
                <div className="flex flex-1 items-center justify-center bg-white/70 tracking-[0.2em]">
                    TXT
                </div>
            </div>
        </DesktopIcon>
    );
}