import FadeInWrapper from "@/components/fade-in-wrapper";
import {cn} from "@/lib/utils";

export function SectionHeader({text, className}: { text: string; className?: string }) {
    return (
        <FadeInWrapper className={cn("text-center", className)}>
            <span className="text-primary text-sm">{text}</span>
        </FadeInWrapper>
    )
}