import { useWindowProvider } from "@/contexts/WindowProvider";

type DesktopIconProps = {
    label: string;
    window: React.ComponentType;
    children: React.ReactNode;
}

export default function DesktopIcon(props: DesktopIconProps) {
    const { label, window, children } = props;
    const {addWindow} = useWindowProvider();

    return (
        <button
            onClick={() => addWindow(label, window)}
            type="button"
            className="cursor-pointer group flex w-26 min-h-[130px] flex-col items-center gap-2 justify-between rounded-lg border border-transparent bg-transparent p-3 text-sm transition-colors hover:border-(--border)/20 hover:bg-(--bg-light)/30 hover:backdrop-blur-xs"
        >
            <div className="flex flex-1 items-center justify-center group-hover:scale-120 transition">
                {children}
            </div>
            <div className="w-full text-center drop-shadow-md">
                <span className="text-outline text-white font-mono">
                    {label}
                </span>
            </div>
        </button>
    );
};