import Wrapper from "@/components/wrapper";  
import { CpuIcon } from "@/components/icons/cpu";
import { SectionHeader } from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";
import Image from "next/image";
import { Handshake, MessageCircleHeart, TreePalm, UsersIcon } from "lucide-react";

export function Achievements() {
    return (
        <div id="achievements" className="py-20 space-y-16">
            <SectionHeader text={"Achievements"} />
            <Wrapper className="grid md:grid-cols-2 items-center justify-items-center gap-10">
                <div className="space-y-8">
                    <FadeSlideWrapper>
                        <h1 className="text-2xl md:text-3xl text-primary">Key Achievements:</h1>
                    </FadeSlideWrapper>
                    <div className="space-y-5">
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">
                                <UsersIcon className="text-primary" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-semibold">Strong Founding Team:</h2>
                                <p className="text-lg md:text-xl">Experienced professionals driving innovation.</p>
                            </div>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">
                                <Handshake className="text-primary" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-semibold">Strategic Partnerships:</h2>
                                <p className="text-lg md:text-xl">Collaborating with industry leaders.</p>
                            </div>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">
                                <CpuIcon className="fill-primary/80" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-semibold">Innovative Product Development:</h2>
                                <p className="text-lg md:text-xl">Delivering cutting-edge RPA solutions.</p>
                            </div>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">
                                <TreePalm className="text-primary" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-semibold">Rapid Growth:</h2>
                                <p className="text-lg md:text-xl">Expanding our client base and market reach.</p>
                            </div>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">
                                <MessageCircleHeart className="text-primary" />
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-semibold">Positive Customer Impact:</h2>
                                <p className="text-lg md:text-xl">Empowering businesses with automation.</p>
                            </div>
                        </FadeSlideWrapper>
                    </div>
                </div>
                <FadeSlideWrapper>
                    <Image src={"/website-images/images/9.png"} alt={"achievements"} width={300} height={306} />
                </FadeSlideWrapper>
                {/*<div className="grid md:grid-cols-2 justify-center gap-8 text-center">*/}
                {/*    <div className="h-5/6 grid gap-8 max-md:w-56 max-w-80">*/}
                {/*        <FadeSlideWrapper className="bg-primary/20 grid h-40 place-content-center rounded">*/}
                {/*            <StatCard endValue={95} description={"Project Completed"} suffix={"%"}/>*/}
                {/*        </FadeSlideWrapper>*/}
                {/*        <FadeSlideWrapper className="bg-green-200 grid h-40 place-content-center rounded">*/}
                {/*            <StatCard endValue={90} description={"Design"} suffix={"%"}/>*/}
                {/*        </FadeSlideWrapper>*/}
                {/*    </div>*/}
                {/*    <div className="h-5/6 grid gap-8 self-end max-md:w-56 max-w-80">*/}
                {/*        <FadeSlideWrapper className="bg-blue-300 grid h-40 place-content-center rounded">*/}
                {/*            <StatCard endValue={85} description={"Happy Clients"} suffix={"%"}/>*/}
                {/*        </FadeSlideWrapper>*/}

                {/*        <FadeSlideWrapper className="bg-secondary/20 grid h-40 place-content-center rounded">*/}
                {/*            <StatCard endValue={80} description={"Award Win"} suffix={"%"}/>*/}
                {/*        </FadeSlideWrapper>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </Wrapper>
        </div>
    );
}
