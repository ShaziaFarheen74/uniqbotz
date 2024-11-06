import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export function Hero() {
    return (
        <div className="flex items-center bg-heroBg bg-no-repeat bg-cover isolate relative bg-[bottom_center] bg-clip-padding bg-origin-padding min-h-[700px] py-20">
            <Wrapper className="flex max-md:flex-col items-center justify-between max-md:pt-16 max-md:text-center">
                <div className="space-y-5">
                    <h1 className="text-4xl lg:text-6xl font-semibold text-white">Artificial Intelligence<br/> Startup Agency.</h1>
                    <p className="md:text-lg max-w-lg text-white/80 md:leading-8">Transform your business with tailored artificial intelligence that enhances efficiency, drives growth, and unlocks new opportunities for success.</p>
                    <div className="space-x-6">
                        <Button className="rounded-full text-white font-medium" >
                            Get Started
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <Image src={"/website-images/images/2.png"} alt={"2"} width={250} height={275}  className="-z-10 absolute top-1/3 -translate-y-1/2 animate-bounce"/>
                    <Image src={"/about1.png"} alt={"hero"} width={705} height={610} className="z-20 max-lg:max-w-full h-auto block mx-auto max-w-[120%] mt-28" />
                </div>
            </Wrapper>
        </div>
    )
}