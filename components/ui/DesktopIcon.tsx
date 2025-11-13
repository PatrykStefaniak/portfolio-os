type DesktopIconProps = {
    label: string;
    handler: () => void;
    children: React.ReactNode;
}

export default function DesktopIcon(props: DesktopIconProps) {
    const { label, handler, children } = props;

    return (
        <button
            onClick={handler}
            type="button"
            className="flex w-24 flex-col items-center gap-2 rounded-lg bg-white/0 p-2 text-xs text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 hover:bg-white/10"
        >
            {children}
            <span className="max-w-full text-center leading-tight drop-shadow-md">
                {label}
            </span>
        </button>
    );
};