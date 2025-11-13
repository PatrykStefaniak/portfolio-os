import LinkImage from "./ui/LinkImage";

export default function TopToolbar() {
    return (
        <div className="relative z-10 mx-auto mt-6 flex min-h-14 w-full max-w-3xl items-center justify-between rounded-full border-t border-white bg-(--bg-light)/20 px-6 py-2 shadow-lg backdrop-blur-xs">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-(--text)">
                Patryk Norbert Stefaniak
            </span>
            <div className="flex items-center gap-4">
                <LinkImage
                    link={"https://github.com/PatrykStefaniak"}
                    imageSrc={"/github.png"}
                    imageAlt={"GitHub logo"}
                    text={"GitHub"}
                />
                <LinkImage
                    link={"https://www.linkedin.com/in/patryk-stefaniak-a54b65203/"}
                    imageSrc={"/linkedin.png"}
                    imageAlt={"LinkedIn logo"}
                    text={"LinkedIn"}
                />
            </div>
        </div>
    );
}