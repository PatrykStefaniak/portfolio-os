"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Grid2x2 } from "lucide-react";
import FooterRight from "./FooterRight";
import { useWindowProvider } from "@/contexts/WindowProvider";
import ScrollCheveron from "./ScrollCheveron";

export default function Footer() {
    const {windows, toggleOpenWindow} = useWindowProvider();
    const [searchQuery, setSearchQuery] = useState("");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const checkScrollability = () => {
        const container = scrollContainerRef.current;

        if (!container) {
            return;
        }
        
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 1
        );
    };

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container) {
            return;
        }

        checkScrollability();

        container.addEventListener("scroll", checkScrollability);

        const resizeObserver = new ResizeObserver(checkScrollability);

        resizeObserver.observe(container);

        return () => {
            container.removeEventListener("scroll", checkScrollability);
            resizeObserver.disconnect();
        };
    }, [windows]);

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <footer className="flex flex-col sm:flex-row h-auto sm:h-14 items-center border-t border-(--border-muted) bg-(--bg) px-4 sm:gap-5 flex-shrink-0">
            <div className="flex items-center gap-3 text-(--text) flex-shrink-0">
                <button
                    className="cursor-pointer flex items-center justify-center w-10 h-10 rounded transition hover:bg-(--bg-dark)"
                    aria-label="Windows menu"
                >
                    <Grid2x2 size={30} className="text-(--text-muted)" />
                </button>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full border-t-stone-300 border border-(--border-muted)/50 bg-(--bg-dark)/50 focus-within:border-(--border) focus-within:bg-(--bg-dark) shadow-xl">
                    <Search size={16} className="text-(--text-muted)" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-xs text-(--text) placeholder:text-(--text-muted) w-48"
                    />
                </div>
            </div>
            <div className="relative w-full sm:flex-1 min-w-0 mt-4 sm:mt-0 max-w-full">
                {canScrollLeft && (
                    <ScrollCheveron
                        handler={scrollLeft}
                        direction="left-0"
                    />
                )}
                {canScrollRight && (
                    <ScrollCheveron
                        handler={scrollRight}
                        direction="right-0"
                    />
                )}
                <div 
                    ref={scrollContainerRef}
                    className="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden px-2 py-2"
                >
                    {
                        windows.map((win) => (
                            <button
                                key={win.label}
                                onClick={() => toggleOpenWindow(win.label)}
                                className="cursor-pointer flex-shrink-0 whitespace-nowrap text-(--text) px-4 py-2 rounded-md border border-(--border)/40 bg-(--bg-dark)/40 hover:border-(--border)/60 hover:bg-(--bg-light)/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--highlight)"
                            >
                                {win.label}
                            </button>
                        ))
                    }
                </div>
            </div>
            <FooterRight/>
        </footer>
    );
}