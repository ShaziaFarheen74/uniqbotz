import Wrapper from "@/components/wrapper";
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

export function TalkToUs() {
    return (
        <div className="py-20">
            <Wrapper className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                <TalkToUsCard headerText={"Pricing"} description={"Need help? Our Support team is available to answer 24x7"} link="sales@uniqbotz.com" linkLabel="Get a pricing" />
                <TalkToUsCard headerText={"Sales"} description={"Need help? Our Support team is available to answer 24x7"} link="sales@uniqbotz.com" linkLabel="Talk to us" />
                <TalkToUsCard headerText={"Request Demo"} description={"Have an out of the box idea for a new AI Demo to add"} link="sales@uniqbotz.com" linkLabel="Request a demo" />
                <TalkToUsCard headerText={"24x7 support"} description={"Need help? Our Support team is available to answer 24x7"} link="sales@uniqbotz.com" linkLabel="Talk to us" />
            </Wrapper>
        </div>
    )
}


function TalkToUsCard({headerText, description, link, linkLabel}: {headerText: string, description: string; link: string; linkLabel: string}) {
    return (
        <FadeSlideWrapper className="text-center px-7 py-10 min-h-72 flex flex-col items-center justify-between rounded-lg border space-y-7 transition hover:border-primary">
            <h2 className="text-2xl">{headerText}</h2>
            <p className="text-foreground/80">{description}</p>
            <Button className="font-medium text-base" variant="outline" asChild>
                <a href={`mailto:${link}`}>
                    <span>{linkLabel}</span>
                    <ArrowRightIcon />
                </a>
            </Button>
        </FadeSlideWrapper>
    )
}