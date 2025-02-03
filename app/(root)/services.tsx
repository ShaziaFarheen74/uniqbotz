import Wrapper from "@/components/wrapper"; 
import Image from "next/image";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Services() {
    return (
        <div className="pb-40"> 
    <Wrapper className="space-y-12">
        <FadeSlideWrapper className="text-center max-w-screen-lg mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold break-words">
                We deliver a comprehensive suite of RPA solutions, ensuring seamless automation and complete client satisfaction.
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto">
                Add on BOTs, Increased Quality BOTs, BOT execution tracker, Quick deployment – Smooth operations, Zero frustrations
            </p>
        </FadeSlideWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
            <ServiceCard imageSrc={`/s1.png`} headerText={"RPA"} description={"Robotic Process Automation (RPA) automates repetitive tasks, allowing software bots to handle routine workflows. This boosts efficiency, reduces errors, and frees up employees for more complex work."}/>

            <ServiceCard imageSrc={`/s2.png`} headerText={"Process automation"} description={"Process Automation streamlines repetitive tasks using technology to boost efficiency, reduce errors, and free up resources for higher-value work."}/>

            <ServiceCard imageSrc={`/s3.png`} headerText={"Script based automation"} description={"Script-Based Automation uses code to automate specific tasks, making processes faster, more accurate, and freeing up time for complex activities."}/>

            <ServiceCard imageSrc={`/s4.png`} headerText={"Industry wise"} description={"Industry-wise, RPA automates sector-specific processes, increasing accuracy, efficiency, and freeing up resources across fields like finance, healthcare, and logistics."}/>

            <ServiceCard imageSrc={`/s5.png`} headerText={"Use cases"} description={"RPA use cases span various functions like data entry, invoice processing, and customer service, automating repetitive tasks to enhance speed and accuracy across industries."}/>

        </div>
    </Wrapper>
</div>

    )
}

function ServiceCard({headerText, description, imageSrc}: { headerText: string; description: string, imageSrc: string }) {
    return (
        <FadeSlideWrapper className="text-center flex flex-col items-center px-8 py-10 gap-y-5 rounded-lg shadow-all max-w-[22rem]">
            <div>
                <Image src={imageSrc} alt={headerText} width={202} height={196} layout="responsive"/>
            </div>
            <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-primary capitalize">{headerText}</h2>
                <p className="text-base md:text-lg text-foreground/80">{description}</p>
            </div>
        </FadeSlideWrapper>
    ) 
}
