"use client";

import { WindowProps, WindowState } from "@/types/types";
import { createContext, useContext, useState } from "react";

type WindowProviderProps = {
    windows: WindowState[]
    addWindow: (label: string, component: React.ComponentType<WindowProps>) => void
    closeWindow: (id: string) => void
    minimizeWindow: (id: string) => void
    toggleMaximizeWindow: (win: WindowState) => void
}

const WindowContext = createContext<WindowProviderProps | null>(null)

export default function WindowProvider(props: {children: React.ReactNode}) {
    const { children } = props;
    const [windows, setWindows] = useState<WindowState[]>([]);

    const getWindowById = (id: string) => {
        return windows.find(w => w.id === id);
    };

    const addWindow = (label: string, component: React.ComponentType<WindowProps>) => {
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

    const toggleMaximizeWindow = (win: WindowState) => {
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
                windows,
                addWindow,
                closeWindow,
                minimizeWindow,
                toggleMaximizeWindow,
            }}
        >
            {children}
            {windows.map((window) => (
                <window.component
                    key={window.id}
                    isOpen={!window.isMinimized}
                    onClose={() => closeWindow(window.id)}
                    onMinimize={() => minimizeWindow(window.id)}
                />
            ))}
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