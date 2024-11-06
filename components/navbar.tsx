'use client'

import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {MenuIcon} from "@/components/icons/menu";
import {useToggle} from "@/hooks/use-toggle";

interface Route {
    label: string;
    path: string;
}

export const Routes: Route[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Services",
        path: "/services",
    },
    {
        label: "Blog",
        path: "/blog",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Careers",
        path: "/careers",
    },
    {
        label: "FAQs",
        path: "/faqs",
    },
    {
        label: "Contact",
        path: "/contact",
    },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { handleToggle } = useToggle()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <header className={cn("fixed inset-x-0 w-full top-0 z-30 border-b border-b-muted/10 transition-all duration-500", scrolled ? "bg-muted" +
            " text-foreground" +
            " border-b-foreground/20" : "text-white")}>
            <Wrapper className="h-20 flex items-center justify-between">
                <div className="flex items-end space-x-2">
                    <Image src="/logo.png" width={32} height={32} alt={"logo"} className="shadow-lg"/>

                    {/*<div className="bg-[#9B2EE0] rounded-full overflow-hidden grid place-content-center">*/}
                    {/*</div>*/}
                    <span className="leading-0 font-semibold text-4xl">
                        UniqBotz
                    </span>
                </div>
                <ul className="hidden md:flex items-center space-x-5">
                    {
                        Routes.map((route: Route, idx) => (
                            <li key={idx}>
                                {
                                    route.path === "/contact" ? (
                                        <Button className="" variant="secondary">{route.label}</Button>
                                    ) : (
                                        <Link href={route.path}>{route.label}</Link>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
                <MenuIcon className="h-8 fill-foreground w-8 cursor-pointer" onClick={handleToggle} />
            </Wrapper>
        </header>
    )
}