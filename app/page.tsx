import Desktop from "@/components/Desktop";
import WindowProvider from "@/contexts/WindowProvider";

export default function Home() {
    return (
        <WindowProvider>
            <Desktop/>
        </WindowProvider>
    );
}
