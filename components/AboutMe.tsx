import TextIcon from "./ui/icons/TextIcon";

type AboutMeProps = {
    handler: () => void;
};

export default function AboutMe({ handler }: AboutMeProps) {
    return (
        <TextIcon
            label="AboutMe.txt"
            handler={handler}
        />
    )
}