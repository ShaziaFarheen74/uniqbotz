import Wrapper from "@/components/wrapper";
import Image from "next/image";

export function Services() {
    return (
        <div className="pb-40">
            <Wrapper className="space-y-12">
                <div className="text-center max-w-screen-md mx-auto space-y-4">
                    <h2 className="text-4xl font-semibold">We offer a wide range of services and provide complete client satisfication</h2>
                    <p>Collision course, starlight travel, and alarm.Per guest prepare one jar of emeril&apos;s essence with drained pumpkin seeds for
                        dessert.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
                    <ServiceCard imageSrc={`/s1.png`} headerText={"RPA"} description={"Lorem ipsum" +
                        " dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                        " erat, sed diam voluptua."}/>
                    <ServiceCard imageSrc={`/s2.png`} headerText={"Process automation"} description={"Lorem ipsum" +
                        " dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                        " erat, sed diam voluptua."}/>
                    <ServiceCard imageSrc={`/s3.png`} headerText={"Script based automation"} description={"Lorem ipsum" +
                        " dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                        " erat, sed diam voluptua."}/>
                    <ServiceCard imageSrc={`/s4.png`} headerText={"Industry wise"} description={"Lorem ipsum" +
                        " dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                        " erat, sed diam voluptua."}/>
                    <ServiceCard imageSrc={`/s5.png`} headerText={"Use cases"} description={"Lorem ipsum" +
                        " dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam" +
                        " erat, sed diam voluptua."}/>
                </div>
            </Wrapper>
        </div>
    )
}

function ServiceCard({headerText, description, imageSrc}: { headerText: string; description: string, imageSrc: string }) {
    return (
        <div className="text-center flex flex-col items-center px-8 py-10 gap-y-5 rounded-lg shadow-all max-w-[22rem]">
            <div>
                <Image src={imageSrc} alt={headerText} width={202} height={196}/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold capitalize">{headerText}</h2>
                <p className="text-foreground/80">{description}</p>
            </div>
        </div>
    )
}