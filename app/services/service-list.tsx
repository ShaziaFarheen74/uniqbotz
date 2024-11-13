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
                <ServiceCard icon={<RobotIcon className="fill-primary group-hover:fill-white" />} headerText={"RPA"} description={"Robotic Process Automation (RPA) empowers businesses to automate repetitive, rule-based tasks. By deploying software bots to handle routine workflows, RPA significantly boosts efficiency, reduces human error, and frees up valuable employee time for strategic initiatives. This technology enables organizations to streamline operations, improve accuracy, and achieve greater productivity."} />

                    <ServiceCard icon={<GearIcon className="fill-primary group-hover:fill-white" />} headerText={"Process Automation"} description={"Process Automation revolutionizes operations by automating repetitive tasks using advanced technologies. This strategic approach significantly enhances efficiency, minimizes errors, and frees up valuable resources for higher-value, strategic work. By streamlining workflows and eliminating manual intervention, organizations can achieve greater productivity, improve decision-making, and gain a competitive edge."} />

                    <ServiceCard icon={<BuildingIcon className="fill-primary group-hover:fill-white" />} headerText={"Industry-Wise & Use Cases"} description={"Robotic Process Automation (RPA) is a transformative technology that is reshaping industries. By automating repetitive, rule-based tasks, RPA increases accuracy, efficiency, and productivity across sectors such as finance, healthcare, and logistics. RPA use cases are wide-ranging, encompassing functions like data entry, invoice processing, and customer service. By automating these routine tasks, organizations can significantly enhance speed, accuracy, and overall operational efficiency."} />

                    <ServiceCard icon={<TerminalIcon className="fill-primary group-hover:fill-white" />} headerText={"Script-Based Automation"} description={"Script-based automation leverages programming languages to automate specific tasks. By automating repetitive processes, organizations can significantly increase speed, accuracy, and efficiency. This technology frees up valuable time and resources, allowing employees to focus on more complex and strategic initiatives."} />
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