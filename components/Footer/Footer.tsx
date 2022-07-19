import { FACEBOOK_ICON, INSTAGRAM_ICON, YOUTUBE_ICON } from "./constants";

import Button from "../Button/Button";
import { FC } from "react";
import Image from "next/image";
import TertiaryButton from "../Button/TertiaryButton";
import { useRouter } from "next/router";

const Footer: FC = () => {
	const router = useRouter();
	return (
		<div className="bg-footer flex flex-col gap-y-20 py-3 pt-10">
			<div className="flex flex-row mx-10 lg:mx-20">
				<RuangNusantara />
				<PricingAndGetHelp />
				<FollowAndSocials />
				<div className="hidden lg:flex w-1/4 justify-center items-center">
					<LogoAndExplore />
				</div>
			</div>
			<div className="flex lg:hidden justify-center">
				<LogoAndExplore />
			</div>
			<h1 className="font-normal text-base text-center">
				©2022 Ruang Nusantara. All Rights Reserved.
			</h1>
		</div>
	);
};

const LogoAndExplore: FC = () => {
	const router = useRouter();
	return (
		<div className="w-full flex flex-col items-center justify-center gap-y-10">
			<div className="relative w-48 h-48">
				<Image src="/logo.png" layout="fill" alt="Logo" />
			</div>
			<Button
				label="EXPLORE NOW"
				width={200}
				height={50}
				onClick={() => {
					router.push("/explore");
				}}
			/>
		</div>
	);
};

const FollowAndSocials: FC = () => {
	return (
		<div className="w-1/3 lg:w-1/4 flex flex-col gap-y-20">
			<div className="flex flex-col gap-y-2">
				<h1 className="mb-3 font-bold text-base lg:text-xl text-lightBrown">
					Follow Us
				</h1>
				<div className="flex flex-row gap-x-4">
					<FACEBOOK_ICON />
					<INSTAGRAM_ICON />
					<YOUTUBE_ICON />
				</div>
			</div>
			<div className="flex flex-col gap-y-2">
				<h1 className="mb-3 font-bold text-base lg:text-xl text-lightBrown">
					Contact Us
				</h1>
				<div className="flex flex-row items-center gap-x-4 text-lg text-footerText">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					<h1 className="overflow-hidden text-sm md:text-lg">
						askruangnusantara@gmail.com
					</h1>
				</div>
			</div>
		</div>
	);
};

const PricingAndGetHelp: FC = () => {
	const router = useRouter();
	return (
		<div className="w-1/3 lg:w-1/4 flex flex-col gap-y-20">
			<div className="flex flex-col gap-y-2">
				<h1 className="mb-3 font-bold text-base lg:text-xl text-lightBrown">
					Pricing
				</h1>
				<TertiaryButton label="Overview" align="left" />
				<TertiaryButton label="Affiliate Program" align="left" />
				<TertiaryButton label="Promotions" align="left" />
			</div>
			<div className="flex flex-col gap-y-2">
				<h1 className="mb-3 font-bold text-base lg:text-xl text-lightBrown">
					Get Help
				</h1>
				<TertiaryButton label="FAQ" align="left" />
				<TertiaryButton label="How To Purchase" align="left" />
				<TertiaryButton label="Payment Options" align="left" />
				<TertiaryButton label="Report Product" align="left" />
			</div>
		</div>
	);
};

const RuangNusantara: FC = () => {
	const router = useRouter();
	return (
		<div className="w-1/3 lg:w-1/4 flex flex-col gap-y-2">
			<h1 className="mb-3 font-bold text-base lg:text-xl text-lightBrown">
				Ruang Nusantara
			</h1>
			<TertiaryButton
				label="About Us"
				onClick={() => router.push("/about")}
				align="left"
			/>
			<TertiaryButton label="Services" align="left" />
			<TertiaryButton label="Partnerships" align="left" />
			<TertiaryButton label="Join Our Team" align="left" />
			<TertiaryButton label="Press" align="left" />
			<TertiaryButton label="Privacy Policy" align="left" />
			<TertiaryButton label="Terms & Condition" align="left" />
		</div>
	);
};

export default Footer;
