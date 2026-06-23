"use client";

import Link from "next/link";
import { cn } from "~/lib/utils";
import { useScroll } from "~/hooks/use-scroll";

export default function Header() {
	const scrolled = useScroll();

	return (
		<header
			className={cn(
				"py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-50",
				scrolled && "bg-background/80 backdrop-blur-sm",
			)}
		>
			<Link href="/" className="text-xl font-bold tracking-tight" style={{ color: "#0F4F45" }}>
				tukole
			</Link>

			<div className="flex items-center gap-2">
				<Link
					href="#waitlist"
					className="px-4 py-2 rounded-[10px] font-semibold text-sm text-white hover:opacity-90 transition-opacity"
					style={{ backgroundColor: "#F0531C" }}
				>
					Join the waitlist
				</Link>
			</div>
		</header>
	);
}
