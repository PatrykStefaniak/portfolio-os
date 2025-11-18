"use client";

import { useEffect, useRef, useState } from "react";
import { Wifi, Volume2, BatteryCharging, BatteryFull, BatteryMedium, BatteryLow, Globe } from "lucide-react";

type BatteryInfo = {
    level: number;
    charging: boolean;
};

interface BatteryManager extends EventTarget {
    charging: boolean;
    level: number;
    addEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
    removeEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
}

type Language = "ENG" | "ESP" | "POL";

const LANGUAGES: Language[] = ["ENG", "ESP", "POL"];

const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
};

const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};

export default function FooterRight() {
    const [language, setLanguage] = useState<Language>("ENG");
    const [time, setTime] = useState(new Date());
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const [batteryInfo, setBatteryInfo] = useState<BatteryInfo | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let battery: BatteryManager | null = null;

        const updateBattery = () => {
            if (!battery) {
                return;
            }

            setBatteryInfo({
                level: battery.level,
                charging: battery.charging,
            });
        };

        async function initBattery() {
            if (!("getBattery" in navigator)) {
                return;
            }

            try {
                const batteryManager = await (navigator.getBattery as () => Promise<BatteryManager>)();

                battery = batteryManager;
                updateBattery();

                batteryManager.addEventListener("levelchange", updateBattery);
                batteryManager.addEventListener("chargingchange", updateBattery);
            } catch (error) {
                console.error("Failed to read battery info", error);
            }
        }

        initBattery();

        return () => {
            battery?.removeEventListener("levelchange", updateBattery);
            battery?.removeEventListener("chargingchange", updateBattery);
            battery = null;
        };
    }, []);

    const renderBatteryIcon = () => {
        if (!batteryInfo) {
            return <BatteryFull size={20} className="text-(--text-muted)" />;
        }

        if (batteryInfo.charging) {
            return <BatteryCharging size={20} className="text-(--success)" />;
        }

        if (batteryInfo.level >= 0.75) {
            return <BatteryFull size={20} className="text-(--text-muted)" />;
        }

        if (batteryInfo.level <= 0.35) {
            return <BatteryLow size={20} className="text-(--danger)" />;
        }

        return <BatteryMedium size={20} className="text-(--warning)" />;
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false);
            }
        };

        if (isLanguageMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLanguageMenuOpen]);

    return (
        <div className="flex items-center gap-4 text-xs text-(--text)">
            <div className="relative" ref={languageMenuRef}>
                <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="cursor-pointer flex items-center gap-1.5 rounded p-2 transition hover:bg-(--bg-dark)"
                    aria-label="Change language"
                >
                    <Globe size={20} className="text-(--text-muted)" />
                    <span className="font-medium">{language}</span>
                </button>
                {isLanguageMenuOpen && (
                    <div className="absolute bottom-full right-0 mb-2 rounded border border-(--border-muted) bg-(--bg-light)/80 shadow-lg">
                        <div className="text-center py-2 font-bold border-b border-(--border)/60">
                            Fluent in
                        </div>
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    setLanguage(lang);
                                    setIsLanguageMenuOpen(false);
                                }}
                                className={`${language === lang ? "bg-(--bg) font-bold" : ""} cursor-pointer block w-full px-4 py-2 text-left transition hover:bg-(--bg-dark) `}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex items-center">
                <Wifi size={20} className="text-(--text-muted)" />
            </div>
            <div className="flex items-center">
                <Volume2 size={20} className="text-(--text-muted)" />
            </div>
            <div className="flex items-center" title={batteryInfo ? `${Math.round(batteryInfo.level * 100)}%` : undefined}>
                {renderBatteryIcon()}
            </div>
            <div className="flex flex-col items-end font-medium">
                <span suppressHydrationWarning>{formatTime(time)}</span>
                <span className="text-(--text-muted)" suppressHydrationWarning>{formatDate(time)}</span>
            </div>
        </div>
    )
}