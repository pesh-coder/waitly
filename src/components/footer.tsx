export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center gap-3 pb-6 pt-4">
			<p className="text-sm text-muted-foreground">
				Built in Kampala for Kampala.
			</p>
			<p className="text-sm text-muted-foreground">
				&copy; {new Date().getFullYear()} Tukole. All rights reserved.
			</p>
		</footer>
	);
}
