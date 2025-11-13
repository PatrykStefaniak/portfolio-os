import PdfIcon from "./ui/icons/PdfIcon";

type ResumeProps = {
    handler: () => void;
};

export default function Resume({ handler }: ResumeProps) {
    return (
        <PdfIcon
            label="Resume.pdf"
            handler={handler}
        />
    )
}