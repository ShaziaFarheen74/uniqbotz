import Wrapper from "@/components/wrapper";  
import Image from "next/image";
import { LinkedInIcon } from "@/components/icons/linked-in-fill";
import { SectionHeader } from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Team() {
    return (
        <div id="team" className="py-20 space-y-20">
            <div className="container max-w-screen-md mx-auto text-center space-y-10">

                <SectionHeader text={"Meet Our Team"} className="text-4xl font-bold text-primary" />
                <FadeSlideWrapper>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                        Our team of seasoned experts brings a wealth of knowledge and experience to every project. We&apos;re passionate about
                        leveraging RPA to streamline your operations and boost productivity.
                    </p>
                </FadeSlideWrapper>
            </div>

            <Wrapper className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center gap-16">
                {/* Team Member 1 */}
                <FadeSlideWrapper className="flex flex-col gap-y-7 p-10 text-center shadow-all rounded-lg hover:shadow-xl transition-shadow">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/website-images/images/team1.png" alt={"Sugumar B"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary">SUGUMAR B</h2>
                            <p className="text-lg text-foreground/70">Chief People Officer | CPO</p>
                            <p className="text-md text-foreground/50">UniqBotz Infotech, India</p>
                        </div>
                        <div className="flex items-center gap-x-4 justify-center">
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <FacebookIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                            <a href="https://www.linkedin.com/in/sugumar-b-869b93334/" target="_blank" rel="noreferrer"
                               className="bg-primary/10 shadow p-2.5 rounded-lg hover:bg-primary/20 transition-all">
                                <LinkedInIcon className="h-6 w-6 fill-primary"/>
                            </a>
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <InstagramIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                        </div>
                    </div>
                </FadeSlideWrapper>

                {/* Team Member 2 */}
                <FadeSlideWrapper className="flex flex-col gap-y-7 p-10 text-center shadow-all rounded-lg hover:shadow-xl transition-shadow">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/website-images/images/team2.png" alt={"Vinod Srinivasan"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary">VINOD SRINIVASAN K</h2>
                            <p className="text-lg text-foreground/70">Business Development Partner | BDP</p>
                            <p className="text-md text-foreground/50">UniqBotz Infotech, Canada</p>
                        </div>
                        <div className="flex items-center gap-x-4 justify-center">
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <FacebookIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                            <a href="https://www.linkedin.com/in/vinod-srinivasan-bab12a11a/" target="_blank" rel="noreferrer" className="bg-primary/10 shadow p-2.5 rounded-lg hover:bg-primary/20 transition-all">
                                <LinkedInIcon className="h-6 w-6 fill-primary"/>
                            </a>
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <InstagramIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                        </div>
                    </div>
                </FadeSlideWrapper>
            </Wrapper>
        </div>
    );
}
