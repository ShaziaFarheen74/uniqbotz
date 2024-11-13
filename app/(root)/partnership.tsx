import Wrapper from "@/components/wrapper";
import Image from "next/image";
import FadeInWrapper from "@/components/fade-in-wrapper";

export function Partnership() {
    return (
        <FadeInWrapper className="py-20 mb-32 relative">
            <Wrapper className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-5 justify-items-center">
                <span>
                    <Image src="/walmart.svg" alt={"walmart"} width={160} height={23} />
                </span>
                <span>
                    <Image src="/airbnb.svg" alt={"airbnb"} width={160} height={23} />
                </span>
                <span>
                    <Image src="/facebook.svg" alt={"facebook"} width={160} height={23} />
                </span>
                <span>
                    <Image src="/atlassian.svg" alt={"atlassian"} width={160} height={23} />
                </span>
                <span>
                    <Image src="/intuit.svg" alt={"intuit"} width={160} height={23} />
                </span>
                <span>
                    <Image src="/zillow.svg" alt={"zillow"} width={160} height={23} />
                </span>

            </Wrapper>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 max-w-32 w-full inline-block h-1 bg-secondary"></span>
        </FadeInWrapper>
    )
}