"use client";

import { WindowState } from "@/types/types";
import { createContext, useContext, useState } from "react";

type WindowProviderProps = {
    getWindowById: (id: string) => WindowState | undefined
    windows: WindowState[]
    addWindow: (label: string, component: React.ComponentType) => void
    closeWindow: (id: string) => void
    minimizeWindow: (id: string) => void
    toggleOpenWindow: (id: string) => void
}

const WindowContext = createContext<WindowProviderProps | null>(null)

export default function WindowProvider(props: {children: React.ReactNode}) {
    const { children } = props;
    const [windows, setWindows] = useState<WindowState[]>([]);

    const getWindowById = (id: string) => {
        return windows.find(w => w.id === id);
    };

    const addWindow = (label: string, component: React.ComponentType) => {
        const existingWindow = getWindowById(label);

        if (existingWindow) {
            return setWindows(prev => prev.map(win =>
                win.id === label
                    ? { ...win, isMinimized: false }
                    : win
            ));
        }

        setWindows(prev => [...prev, {
            id: label,
            component,
            label,
            isMinimized: false
        }]);
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    };

    const minimizeWindow = (id: string) => {
        setWindows(prev => prev.map(w =>
            w.id === id
                ? { ...w, isMinimized: true }
                : w
        ));
    };

    const toggleOpenWindow = (id: string) => {
        const win = getWindowById(id);

        if (!win) {
            return;
        }

        setWindows(windowss => windowss.map(prev => (
            prev.id !== win.id
                ? prev
                : {
                    ...win,
                    isMinimized: !prev.isMinimized
                }
        )));
    };

    return (
        <WindowContext.Provider
            value={{
                getWindowById,
                windows,
                addWindow,
                closeWindow,
                minimizeWindow,
                toggleOpenWindow: toggleOpenWindow,
            }}
        >
            {children}
        </WindowContext.Provider>
    );
}

export function useWindowProvider() {
    const ctx = useContext(WindowContext);

    if (!ctx) {
        throw new Error('useWindowProvider must be used within WindowProvider');
    }

    return ctx;
}