import {WhyChooseUs} from "@/components/why-choose.us";
import {AboutUs} from "@/app/about/about-us";
import {Testimonials} from "@/components/testimonials";
import {Achievements} from "@/app/about/achievements";
import {Team} from "@/app/about/team";
import {SharedHero} from "@/components/shared-hero";

export default function AboutPage() {
    return (
        <>
            <SharedHero sectionHeader={"Who We Are"} sectionText="About Us" />
            <AboutUs />
            <WhyChooseUs />
            <Achievements />
            <Team />
            <Testimonials />
        </>
    )
}