import {Hero} from "@/app/(root)/hero";
import {Partnership} from "@/app/(root)/partnership";
import {Services} from "@/app/(root)/services";
import {About} from "@/app/(root)/about";
import {Testimonials} from "@/components/testimonials";
import {WhyChooseUs} from "@/components/why-choose.us";
import {Cta2} from "@/app/contact/cta-2";

export default function Home() {
    return (
        <>
            <Hero/>
            <Partnership/>
            <Services/>
            <About/>
            <WhyChooseUs/>
            <Testimonials/>
            {/*<div className="relative">*/}
            {/*    /!*<div className="absolute inset-0 rotate-180 -z-10 w-full h-full bg-heroBg bg-no-repeat bg-cover isolate bg-[bottom_center] bg-clip-padding bg-origin-padding" />*!/*/}
            {/*    <Cta />*/}
            {/*    <Footer />*/}
            {/*</div>*/}
            <Cta2 headerText="Are you Ready? Let&apos;s Work!" link={"#"} linkLabel={"Read More"} />
        </>
    );
}
