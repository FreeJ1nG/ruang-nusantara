import {
	ATTRACTIONS,
	AttractionType,
	Attractions,
	DESTINATIONS,
	DESTINATION_DETAIL,
	DestinationDetailType,
	DestinationType,
} from "../constants";
import DestinationCard from "../../../components/DestinationCard";
import { FC, useEffect, useState } from "react";

import { BOOKINGS } from "../../trips/constants";
import BookingCard from "../../../components/BookingCard";
import Button from "../../../components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import TertiaryButton from "../../../components/Button/TertiaryButton";
import { split } from "../../../constants";
import { useRouter } from "next/router";
import { useWindowSize } from "../../../hooks/useWindowSize";

const Destination: FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const destination = DESTINATIONS.find(
		(destination) => id && destination.id === +id
	);
	const windowSize = useWindowSize();
	const [attractionColumns, setAttractionColumns] = useState<number>(1);
	const [bookingColumns, setBookingColumns] = useState<number>(1);

	useEffect(() => {
		if ((windowSize.width ?? 0) >= 1500) {
			setAttractionColumns(3);
		} else if ((windowSize.width ?? 0) >= 700) {
			setAttractionColumns(2);
		} else {
			setAttractionColumns(1);
		}
		if ((windowSize.width ?? 0) >= 1500) {
			setBookingColumns(4);
		} else if ((windowSize.width ?? 0) >= 1200) {
			setBookingColumns(3);
		} else if ((windowSize.width ?? 0) >= 800) {
			setBookingColumns(2);
		} else {
			setBookingColumns(1);
		}
	}, [windowSize]);

	return (
		<div className="flex flex-col gap-y-12 px-5 md:px-10 lg:px-32 xl:px-40 py-24 pt-32">
			<Routes destination={destination} />
			<ContentCard destination={destination} />
			<AttractionsCard destination={destination} columns={attractionColumns} />
			<BookingsCard destination={destination} columns={bookingColumns} />
			<OtherDestinationsCard
				destination={destination}
				columns={bookingColumns}
			/>
		</div>
	);
};

type PropsType = {
	destination: DestinationType | undefined;
	columns?: number | undefined;
};

