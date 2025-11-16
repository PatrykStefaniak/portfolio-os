import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollCheveronProps = {
    handler: () => void;
    direction: "left-0" | "right-0";
}

export default function ScrollCheveron(props: ScrollCheveronProps) {
    const { handler, direction } = props;

    return (
        <button
            onClick={handler}
            className={`${direction} cursor-pointer absolute top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-(--bg-dark) hover:bg-(--bg) border border-(--border-muted) text-(--text-muted) hover:text-(--text) transition shadow-lg`}
            aria-label="Scroll left"
        >
            {direction === "left-0" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
    );
}