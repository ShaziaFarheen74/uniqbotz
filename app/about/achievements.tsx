import Wrapper from "@/components/wrapper";
import {CpuIcon} from "@/components/icons/cpu";
import {Button} from "@/components/ui/button";
import Counter from "@/app/about/counter";

export function Achievements() {
    return (
        <div id="achievements" className="py-20 space-y-16">
            <div className="text-center">
                <span className="text-primary text-sm">Achievements</span>
            </div>
            <Wrapper className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h1 className="text-3xl">Make Your Business More Competitive And Enduring</h1>
                    <ul className="space-y-5">
                        <li className="flex gap-6">
                        <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">

                        <CpuIcon className="fill-primary/80"/>
                        </span>
                            <div className="space-y-2">
                                <h2 className="text-lg">AI Will Automate Cybersecurity Improve</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis
                                    ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>
                        </li>
                        <li className="flex gap-6">
                        <span className="p-3 rounded-full rounded-tl-none bg-primary/10 h-fit">

                        <CpuIcon className="fill-primary/80"/>
                        </span>
                            <div className="space-y-2">
                                <h2 className="text-lg">A Community With A Unique Mission</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis
                                    ipsum suspendisse ultrices gravida suspendisse.</p>
                            </div>
                        </li>


                    </ul>
                    <Button>Learn more</Button>
                </div>
                <div className="flex gap-8 text-center">
                    <div className="h-5/6 grid gap-8 w-full">
                        <div className="bg-primary/20 grid place-content-center rounded">
                            <StatCard endValue={95} description={"Project Completed"} suffix={"%"}/>
                        </div>
                        <div className="bg-green-200 grid place-content-center rounded">
                            <StatCard endValue={90} description={"Design"} suffix={"%"}/>
                        </div>
                    </div>
                    <div className="h-5/6 grid gap-8 self-end w-full">
                        <div className="bg-blue-300 grid place-content-center rounded">
                            <StatCard endValue={85} description={"Happy Clients"} suffix={"%"}/>
                        </div>

                        <div className="bg-secondary/20 grid place-content-center rounded">
                            <StatCard endValue={80} description={"Award Win"} suffix={"%"}/>
                        </div>
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