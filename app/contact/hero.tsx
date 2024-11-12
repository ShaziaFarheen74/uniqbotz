import Wrapper from "@/components/wrapper";
import {InstagramIcon} from "@/components/icons/instagram-fill";
import {TwitterXIcon} from "@/components/icons/twitter-x";
import {LinkedInIcon} from "@/components/icons/linked-in-fill";
import {FacebookIcon} from "@/components/icons/facebook-fill";

export function Hero() {
    return (
        <div className="bg-gradient-to-r from-[#4E03A1] to-[#4E03A1] text-white pt-20">
            <Wrapper className="min-h-96 grid place-content-center gap-5">
                <h1 className="text-3xl md:text-4xl text-center">How can we serve you?</h1>
                <div className="flex gap-x-3 justify-center items-center text-lg">
                    <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer" className="p-2.5 shadow-lg rounded-lg bg-muted/70">
                        <InstagramIcon className="fill-primary"/>
                    </a>
                    <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer" className="p-2.5 shadow-lg rounded-lg bg-muted/70">
                        <TwitterXIcon className="fill-primary"/>
                    </a>
                    <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer" className="p-2.5 shadow-lg rounded-lg bg-muted/70">
                        <LinkedInIcon className="fill-primary"/>
                    </a>
                    <a href="https://www.linkedin.com/company/uniqbotz/about" target="_blank" rel="noreferrer" className="p-2.5 shadow-lg rounded-lg bg-muted/70">
                        <FacebookIcon className="fill-primary"/>
                    </a>
                </div>
            </Wrapper>
        </div>
    )
}