const OtherDestinationsCard: FC<PropsType> = ({ destination, columns }) => {
	const [destinationsLists, setDestinationsLists] = useState(
		split(
			DESTINATIONS.filter((d) => d.region === destination?.region),
			columns ?? 1
		)
	);
	useEffect(() => {
		setDestinationsLists(
			split(
				DESTINATIONS.filter((d) => d.region === destination?.region),
				columns ?? 1
			)
		);
	}, [columns, destination]);

	return (
		<div className="flex flex-col">
			<h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center sm:text-left">
				Find other destinations in {destination?.region}
			</h1>
			<div className="brown-arrow">
				<Carousel
					className="w-full"
					showStatus={false}
					showIndicators={false}
					showThumbs={false}
				>
					{destinationsLists.map((destinations) => {
						return (
							<div
								key={destinations.id}
								className={`grid gap-4 ${columns === 1 && "grid-cols-1"} ${
									columns === 2 && "grid-cols-2"
								} ${columns === 3 && "grid-cols-3"} ${
									columns === 4 && "grid-cols-4"
								} px-6 py-5 lg:py-10`}
							>
								{destinations.value.map((destination) => (
									<DestinationCard key={destination.id} {...destination} />
								))}
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

const BookingsCard: FC<PropsType> = ({ destination, columns }) => {
	const [bookingsLists, setBookingsLists] = useState(
		split(BOOKINGS, columns ?? 1)
	);
	useEffect(() => {
		setBookingsLists(split(BOOKINGS, columns ?? 1));
	}, [columns, destination]);

	return (
		<div className="flex flex-col">
			<h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center sm:text-left">
				Book a Trip
			</h1>
			<div className="brown-arrow">
				<Carousel
					className="w-full"
					showStatus={false}
					showIndicators={false}
					showThumbs={false}
				>
					{bookingsLists.map((bookings) => {
						return (
							<div
								key={bookings.id}
								className={`grid gap-4 ${columns === 1 && "grid-cols-1"} ${
									columns === 2 && "grid-cols-2"
								} ${columns === 3 && "grid-cols-3"} ${
									columns === 4 && "grid-cols-4"
								} px-6 py-5 lg:py-10`}
							>
								{bookings.value.map((booking) => (
									<BookingCard key={booking.id} {...booking} />
								))}
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

const AttractionsCard: FC<PropsType> = ({ destination, columns }) => {
	const [type, setType] = useState<Attractions>(Attractions.SIGHTS);
	const [attractionsLists, setAttractionsLists] = useState(
		split(
			ATTRACTIONS.filter((attraction) => attraction.type === type),
			columns ?? 1
		)
	);
	const router = useRouter();

	useEffect(() => {
		setAttractionsLists(
			split(
				ATTRACTIONS.filter((attraction) => attraction.type === type),
				columns ?? 1
			)
		);
	}, [type, columns]);

	console.log(attractionsLists);

	return (
		<div className="flex flex-col gap-y-10">
			<div className="flex flex-col gap-y-4">
				<h1 className="font-bold text-3xl text-center sm:text-left">
					Top Attractions
				</h1>
				<h1 className="text-gray4 text-sm text-center sm:text-left">
					These are our favorite local haunts, touristy spots, and hidden gems
					near Bromo Tengger Semeru.
				</h1>
			</div>
			<div className="flex flex-row justify-center sm:justify-start gap-x-4 lg:gap-x-10 text-xs lg:text-base">
				<button
					onClick={() => setType(Attractions.SIGHTS)}
					className={`underline ${
						type === Attractions.SIGHTS ? "text-black" : "text-gray3"
					}`}
				>
					Sights
				</button>
				<button
					onClick={() => setType(Attractions.RESTAURANTS)}
					className={`underline ${
						type === Attractions.RESTAURANTS ? "text-black" : "text-gray3"
					}`}
				>
					Restaurants
				</button>
				<button
					onClick={() => setType(Attractions.SHOPPING)}
					className={`underline ${
						type === Attractions.SHOPPING ? "text-black" : "text-gray3"
					}`}
				>
					Shopping
				</button>
				<button
					onClick={() => setType(Attractions.ENTERTAINMENT)}
					className={`underline ${
						type === Attractions.ENTERTAINMENT ? "text-black" : "text-gray3"
					}`}
				>
					Entertainment
				</button>
			</div>
			<div className="brown-arrow">
				<Carousel
					showIndicators={false}
					showStatus={false}
					showThumbs={false}
					className="w-full"
				>
					{attractionsLists.map((attractions) => {
						return (
							<div
								key={attractions.id}
								className={`grid gap-x-5 ${columns === 1 && "grid-cols-1"} ${
									columns === 2 && "grid-cols-2"
								} ${columns === 3 && "grid-cols-3"} py-5 px-6 lg:py-10`}
							>
								{attractions.value.map((attraction) => (
									<AttractionElement
										key={attraction.id}
										title={attraction.title}
										content={attraction.content}
										imageSrc={attraction.imageSrc}
									/>
								))}
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

type AttractionElementType = {
	title: string;
	content: string;
	imageSrc: string;
};

const AttractionElement: FC<AttractionElementType> = ({
	title,
	content,
	imageSrc,
}) => {
	return (
		<div className="flex flex-row items-center rounded-xl h-[300px] shadow-lg">
			<div className="relative w-1/2 lg:w-2/5 h-full">
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-tl-xl rounded-bl-xl"
				/>
			</div>
			<div className="w-1/2 lg:w-3/5 flex flex-col gap-y-5 text-left px-5">
				<h1 className="text-xl font-bold">{title}</h1>
				<h1 className="text-gray5 tracking-wider text-xs lg:text-sm">
					{content}
				</h1>
			</div>
		</div>
	);
};

const ContentCard: FC<PropsType> = ({ destination }) => {
	const router = useRouter();
	const destination_detail = DESTINATION_DETAIL.find(
		(detail) => detail.destination === destination
	);

	return (
		<div className="py-10 flex flex-col gap-y-10">
			<div className="flex flex-col">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
					{destination?.title}
				</h1>
				<h1 className="font-bold italic text-lightBrown">
					{destination_detail?.brownText}
				</h1>
				<h1 className="italic">{destination_detail?.italicText}</h1>
			</div>
			<div className="smallcard flex flex-col md:flex-row gap-y-5 gap-x-10">
				<Carousel
					showStatus={false}
					showThumbs={false}
					className="w-full md:w-3/5 xl:w-[70%]"
				>
					{destination_detail?.imageSrcs.map((imageSrc) => {
						return (
							<div key={imageSrc.id} className="relative w-full h-[500px]">
								<Image
									src={imageSrc.src}
									alt={`Image of ${destination?.title}`}
									layout="fill"
									objectFit="cover"
									className="rounded-xl"
								/>
							</div>
						);
					})}
				</Carousel>
				<div className="flex flex-col gap-y-5 w-full md:w-2/5 xl:w-[30%]">
					<h1 className="font-bold text-2xl tracking-wide text-center sm:text-left">
						Details
					</h1>
					<div className="flex flex-col gap-y-2 tracking-wide">
						{destination_detail?.address && (
							<div className="flex">
								<h1 className="w-20 text-gray2 font-medium">Address</h1>
								<h1 className="">{destination_detail?.address}</h1>
							</div>
						)}
						{destination_detail?.phone && (
							<div className="flex">
								<h1 className="w-20 text-gray2 font-medium">Phone</h1>
								<button className="underline text-hyperlink">
									{destination_detail?.phone}
								</button>
							</div>
						)}
						{destination_detail?.website && (
							<div className="flex">
								<h1 className="w-20 text-gray2 font-medium">Website</h1>
								<button className="underline text-hyperlink">
									{destination_detail.website}
								</button>
							</div>
						)}
						{destination_detail?.hours && (
							<div className="flex">
								<h1 className="w-20 text-gray2 font-medium">Hours</h1>
								<h1 className="">{destination_detail?.hours}</h1>
							</div>
						)}
					</div>
					<div className="flex flex-col gap-y-3">
						<h1 className="font-bold text-2xl tracking-wide text-center sm:text-left">
							Best time to visit
						</h1>
						<h1 className="text-center sm:text-left">
							{destination_detail?.bestTimeToVisit?.from} -{" "}
							{destination_detail?.bestTimeToVisit?.to}
						</h1>
					</div>
					<div className="flex justify-center sm:justify-start">
						<Button
							label="BOOK NOW"
							type="secondary"
							width={200}
							height={50}
							onClick={() => router.push("/")}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-5 mt-5">
				<h1 className="tracking-wide font-medium text-2xl text-center sm:text-left">
					{destination_detail?.headlineTitle}
				</h1>
				<h1 className="text-sm text-center sm:text-left">
					{destination_detail?.headlineContent}
				</h1>
			</div>
		</div>
	);
};

const Routes: FC<PropsType> = ({ destination }) => {
	const router = useRouter();

	return (
		<div className="flex flex-row gap-x-2 items-center">
			<TertiaryButton
				label={
					<div className="underline font-semibold">
						{destination?.region ?? "NOT FOUND"}
					</div>
				}
				onClick={() => router.push("/destinations")}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
			</svg>
			<TertiaryButton
				label={
					<div className="underline font-semibold">
						{destination?.categories[0] ?? "NOT FOUND"}
					</div>
				}
				onClick={() => router.push("/destinations")}
			/>
		</div>
	);
};

export default Destination;
