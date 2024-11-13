import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import FadeInWrapper from "@/components/fade-in-wrapper";

export function About() {
    return (<div className="pb-32">
            <Wrapper className="flex flex-wrap max-md:flex-col items-center justify-center gap-8 relative">

                <FadeInWrapper className="flex-1">
                    <Image src={"/high.jpg"} alt={"about"} width={754} height={549} className="max-h-full"/>
                </FadeInWrapper>
                <div className="space-y-6 flex-1">
                    <FadeInWrapper>
                        <h2 className="text-3xl md:text-4xl font-semibold">A Straight forward structure for powerful automation results</h2>
                    </FadeInWrapper>
                    <FadeInWrapper>
                        <p className='text-foreground/80 md:text-lg md:leading-7'>Stigma at the moon was the definition of rumour, dissolved to a
                            solid sensor. Countless starships infiltrate galactic, strange crews. Scrape raspberries fairly, then mix with tabasco and
                            serve freshly in bucket. Where is the virtual planet?</p>
                    </FadeInWrapper>
                    <FadeInWrapper>
                        <Button asChild>
                            <Link href={"/about"}>Read More</Link>
                        </Button>
                    </FadeInWrapper>
                </div>
            </Wrapper>
        </div>)
}