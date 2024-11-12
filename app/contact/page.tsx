import {Hero} from "@/app/contact/hero";
import {TalkToUs} from "@/app/contact/talk-to-us";
import {ContactForm} from "@/app/contact/contact-form";
import {Cta2} from "@/app/contact/cta-2";

export default function ContactPage() {
    return (
        <>
            <Hero/>
            <TalkToUs />
            <ContactForm />
            <Cta2 headerText={"Start your first automation for free"} link={"mailto:sales@uniqbotz.com"} linkLabel={"Get Started Now"} />
        </>
    )
}