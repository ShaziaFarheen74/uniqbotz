import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {CheckDoubleIcon} from "@/components/icons/check-double";
import {SectionHeader} from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function AboutUs() {
    // const features = [
    //     "Process Analysis: We meticulously analyze your business processes to identify areas ripe for automation.",
    //     "RPA Implementation: Our expert team develops and deploys customized RPA solutions tailored to your specific needs.",
    //     "Continuous Improvement: We monitor and optimize our solutions to ensure maximum efficiency and ROI.",
    // ]
    // const whyChooseUniqBotz = [
    //     "Expertise: Our team of experienced professionals is dedicated to delivering exceptional results.",
    //     "Innovation: We stay ahead of the curve, leveraging the latest RPA technologies.",
    //     "Continuous Improvement: We monitor and optimize our solutions to ensure maximum efficiency and ROI.",
    // ]
    return (
        <div id="about-us" className="py-32">

            <Wrapper className="grid md:grid-cols-2 gap-5">
                <FadeSlideWrapper className="flex justify-center items-center">
                    <Image src="/website-images/images/3.png" alt={"about us"} width={375} height={440}/>
                </FadeSlideWrapper>
                <div className="space-y-6">
                    <SectionHeader text={"About Us"} className="text-start"/>
                    <div className="space-y-6">
                        <FadeSlideWrapper>

                            <h1 className="text-3xl font-semibold font-century">UniqBotz: Your Partner in Digital Transformation</h1>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper>

                            <p>At UniqBotz, we&apos;re committed to empowering businesses through the power of automation. Our innovative RPA
                                solutions are designed to streamline operations, reduce costs, and enhance productivity.</p>
                        </FadeSlideWrapper>

                        {/*<ul className="space-y-4">*/}
                        {/*    <h5>What We do</h5>*/}
                        {/*    <div className="grid grid-cols-2 gap-3">*/}

                        {/*        {*/}
                        {/*            features.map((feature, idx) => (*/}
                        {/*                <FadeSlideWrapper key={idx}>*/}
                        {/*                    <li key={idx} className="flex gap-x-2 text-sm">*/}
                        {/*                <span className="bg-primary/20 p-1 h-fit rounded-full">*/}
                        {/*                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>*/}
                        {/*                </span>*/}
                        {/*                        <span className="font-medium">{feature}</span>*/}
                        {/*                    </li>*/}
                        {/*                </FadeSlideWrapper>*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</ul>*/}
                        <ul className="space-y-4 list-disc">
                            <h5>What We do:</h5>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Process Analysis:</span> We meticulously analyze your business processes to identify areas ripe for automation.</span>
                            </li>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">RPA Implementation:</span> Our expert team develops and deploys customized RPA solutions tailored to your specific needs.</span>
                            </li>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Continuous Improvement:</span> We monitor and optimize our solutions to ensure maximum efficiency and ROI.</span>
                            </li>
                        </ul>
                        <ul className="space-y-4 list-disc">
                            <h5>What Choose UniqBotz:</h5>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Expertise: </span>Our team of experienced professionals is dedicated to delivering exceptional results.</span>
                            </li>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Innovation:</span> We stay ahead of the curve, leveraging the latest RPA technologies.</span>
                            </li>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Customer Focus:</span>Customer Focus: We prioritize your needs and tailor our solutions to your specific requirements.</span>
                            </li>
                            <li className="flex gap-x-2 text-sm">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-4 w-4 fill-primary"/>
                                </span>

                                <span className="font-medium"><span className="font-semibold">Scalability:</span>Scalability: Our solutions can grow with your business, ensuring long-term success.</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}