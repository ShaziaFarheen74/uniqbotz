import Wrapper from "@/components/wrapper"; 
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/typewriter";
import VideoModal from "@/components/video-modal";
import Link from "next/link";

export function Hero() {
    const words = [
        "Efficient – Process Automation Simplified", 
        "Smarter – Intelligent Automation", 
        "Innovative – Digital Transformation"
    ];

    return (
        <div
            id={"hero"}
            className="flex items-center bg-heroBg bg-no-repeat bg-cover isolate relative bg-[bottom_center] bg-clip-padding bg-origin-padding min-h-[700px] py-20 md:py-72">
            <Wrapper className="relative flex flex-wrap max-md:flex-col max-md:gap-10 items-center justify-between max-md:pt-16 max-md:text-center">
                <VideoModal videoUrl="https://www.youtube.com/embed/9ftKYuV0Cao" className="md:hidden"/>
                <div className="space-y-5 md:w-1/2">
                    <Typewriter 
                        mainText={"UniqBotz Infotech Make You "} 
                        words={words} 
                        className="text-4xl font-semibold text-white"
                        wordClassName="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text pr-2 shining-text"
                    />
                    <p className="md:text-xl text-white/90 font-medium md:leading-9 max-w-lg">
                        Transform your business operations with custom RPA solutions that streamline processes, boost productivity, and unlock new efficiencies for sustainable growth.
                    </p>
                    <div className="flex max-md:flex-col items-center gap-3">
                        <Button className="rounded-full bg-primary text-white font-semibold text-lg px-8 py-4 shadow-lg hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105" asChild>
                            <Link href="/contact">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
                <VideoModal videoUrl="https://www.youtube.com/embed/9ftKYuV0Cao" className="absolute max-md:hidden -top-20 left-1/2 -translate-x-1/2 play-btn before:bg-secondary"/>
                <div className="relative md:w-1/2">
                    <Image src={"/about1.png"} alt={"hero"} width={602} height={417} className="z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
                    <Image src={"/about1.png"} alt={"hero"} width={602} height={417} className="md:hidden"/>
                </div>
            </Wrapper>
        </div>
    );
}
