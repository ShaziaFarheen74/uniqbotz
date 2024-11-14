import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link";

export function Logo({className}: {className?: string}) {
    return (
        <Link href="/" className={cn("flex items-end space-x-2", className)}>
            <Image src="/logo.png" width={32} height={32} alt={"logo"} className="shadow-lg"/>

            {/*<div className="bg-[#9B2EE0] rounded-full overflow-hidden grid place-content-center">*/}
            {/*</div>*/}
            <span className="leading-0 font-semibold text-2xl md:text-3xl font-century">
                        <span className="text-primary">U</span>niq<span className="text-secondary">B</span>otz<span> Infotech</span>
                    </span>
        </Link>
    )
}