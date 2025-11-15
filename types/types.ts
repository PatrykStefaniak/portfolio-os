export type WindowState = {
    id: string;
    component: React.ComponentType;
    label: string;
    isMinimized: boolean;
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