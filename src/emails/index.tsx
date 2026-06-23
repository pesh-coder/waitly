import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>You&apos;re on the Tukole waitlist</title>
					<Preview>Early access and free delivery credit — you&apos;re in.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#0F4F45] py-[40px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
					<Container className="bg-[#164740] rounded-[8px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-white m-0">
								<span style={{ color: '#F0531C' }}>tukole</span>
								<span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#F0531C', borderRadius: '2px', marginLeft: '6px', verticalAlign: 'middle' }} />
							</Text>

							<Text className="text-[18px] text-[#A1D8CF] mt-[16px] mb-[16px]">
								You&apos;re on the waitlist
							</Text>

							<Hr className="border-solid border-[#1F6B5F] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-white mt-[32px]">
								Hi {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#D4EDE9]">
								You&apos;re on the Tukole waitlist. We&apos;re onboarding sellers in Kampala in
								batches — when your batch opens, you&apos;ll get early access and free
								delivery credit on your first day.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#D4EDE9]">
								We&apos;ll email you as soon as it&apos;s your turn. Nothing to download or
								set up until then.
							</Text>

							<Section className="my-[32px] text-center">
								<Button
									className="bg-[#F0531C] text-white font-bold py-[12px] px-[24px] rounded-[12px] no-underline text-center box-border"
									href="https://tukole.ug"
								>
									Visit Tukole
								</Button>
							</Section>

							<Text className="text-[16px] leading-[24px] text-[#D4EDE9] mt-[24px]">
								Cheers,
							</Text>

							<Text className="text-[16px] font-bold text-white mb-[32px]">
								The Tukole Team
							</Text>
						</Section>

						<Hr className="border-solid border-[#1F6B5F] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#6BB8AE] text-center m-0">
								&copy; {currentYear} Tukole. All rights reserved.
							</Text>
							<Text className="text-[12px] text-[#6BB8AE] text-center m-0">
								Kampala, Uganda
							</Text>
							<Text className="text-[12px] text-[#6BB8AE] text-center mt-[16px]">
								<Link href="https://tukole.ug/unsubscribe" className="text-[#F0531C]">
									Unsubscribe
								</Link>{' '}
								&bull;{' '}
								<Link href="https://tukole.ug/privacy" className="text-[#F0531C]">
									Privacy Policy
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;
