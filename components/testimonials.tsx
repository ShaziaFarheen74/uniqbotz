
'use client';

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import { SectionHeader } from "@/components/section-header";
import FadeSlideWrapper from "@/components/fade-in-wrapper";
import Image from 'next/image';

export const TestimonialsData = [
    {
        name: "RESSCO",
        quote: "UniqBotz Infotech exceeded our expectations in developing the internal web application for Ressco Canada’s banquet hall booking system. The solution they created is incredibly detailed, tracking availability, managing resources, and accommodating multiple roles within a cloud-based platform. It truly feels like they captured the owner's vision, ensuring every aspect of the business is covered. The attention to detail and seamless functionality make it an invaluable tool for us. I highly recommend UniqBotz Infotech for any web application development!",
        image: "/website-images/images/RESSCO-Mano.jpg",
    },
    {
        name: "Das Manpower Consultancy Services",
        quote: "Working with UniqBotz Infotech has been a game-changer for us at 'Das Manpower Consultancy Services'. Their automation solution for resume collection and profile selection has streamlined our recruitment process like never before. The entire system runs seamlessly, saving us time and effort while ensuring the right candidates are selected. We are extremely impressed with their expertise and commitment to delivering exceptional results!",
        image: "/website-images/images/Das-Deepankar Das.png",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 space-y-16">
            <SectionHeader text={"What our clients say?"} />
            <Wrapper className="container space-y-10">

                {/* Introductory Section */}
                <div className="text-center space-y-6">
                    <FadeSlideWrapper>
                        <h2 className="text-3xl font-semibold text-primary">
                            Take the words of our recipients for it
                        </h2>
                    </FadeSlideWrapper>
                    <FadeSlideWrapper>
                        <p className="md:text-lg max-w-2xl mx-auto text-foreground/90">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics and Quantum mechanics? Our clients share their experiences of how we helped them find clarity and success in their careers.
                        </p>
                    </FadeSlideWrapper>
                </div>

                {/* Carousel Section */}
                <FadeSlideWrapper>
                    <Carousel className="w-full max-w-2xl mx-auto" opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
                        <CarouselContent>
                            {TestimonialsData.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-6 text-center bg-white border rounded-md shadow-lg">
                                        <div className="space-y-6 flex flex-col justify-center items-center">
                                            {/* Testimonial Image */}
                                            <Image 
                                                className="w-48 h-32 object-contain rounded-md"  // Ensures the image fits fully inside
                                                src={item.image}
                                                alt={item.name}
                                                width={192}  // Increased width for better clarity
                                                height={128}  // Increased height for better clarity
                                            />
                                             {/* Client Info */}
                                             <div className="text-center">
                                                <h3 className="font-semibold  text-3xl text-secondary">{item.name}</h3>
                                            </div>
                                            {/* Testimonial Quote */}
                                            <p className="text-lg md:text-xl text-primary">
                                                {item.quote}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Carousel Controls */}
                        <div className="text-center pt-10">
                            <CarouselPrevious className="hover:bg-primary/20 relative bg-primary text-white rounded-full p-2 mx-2" />
                            <CarouselNext className="hover:bg-primary/20 relative bg-primary text-white rounded-full p-2 mx-2" />
                        </div>
                    </Carousel>
                </FadeSlideWrapper>
            </Wrapper>
        </section>
    );
}
