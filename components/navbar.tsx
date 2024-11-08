'use client'

import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {MenuIcon} from "@/components/icons/menu";
import {useToggle} from "@/hooks/use-toggle";
import {ChevronDown} from "lucide-react";

interface Route {
    label: string;
    path?: string;
    subRoutes?: {
        label: string;
        path: string;
    }[]
}

export const Routes: Route[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Services",
        subRoutes: [
            {
                label: "service 1",
                path: "/service-1",
            },
            {
                label: "service 2",
                path: "/service-2",
            },
            {
                label: "service 3",
                path: "/service-3",
            },
            {
                label: "service 4",
                path: "/service-4",
            },

        ]

    },
    {
        label: "Blog",
        path: "/blog",
    },
    {
        label: "About",
        subRoutes: [
            {
                label: "about 1",
                path: "/about-1",
            },
            {
                label: "about 2",
                path: "/about-2",
            },
            {
                label: "about 3",
                path: "/about-3",
            },
            {
                label: "about 4",
                path: "/about-4",
            },

        ]
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
    const {handleToggle} = useToggle()

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
                        <span className="text-primary">U</span>niq<span className="text-secondary">B</span>otz
                    </span>
                </div>
                <ul className="hidden md:flex items-center space-x-5">
                    {
                        Routes.map((route: Route, idx) => (
                            <li key={idx} className="relative group p-2">
                                {
                                    route.path ? (
                                        <>
                                            {
                                                route.path === "/contact" ? (
                                                    <Button className="" variant="secondary">{route.label}</Button>
                                                ) : (
                                                    <Link href={route.path}>{route.label}</Link>
                                                )
                                            }
                                        </>
                                    ) : (
                                        <>
                                            {
                                                route.subRoutes && (
                                                    <>
                                                        <p className="inline-flex items-center gap-x-2 cursor-default">
                                                            <span>{route.label}</span>
                                                            <ChevronDown className="group-hover:-rotate-180 transition h-4 w-4" />
                                                        </p>
                                                        <ul className="group-hover:flex hidden bg-white p-3 rounded-md absolute text-foreground top-10 left-1/2 -translate-x-1/2 w-40 whitespace-nowrap flex-col max-w-sm">
                                                            {
                                                                route.subRoutes.map((subRoute, idx) => (
                                                                    <li key={idx} className="py-1 px-2 hover:bg-muted rounded-lg cursor-pointer">{subRoute.label}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </>
                                                )
                                            }
                                        </>

                                    )
                                }

                            </li>
                        ))
                    }
                </ul>
                <MenuIcon className="md:hidden h-8 fill-foreground w-8 cursor-pointer" onClick={handleToggle}/>
            </Wrapper>
        </header>
    )
}