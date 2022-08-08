import { FC, useContext, useEffect, useState } from "react";
import {
	INTERESTS_CARDS,
	REGION_CHOICES,
	To_Interest,
	To_Region,
} from "../../constants";
import { Interests, Regions } from "../../constants";

import CardWithImage from "../../components/CardWithImage/index";
import { Carousel } from "react-responsive-carousel";
import { DESTINATIONS } from "./constants";
import DestinationCard from "../../components/DestinationCard/index";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import RegionSelect from "../../components/Select/RegionSelect";
import Select from "../../components/Select/Select";
import SelectChecklist from "../../components/Select/SelectChecklist";
import TripsCard from "../../components/TripsCard/index";
import { split } from "../../constants";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks/useWindowSize";

type PropTypes = {
	indo: boolean;
};

const Destinations: FC = () => {
	const indo = useContext(IndoContext);

	return (
		<div className="flex flex-col">
			<Content indo={indo} />
			<TripsCard brownStyle />
		</div>
	);
};

const Content: FC<PropTypes> = ({ indo }) => {
	const router = useRouter();
	const { region, interest } = router.query;

	const [filter, setFilter] = useState<string>("");
	const [regionFilter, setRegionFilter] = useState<Regions>(Regions.ALL);
	const [interestsFilter, setInterestsFilter] = useState<Interests[]>([]);
	const windowSize = useWindowSize();
	const [columns, setColumns] = useState<number>(1);

	useEffect(() => {
		if (!router.isReady) return;
		if (region) {
			const Region: string =
				(Array.isArray(region) ? region[0] : region) ?? "All Regions";
			setRegionFilter(To_Region[Region]);
		}
		if (interest) {
			if (Array.isArray(interest)) {
				setInterestsFilter(interest.map((i) => To_Interest[i]));
			} else {
				setInterestsFilter([To_Interest[interest]]);
			}
		}
	}, [router.isReady]);

	useEffect(() => {
		if (!router.isReady) return;
		router.replace({
			query: { ...router.query, interest: interestsFilter },
		});
	}, [interestsFilter, router.isReady]);

	useEffect(() => {
		if (!router.isReady) return;
		router.replace({
			query: { ...router.query, region: regionFilter },
		});
	}, [regionFilter, router.isReady]);

	useEffect(() => {
		if ((windowSize.width ?? 0) >= 1200) {
			setColumns(3);
		} else if ((windowSize.width ?? 0) >= 900) {
			setColumns(2);
		} else {
			setColumns(1);
		}
	}, [windowSize]);

	let FILTERED_DESTINATIONS = DESTINATIONS.filter(
		(destination) =>
			regionFilter === Regions.ALL || destination.region === regionFilter
	);

	FILTERED_DESTINATIONS = FILTERED_DESTINATIONS.filter((destination) =>
		interestsFilter.every((e) => destination.categories.includes(e))
	);

	FILTERED_DESTINATIONS = FILTERED_DESTINATIONS.filter(
		(destination) => destination.title.toLowerCase().indexOf(filter) !== -1
	);

	let elementsList = split(FILTERED_DESTINATIONS, columns * 2);

	return (
		<div className="relative flex flex-col px-2 sm:px-20 md:px-32 lg:px-20 xl:px-32 2xl:px-60 py-20">
			<div className="px-10 flex flex-col sm:flex-row md:justify-center items-end gap-y-5 gap-x-5 lg:gap-x-20">
				<div className="w-full sm:w-1/2 lg:w-1/5">
					<RegionSelect
						label="Filter by region"
						selected={regionFilter}
						setSelected={setRegionFilter}
						options={REGION_CHOICES}
						fit={true}
						rounded="3xl"
					/>
				</div>
				<div className="relative rounded-lg w-full sm:w-1/2 lg:w-2/5">
					<input
						type="text"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="outline-none w-full rounded-lg placeholder:text-inherit placeholder:font-semibold bg-inherit transition-all duration-200 border-2 border-gray6/50 focus:border-yellowText py-2 px-5"
						placeholder="Search"
					/>
					<div className="absolute right-4 top-0 bottom-0 flex items-center">
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
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-5 xl:gap-x-10 mt-10">
				{INTERESTS_CARDS.map((interest) => (
					<CardWithImage
						key={interest.id}
						imageSrc={interest.imageSrc}
						label={interest.label}
						width={150}
						height={150}
						value={interest.value}
						list={interestsFilter}
						setList={setInterestsFilter}
					/>
				))}
			</div>
			<div className="brown-arrow">
				<Carousel
					showStatus={false}
					showThumbs={false}
					emulateTouch={true}
					showIndicators={false}
					className="my-10 w-full"
				>
					{elementsList &&
						elementsList.map((elements: any) => (
							<div
								key={elements.id}
								className={`py-10 px-10 grid gap-y-5 lg:gap-y-10 xl:gap-y-16 gap-4 grid-rows-2 ${
									columns === 1 && "grid-cols-1"
								} ${columns === 2 && "grid-cols-2"} ${
									columns === 3 && "grid-cols-3"
								}`}
							>
								{elements.value.map((element: any, i: number) => (
									<DestinationCard
										key={element.id}
										id={element.id}
										region={element.region}
										categories={element.categories}
										title={element.title}
										imageSrc={element.imageSrc}
									/>
								))}
							</div>
						))}
				</Carousel>
			</div>
			<div className="absolute hidden lg:block lg:-bottom-28 right-0">
				<div className="relative lg:w-[500px] lg:h-60">
					<Image
						src="/destinations/megamendung.png"
						alt="Megamendung"
						layout="fill"
					/>
				</div>
			</div>
		</div>
	);
};

const LandingCard: FC<PropTypes> = ({ indo }) => {
	const router = useRouter();

	return (
		<div className="relative w-full flex flex-row justify-end overflow-hidden h-screen text-white">
			<div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/10" />
			<div className="relative w-full h-full">
				<Image
					src="/rinjani.jpeg"
					layout="fill"
					objectFit="cover"
					objectPosition="bottom"
					alt="Raja Ampat"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full flex flex-row items-center z-60">
				<div className="w-full md:w-2/5 flex flex-col gap-y-10">
					<h1 className="drop-shadow-2xl text-center md:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
						{indo
							? "Jelajahi Indonesia!"
							: "Explore different regions of Indonesia!"}
					</h1>
					<h1 className="drop-shadow-2xl font-ubuntu font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
						{indo
							? "Jelajahi 5300 jenis makanan, 2775 atraksi, 64 baju tradisional dan kriya. Nawasena!"
							: "Every place has a story, every trip is unforgettable"}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Destinations;
