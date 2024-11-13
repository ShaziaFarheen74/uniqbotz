import Wrapper from "@/components/wrapper";
import FadeInWrapper from "@/components/fade-in-wrapper";
import {SectionHeader} from "@/components/section-header";

export function WhyChooseUs() {
    return (
        <div id="why-choose-us" className="py-20 space-y-14">
            <SectionHeader text={"Why Choose Us?"} />
            <Wrapper className="space-y-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <FadeInWrapper>

                        <h2 className="text-2xl md:text-4xl">Our Platform takes away the hard Process of creating your website</h2>
                    </FadeInWrapper>
                    <FadeInWrapper>

                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                    </FadeInWrapper>

                </div>
                <div className="grid md:grid-cols-2 gap-14">
                    <WhyChooseUsCard number={"01"} headerText={"Safe Security"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing" +
                        " elitr, sed diam ex libero vituperatoribus sententiae tractatos splendide possenatoque laudem liber"} />
                    <WhyChooseUsCard number={"02"} headerText={"Technical Support"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing" +
                        " elitr, sed diam ex libero vituperatoribus sententiae tractatos splendide possenatoque laudem liber"} />
                    <WhyChooseUsCard number={"03"} headerText={"Life Support"} description={"Lorem ipsum dolor sit amet, consetetur sadipscing" +
                        " elitr, sed diam ex libero vituperatoribus sententiae tractatos splendide possenatoque laudem liber"} />
                    <WhyChooseUsCard number={"04"} headerText={"Advanced Technology"} description={"Lorem ipsum dolor sit amet, consetetur" +
                        " sadipscing" +
                        " elitr, sed diam ex libero vituperatoribus sententiae tractatos splendide possenatoque laudem liber"} />

                </div>
            </Wrapper>
        </div>
    )
}

function WhyChooseUsCard({number, headerText, description}: {number: string; headerText: string; description: string}) {
    return (
        <FadeInWrapper className="relative p-8 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
            <span
                className="w-fit p-3.5 inline-grid place-content-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mx-auto mb-6">{number}</span>
            {/*<span className="rounded-full inline-block absolute left-8"></span>*/}
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{headerText}</h3>
                <p>{description}</p>
            </div>
        </FadeInWrapper>
    )
}