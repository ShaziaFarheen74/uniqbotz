import {FacebookIcon} from "@/components/icons/facebook-fill";
import {InstagramIcon} from "@/components/icons/instagram-fill";
import {LinkedInIcon} from "@/components/icons/linked-in-fill";
import {Logo} from "@/components/logo";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Wrapper from "@/components/wrapper";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted py-20 h-fit">
            <Wrapper className="flex justify-center items-center flex-col space-y-7">
                <Logo/>
                <div className="space-y-">
                    <Button variant="link" className="text-foreground/80" asChild>
                        <a href="mailto:sales@uniqbotz.com" target="_blank" rel="noreferrer">
                            sales@uniqbotz.com
                        </a>
                    </Button>
                    <div className="flex justify-between">
                        <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer"
                           className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/80">
                            <LinkedInIcon className="h-5 w-5 fill-white"/>
                        </a>
                        <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer"
                           className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/80">
                            <InstagramIcon className="h-5 w-5 fill-white"/>
                        </a>
                        <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer"
                           className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/80">
                            <FacebookIcon className="h-5 w-5 fill-white"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap md:h-6 justify-center items-center text-foreground/80">
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 max-sm:hidden"/>
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/about">About</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 max-sm:hidden"/>
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/services">Services</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 max-sm:hidden"/>
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/careers">Careers</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 max-sm:hidden"/>
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/faqs">FAQs</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 max-sm:hidden"/>
                    <Button variant="link" className="text-foreground/80" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>

                </div>
                <div className="text-center text-muted-foreground">
                    <p className="text-sm">&copy; Copyright {currentYear} by Uniqbotz.</p>
                </div>
            </Wrapper>
        </footer>
    )
}
