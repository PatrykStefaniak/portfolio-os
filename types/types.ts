export type WindowProps = {
    isOpen: boolean;
    onClose: () => void;
    onMinimise?: () => void;
}