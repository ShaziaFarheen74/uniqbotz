import Wrapper from "@/components/wrapper";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import Image from "next/image";

export function Faqs() {
    return (
        <div className="py-20">
            <Wrapper className="space-y-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl mb-2">Frequently Asked Questions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src={"/faqs.png"} alt={"faqs"} width={594} height={468}/>
                    </div>
                    <div className="h-full flex items-center p-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg">What are the objectives of this software?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg">What is the best features and services we deliver?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg">Why is this app important to me?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg">How may I take part in and purchase this software?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}