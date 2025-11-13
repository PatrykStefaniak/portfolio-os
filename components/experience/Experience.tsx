import FolderIcon from "../ui/icons/FolderIcon";

type ExperienceProps = {
    handler: () => void;
};

export default function Experience({ handler }: ExperienceProps) {
    return (
        <FolderIcon
            label="Experience"
            handler={handler}
        />
    )
}

