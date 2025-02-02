'use client'

import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import FadeInWrapper from "@/components/fade-in-wrapper";
import {useState} from "react";

export function About() {
    const [readMore, setReadMore] = useState<boolean>(false)

    const handleToggleReadMore = () => {
        setReadMore(!readMore)
    }
    return (<div className="pb-32"> 
        <Wrapper className="flex flex-wrap max-md:flex-col items-center justify-center gap-8 relative">
            <FadeInWrapper className="flex-1">
                <Image src={"/high.jpg"} alt={"about"} width={754} height={549} className="max-h-full"/>
            </FadeInWrapper>
            <div className="space-y-6 flex-1">
                <FadeInWrapper>
                    <h2 className="text-3xl md:text-4xl font-semibold ">A Straightforward Structure for Powerful Automation Results</h2>
                </FadeInWrapper>
                <FadeInWrapper>
                    <p className='text-foreground/80 md:leading-7 text-lg md:text-xl'>
                        UniqBotz Infotech delivers impactful automation solutions. We analyze your processes, design custom RPA bots, and ensure seamless integration. Our solutions are actively monitored, scalable, and built with data security and compliance in mind. We drive productivity and support your long-term growth.
                    </p>
                    <br/>
                    {readMore && (
                        <p className='text-foreground/80 md:leading-7 text-lg md:text-xl'>
                            For powerful automation results, UniqBotz Infotech follows a streamlined approach: first, we identify key repetitive processes that deliver maximum impact when automated. We then customize RPA solutions to fit seamlessly into existing workflows, ensuring minimal disruption. Our solutions incorporate intelligent monitoring to track performance and identify improvement areas, all while emphasizing scalability to grow with your business. We prioritize security and compliance, especially for sensitive industries, delivering robust, efficient automation tailored for sustainable growth.
                        </p>
                    )}
                </FadeInWrapper>
                <FadeInWrapper>
                    <Button 
                        onClick={handleToggleReadMore}
                        className="bg-primary text-white font-semibold py-3 px-8 text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                        Read More
                    </Button>
                </FadeInWrapper>
            </div>
        </Wrapper>
    </div>
    )
}