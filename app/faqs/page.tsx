import {SharedHero} from "@/components/shared-hero";
import {Faqs} from "@/app/faqs/faqs";

export default function FaqPage() {
    return (
        <>
        <SharedHero sectionHeader={"Frequently Asked Questions"} sectionText={"FAQs"} />
            <Faqs />
        </>
    )
}