import Wrapper from "@/components/wrapper";
import {Button} from "@/components/ui/button";

export function Cta() {
    return (
        <div className="pb-20 my-10">
            <Wrapper className="flex items-center justify-between max-w-screen-lg rounded bg-primary/80 p-10 py-16">
                <div className="font-semibold space-y-2">
                    <h3 className="text-3xl text-white/80">So What&apos;s next?</h3>
                    <h2 className="text-4xl text-white">Are you Ready? Let&apos;s Work!</h2>
                </div>
                <div className="">
                    <Button variant="secondary" className="">Read More</Button>
                </div>
            </Wrapper>
        </div>
    )
}