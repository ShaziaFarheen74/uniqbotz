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

                        <h2 className="text-2xl md:text-4xl">Revolutionize Your Business with RPA.</h2>
                    </FadeInWrapper>
                    <FadeInWrapper>

                    <p>Experience the power of automation. Our platform helps you streamline operations, save time, and reduce costs.</p>
                    </FadeInWrapper>

                </div>
                <div className="grid md:grid-cols-2 gap-14">
                    <WhyChooseUsCard number={"01"} headerText={"Ease of Use"} description={"Drag-and-drop automation, no coding required."} />
                    <WhyChooseUsCard number={"02"} headerText={"Scalability"} description={"Scale your automation efforts to meet your growing business needs."} />
                    <WhyChooseUsCard number={"03"} headerText={"Security"} description={"Robust security measures to protect your sensitive data."} />
                    <WhyChooseUsCard number={"04"} headerText={"Integration"} description={"Seamless integration with your existing systems and" +
                        " applications."} />

                </div>
            </Wrapper>
        </div>
    )
}

function WhyChooseUsCard({number, headerText, description}: {number: string; headerText: string; description: string}) {
    return (
        <FadeInWrapper className="relative px-8 py-6 bg-white transition-all flex max-md:flex-col max-md:text-center gap-x-8 rounded-md shadow">
            <span
                className="w-fit p-3.5 flex justify-center items-center h-16 -3.5 leading-[64px] text-center border-2 border-dotted border-white text-4xl font-semibold span-animation bg-primary/20 mb-6">{number}</span>
            {/*<span className="rounded-full inline-block absolute left-8"></span>*/}
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{headerText}</h3>
                <p>{description}</p>
            </div>
        </FadeInWrapper>
    )
}