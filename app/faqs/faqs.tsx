import Wrapper from "@/components/wrapper"; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function Faqs() {
    return (
        <div className="py-20">
            <Wrapper className="space-y-10">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeSlideWrapper>
                        <h1 className="text-2xl md:text-4xl mb-4 font-semibold">Frequently Asked Questions</h1>
                    </FadeSlideWrapper>
                    <FadeSlideWrapper>
                        <p className="text-lg md:text-xl text-foreground/80">
                            <span className="font-semibold">Have questions about how Robotic Process Automation (RPA) can transform your business?</span>
                            <br />
                            Explore our frequently asked questions below to learn more about our RPA solutions, services, and how we can support your automation journey.
                        </p>
                    </FadeSlideWrapper>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <FadeSlideWrapper>
                        <Image src={"/faqs.png"} alt={"faqs"} width={594} height={468} />
                    </FadeSlideWrapper>

                    <div className="h-full flex items-center p-6">
                        <Accordion type="single" collapsible className="w-full">
                            <FadeSlideWrapper>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        How can RPA benefit my business?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        RPA can help reduce operational costs, improve accuracy, enhance productivity, and streamline workflows by automating time-consuming processes. It is particularly effective in areas like data entry, invoice processing, customer support, and report generation.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        Is RPA suitable for all industries?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        Yes, RPA can be applied across various industries, including finance, healthcare, retail, manufacturing, and customer service. The key requirement is that the tasks to be automated are repetitive, rule-based, and follow structured workflows.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        How do I know if RPA is right for my organization?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        If your business processes are repetitive, time-consuming, and involve a lot of manual data handling, RPA is likely a good fit. A detailed assessment of your workflows by an RPA consultant can help determine which processes can be automated to maximize efficiency.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        What is the typical implementation timeline for RPA?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        RPA implementation time varies depending on the complexity and scope of the processes to be automated. Generally, simple processes can be automated in a few weeks, while more complex workflows might take a few months. A typical implementation timeline might range from 4-12 weeks.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        What are the security and compliance considerations when using RPA?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        RPA tools are designed with security in mind, offering features like role-based access control, encryption, and logging. It&apos;s important to ensure that automated processes comply with industry regulations (e.g., GDPR, HIPAA) and follow best practices for data privacy and security.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        Can RPA scale with my business as it grows?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        Yes, RPA is highly scalable. As your business grows, you can easily add more bots to handle increased workloads. Most RPA platforms are designed to scale efficiently, allowing you to automate additional processes without significant rework.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>

                            <FadeSlideWrapper>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-all duration-300">
                                        Do you offer RPA consulting services?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-foreground/80">
                                        Yes, we provide RPA consulting to help businesses assess their processes, develop automation strategies, and implement RPA solutions tailored to their specific needs. Our consultants work closely with your team to ensure a smooth transition to automation.
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeSlideWrapper>
                        </Accordion>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
