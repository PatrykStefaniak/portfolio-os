export default function FileExplorerHeader() {
    return (
        <div className="font-mono flex items-center gap-3 px-3 py-2.5 border-b border-(--border-muted) bg-(--bg-dark)/30 text-xs font-semibold text-(--text-muted) uppercase tracking-wider">
            <div className="flex-shrink-0 w-5"></div>
            <div className="flex-1 min-w-0">
                Name
            </div>
            <div className="flex-shrink-0 text-right w-20">
                Size
            </div>
            <div className="flex-shrink-0 text-right w-24">
                Date
            </div>
        </div>
    );
}

