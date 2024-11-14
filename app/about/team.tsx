import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {LinkedInIcon} from "@/components/icons/linked-in-fill";
import {SectionHeader} from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Team() {
    return (
        <div id="team" className="py-20 space-y-20">
            <div className="container max-w-screen-md mx-auto text-center space-y-10">

                <SectionHeader text={"Team"}/>
                <FadeSlideWrapper>

                    <p>Our team of seasoned experts brings a wealth of knowledge and experience to every project. We&apos;re passionate about
                        leveraging RPA to streamline your operations and boost productivity.</p>
                </FadeSlideWrapper>
            </div>
            <Wrapper className="grid md:grid-cols-2 justify-items-center gap-10">
                <FadeSlideWrapper className="flex flex-col gap-y-7 p-10 text-center shadow-all">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/website-images/images/team1.png" alt={"Sugumar B"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2>SUGUMAR B</h2>
                            <p>Chief People Officer | CPO</p>
                            <p>UniqBotz Infotech, India</p>
                        </div>
                        <div className="flex items-center gap-x-4 justify-center">
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <FacebookIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                            <a href="https://www.linkedin.com/in/sugumar-b-869b93334/" target="_blank" rel="noreferrer"
                               className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <LinkedInIcon className="fill-primary"/>
                            </a>
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <InstagramIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                        </div>
                    </div>
                </FadeSlideWrapper>
                <FadeSlideWrapper className="flex flex-col gap-y-7 p-10 text-center shadow-all">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/website-images/images/team2.png" alt={"Vinod Srinivasan"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2>VINOD SRINIVASAN K</h2>
                            <p>Business Development Partner | BDP</p>
                            <p>UniqBotz Infotech, Canada</p>
                        </div>

                        <div className="flex items-center gap-x-4 justify-center">
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <FacebookIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                            <a href="https://www.linkedin.com/in/vinod-srinivasan-bab12a11a/" target="_blank" rel="noreferrer" className="bg-primary/10
                                shadow p-2.5 rounded-lg">
                                <LinkedInIcon className="fill-primary"/>
                            </a>
                            {/*<span className="bg-primary/10 shadow p-2.5 rounded-lg">*/}
                            {/*    <InstagramIcon className="fill-primary"/>*/}
                            {/*</span>*/}
                        </div>
                    </div>
                </FadeSlideWrapper>
            </Wrapper>
        </div>
    )
}