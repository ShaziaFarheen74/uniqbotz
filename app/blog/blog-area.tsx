import Wrapper from "@/components/wrapper";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export function BlogArea() {
    return (
        <div className="py-20">
            <Wrapper className="grid md:grid-cols-[1fr_255px] gap-10 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-10">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="space-y-7">
                    <div>
                        <Input placeholder="Search..." className="rounded-[99999px] h-11 border-foreground"/>
                    </div>
                    <div className="space-y-7">
                        <h2 className="py-2 border-b-2 border-primary">Don&apos;t miss</h2>
                        <DontMissCard/>
                        <DontMissCard/>
                        <DontMissCard/>
                        <DontMissCard/>
                    </div>
                    <div className="space-y-5">
                        <h2 className="py-2 border-b-2 border-primary">Subscribe</h2>
                        <Input placeholder="Email..." className="rounded-[99999px] placeholder:italic h-11 border-foreground"/>
                        <Button className="rounded-[9999px]" variant="secondary">Subscribe</Button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

function DontMissCard() {
    return (
        <div>
            <div><Image src={"/blog1.jpg"} alt={"blog 1"} width={576} height={324}/></div>
            <h3 className="text-xs text-primary uppercase mt-1">Eu council reunites</h3>
            <p className="text-xs">Nov 29, 2025</p>
        </div>
    )
}

function BlogCard({}) {
    return (
        <div className="border p-7 space-y-6">
            <div className="space-y-4">
                <div><Image src={"/blog1.jpg"} alt={"blog 1"} width={576} height={324}/></div>
                <div className="text-xs text-muted-foreground uppercase flex items-center gap-x-7">
                <span>By DAPMAN</span>
                    <span>APR 10, 2025</span>
                    <span>7 Comments</span>
                </div>
            </div>
            <div className="space-y-6">
                <h1 className="text-2xl">How to become a successful businessman</h1>
                <p className="text-foreground/80 text-[0.9rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto quaerat eaque sapiente accusantium ad ut explicabo consequuntur fuga quidem? Sint...</p>
                <Button className="bg-primary/80 hover:bg-primary">Read More</Button>
            </div>
        </div>
    )
}