import Wrapper from "@/components/wrapper"; 
import {Button} from "@/components/ui/button"; 
import Image from "next/image"; 
import Link from "next/link"; 
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Cta2({headerText, link, linkLabel}: { headerText: string, link: string; linkLabel: string }) {
    return (
        <div className="py-14">
                <Wrapper
                    className="flex max-md:flex-col max-md:text-center gap-8 items-center justify-between py-16 px-10 md:px-14 bg-primary/80 md:rounded-lg">
                    <FadeSlideWrapper className="space-y-4">
                        <h1 className="text-3xl md:text-4xl max-w-lg text-white">{headerText}</h1>
                        <Button 
                            variant="secondary" 
                            asChild 
                            className="bg-black text-white py-4 px-8 rounded-full text-lg hover:bg-black/80 transition duration-300">
                            <Link href={link}>{linkLabel}</Link>
                        </Button>
                    </FadeSlideWrapper>
                    <FadeSlideWrapper className="flex items-center justify-center">
                        <Image src={"/website-images/images/9.png"} alt={"robot 9"} width={200} height={150} layout="responsive"/>
                    </FadeSlideWrapper>
                </Wrapper>
    
        </div>
    )
}
