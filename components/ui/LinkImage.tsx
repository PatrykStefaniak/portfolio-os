import Image from "next/image";

type LinkImageProps = {
    link: string
    imageSrc: string
    imageAlt: string
    text: string
}

export default function LinkImage(props: LinkImageProps) {
    const {link, imageSrc, imageAlt, text} = props;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-(--bg-dark)/50 px-3 py-1 text-(--text) transition hover:bg-(--bg-dark)"
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={32}
                height={32}
                className="rounded invert-100"
            />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
                {text}
            </span>
        </a>
    )
}