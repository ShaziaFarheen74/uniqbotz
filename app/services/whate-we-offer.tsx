'use client'

import Wrapper from "@/components/wrapper";
import {BuildingIcon} from "@/components/icons/building";
import {DoubleArrowRightIcon} from "@radix-ui/react-icons";
import {cn} from "@/lib/utils";
import {TrainIcon} from "@/components/icons/train";
import {HospitalIcon} from "@/components/icons/hospital";
import {Building2Icon} from "@/components/icons/building-2";
import {PieChartIcon} from "@/components/icons/pie-chart";
import {HotelIcon} from "@/components/icons/hotel";
import {BankIcon} from "@/components/icons/bank";
import {CarIcon} from "@/components/icons/car";
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import FadeSlideWrapper from "@/components/fade-in-wrapper";
import {SectionHeader} from "@/components/section-header";

export function WhateWeOffer() {
    const imageElementRef = useRef<HTMLImageElement | null>(null);

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
      { threshold: 0.1 }
    );

    if (imageElementRef.current) {
      observer.observe(imageElementRef.current);
    }

    return () => observer.disconnect();
    }, []);
    return (
        <div className="py-20 space-y-20">

            <div className="text-center space-y-10">
                <SectionHeader text={"Where We Work"} />
            <div className="text-center space-y-4 max-w-3xl mx-auto container">
                <FadeSlideWrapper>

                <h2 className="text-3xl md:text-4xl">Industries We Serve</h2>
                </FadeSlideWrapper>
                <FadeSlideWrapper>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni fugit, quod iure quibusdam, omnis nisi cum, nostrum
                    nulla deleniti mollitia tenetur.</p>
                </FadeSlideWrapper>
            </div>
            </div>

            <Wrapper className="max-w-screen-xl grid md:grid-cols-3 justify-center items-center gap-10">
                <div className="space-y-7">
                    <WhatWeOfferCard className="rounded-full rounded-r-none" icon={<BuildingIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Heavy Industries"} description={"All kinds of industries"}/>
                    <WhatWeOfferCard className="rounded-full rounded-r-none" icon={<TrainIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Transportation"} description={"All kinds of industries"}/>
                    <WhatWeOfferCard className="rounded-full rounded-r-none" icon={<HospitalIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Health Care"} description={"All kinds of industries"}/>
                    <WhatWeOfferCard className="rounded-full rounded-r-none" icon={<Building2Icon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Manufacturing"} description={"All kinds of industries"}/>
                </div>
                <div>
                    <Image ref={imageElementRef} src={"/offer1.png"} alt={"offer"} width={370} height={390} className="scale-0 transition-all duration-700" />
                </div>
                <div className="space-y-7">
                    <WhatWeOfferCard className="rounded-full rounded-l-none" icon={<PieChartIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Logistics"} description={"All kinds of industries"} hoverDirection="left"/>

                    <WhatWeOfferCard className="rounded-full rounded-l-none" icon={<HotelIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Real Estate"} description={"All kinds of industries"} hoverDirection="left"/>

                    <WhatWeOfferCard className="rounded-full rounded-l-none" icon={<BankIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Banking"} description={"All kinds of industries"} hoverDirection="left"/>

                    <WhatWeOfferCard className="rounded-full rounded-l-none" icon={<CarIcon className="fill-primary/80 group-hover:fill-white h-7 w-7 duration-500"/>} headerText={"Automobile"} description={"All kinds of industries"} hoverDirection="left"/>
                </div>
            </Wrapper>
        </div>
    )
}

function WhatWeOfferCard({icon, headerText, description, className, hoverDirection}: { icon?: React.ReactElement; headerText?: string; description?: string; className?: string; hoverDirection?: "left" | "right" }) {
    return (
        <FadeSlideWrapper className={cn("flex items-center justify-between p-10 shadow-all relative overflow-hidden group" +
            " hover:text-white", className)}>
            <div className={cn("absolute inset-0 w-full scale-x-0 group-hover:scale-x-100 transition duration-500 h-full bg-primary/80" +
                " -z-10", hoverDirection === "left" ? "origin-right": "origin-left")} />
            <div className="flex items-center gap-x-4">
                {icon}
                <div className="duration-700">
                    <h3 className="text-lg">{headerText}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <DoubleArrowRightIcon className="h-5 w-5 duration-1000"/>
        </FadeSlideWrapper>
    )
}