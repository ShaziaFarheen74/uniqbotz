import {SharedHero} from "@/components/shared-hero";
import {ServiceList} from "@/app/services/service-list";
import {WhateWeOffer} from "@/app/services/whate-we-offer";

export default function ServicePage() {
    return (
        <>
        <SharedHero sectionHeader={"Services We Offer"} sectionText={"Services"} />
            <ServiceList />
            <WhateWeOffer />
        </>
    )
}