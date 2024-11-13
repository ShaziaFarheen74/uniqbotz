'use client'

import Wrapper from "@/components/wrapper";
import {DoubleArrowRightIcon} from "@radix-ui/react-icons";
import {cn} from "@/lib/utils";
import {HospitalIcon} from "@/components/icons/hospital";
import {Building2Icon} from "@/components/icons/building-2";
import {BankIcon} from "@/components/icons/bank";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import FadeSlideWrapper from "@/components/fade-in-wrapper";
import {SectionHeader} from "@/components/section-header";
import {ForkliftIcon, ShoppingCartIcon, UmbrellaIcon} from "lucide-react";
import {CustomerService} from "@/components/icons/customer";
import {PeopleIcon} from "@/components/icons/people";

export function WhateWeOffer() {
    const imageElementRef = useRef<HTMLImageElement | null>(null);
    const [openIndustry, setOpenIndustry] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("scale-100")
                    } else {
                        entry.target.classList.remove("scale-100")
                    }
                });
            },
            {threshold: 0.1}
        );

        if (imageElementRef.current) {
            observer.observe(imageElementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    function handleSetOpenIndustry(num: number | null) {
        setOpenIndustry(num)
    }

    return (
        <div className="py-20 space-y-20">

            <div className="text-center space-y-10">
                <SectionHeader text={"Where We Work"}/>
                <div className="text-center space-y-4 max-w-3xl mx-auto container">
                    <FadeSlideWrapper>

                        <h2 className="text-3xl md:text-4xl">Industries We Serve</h2>
                    </FadeSlideWrapper>
                    <FadeSlideWrapper>

                        <p>UniqBotz Infotech partners with diverse industries to harness the power of RPA, streamlining complex workflows, increasing
                            operational efficiency, and driving value. Our tailored automation solutions transform key processes across sectors,
                            helping each industry meet its unique challenges and thrive in a competitive landscape.</p>
                    </FadeSlideWrapper>
                </div>
            </div>

            <Wrapper className="max-w-screen-xl grid md:grid-cols-3 justify-center items-center gap-10">
                <div className="space-y-7">
                    <WhatWeOfferCard itemNum={1} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-r-none"
                                     icon={<BankIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Finance & Banking"}
                                     description={"Automating tasks like transaction processing, data reconciliation, and regulatory compliance to enhance accuracy and speed."}
                                     hoverDirection="right"/>

                    <WhatWeOfferCard itemNum={2} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-r-none"
                                     icon={<HospitalIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Health Care"}
                                     description={"Streamlining patient record management, billing, and appointment scheduling, allowing healthcare providers to focus more on patient care."}/>

                    <WhatWeOfferCard itemNum={3} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-r-none"
                                     icon={<Building2Icon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Manufacturing"}
                                     description={"Automating inventory management, quality control, and production scheduling, boosting operational efficiency and minimizing downtime."}/>

                    <WhatWeOfferCard itemNum={4} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-r-none"
                                     icon={<ForkliftIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Supply Chain"}
                                     description={"Streamlining order processing, logistics coordination, and demand forecasting, improving delivery speed and accuracy across operations."}/>

                </div>
                <div>
                    <Image ref={imageElementRef} src={"/offer1.png"} alt={"offer"} width={370} height={390}
                           className="scale-0 transition-all duration-700"/>
                </div>
                <div className="space-y-7">
                    <WhatWeOfferCard itemNum={5} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-l-none"
                                     icon={<ShoppingCartIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Retail & eCommerce"}
                                     description={"Automating order fulfillment, inventory tracking, and customer support, providing a seamless experience for shoppers."}/>

                    <WhatWeOfferCard itemNum={6} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-l-none"
                                     icon={<CustomerService className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Telecommunications"}
                                     description={"Enhancing customer service with automated support, billing, and account management, ensuring timely responses and increased satisfaction."}
                                     hoverDirection="left"/>

                    <WhatWeOfferCard itemNum={7} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-l-none"
                                     icon={<PeopleIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Human Resources"}
                                     description={"Automating onboarding, payroll, and benefits administration, reducing administrative workload and enhancing employee experience."}/>

                    <WhatWeOfferCard itemNum={8} setOpenIndustry={handleSetOpenIndustry} openIndustry={openIndustry}
                                     className="rounded-full rounded-l-none"
                                     icon={<UmbrellaIcon className="fill-primary/80 group-hover:fill-white min-h-7 min-w-7 duration-500"/>}
                                     headerText={"Insurance"}
                                     description={"Speeding up claims processing, policy administration, and underwriting, helping insurers improve service delivery."}
                                     hoverDirection="left"/>
                </div>
            </Wrapper>
        </div>
    )
}

function WhatWeOfferCard({openIndustry, itemNum, icon, headerText, description, className, hoverDirection, setOpenIndustry}: {
    openIndustry: number | null;
    itemNum: number;
    icon?: React.ReactElement;
    headerText?: string;
    description?: string;
    className?: string;
    hoverDirection?: "left" | "right";
    setOpenIndustry: (num: number | null) => void
}) {
    return (
        <FadeSlideWrapper>

            <div className={cn("flex items-center justify-between p-10 shadow-all relative overflow-hidden group" +
                " hover:text-white", className)}>
                <div className={cn("absolute inset-0 w-full scale-x-0 group-hover:scale-x-100 transition duration-500 h-full bg-primary/80" +
                    " -z-10", hoverDirection === "left" ? "origin-right" : "origin-left")}/>
                <div className="flex items-center gap-x-4">
                    {icon}
                    <div className="duration-500 space-y-1">
                        {
                            openIndustry === itemNum ? <p className="text-sm">{description}</p> : <h3 className="text-base">{headerText}</h3>
                        }
                    </div>
                </div>
                <DoubleArrowRightIcon className="min-h-5 min-w-5 duration-1000 cursor-pointer" onClick={() => setOpenIndustry(itemNum)}/>
            </div>
        </FadeSlideWrapper>
    )
}