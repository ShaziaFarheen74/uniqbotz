import Wrapper from "@/components/wrapper";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import Image from "next/image";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Faqs() {
    return (
        <div className="py-20">
            <Wrapper className="space-y-10">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeSlideWrapper>
                        <h1 className="text-2xl md:text-4xl mb-2">Frequently Asked Questions</h1>
                    </FadeSlideWrapper>
                    <FadeSlideWrapper>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </FadeSlideWrapper>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <FadeSlideWrapper>
                        <Image src={"/faqs.png"} alt={"faqs"} width={594} height={468}/>
                    </FadeSlideWrapper>
                    <div className="h-full flex items-center p-4">
                        <Accordion type="single" collapsible className="w-full">
                            <FadeSlideWrapper>

                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg">What are the objectives of this software?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>
                            <FadeSlideWrapper>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg">What is the best features and services we deliver?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>
                            <FadeSlideWrapper>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg">Why is this app important to me?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>
                            <FadeSlideWrapper>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-lg">How may I take part in and purchase this software?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>
                            <FadeSlideWrapper>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                        </Accordion>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}