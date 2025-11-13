import DesktopIcon from "./DesktopIcon";

type ImageIconProps = {
    label: string;
    handler: () => void;
}

export default function ImageIcon({ label, handler }: ImageIconProps) {
    return (
        <DesktopIcon label={label} handler={handler}>
            <div className="relative h-16 w-12 overflow-hidden rounded-sm border border-white/40 bg-white/90 shadow-[0_6px_12px_-6px_rgba(0,0,0,0.6)] transition group-hover:border-white/70">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 rounded border-2 border-purple-400/60 bg-gradient-to-br from-purple-200 to-purple-400/80">
                        <div className="flex h-full items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-purple-500/60" />
                        </div>
                    </div>
                </div>
            </div>
        </DesktopIcon>
    );
}

