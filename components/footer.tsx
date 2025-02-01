import { FacebookIcon } from "@/components/icons/facebook-fill"; 
import { InstagramIcon } from "@/components/icons/instagram-fill";
import { LinkedInIcon } from "@/components/icons/linked-in-fill";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/wrapper";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted py-20 h-fit">
            <Wrapper className="flex justify-center items-center flex-col space-y-10">
                {/* Logo Section */}
                <Logo className="mb-5" />

                {/* Email Contact Section */}
                <div className="space-y-3">
                    <Button variant="link" className="text-foreground/90 text-lg font-semibold hover:text-primary transition" asChild>
                        <a href="mailto:sales@uniqbotz.com" target="_blank" rel="noreferrer">
                            sales@uniqbotz.com
                        </a>
                    </Button>
                </div>

                {/* Social Media Icons Section */}
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer"
                       className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/80 hover:bg-primary transition">
                        <LinkedInIcon className="h-6 w-6 fill-white" />
                    </a>
                    <a href="https://www.instagram.com/uniqbotz" target="_blank" rel="noreferrer"
                       className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/80 hover:bg-primary transition">
                        <InstagramIcon className="h-6 w-6 fill-white" />
                    </a>
                    <a href="https://www.facebook.com/uniqbotz" target="_blank" rel="noreferrer"
                       className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/80 hover:bg-primary transition">
                        <FacebookIcon className="h-6 w-6 fill-white" />
                    </a>
                </div>

                {/* Footer Links Section */}
                <div className="flex flex-wrap md:h-8 justify-center items-center space-x-6 mt-8 text-foreground/80">
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 hidden sm:block" />
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/about">About</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 hidden sm:block" />
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/services">Services</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 hidden sm:block" />
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/careers">Careers</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 hidden sm:block" />
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/faqs">FAQs</Link>
                    </Button>
                    <Separator orientation="vertical" className="w-0.5 hidden sm:block" />
                    <Button variant="link" className="text-lg font-medium hover:text-primary transition" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-muted-foreground mt-10">
                    <p className="text-sm font-light">&copy; {currentYear} UniqBotz. All Rights Reserved.</p>
                </div>
            </Wrapper>
        </footer>
    )
}

