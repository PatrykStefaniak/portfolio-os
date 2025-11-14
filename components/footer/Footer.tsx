"use client";

import React, { useState } from "react";
import { Search, Grid2x2 } from "lucide-react";
import FooterRight from "./FooterRight";
import { WindowState } from "@/types/types";

type FooterProps = {
    windows: WindowState[]
    onTabClick: (tab: WindowState) => void
}

export default function Footer(props: FooterProps) {
    const {windows, onTabClick} = props;
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <footer className="flex flex-col sm:flex-row h-34 sm:h-14 items-center border-t border-(--border-muted) bg-(--bg) px-4 sm:gap-5">
            <div className="flex items-center gap-3 text-(--text)">
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
            <div className="flex sm:flex-1 overflow-x-scroll sm:overflow-x-auto gap-x-1 w-screen sm:w-auto">
                {
                    windows.map((win) => {
                        return (
                            <div
                                key={win.label}
                                onClick={() => onTabClick(win)}
                                className="text-(--text) cursor-pointer py-3 px-3 rounded-full sm:rounded-sm border border-(--border)/60 sm:border-(--border)/20 sm:hover:backdrop-blur-xs hover:bg-(--bg-light)/50 hover:border-(--border)/50"
                            >
                                {win.label}
                            </div>
                        )
                    })
                }
            </div>
            <FooterRight/>
        </footer>
    );
}