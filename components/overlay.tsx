import { cn } from "@/lib/utils";

export default function Overlay({ isOpen, handleOpen, className }: { isOpen: boolean; handleOpen: () => void; className?: string }) {

    return (
        <div
            className={cn(
                "fixed inset-0 top-0 bottom-0 left-0 right-0 w-full h-full z-30 bg-black/80 backdrop-blur-md",
                className,
                isOpen ? "block" : "hidden",
            )}
            onClick={handleOpen}
        >
        </div>
    );
}