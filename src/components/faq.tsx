import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10">
			<div className="flex flex-col items-center justify-center gap-2 max-w-md">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					Everything you need to know about Tukole.
				</p>
			</div>
			<div className="w-full max-w-lg">
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline">
							Who is Tukole for?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Online sellers in Kampala who deliver products to customers —
							clothing, food, electronics, anything. If you sell and you need
							things delivered, Tukole is for you.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline">
							How is this different from calling a boda myself?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Tukole gives you trained, vetted riders assigned to your business,
							live tracking on a map, photo proof of every delivery, and a saved
							record of every customer — so you stop chasing deliveries and start
							growing your shop.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="hover:no-underline">
							What does it cost?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Plans start at UGX 20,000/month plus a small percentage on item
							value. We only make money when you make sales. Full pricing shared
							at launch.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="hover:no-underline">
							How does the address problem work?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Most of Kampala doesn&apos;t have street addresses. Your customer
							drops a pin on a map and snaps a photo of their gate. Next time
							anyone delivers to them, the location is already saved — no more
							&ldquo;behind the petrol station, near the mango tree.&rdquo;
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className="hover:no-underline">
							When does Tukole launch?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							We&apos;re onboarding sellers in batches. Join the waitlist and
							you&apos;ll be among the first invited, with free delivery credit
							on your first day.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6">
						<AccordionTrigger className="hover:no-underline">
							I&apos;m a boda rider — can I join?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Yes. Tukole partners with vetted riders for steady work and fair,
							guaranteed pay. Join the waitlist and we&apos;ll reach out about
							rider onboarding.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
