"use client";

import { WindowState } from "@/types/types";
import { createContext, useContext, useRef, useState } from "react";

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
    const nextZIndexRef = useRef(50);

    const getWindowById = (id: string) => {
        return windows.find(w => w.id === id);
    };

    const addWindow = (label: string, component: React.ComponentType) => {
        setWindows((prev) => {
            const existingWindow = getWindowById(label);

            if (existingWindow) {
                nextZIndexRef.current += 1;
                const zIndex = nextZIndexRef.current;

                return prev.map(win =>
                    win.id === label
                        ? { ...win, isMinimized: false, zIndex }
                        : win
                );
            }

            nextZIndexRef.current += 1;
            const zIndex = nextZIndexRef.current;

            return [
                ...prev,
                {
                    id: label,
                    component,
                    label,
                    isMinimized: false,
                    zIndex,
                },
            ];
        });
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
        setWindows(prev => {
            const existing = getWindowById(id);

            if (!existing) {
                return prev;
            }

            const isRestoring = existing.isMinimized;

            let newZIndex = existing.zIndex;
            if (isRestoring) {
                nextZIndexRef.current += 1;
                newZIndex = nextZIndexRef.current;
            }

            return prev.map(w =>
                w.id !== id
                    ? w
                    : {
                        ...w,
                        isMinimized: !w.isMinimized,
                        zIndex: newZIndex,
                    }
            );
        });
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