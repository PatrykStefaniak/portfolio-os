"use client";

import { useState, useEffect, useRef } from "react";
import { Wifi, Volume2, BatteryCharging, Globe } from "lucide-react";

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

export default function Footer() {
    const [language, setLanguage] = useState<Language>("ENG");
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const languageMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
        <footer className="flex h-14 items-center justify-between border-t border-(--border-muted) bg-(--bg) px-4 backdrop-blur-sm">
            <div className="flex-1" />
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
                        <div className="absolute bottom-full right-0 mb-2 rounded border border-(--border-muted) bg-(--bg-light)/80 backdrop-blur-sm shadow-lg">
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
                                    className={`block w-full px-4 py-2 text-left text-xs transition hover:bg-(--bg-dark) ${
                                        language === lang ? "bg-(--bg) font-bold" : ""
                                    }`}
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
                <div className="flex items-center">
                    <BatteryCharging size={20} className="text-(--text-muted)" />
                </div>
                <div className="flex flex-col items-end font-medium">
                    <span>{formatTime(time)}</span>
                    <span className="text-(--text-muted)">{formatDate(time)}</span>
                </div>
            </div>
        </footer>
    );
}