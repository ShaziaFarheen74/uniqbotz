'use client'

import Overlay from "@/components/overlay";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import {CloseIcon} from "@/components/icons/close";
import {Routes} from "@/components/navbar";
import Link from "next/link";

export function Sidebar() {
    const { isOpen, handleToggle } = useToggle()

    return (
        <>
            <Overlay isOpen={ isOpen } handleOpen={ handleToggle }/>
            <nav
                className={ cn(
                    "md:hidden fixed bg-background z-30 inset-y-0 right-0 w-4/5 md:w-full max-w-xl transition-all" +
                    " duration-500",
                    isOpen ? "translate-x-0" : "translate-x-full",
                ) }
            >
                <div className="w-full h-full p-10 relative">
                    <div className="cursor-pointer" onClick={handleToggle}>
                        <CloseIcon/>
                    </div>
                    <div>

                        <ul className="flex flex-col space-y-6 h-full py-14">
                            { Routes.map((route, idx) => (
                                <li key={ idx } className="text-lg font-medium">
                                    {
                                        route.path === "/contact" ? (
                                            <Button variant="secondary" asChild>
                                                <Link href={ route.path }>{ route.label }</Link>
                                            </Button>
                                        ) : (
                                            <Link href={ route.path }>{ route.label }</Link>
                                        )
                                    }
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}