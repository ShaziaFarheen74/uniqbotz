import Wrapper from "@/components/wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export function SharedHero({sectionHeader, sectionText}: {sectionHeader: string; sectionText: string}) {
    return (
        <div className="bg-gradient-to-r from-[#4E03A1] to-[#4E03A1] text-white pt-20">
            <Wrapper className="min-h-80 grid place-content-center justify-items-center gap-3">
                <h1 className="text-4xl text-center">{sectionHeader}</h1>
                <div className="flex gap-x-2 items-center text-lg">
                    <Button variant="link" className="px-0 text-base" asChild>
                    <Link href="/" className="text-white/80">Home</Link>
                    </Button>
                    <span className="inline-block h-1 w-1 rounded-full bg-white" />
                    <p className="font-semibold">{sectionText}</p>
                </div>
            </Wrapper>
        </div>
    )
}