'use client'

import Overlay from "@/components/overlay";
import {Button} from "@/components/ui/button";
import {useToggle} from "@/hooks/use-toggle";
import {cn} from "@/lib/utils";
import {CloseIcon} from "@/components/icons/close";
import {Routes} from "@/components/navbar";
import Link from "next/link";
import {ChevronDown} from "lucide-react";

export function Sidebar() {
    const {isOpen, handleToggle} = useToggle()

    return (
        <>
            <Overlay isOpen={isOpen} className="md:hidden" handleOpen={handleToggle}/>
            <nav
                className={cn(
                    "md:hidden fixed bg-background z-30 inset-y-0 right-0 w-4/5 md:w-full max-w-xl transition-all" +
                    " duration-500",
                    isOpen ? "translate-x-0" : "translate-x-full",
                )}
            >
                <div className="w-full h-full p-10 relative">
                    <div className="cursor-pointer" onClick={handleToggle}>
                        <CloseIcon/>
                    </div>
                    <div>

                        <ul className="flex flex-col space-y-6 h-full py-14">
                            {Routes.map((route, idx) => (
                                <li key={idx} className="text-lg font-medium relative group">
                                    {
                                        route.subRoutes ? (
                                                <>

                                                    <p className="inline-flex items-center gap-x-2">
                                                        <Link href={route.path ? route.path : "#"} onClick={handleToggle}>{route.label}</Link>
                                                        <ChevronDown className="group-hover:-rotate-180 transition h-4 w-4"/>
                                                    </p>
                                                    <ul className="group-hover:flex hidden bg-white p-3 rounded-md text-foreground top-10 left-0 w-56 shadow-all whitespace-nowrap flex-col">
                                                        {
                                                            route.subRoutes.map((subRoute, idx) => (
                                                                <li key={idx} className="hover:bg-muted rounded-lg cursor-pointer" onClick={handleToggle}>
                                                                    {
                                                                        subRoute.path ? (
                                                                            <Link className="inline-block text-sm text-foreground/90 py-1 px-2 w-full"
                                                                                  href={subRoute.path}>{subRoute.label}</Link>) : (
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
                                                            <Button className="" variant="secondary" asChild onClick={handleToggle}>
                                                                <Link href={route.path}>{route.label}</Link>
                                                            </Button>
                                                        ) : (
                                                            <Link href={route.path} onClick={handleToggle}>{route.label}</Link>
                                                        )
                                                    }
                                                </>
                                            )
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}