'use client'

import Wrapper from "@/components/wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {MenuIcon} from "@/components/icons/menu";
import {useToggle} from "@/hooks/use-toggle";
import {ChevronDown} from "lucide-react";
import {Logo} from "@/components/logo";

interface Route {
    label: string;
    path?: string;
    subRoutes?: {
        label: string;
        path?: string;
    }[]
}

export const Routes: Route[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Services",
        path: "/services",
        subRoutes: [
            {
                label: "RPA",
                path: "/services"
            },
            {
                label: "Process Automation",
                path: "/services"
            },
            {
                label: "Script based automation",
                path: "/services"
            },
            {
                label: "Industry Wise",
                path: "/services"
            },
            {
                label: "Use Cases",
                path: "/services"
            },

        ]

    },
    {
        label: "Blog",
        path: "/blog",
    },
    {
        label: "About",
        path: "/about",
        subRoutes: [
            {
                label: "About Us",
                path: "/about#about-us",
            },
            {
                label: "Why Choose Us",
                path: "/about#why-choose-us",
            },
            {
                label: "Achievements",
                path: "/about#achievements",
            },
            {
                label: "Team",
                path: "/about#team",
            },
            {
                label: "Testimonials",
                path: "/about#testimonials",
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
    const {handleToggle} = useToggle()
    // const [scrolled, setScrolled] = useState(false);
    //
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const isScrolled = window.scrollY > 50;
    //         setScrolled(isScrolled);
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     // Clean up the event listener on component unmount
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <header className={cn("fixed inset-x-0 w-full top-0 z-30 border-b border-b-muted/10 transition-all duration-500 bg-white text-foreground")}>
            <Wrapper className="h-16 md:h-20 flex items-center justify-between">
                <Logo/>
                <ul className="hidden md:flex items-center space-x-4 lg:space-x-5">
                    {
                        Routes.map((route: Route, idx) => (
                            <li key={idx} className="relative group p-2">
                                {
                                    route.subRoutes ? (
                                            <>
                                                <Link href={route.path ? route.path : "#"} className="inline-flex items-center gap-x-2">
                                                    <span>{route.label}</span>
                                                    <ChevronDown className="group-hover:-rotate-180 transition h-4 w-4"/>
                                                </Link>
                                                <ul className="group-hover:flex hidden bg-white p-3 rounded-md absolute text-foreground top-10 left-1/2 -translate-x-1/2 w-56 shadow-all whitespace-nowrap flex-col">
                                                    {
                                                        route.subRoutes.map((subRoute, idx) => (
                                                            <li key={idx} className="hover:bg-muted rounded-lg cursor-pointer">
                                                                {
                                                                    subRoute.path ? (<Link className="inline-block text-sm text-foreground/90 py-1 px-2 w-full" href={subRoute.path}>{subRoute.label}</Link>) : (
                                                                        <p>{subRoute.label}</p>
                                                                    )
                                                                }

                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        ) :
                                        route.path && (
                                            <>
                                                {
                                                    route.path === "/contact" ? (
                                                        <Button className="" variant="secondary" asChild>
                                                            <Link href={route.path}>{route.label}</Link>
                                                        </Button>
                                                    ) : (
                                                        <Link href={route.path}>{route.label}</Link>
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