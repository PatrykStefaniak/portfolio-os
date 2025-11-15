import { Image as LucideImage } from "lucide-react";
import DesktopIcon from "./DesktopIcon";
import { DesktopIconProps } from "@/types/types";

export default function ImageIcon(props: DesktopIconProps) {
    return (
        <DesktopIcon {...props}>
            <div className="relative h-16 w-12 overflow-hidden rounded-sm border border-white/40 bg-white/90 desktop-icon-shadow transition group-hover:border-white/70">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 rounded border-2 border-purple-400/60 bg-gradient-to-br from-purple-200 to-purple-400/80">
                        <div className="flex h-full items-center justify-center">
                            <LucideImage color="oklch(62.7% 0.265 303.9)"/>
                        </div>
                    </div>
                </div>
            </div>
        </DesktopIcon>
    );
}

