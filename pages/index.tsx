import { FC, useContext } from "react";

import Button from "../components/Button/Button";
import Image from "next/image";
import { IndoContext } from "../context/IndoContext";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const indo = useContext(IndoContext);

	return (
		<div className="w-full flex flex-col">
			<HomepageCard indo={indo} />
			<ServiceDisplay indo={indo} />
		</div>
	);
};

type PropTypes = {
	indo: boolean;
};

const ServiceDisplay: FC<PropTypes> = ({ indo }) => {
	return (
		<div className="relative flex flex-col gap-y-10 md:gap-y-20 mt-10 sm:mt-20 md:mt-40 pb-20 md:pb-40 px-5 sm:px-20 md:px-40">
			<div className="absolute bottom-0 top-0 left-0 right-0 flex items-end">
				<div className="relative w-full h-1/2">
					<Image
						src="/map.png"
						layout="fill"
						alt="Map"
						objectFit="cover"
						objectPosition="top"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<h1 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center">
					{indo ? "Servis Eksklusif Lokal" : "Exclusive Services from Locals"}
				</h1>
				<h1 className="font-normal text-sm sm:text-lg lg:text-xl text-center">
					{indo ? "" : "Curated Authentic Local Tourism and Unique Crafts"}
				</h1>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 md:gap-y-20 gap-x-32">
				<TravelCard />
				<ShopCard />
			</div>
		</div>
	);
};

const ShopCard = () => {
	return (
		<div className="group relative w-72 md:w-96 h-[500px] md:h-[600px]">
			<Image
				src="/sungai.png"
				layout="fill"
				alt="Gunung"
				className="rounded-3xl"
			/>
			<div className="transition-all duration-200 absolute bottom-28 w-40 h-14 pl-5 group-hover:text-transparent bg-darkBrown2 group-hover:bg-transparent rounded-tr-full rounded-br-full flex items-center text-xl font-bold z-50">
				SHOP
			</div>
			<button className="text-transparent hover:text-black absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 bg-transparent hover:bg-whiteCover/60 rounded-3xl">
				<div className="w-full h-full px-10 flex flex-col gap-y-5 justify-center">
					<h1 className="font-bold text-4xl text-left">Shop</h1>
					<h1 className="text-lg text-left">
						Find out the most interesting tourist attraction and visit the
						destination
					</h1>
					<div className="transition-all duration-200 flex flex-row rounded-3xl justify-center items-center gap-x-2 w-32 h-12 text-transparent group-hover:text-white group-hover:bg-lightBrown">
						<h1 className="font-bold">More</h1>
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
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</button>
		</div>
	);
};

const TravelCard = () => {
	return (
		<div className="group relative w-72 md:w-96 h-[500px] md:h-[600px]">
			<Image
				src="/gunung.png"
				layout="fill"
				alt="Gunung"
				className="rounded-3xl"
			/>
			<div className="transition-all duration-200 absolute bottom-28 w-40 h-14 pl-5 group-hover:text-transparent bg-darkBrown2 group-hover:bg-transparent rounded-tr-full rounded-br-full flex items-center text-xl font-bold z-50">
				TRAVEL
			</div>
			<button className="text-transparent hover:text-black absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 bg-transparent hover:bg-whiteCover/60 rounded-3xl">
				<div className="w-full h-full px-10 flex flex-col gap-y-5 justify-center">
					<h1 className="font-bold text-4xl text-left">Travel</h1>
					<h1 className="text-lg text-left">
						Located in the west part of Indonesia lorem ipsum lorem ipsum lorem
						ipsum
					</h1>
					<div className="transition-all duration-200 flex flex-row rounded-3xl justify-center items-center gap-x-2 w-32 h-12 text-transparent group-hover:text-white group-hover:bg-lightBrown">
						<h1 className="font-bold">More</h1>
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
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</button>
		</div>
	);
};

const HomepageCard: FC<PropTypes> = ({ indo }) => {
	const router = useRouter();

	return (
		<div className="relative w-full flex flex-row justify-end overflow-hidden h-[800px]">
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-50" />
			<div className="relative w-full">
				<Image
					src="/homeimage-mirrored.png"
					width="100%"
					height="100%"
					layout="fill"
					objectFit="cover"
					objectPosition="right"
					alt="Mirrored Homepage Image"
				/>
			</div>
			<div className="relative w-full">
				<Image
					src="/homeimage.jpeg"
					width="100%"
					height="100%"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-40 px-10 md:px-0 w-full md:w-1/2 flex flex-col gap-y-10 justify-center z-60">
				<h1 className="text-center md:text-left text-2xl sm:text-4xl xl:text-7xl font-bold">
					{indo
						? "Mengenal Budaya Nusantara Lebih Dalam"
						: "Explore Indonesian Culture With Us"}
				</h1>
				<h1 className="font-inter font-medium text-center md:text-left text-lg sm:text-xl xl:text-3xl">
					{indo
						? "Jelajahi 5300 jenis makanan, 2775 atraksi, 64 baju tradisional dan kriya. Nawasena!"
						: "Explore 5300 different foods, 2775 tourist attractions, 64 traditional clothes and crafts. Nawasena!"}
				</h1>
				<div className="text-base md:text-xl font-bold flex justify-center md:justify-start">
					<Button
						label={indo ? "Jelajahi" : "Explore"}
						width={200}
						height={50}
						onClick={() => router.push("/explore")}
						rightIcon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
