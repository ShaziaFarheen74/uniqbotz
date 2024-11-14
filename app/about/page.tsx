import {AboutUs} from "@/app/about/about-us";
import {Achievements} from "@/app/about/achievements";
import {Team} from "@/app/about/team";
import {SharedHero} from "@/components/shared-hero";
import {WhyChooseUniqbotz} from "@/app/about/why-choose-uniqbotz";
import {Testimonials} from "@/components/testimonials";

export default function AboutPage() {
    return (
        <>
            <SharedHero sectionHeader={"Who We Are"} sectionText="About Us" />
            <AboutUs />
            <WhyChooseUniqbotz />
            <Achievements />
            <Team />
            <Testimonials />
        </>
    )
}