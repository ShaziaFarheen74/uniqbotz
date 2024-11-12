import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {FacebookIcon} from "@/components/icons/facebook-fill";
import {LinkedInIcon} from "@/components/icons/linked-in-fill";
import {InstagramIcon} from "@/components/icons/instagram-fill";

export function Team() {
    return (
        <div id="team" className="py-20 space-y-20">
            <div className="max-w-screen-md mx-auto text-center space-y-10">

            <div className="">
                <span className="text-primary text-sm">Team</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
            </div>
            <Wrapper className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-y-7 p-10 text-center shadow-all">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/team5.png" alt={"team 5"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2>Karen Peter</h2>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="flex items-center gap-x-4 justify-center">
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <FacebookIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <LinkedInIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <InstagramIcon className="fill-primary"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7 p-10 text-center shadow-all">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/team6.png" alt={"team 5"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2>Alex Peter</h2>
                            <p>Executive</p>
                        </div>

                        <div className="flex items-center gap-x-4 justify-center">
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <FacebookIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <LinkedInIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <InstagramIcon className="fill-primary"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7 p-10 text-center shadow-all">
                    <div className="relative flex justify-center items-center h-fit p-4">
                        <Image src="/team7.png" alt={"team 5"} width={140} height={140} className="rounded-full"/>
                        <Image src="/team-shape.png" alt={"team shape"} width={208} height={198} className="absolute h-full w-fit animate-spin-slow"/>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2>Alicia Maria</h2>
                            <p>Web Developer</p>
                        </div>

                        <div className="flex items-center gap-x-4 justify-center">
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <FacebookIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <LinkedInIcon className="fill-primary"/>
                            </span>
                            <span className="bg-primary/10 shadow p-2.5 rounded-lg">
                                <InstagramIcon className="fill-primary"/>
                            </span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}