import { FC, useContext, useEffect, useState } from "react";
import { INTERESTS_FILTER, REGION_CHOICES } from "../../constants";
import { Interests, Regions } from "../../constants";

import { Carousel } from "react-responsive-carousel";
import { DESTINATIONS } from "./constants";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
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
			<LandingCard indo={indo} />
			<Content indo={indo} />
			<TripsCard brownStyle />
		</div>
	);
};

const Content: FC<PropTypes> = ({ indo }) => {
	const router = useRouter();
	const [regionFilter, setRegionFilter] = useState<Regions>(Regions.ALL);
	const [interestsFilter, setInterestsFilter] = useState<Interests[]>([]);
	const windowSize = useWindowSize();
	const [columns, setColumns] = useState<number>(1);

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
			regionFilter === Regions.ALL || destination.region == regionFilter
	);

	FILTERED_DESTINATIONS = FILTERED_DESTINATIONS.filter((destination) =>
		interestsFilter.every((e) => destination.categories.includes(e))
	);

	let elementsList = split(FILTERED_DESTINATIONS, columns * 2);

	const justify = (i: number) => {
		if (columns === 1) {
			return "center";
		} else if (columns === 2) {
			if (i % 2 === 0) return "center";
			if (i % 2 === 1) return "center";
		} else {
			if (i % 3 === 0) return "left";
			if (i % 3 === 1) return "center";
			if (i % 3 === 2) return "right";
		}
	};

	return (
		<div className="relative flex flex-col px-2 sm:px-20 md:px-32 lg:px-20 xl:px-32 2xl:px-60 py-20">
			<div className="px-10 flex flex-col sm:flex-row md:justify-center xl:justify-start gap-y-5 gap-x-5 lg:gap-x-20">
				<div className="w-full sm:w-1/2 lg:w-1/3">
					<Select
						label="Filter by region"
						selected={regionFilter}
						setSelected={setRegionFilter}
						options={REGION_CHOICES}
						fit={true}
					/>
				</div>
				<div className="w-full sm:w-1/2 lg:w-2/5">
					<SelectChecklist
						label="Sort places by"
						placeholder="Anything"
						selected={interestsFilter}
						setSelected={setInterestsFilter}
						options={INTERESTS_FILTER}
						fit={true}
					/>
				</div>
			</div>
			<div className="destinations">
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
								className={`px-10 grid gap-y-5 lg:gap-y-10 xl:gap-y-16 gap-4 grid-rows-2 ${
									columns === 1 && "grid-cols-1"
								} ${columns === 2 && "grid-cols-2"} ${
									columns === 3 && "grid-cols-3"
								}`}
							>
								{elements.value.map((element: any, i: number) => (
									<Element
										justify={justify(i)}
										key={element.id}
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

type ElementProps = {
	justify?: "left" | "center" | "right" | undefined;
	region: string;
	categories: Interests[];
	title: string;
	imageSrc: string;
};

const Element: FC<ElementProps> = ({
	justify,
	region,
	categories,
	title,
	imageSrc,
}) => {
	return (
		<div
			className={`flex ${justify === "left" && "justify-start"} ${
				justify === "center" && "justify-center"
			} ${justify === "right" && "justify-end"}`}
		>
			<div className="flex flex-col items-start gap-y-2 font-ubuntu p-1">
				<div className="relative w-60 h-60 sm:w-72 sm:h-72 xl:w-80 xl:h-80">
					<Image
						src={imageSrc}
						layout="fill"
						objectFit="cover"
						alt={title}
						className="rounded-xl"
					/>
				</div>
				<div className="flex flex-row items-center gap-x-4 text-sm font-medium my-1 mt-2">
					<h1 className="text-xs sm:text-sm">{region}</h1>
					<div className="w-1 h-1 rounded-full bg-gray" />
					<h1 className="text-gray text-xs">{categories[0]}</h1>
				</div>
				<h1 className="text-2xl leading-none font-bold text-left">{title}</h1>
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
					<h1 className="drop-shadow-2xl text-center md:text-left text-2xl sm:text-4xl xl:text-6xl font-bold">
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
