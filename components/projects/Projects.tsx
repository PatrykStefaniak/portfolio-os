import FolderIcon from "../ui/icons/FolderIcon";

type ProjectsProps = {
    handler: () => void;
};

export default function Projects({ handler }: ProjectsProps) {
    return (
        <FolderIcon
            label="Projects"
            handler={handler}
        />
    )
}

