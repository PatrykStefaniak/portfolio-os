"use client";

import { ReactNode } from "react";

import Window from "../Window";

export function createDetailWindow(windowId: string, content: ReactNode) {
    return function DetailWindow() {
        return (
            <Window title={windowId}>
                <div className="font-mono px-6 py-4 text-sm leading-relaxed text-(--text)">
                    {content}
                </div>
            </Window>
        );
    };
}

