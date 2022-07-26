import { FACEBOOK_ICON, INSTAGRAM_ICON, YOUTUBE_ICON } from "./constants";

import { FC } from "react";
import Image from "next/image";
import TertiaryButton from "../Button/TertiaryButton";
import { useRouter } from "next/router";

const brownTitle: string = "font-bold text-sm md:text-lg text-lightBrown";

const Footer: FC = () => {
	const router = useRouter();

	return (
		<div className="bg-footer flex flex-col gap-y-5 md:gap-y-20 pb-5 pt-20">
			<div className="flex flex-row mx-10 lg:mx-20">
				<div className="hidden lg:flex lg:flex-col gap-y-10 w-1/3">
					<Logo />
					<FollowUs />
					<h1 className="text-footerText text-lg">
						<button className="underline text-sm sm:text-base md:text-lg">
							Privacy Policies
						</button>
					</h1>
				</div>
				<div className="hidden sm:flex flex-row gap-x-5 w-full lg:w-2/3">
					<div className="sm:w-1/3 flex flex-col gap-y-10">
						<TopDestinations />
					</div>
					<div className="sm:w-1/3 flex flex-col gap-y-10">
						<TravelInterests />
						<HelpCenter />
					</div>
					<div className="sm:w-1/3 flex flex-col gap-y-10">
						<Shop />
						<AboutUs />
					</div>
				</div>
				<div className="sm:hidden w-full flex flex-row">
					<div className="w-1/2 flex flex-col gap-y-10">
						<TopDestinations />
						<HelpCenter />
						<AboutUs />
					</div>
					<div className="w-1/2 flex flex-col gap-y-10">
						<TravelInterests />
						<Shop />
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-10 justify-center items-center lg:hidden">
				<Logo />
				<FollowUs />
				<h1 className="text-footerText text-sm sm:text-base md:text-lg">
					<button className="underline">Privacy Policies</button>
				</h1>
			</div>
			<h1 className="TRAVEL INTERESTS-normal text-sm sm:text-base md:text-lg text-white text-center font-poppins">
				©2022 Ruang Nusantara. All Rights Reserved.
			</h1>
		</div>
	);
};

const FollowUs: FC = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<h1 className={`${brownTitle} text-center lg:text-left`}>Follow Us</h1>
			<div className="flex flex-row gap-x-4">
				<FACEBOOK_ICON />
				<INSTAGRAM_ICON />
				<YOUTUBE_ICON />
			</div>
		</div>
	);
};

const Logo: FC = () => {
	const router = useRouter();
	return (
		<div className="w-full flex flex-col items-center lg:items-start justify-center gap-y-10">
			<div className="relative w-48 h-48">
				<Image src="/logo.png" layout="fill" alt="Logo" />
			</div>
			<div className="flex flex-col gap-y-2">
				<h1 className="font-serifpro text-yellowText font-bold text-3xl text-center lg:text-left">
					Ruang Nusantara
				</h1>
				<h1 className="font-sanspro text-white text-sm text-center lg:text-left">
					Explore Indonesia
				</h1>
			</div>
		</div>
	);
};

const Shop: FC = () => {
	return (
		<div className="flex flex-col gap-y-3">
			<h1 className={brownTitle}>TRAVEL INTERESTS</h1>
			<TertiaryButton label="Paintings" align="left" />
			<TertiaryButton label="Sculpture" align="left" />
			<TertiaryButton label="Fashion" align="left" />
			<TertiaryButton label="Frozen Foods" align="left" />
			<TertiaryButton label="Crafts" align="left" />
			<TertiaryButton label="Non-English Guides" align="left" />
		</div>
	);
};

const AboutUs: FC = () => {
	return (
		<div className="flex flex-col gap-y-3">
			<h1 className={brownTitle}>ABOUT US</h1>
			<TertiaryButton label="About Ruang Nusantara" align="left" />
			<TertiaryButton label="Press, Trade, and Advertising" align="left" />
			<TertiaryButton label="Work For Us" align="left" />
			<TertiaryButton label="Terms and Conditions" align="left" />
		</div>
	);
};

const TravelInterests: FC = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col gap-y-3">
			<h1 className={brownTitle}>TRAVEL INTERESTS</h1>
			<TertiaryButton label="Art and Culture" align="left" />
			<TertiaryButton label="Beaches" align="left" />
			<TertiaryButton label="Culinary" align="left" />
			<TertiaryButton label="Family Holidays" align="left" />
			<TertiaryButton label="Fashion" align="left" />
			<TertiaryButton label="Travel on Budget" align="left" />
			<TertiaryButton label="Wildlife and Nature" align="left" />
		</div>
	);
};

const HelpCenter: FC = () => {
	return (
		<div className="flex flex-col gap-y-3">
			<h1 className={brownTitle}>HELP CENTER</h1>
			<TertiaryButton label="Contact Us" align="left" />
			<TertiaryButton label="FAQ" align="left" />
		</div>
	);
};

const TopDestinations: FC = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col gap-y-3">
			<h1 className={brownTitle}>TOP DESTINATIONS</h1>
			<TertiaryButton label="Bali" align="left" />
			<TertiaryButton label="Labuan Bajo" align="left" />
			<TertiaryButton label="Java" align="left" />
			<TertiaryButton label="Sumatera" align="left" />
			<TertiaryButton label="Kalimantan" align="left" />
			<TertiaryButton label="Sulawesi" align="left" />
			<TertiaryButton label="Papua" align="left" />
			<TertiaryButton label="Maluku" align="left" />
		</div>
	);
};

export default Footer;
