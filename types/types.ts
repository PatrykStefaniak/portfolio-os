import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type WindowState = {
    id: string;
    component: React.ComponentType;
    label: string;
    isMinimized: boolean;
    zIndex: number;
};

export type Point = {
    index: number
    position: [number, number, number]
    currentPosition: [number, number, number]
};

export type PointAndRelation = Point & {
    relatedTo: (Point & { distance: number })[]
};

export interface DesktopIconProps {
    label: string;
    window: React.ComponentType;
}

export type FileExplorerItemData = {
    name: string;
    icon: LucideIcon;
    size: string;
    date: string;
};

export type FileExplorerContentMap = Record<string, ReactNode>;