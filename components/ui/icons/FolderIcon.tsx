import DesktopIcon from "./DesktopIcon";

type FolderIconProps = {
    label: string;
    handler: () => void;
}

export default function FolderIcon({ label, handler }: FolderIconProps) {
    return (
        <DesktopIcon label={label} handler={handler}>
            <div className="relative h-12 w-16">
                <div className="absolute left-1 top-0 h-3 w-8 rounded-t-sm bg-yellow-200 shadow-sm" />
                <div className="absolute top-2 h-10 w-full rounded-md border border-yellow-500/40 bg-gradient-to-b from-yellow-300 to-yellow-500 desktop-icon-shadow transition group-hover:border-yellow-400/80" />
            </div>
        </DesktopIcon>
    );
}