import {Hero} from "@/app/(root)/hero";
import {Services} from "@/app/(root)/services";
import {About} from "@/app/(root)/about";
import {WhyChooseUs} from "@/components/why-choose.us";
import {Cta2} from "@/components/cta-2";



export default function Home() {
    return (
        <>
            <Hero/>
            <Services/>
            <About/>
            <WhyChooseUs/>
            <Cta2 headerText="Are you Ready? Let&apos;s Work!" link={"/contact"} linkLabel={"Let's Work!"} />
        </>
    );
}
