'use client'

import Autoplay from "embla-carousel-autoplay"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";


export const TestimonialsData = [
    {
        name: "Azeez Adegbenro",
        // imageUrl: "/images/home/testimonials/placeholder-male.webp",
        title: "Associate, HR  & Administration, Greenlight Planet",
        quote: `FinQuest has been and is still part of my career growth. FinQuest made it possible for me to attend Edubridge Graduate Program and Power BI Bootcamp Class by Foresight BI where I learnt HR and Data Analytics respectively. The programs earned me my current employment.
      FinQuest stands out for me as an Interest-free Edu-loan company`,
    },
    {
        name: "Ismail Idowu",
        // imageUrl: "/images/home/testimonials/placeholder-male.webp",
        title: "Network Engineer, Plantation Industries Limited",
        quote: `Learning is part of your journey towards self-actualization. FinQuest helped me achieve my goal of becoming a data scientist by funding my training with 10Alytics with their zero-interest credit facility`,
    },
    {
        name: "David Francis Effiong",
        // imageUrl: "/images/home/testimonials/placeholder-male.webp",
        title: "2022 Mandela Washington Fellow",
        quote: `I was relocating to a new State when I came across FinQuest and their Edu-loan scheme. It was a post made by Professor Ndubuisi and I felt this was my best shot at getting a Mini-MBA.
        A call from FinQuest confirming my application solidified my resolve to go ahead with it at 0% interest. It felt so surreal! It was a bet I'm forever proud and grateful for. Education made possible and accessible is what these guys are doing. Who wouldn't want that?`,
    },
    {
        name: "Janet Snow",
        // imageUrl: "/images/home/testimonials/placeholder-female.webp",
        title: "Investment Analyst, P&G",
        quote: `I have been following Tekedia mini MBA programs for months. When it finally opened, the amount to be paid for the course wasn't captured in my budget and I needed an option.
        I got to know about FinQuest zero interest loan on LinkedIn, to cut the story short I gave it a try. It was amazing, It helped me split the application fee over 3 months and relieved me of the burden of paying at once. My mini MBA journey won't be completed without FinQuest.
        Thanks to FinQuest Team`,
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 space-y-16">
            <div className="text-center">
                <span className="text-primary text-sm">What our clients say?</span>
            </div>
            <Wrapper className="container space-y-10">
                <div className="text-center space-y-16">

                    {/*<SectionTag text="What our clients say?"/>*/}
                    <div>
                        <h2 className="text-3xl font-semibold">Take the words of our recipients for it</h2>
                        <p className="md:text-lg max-w-2xl mx-auto">Problems trying to resolve the conflict between the
                            two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
                <div>
                    <Carousel className="w-full max-w-2xl mx-auto" opts={{
                        loop: true,
                    }} plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}>
                        <CarouselContent>
                            {TestimonialsData.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-5 md:p-10 text-center border rounded-md">
                                        <div className="space-y-8 flex flex-col justify-center items-center">
                                            <Avatar className="h-16 w-16">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                                <AvatarFallback>LT</AvatarFallback>
                                            </Avatar>
                                            <p className="text-foreground/80">{item.quote}</p>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                                <p className="text-sm font-medium">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="text-center pt-10">
                            <CarouselPrevious className="hover:bg-secondary/30 relative"/>
                            <CarouselNext className="hover:bg-secondary/30 relative"/>
                        </div>
                    </Carousel>
                </div>
            </Wrapper>
        </section>
    )
}