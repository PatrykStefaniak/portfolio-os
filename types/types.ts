export interface WindowProps {
    isOpen: boolean;
    onClose: () => void;
    onMinimize: () => void;
};

export type WindowState = {
    id: string;
    component: React.ComponentType<WindowProps>;
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