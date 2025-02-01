
import Wrapper from "@/components/wrapper"; 
import Image from "next/image"; 
import { CheckDoubleIcon } from "@/components/icons/check-double"; 
import { SectionHeader } from "@/components/section-header"; 
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
        <div id="about-us" className="py-20 min-h-screen flex flex-col justify-center items-center">
            <Wrapper className="grid md:grid-cols-2 gap-10">
                {/* Image on the left below the header */}
                <div className="-mt-50 ml-10 justify-center items-center">
                    <FadeSlideWrapper>
                        <Image src="/website-images/images/3.png" alt={"about us"} width={375} height={440} />
                    </FadeSlideWrapper>
                </div>
                {/* Content Block on the Right */}
                <div className="space-y-8">
                    <SectionHeader text={"About Us"} className="text-start" />
                    <div className="space-y-8">
                        <FadeSlideWrapper>
                            <h1 className="text-4xl font-semibold font-century">
                                <span className="leading-0 font-semibold text-3xl md:text-4xl font-century">
                                    <span className="text-primary">U</span>niq<span className="text-secondary">B</span>otz
                                </span>: Your Partner in Digital Transformation
                            </h1>
                        </FadeSlideWrapper>

                        <FadeSlideWrapper>
                            <p className="text-lg md:text-xl text-foreground/90">
                                At UniqBotz, we’re committed to empowering businesses through the power of automation. Our innovative RPA
                                solutions are designed to streamline operations, reduce costs, and enhance productivity.
                            </p>
                        </FadeSlideWrapper>

                        <ul className="space-y-6 list-disc text-lg md:text-xl text-foreground/80">
                            <h5 className="text-xl md:text-2xl font-semibold text-primary">What we do:</h5>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Process Analysis:</span> We meticulously analyze your business processes to identify areas ripe for automation.
                                </span>
                            </li>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">RPA Implementation:</span> Our expert team develops and deploys customized RPA solutions tailored to your specific needs.
                                </span>
                            </li>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Continuous Improvement:</span> We monitor and optimize our solutions to ensure maximum efficiency and ROI.
                                </span>
                            </li>
                        </ul>

                        <ul className="space-y-6 list-disc text-lg md:text-xl text-foreground/80">
                            <h5 className="text-xl md:text-2xl font-semibold text-primary">How are we different:</h5>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Expertise:</span> Our team of experienced professionals is dedicated to delivering exceptional results.
                                </span>
                            </li>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Innovation:</span> We stay ahead of the curve, leveraging the latest RPA technologies.
                                </span>
                            </li>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Customer Focus:</span> We prioritize your needs and tailor our solutions to your specific requirements.
                                </span>
                            </li>
                            <li className="flex gap-x-4 text-base md:text-lg">
                                <span className="bg-primary/20 p-1 h-fit rounded-full">
                                    <CheckDoubleIcon className="h-5 w-5 fill-primary" />
                                </span>
                                <span className="font-medium">
                                    <span className="font-semibold">Scalability:</span> Our solutions can grow with your business, ensuring long-term success.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
