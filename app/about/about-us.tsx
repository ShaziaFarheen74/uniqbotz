import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {CheckDoubleIcon} from "@/components/icons/check-double";
import {Button} from "@/components/ui/button";

export function AboutUs() {
    const features = [
        "Advanced caching",
        "PHP ready serves",
        "Unlimited applications",
        "24/7 Free extra support",
        "PHP 7 ready transfer",
        "Optimized stack",
    ]
    return (
        <div id="about-us" className="py-32">

            <Wrapper className="grid md:grid-cols-2 gap-5">
                <div className="flex justify-center items-center">
                    <Image src="/website-images/images/3.png" alt={"about us"} width={375} height={440} />
                </div>
                <div className="space-y-6">
                    <div className="">
                        <span className="text-primary text-sm">About Us</span>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-semibold font-century">We Complete Every Project With Extra Care As Customer Need</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                        <ul className="grid grid-cols-2 gap-3">
                            {
                                features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-x-2">
                                        <span className="bg-primary/20 p-1 rounded-full">
                                            <CheckDoubleIcon className="h-4 w-4 fill-primary" />
                                        </span>

                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <Button>
                            Read more
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}