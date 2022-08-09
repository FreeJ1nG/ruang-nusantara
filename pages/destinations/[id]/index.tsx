import {
	ATTRACTIONS,
	Attractions,
	DESTINATIONS,
	DESTINATION_DETAIL,
	DestinationType,
} from "../../../constants/pages/destinations/constants";
import { FC, useEffect, useState } from "react";

import { BOOKINGS } from "../../../constants/pages/trips/constants";
import BookingCard from "../../../components/BookingCard";
import Button from "../../../components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import DestinationCard from "../../../components/DestinationCard";
import Image from "next/image";
import TertiaryButton from "../../../components/Button/TertiaryButton";
import { split } from "../../../constants/constants";
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
		<div className="flex flex-col gap-y-12">
			<div className="h-24 w-full bg-white"></div>
			<div className="flex flex-col gap-y-12 px-5 md:px-10 lg:px-32 xl:px-40 pb-20">
				<Routes destination={destination} />
				<ContentCard destination={destination} />
				<AttractionsCard
					destination={destination}
					columns={attractionColumns}
				/>
				<BookingsCard destination={destination} columns={bookingColumns} />
				<OtherDestinationsCard
					destination={destination}
					columns={bookingColumns}
				/>
			</div>
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
			DESTINATIONS.filter(
				(d) => d.region === destination?.region && d.id !== destination?.id
			),
			columns ?? 1
		)
	);
	useEffect(() => {
		setDestinationsLists(
			split(
				DESTINATIONS.filter(
					(d) => d.region === destination?.region && d.id !== destination?.id
				),
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
					emulateTouch={true}
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
					emulateTouch={true}
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

	return (
		<div className="flex flex-col gap-y-10">
			<div className="flex flex-col gap-y-4">
				<h1 className="font-bold text-3xl text-center sm:text-left">
					Top Attractions
				</h1>
				<h1 className="text-gray4 text-sm md:text-base xl:text-lg text-center sm:text-left">
					These are our favorite local haunts, touristy spots, and hidden gems
					near {destination?.title}.
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
					emulateTouch={true}
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
		<div className="flex flex-col gap-y-10">
			{destination_detail?.brownText && (
				<div className="font-bold text-white rounded-3xl bg-lightBrown py-1 w-40 text-center drop-shadow-lg">
					{destination_detail?.brownText}
				</div>
			)}
			<div className="flex flex-col gap-y-2">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
					{destination?.title}
				</h1>
				<h1 className="italic text-lg">{destination_detail?.italicText}</h1>
			</div>
			<div className="smallcard flex flex-col md:flex-row gap-y-5 gap-x-10 xl:gap-x-14 2xl:gap-x-20">
				<Carousel
					showStatus={false}
					showThumbs={false}
					emulateTouch={true}
					className="w-full md:w-3/5 xl:w-[70%]"
				>
					{destination_detail?.imageSrcs.map((imageSrc) => {
						return (
							<div key={imageSrc.id} className="relative w-full h-[600px]">
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
				<div className="relative flex flex-col justify-center gap-y-10 w-full md:w-2/5 xl:w-[30%] shadow-2xl py-10 px-14 rounded-3xl bg-white">
					<div className="absolute w-60 h-32 right-0 top-4">
						<div className="relative z-40 w-full h-full">
							<Image src="/megamendung2.png" alt="MegaMendung" layout="fill" />
						</div>
					</div>
					<div className="z-50 flex flex-col gap-y-5">
						<h1 className="font-bold text-2xl xl:text-3xl tracking-wide text-left">
							Details
						</h1>
						<div className="flex flex-col gap-y-4 tracking-wide">
							{destination_detail?.address && (
								<div className="flex items-center gap-x-5">
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
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<h1 className="text-lg">{destination_detail?.address}</h1>
								</div>
							)}
							{destination_detail?.phone && (
								<div className="flex items-center gap-x-5">
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
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<button className="underline text-hyperlink text-lg">
										{destination_detail?.phone}
									</button>
								</div>
							)}
							{destination_detail?.website && (
								<div className="flex items-center gap-x-5">
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
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/>
									</svg>
									<button className="underline text-hyperlink text-lg">
										{destination_detail.website}
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-y-3">
						<h1 className="font-bold text-2xl xl:text-3xl tracking-wide text-left">
							Best time to visit
						</h1>
						<h1 className="text-left text-lg">
							{destination_detail?.bestTimeToVisit?.from} -{" "}
							{destination_detail?.bestTimeToVisit?.to}
						</h1>
					</div>
					<Button
						label="BOOK NOW"
						type="primary"
						rounded="xl"
						height={50}
						fit={true}
						onClick={() => router.push("/")}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-5 my-5 mb-10 xl:mb-20">
				<h1 className="font-bold text-3xl text-center sm:text-left">
					Overview
				</h1>
				<h1 className="text-sm md:text-base xl:text-lg text-center sm:text-left">
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
					<div className="underline font-semibold text-xs sm:text-sm md:text-base">
						{destination?.region ?? "NOT FOUND"}
					</div>
				}
				onClick={() =>
					router.push({
						pathname: "/destinations",
						query: { region: destination?.region },
					})
				}
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
					<div className="underline font-semibold text-xs sm:text-sm md:text-base">
						{destination?.categories[0] ?? "NOT FOUND"}
					</div>
				}
				onClick={() =>
					router.push({
						pathname: "/destinations",
						query: {
							region: destination?.region,
							interest: destination?.categories[0],
						},
					})
				}
			/>
		</div>
	);
};

export default Destination;
