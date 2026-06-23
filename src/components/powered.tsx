const features = [
	{
		icon: "🏍️",
		title: "Trained riders",
		description:
			"Vetted, trained boda riders assigned to your business — not random strangers from the street.",
	},
	{
		icon: "📍",
		title: "Live tracking",
		description:
			"See exactly where your delivery is on a map. No more chasing riders on the phone.",
	},
	{
		icon: "📋",
		title: "Every customer saved",
		description:
			"Delivery addresses, photos, and histories saved. Every repeat customer is faster than the last.",
	},
];

export default function Features() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 py-12">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-foreground text-2xl font-semibold">
					Built for how Kampala works
				</h3>
				<p className="text-muted-foreground text-base text-center max-w-sm">
					Not a generic delivery app. Built from the ground up for online
					sellers in Uganda.
				</p>
			</div>
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-6 max-w-3xl w-full px-4">
				{features.map((feature) => (
					<div
						key={feature.title}
						className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-card"
					>
						<span className="text-3xl">{feature.icon}</span>
						<h4 className="text-base font-semibold text-foreground">
							{feature.title}
						</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
