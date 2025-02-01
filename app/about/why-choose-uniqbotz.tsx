import Wrapper from "@/components/wrapper";
import FadeInWrapper from "@/components/fade-in-wrapper"; 
import { SectionHeader } from "@/components/section-header";

export function WhyChooseUniqbotz() {
    return (
        <div id="why-choose-us" className="py-20 space-y-14">
            <SectionHeader text={"Why Choose UniqBotz?"}/>
            <Wrapper className="space-y-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <FadeInWrapper>
                        <h2 className="text-3xl md:text-4xl font-semibold">Experience the power of automation with <span className="leading-0 font-semibold text-2xl md:text-3xl font-century">
                        <span className="text-primary">U</span>niq<span className="text-secondary">B</span>otz</span></h2>
                    </FadeInWrapper>
                    <FadeInWrapper>
                        <p className="text-lg md:text-xl text-foreground/90">
                            Our innovative RPA solutions are designed to streamline your operations, reduce costs, and enhance productivity. Partner
                            with us to unlock your business potential and achieve digital transformation.
                        </p>
                    </FadeInWrapper>
                </div>
                <div className="grid md:grid-cols-2 gap-14">
                    <FadeInWrapper className="relative px-8 py-6 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
                        <span className="w-fit p-3.5 flex justify-center items-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mb-6">
                            {"01"}
                        </span>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Expertise and Experience</h3>
                            <ul className="text-base space-y-2">
                                <li>
                                    <span className="font-semibold">Seasoned Professionals: </span>
                                    <span>Our team comprises highly skilled RPA experts with years of industry experience.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Proven Track Record: </span>
                                    <span>We have a successful history of delivering innovative RPA solutions to diverse clients.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">In-depth Knowledge: </span>
                                    <span>Our deep understanding of RPA technologies and best practices ensures optimal results.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeInWrapper>

                    <FadeInWrapper className="relative px-8 py-6 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
                        <span className="w-fit p-3.5 flex justify-center items-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mb-6">
                            {"02"}
                        </span>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Customized Solutions</h3>
                            <ul className="text-base space-y-2">
                                <li>
                                    <span className="font-semibold">Tailored Approach: </span>
                                    <span>We tailor our solutions to meet your unique business needs and challenges.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Flexible Deployment Models: </span>
                                    <span>We offer a range of deployment options, including on-premises, cloud-based, and hybrid.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Seamless Integration: </span>
                                    <span>Our solutions integrate seamlessly with your existing systems and workflows.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeInWrapper>

                    <FadeInWrapper className="relative px-8 py-6 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
                        <span className="w-fit p-3.5 flex justify-center items-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mb-6">
                            {"03"}
                        </span>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Scalability and Future-Proofing</h3>
                            <ul className="text-base space-y-2">
                                <li>
                                    <span className="font-semibold">Scalable Solutions: </span>
                                    <span>Our solutions can grow with your business, adapting to changing needs.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Continuous Improvement: </span>
                                    <span>We stay updated with the latest RPA advancements to ensure your solutions remain cutting-edge.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Long-Term Partnership: </span>
                                    <span>We are committed to fostering long-lasting relationships with our clients.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeInWrapper>

                    <FadeInWrapper className="relative px-8 py-6 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
                        <span className="w-fit p-3.5 flex justify-center items-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mb-6">
                            {"04"}
                        </span>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Data Security and Compliance</h3>
                            <ul className="text-base space-y-2">
                                <li>
                                    <span className="font-semibold">Robust Security Measures: </span>
                                    <span>We prioritize data security and implement stringent measures to protect sensitive information.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Compliance Adherence: </span>
                                    <span>Our solutions are designed to comply with industry regulations and standards.</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Transparent Practices: </span>
                                    <span>We maintain open and transparent communication with our clients.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeInWrapper>
                </div>
            </Wrapper>
        </div>
    )
}
