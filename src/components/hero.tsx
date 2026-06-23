"use client";

import { useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<div id="waitlist" className="flex flex-col items-center justify-center gap-6">
			<div className="flex flex-col items-center justify-center gap-6 mb-6">
				<div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#F0531C" }} />
						<span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#F0531C" }} />
					</span>
					<p className="uppercase text-sm font-medium">
						Launching October 2026 — join early
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
				<h2 className="text-4xl font-bold text-foreground text-center">
					{isSuccess
						? "You're on the Tukole waitlist"
						: "Run your deliveries like a real business."}
				</h2>
				<p className="text-base text-muted-foreground text-center max-w-md">
					{isSuccess
						? "You've secured your spot. We'll email you when your batch opens — you'll get early access and free delivery credit on launch day."
						: "Tukole is the delivery platform for online businesses in Kampala — trained riders, live tracking, and a record of every customer. Join the waitlist for early access and free credit on launch."}
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
				<Form onSuccessChange={setIsSuccess} />
			</div>
			<div className="flex items-center justify-center gap-2">
				<People count={waitlistPeople} />
			</div>
			<Countdown period={new Date("2026-10-31")} />
		</div>
	);
}
