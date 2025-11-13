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
            className="flex w-32 flex-col items-center gap-2 rounded-lg bg-white/0 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red/70 hover:bg-red"
        >
            {children}
            <div className="text-center drop-shadow-md">
                <span className="text-outline text-stone-50">
                    {label}
                </span>
            </div>
        </button>
    );
};