import Wrapper from "@/components/wrapper";
import React from "react";
import {RobotIcon} from "@/components/icons/robot";
import {GearIcon} from "@/components/icons/gear";
import {BuildingIcon} from "@/components/icons/building";
import {TerminalIcon} from "@/components/icons/terminal";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function ServiceList() {
    return (
        <div className="py-20">
            <Wrapper className="grid md:grid-cols-2 justify-items-center gap-10">
                <ServiceCard icon={<RobotIcon className="fill-primary group-hover:fill-white" />} headerText={"RPA"} description={"Lorem ipsum" +
                    " dolor" +
                    " sit" +
                    " amet" +
                    " consectetur," +
                    " adipisicing elit." +
                        " Mollitia, maxime ipsum praesentium culpa expedita"} />

                    <ServiceCard icon={<GearIcon className="fill-primary group-hover:fill-white" />} headerText={"Process Automation"} description={"Lorem" +
                        " ipsum" +
                        " dolor" +
                        " sit" +
                        " amet" +
                        " consectetur," +
                        " adipisicing elit." +
                        " Mollitia, maxime ipsum praesentium culpa expedita"} />

                    <ServiceCard icon={<BuildingIcon className="fill-primary group-hover:fill-white" />} headerText={"Industry-Wise & Use Cases"} description={"Lorem" +
                        " ipsum dolor sit amet" +
                        " consectetur, adipisicing elit." +
                        " Mollitia, maxime ipsum praesentium culpa expedita"} />

                    <ServiceCard icon={<TerminalIcon className="fill-primary group-hover:fill-white" />} headerText={"Script-Based Automation"} description={"Lorem" +
                        " ipsum dolor sit amet consectetur," +
                        " adipisicing elit." +
                        " Mollitia, maxime ipsum praesentium culpa expedita"} />
            </Wrapper>
        </div>
    )
}

function ServiceCard({icon, headerText, description}: {icon: React.ReactElement; headerText: string; description: string}) {
    return (
        <FadeSlideWrapper className="relative p-8 bg-white transition-all text-center rounded-md shadow-all max-w-96 hover:scale-105 group">
            <span
                className="w-fit p-3.5 inline-grid place-content-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-primary/80 text-4xl font-semibold span-animation mx-auto mb-6 group-hover:bg-primary/80 group-hover:border-none">{icon}</span>
            {/*<span className="rounded-full inline-block absolute left-8"></span>*/}
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{headerText}</h3>
                <p>{description}</p>
            </div>
        </FadeSlideWrapper>
    )
}