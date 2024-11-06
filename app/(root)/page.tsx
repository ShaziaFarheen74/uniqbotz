import {Hero} from "@/app/(root)/hero";
import {Partnership} from "@/app/(root)/partnership";
import {Services} from "@/app/(root)/services";
import {About} from "@/app/(root)/about";
import {WhyChooseUs} from "@/app/(root)/why-choose.us";

export default function Home() {
    return (
        <>
            <Hero/>
            <Partnership/>
            <Services/>
            <About/>
            <WhyChooseUs />
        </>
    );
}
