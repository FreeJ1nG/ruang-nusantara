import { FC, useContext } from "react";

import Button from "../components/Button/Button";
import { DESTINATIONS } from "./constants";
import Image from "next/image";
import { IndoContext } from "../context/IndoContext";
import type { NextPage } from "next";
import TripsCard from "../components/TripsCard/index";
import { useRouter } from "next/router";

type PropTypes = {
	indo: boolean;
};

const Home: NextPage = () => {
	const indo = useContext(IndoContext);

	return (
		<div className="w-full flex flex-col">
			<HomepageCard indo={indo} />
			<DestinationCard indo={indo} />
			<TripsCard />
		</div>
	);
};

const DestinationCard: FC<PropTypes> = ({ indo }) => {
	const router = useRouter();

	return (
		<div className="my-10 md:my-20 lg:my-40 mx-5 md:mx-14 lg:mx-20 flex flex-col gap-y-12">
			<div className="flex flex-col gap-y-2 md:gap-y-5">
				<h1 className="font-ubuntu font-medium tracking-wide text-center md:text-left">
					{indo ? "RENCANAKAN PERJALANAN ANDA" : "PLAN YOUR NEXT TRIP"}
				</h1>
				<div className="flex flex-col items-center md:flex-row gap-y-2 justify-between">
					<h1 className="font-sanspro text-3xl sm:text-4xl lg:text-5xl font-black text-center md:text-left">
						{indo ? "Cari tujuan selanjutnya" : "Where to visit next?"}
					</h1>
					<Button
						label="View all destinations"
						type="secondary"
						width={250}
						height={35}
						onClick={() => router.push("/destinations")}
					/>
				</div>
				<h1 className="font-ubuntu text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left"></h1>
			</div>
			<div className="w-full flex flex-row flex-wrap xl:flex-nowrap justify-center gap-y-10 gap-x-5 font-ubuntu">
				{DESTINATIONS.map((destination) => (
					<DestinationElement
						key={destination.id}
						to={destination.to}
						imageSrc={destination.imageSrc}
						title={destination.title}
						description={destination.description}
					/>
				))}
			</div>
		</div>
	);
};

type DestinationElementProps = {
	to: string;
	imageSrc: string;
	title: string;
	description: string;
};

const DestinationElement: FC<DestinationElementProps> = ({
	to,
	imageSrc,
	title,
	description,
}) => {
	return (
		<div className="group relative w-full sm:w-1/3 md:w-1/4 xl:w-1/5 h-[450px] xl:h-[600px]">
			<Image
				src={imageSrc}
				layout="fill"
				objectFit="cover"
				alt={title}
				className="rounded-3xl"
			/>
			<button className="text-transparent hover:text-black absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 bg-transparent hover:bg-whiteCover/60 rounded-3xl z-60">
				<div className="w-full h-full px-10 sm:px-5 xl:px-8 flex flex-col gap-y-5 justify-center">
					<h1 className="font-bold text-2xl xl:text-3xl text-left">{title}</h1>
					<h1 className="font-normal text-sm md:text-base xl:text-lg text-left">
						{description}
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
		<div className="relative w-full flex flex-row justify-end overflow-hidden h-screen text-white">
			<div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/20" />
			<div className="relative w-full h-full">
				<Image
					src="/padar_island.jpeg"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full md:w-2/5 flex flex-col gap-y-10 justify-center z-60">
				<h1 className="drop-shadow-2xl text-center md:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
					{indo
						? "Rasakan Penjalanan yang Tidak Terlupakan"
						: "Discover story-worthy travel moments"}
				</h1>
				<h1 className="font-ubuntu font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
					{indo
						? ""
						: "Pack your bag, set your sights, and get ready for a memorable trip"}
				</h1>
				<div className="text-base md:text-xl font-bold flex justify-center md:justify-start">
					<Button
						label={indo ? "Jelajahi" : "Plan your trip"}
						width={230}
						height={50}
						type="primary"
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
