import {SharedHero} from "@/components/shared-hero";
import {CareerForm} from "@/app/careers/career-form";

export default function CareerPage() {
    return (
        <>
            <SharedHero sectionHeader={"Careers"} sectionText={"careers"} />
            <CareerForm />
        </>
    )
}