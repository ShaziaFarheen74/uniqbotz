import Wrapper from "@/components/wrapper";
import {CpuIcon} from "@/components/icons/cpu";
import {Button} from "@/components/ui/button";
import Counter from "@/app/about/counter";
import {SectionHeader} from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Achievements() {
    return (
        <div id="achievements" className="py-20 space-y-16">
            <SectionHeader text={"Achievements"}/>
            <Wrapper className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <FadeSlideWrapper>

                        <h1 className="text-3xl">Make Your Business More Competitive And Enduring</h1>
                    </FadeSlideWrapper>
                    <div className="space-y-5">
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">

                            <CpuIcon className="fill-primary/80"/>
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-lg">AI Will Automate Cybersecurity Improve</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis
                                    ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="flex gap-6">
                            <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">

                            <CpuIcon className="fill-primary/80"/>
                            </span>
                            <div className="space-y-2">
                                <h2 className="text-lg">A Community With A Unique Mission</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis
                                    ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>
                        </FadeSlideWrapper>


                    </div>
                    <FadeSlideWrapper>

                    <Button>Learn more</Button>
                    </FadeSlideWrapper>
                </div>
                <div className="grid md:grid-cols-2 justify-center gap-8 text-center">
                    <div className="h-5/6 grid gap-8 max-md:w-56 max-w-80">
                        <FadeSlideWrapper className="bg-primary/20 grid h-40 place-content-center rounded">
                            <StatCard endValue={95} description={"Project Completed"} suffix={"%"}/>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper className="bg-green-200 grid h-40 place-content-center rounded">
                            <StatCard endValue={90} description={"Design"} suffix={"%"}/>
                        </FadeSlideWrapper>
                    </div>
                    <div className="h-5/6 grid gap-8 self-end max-md:w-56 max-w-80">
                        <FadeSlideWrapper className="bg-blue-300 grid h-40 place-content-center rounded">
                            <StatCard endValue={85} description={"Happy Clients"} suffix={"%"}/>
                        </FadeSlideWrapper>

                        <FadeSlideWrapper className="bg-secondary/20 grid h-40 place-content-center rounded">
                            <StatCard endValue={80} description={"Award Win"} suffix={"%"}/>
                        </FadeSlideWrapper>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

function StatCard({endValue, description, suffix}: { endValue: number; description: string; suffix: string }) {
    return (<>
            <Counter target={endValue} suffix={suffix}
                     className="text-4xl md:text-5xl bg-gradient-to-r from-[#4E03A1] via-[#9B2EE0] via-75% to-[#9B2EE0] bg-clip-text text-transparent"/>
            <p className="text-foreground font-medium text-lg">{description}</p>
        </>
    )
}