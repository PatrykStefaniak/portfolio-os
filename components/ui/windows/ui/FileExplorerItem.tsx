import { FileExplorerItemData } from "@/types/types";

type FileExplorerItemProps = FileExplorerItemData & {
    onOpen: () => void;
};

export default function FileExplorerItem(props: FileExplorerItemProps) {
    const { name, size, date, onOpen, icon: Icon } = props;

    return (
        <div
            onClick={onOpen}
            onDoubleClick={onOpen}
            className="font-mono flex items-center gap-3 px-3 py-2.5 border-b border-(--border-muted)/30 text-xs text-(--text) cursor-pointer transition hover:bg-(--bg-dark)/50 focus-visible:outline focus-visible:outline-(--highlight)"
        >
            <div className="flex-shrink-0 w-5 flex items-center justify-center">
                <Icon size={16} className="text-(--text-muted)" />
            </div>
            <div className="flex-1 min-w-0 truncate">
                {name}
            </div>
            {size && (
                <div className="flex-shrink-0 text-(--text-muted) w-20 text-right">
                    {size}
                </div>
            )}
            {date && (
                <div className="flex-shrink-0 text-(--text-muted) w-24 text-right">
                    {date}
                </div>
            )}
        </div>
    );
}

