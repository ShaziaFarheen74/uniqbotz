import Wrapper from "@/components/wrapper";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Cta2({headerText, link, linkLabel}: {headerText: string, link: string; linkLabel: string}) {
    return (
        <div className="py-14">
            <Wrapper className="flex max-md:flex-col max-md:text-center gap-8 items-center justify-between py-16 px-10 md:px-14 bg-primary/80 md:rounded-lg">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl max-w-lg text-white">{headerText}</h1>
                    <Button variant="secondary" asChild>
                        <Link href={link}>{linkLabel}</Link>
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={"/website-images/images/9.png"} alt={"robot 9"} width={150} height={150} />
                </div>
            </Wrapper>
        </div>
    )
}