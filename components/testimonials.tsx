'use client'

import Autoplay from "embla-carousel-autoplay"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import {SectionHeader} from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";


export const TestimonialsData = [
    {
        name: "John Smith",
        title: "Associate, Solar Planet",
        quote: `Uniqbotz has played a pivotal role in my professional growth. With their support, I participated in various advanced training programs, which equipped me with essential skills and knowledge. These learning experiences have been instrumental in advancing my career and achieving professional milestones. Uniqbotz stands out for its dedication to making innovative learning accessible, empowering individuals to pursue their career ambitions without financial constraints.`,
    },
    {
        name: "Priya Patit",
        // imageUrl: "/images/home/testimonials/placeholder-male.webp",
        title: "Network Engineer",
        quote: `Uniqbotz has played a pivotal role in my professional growth. With their support, I participated in various advanced training programs, which equipped me with essential skills and knowledge. These learning experiences have been instrumental in advancing my career and achieving professional milestones. Uniqbotz stands out for its dedication to making innovative learning accessible, empowering individuals to pursue their career ambitions without financial constraints.`,
    },
    {
        name: "Francis Brown",
        title: "Data Engineer",
        quote: `Uniqbotz has played a pivotal role in my professional growth. With their support, I participated in various advanced training programs, which equipped me with essential skills and knowledge. These learning experiences have been instrumental in advancing my career and achieving professional milestones. Uniqbotz stands out for its dedication to making innovative learning accessible, empowering individuals to pursue their career ambitions without financial constraints.`,
    },
    {
        name: "Janet Snow",
        title: "Web developer",
        quote: `Uniqbotz has played a pivotal role in my professional growth. With their support, I participated in various advanced training programs, which equipped me with essential skills and knowledge. These learning experiences have been instrumental in advancing my career and achieving professional milestones. Uniqbotz stands out for its dedication to making innovative learning accessible, empowering individuals to pursue their career ambitions without financial constraints.`,
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 space-y-16">
            <SectionHeader text={"What our clients say?"}/>
            <Wrapper className="container space-y-10">
                <div className="text-center space-y-8">
                        <FadeSlideWrapper>
                            <h2 className="text-3xl font-semibold">Take the words of our recipients for it</h2>
                        </FadeSlideWrapper>
                        <FadeSlideWrapper>
                            <p className="md:text-lg max-w-2xl mx-auto">Problems trying to resolve the conflict between the
                                two major realms of Classical physics: Newtonian mechanics </p>
                        </FadeSlideWrapper>
                </div>
                <FadeSlideWrapper>
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
                </FadeSlideWrapper>
            </Wrapper>
        </section>
    )
}