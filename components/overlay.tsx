import { cn } from "@/lib/utils";

export default function Overlay({ isOpen, handleOpen }: { isOpen: boolean; handleOpen: () => void }) {

    return (
        <div
            className={cn(
                "fixed inset-0 z-30 bg-black/80 backdrop-blur-md",
                isOpen ? "block" : "hidden",
            )}
            onClick={handleOpen}
        >
        </div>
    );
}