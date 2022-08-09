import {
	BookingsType,
	INTERESTS_FILTER,
	Interests,
	REGION_CHOICES,
	Regions,
	SORT_FILTER,
	Sorts,
	ToNumberFormat,
	ToRupiahFormat,
	To_Interest,
	To_Region,
	To_Sort,
	split,
} from "../../constants/constants";
import { FC, useContext, useEffect, useState } from "react";

import { BOOKINGS } from "../../constants/pages/trips/constants";
import BookingCard from "../../components/BookingCard";
import Button from "../../components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import Popup from "./components/popup";
import Select from "../../components/Select/Select";
import SelectChecklist from "../../components/Select/SelectChecklist";
import TripsCard from "../../components/TripsCard";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks/useWindowSize";

const Trips: FC = () => {
	return (
		<div className="flex flex-col">
			<TripsDisplay />
			<TripsCard />
		</div>
	);
};

const TripsDisplay: FC = () => {
	const [columns, setColumns] = useState<number>(1);
	const [filter, setFilter] = useState<string>("");
	const [minPriceFilter, setMinPriceFilter] = useState<string>("");
	const [maxPriceFilter, setMaxPriceFilter] = useState<string>("");
	const [regionFilter, setRegionFilter] = useState<Regions>(Regions.ALL);
	const [sortFilter, setSortFilter] = useState<Sorts>(Sorts.MOST_POPULAR);
	const [interestsFilter, setInterestsFilter] = useState<Interests[]>([]);
	const [bookingsLists, setBookingsLists] = useState<
		{ id: number; value: BookingsType[] }[]
	>([]);
	const [showFilterBar, setShowFilterBar] = useState<boolean>(false);
	const windowSize = useWindowSize();
	const router = useRouter();
	const { region, interest, sort } = router.query;

	const filters = {
		filter,
		setFilter,
		minPriceFilter,
		setMinPriceFilter,
		maxPriceFilter,
		setMaxPriceFilter,
		regionFilter,
		setRegionFilter,
		sortFilter,
		setSortFilter,
		interestsFilter,
		setInterestsFilter,
	};

	useEffect(() => {
		if ((windowSize.width ?? 0) >= 1400) {
			setColumns(3);
		} else if ((windowSize.width ?? 0) >= 1000) {
			setColumns(2);
		} else if ((windowSize.width ?? 5000) <= 600) {
			setColumns(1);
		} else if ((windowSize.width ?? 5000) <= 768) {
			setColumns(2);
		} else {
			setColumns(1);
		}
	}, [windowSize]);

	useEffect(() => {
		if (!router.isReady) return;
		if (region) {
			const Region: string = Array.isArray(region) ? region[0] : region;
			setRegionFilter(To_Region[Region]);
		}
		if (interest) {
			if (Array.isArray(interest)) {
				setInterestsFilter(interest.map((i) => To_Interest[i]));
			} else {
				setInterestsFilter([To_Interest[interest]]);
			}
		}
		if (sort) {
			const Sort: string = Array.isArray(sort) ? sort[0] : sort;
			setSortFilter(To_Sort[Sort]);
		}
	}, [router.isReady]);

	useEffect(() => {
		if (!router.isReady) return;
		router.replace({
			query: {
				...router.query,
				interest: interestsFilter,
			},
		});
	}, [interestsFilter, router.isReady]);

	useEffect(() => {
		if (!router.isReady) return;
		router.replace({
			query: {
				...router.query,
				region: regionFilter,
			},
		});
	}, [regionFilter, router.isReady]);

	useEffect(() => {
		if (!router.isReady) return;
		router.replace({
			query: {
				...router.query,
				sort: sortFilter,
			},
		});
	}, [sortFilter, router.isReady]);

	useEffect(() => {
		let result = BOOKINGS;

		if (filter !== "") {
			result = result.filter(
				(booking) => booking.title.toLowerCase().indexOf(filter) !== -1
			);
		}

		if (minPriceFilter !== "") {
			result = result.filter(
				(booking) => booking.price >= ToNumberFormat(minPriceFilter)
			);
		}

		if (maxPriceFilter !== "") {
			result = result.filter(
				(booking) => booking.price <= ToNumberFormat(maxPriceFilter)
			);
		}

		result = result.filter(
			(booking) =>
				regionFilter === Regions.ALL || booking.region === regionFilter
		);

		result = result.filter((booking) =>
			interestsFilter.every((e) => booking.categories.includes(e))
		);

		result.sort(function (a, b) {
			if (sortFilter === Sorts.LOWEST_PRICE) {
				return a.price - b.price;
			} else if (sortFilter === Sorts.HIGHEST_PRICE) {
				return b.price - a.price;
			} else if (sortFilter === Sorts.MOST_POPULAR) {
				return b.reviews - a.reviews;
			} else {
				throw Error("Sort Filter Error");
			}
		});

		setBookingsLists(split(result, columns * 2));
	}, [
		filter,
		minPriceFilter,
		maxPriceFilter,
		regionFilter,
		sortFilter,
		interestsFilter,
		columns,
	]);

	return (
		<div className="relative">
			<div className="absolute z-40 top-0 left-0">
				<div className="relative w-72 h-40 lg:w-96 lg:h-60">
					<Image
						src="/trips/megamendung.png"
						layout="fill"
						objectFit="cover"
						alt="Megamendung"
					/>
				</div>
			</div>
			{
				<Popup showPopup={showFilterBar} setShowPopup={setShowFilterBar}>
					<div
						className={`w-full bg-white transition-all duration-200 ${
							showFilterBar ? "h-[500px] text-black" : "text-transparent h-0"
						}`}
					>
						<FilterBar popup columns={columns} {...filters} />
					</div>
				</Popup>
			}
			<div className="flex flex-col mt-20 mx-5 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 pt-20 md:pt-10 lg:pt-28">
				<div className="md:hidden flex justify-center">
					<Button
						label={<h1 className="text-black">Filter</h1>}
						rightIcon={
							<div className="text-lightBrown">
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
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
						}
						type="secondary"
						width={150}
						height={30}
						onClick={() => setShowFilterBar(true)}
					/>
				</div>
				<div className="flex flex-row gap-x-5">
					<FilterBar columns={columns} {...filters} />
					<div
						className={`bookings ${columns === 1 && "w-full md:w-[55%]"} ${
							columns === 2 && "w-full md:w-2/3"
						} ${columns === 3 && "xl:w-3/4 2xl:w-4/5"}`}
					>
						<Carousel
							className="w-full"
							emulateTouch={true}
							showStatus={false}
							showThumbs={false}
						>
							{bookingsLists.map((bookings) => (
								<div
									key={bookings.id}
									className={`px-10 xl:px-14 2xl:px-20 py-10 grid gap-4 grid-rows-2 ${
										columns === 1 && "grid-cols-1"
									} ${columns === 2 && "grid-cols-2"} ${
										columns === 3 && "grid-cols-3"
									} ${columns === 4 && "grid-cols-4"}`}
								>
									{bookings.value.map((booking) => (
										<BookingCard key={booking.id} {...booking} />
									))}
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

type FilterBarProps = {
	filter: string;
	setFilter: Function;
	minPriceFilter: string;
	setMinPriceFilter: Function;
	maxPriceFilter: string;
	setMaxPriceFilter: Function;
	regionFilter: Regions;
	setRegionFilter: Function;
	sortFilter: Sorts;
	setSortFilter: Function;
	interestsFilter: Interests[];
	setInterestsFilter: Function;
	columns: number;
	popup?: boolean | undefined;
};

const FilterBar: FC<FilterBarProps> = ({
	filter,
	setFilter,
	minPriceFilter,
	setMinPriceFilter,
	maxPriceFilter,
	setMaxPriceFilter,
	regionFilter,
	setRegionFilter,
	sortFilter,
	setSortFilter,
	interestsFilter,
	setInterestsFilter,
	columns,
	popup,
}) => {
	const indo = useContext(IndoContext);

	return (
		<div
			className={`bg-primary ${
				popup ? "overflow-auto max-h-full w-full" : "hidden h-fit"
			} md:flex flex-col ${!popup && columns === 1 && "w-[45%]"} ${
				!popup && columns === 2 && "w-1/3"
			} ${
				!popup && columns === 3 && "xl:w-1/4 2xl:w-1/5"
			} rounded-xl shadow-2xl divide-y divide-gray z-50`}
		>
			<div className="flex flex-col gap-y-5 p-5 py-7">
				<h1 className="ml-2 font-semibold">
					{indo ? "Cari tujuan Anda" : "Look for your next destination"}
				</h1>
				<div className="flex flex-row rounded-3xl border-2 border-selectBorder/50">
					<input
						type="text"
						placeholder="Search"
						className="outline-none w-full placeholder:font-semibold rounded-tl-3xl rounded-bl-3xl px-5 py-1.5"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>
					<div className="flex justify-center items-center bg-white rounded-tr-3xl rounded-br-3xl p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
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
			<div className="flex flex-col gap-y-5 p-5 py-7">
				<h1 className="ml-2 font-semibold">
					{indo ? "Filter Harga" : "Price Filter"}
				</h1>
				<div className="flex flex-col gap-y-5">
					<div className="flex flex-row">
						<input
							type="text"
							placeholder={indo ? "Harga Minimum" : "Minimum Price"}
							className="outline-none placeholder:font-semibold rounded-tl-3xl rounded-bl-3xl w-full px-5 py-1.5"
							value={minPriceFilter}
							onChange={(e) =>
								setMinPriceFilter(
									ToRupiahFormat(ToNumberFormat(e.target.value))
								)
							}
						/>
						<div className="text-slate-500 w-10 bg-white rounded-tr-3xl rounded-br-3xl flex justify-center items-center px-4 font-semibold">
							Rp
						</div>
					</div>
					<div className="flex flex-row">
						<input
							type="text"
							placeholder={indo ? "Harga Maksimal" : "Maximum Price"}
							className="outline-none placeholder:font-semibold rounded-tl-3xl rounded-bl-3xl w-full px-5 py-1.5"
							value={maxPriceFilter}
							onChange={(e) =>
								setMaxPriceFilter(
									ToRupiahFormat(ToNumberFormat(e.target.value))
								)
							}
						/>
						<div className="text-slate-500 w-10 bg-white rounded-tr-3xl rounded-br-3xl flex justify-center items-center px-4 font-semibold">
							Rp
						</div>
					</div>
				</div>
			</div>
			<div className="p-5 py-7">
				<Select
					label={
						<h1 className="ml-2 font-semibold">
							{indo ? "Filter berdasarkan daerah" : "Filter by regions"}
						</h1>
					}
					selected={regionFilter}
					setSelected={setRegionFilter}
					options={REGION_CHOICES}
					fit={true}
				/>
			</div>
			<div className="p-5 py-7">
				<SelectChecklist
					label={
						<h1 className="ml-2 font-semibold">
							{indo ? "Filter berdasarkan kategori" : "Filter by interest"}
						</h1>
					}
					placeholder="Anything"
					selected={interestsFilter}
					setSelected={setInterestsFilter}
					options={INTERESTS_FILTER}
					fit={true}
				/>
			</div>
			<div className="p-5 py-7">
				<Select
					label={
						<h1 className="ml-2 font-semibold">
							{indo ? "Urutkan Berdasarkan" : "Sort by"}
						</h1>
					}
					selected={sortFilter}
					setSelected={setSortFilter}
					options={SORT_FILTER}
					fit={true}
				/>
			</div>
		</div>
	);
};

const LandingCard = () => {
	const indo = useContext(IndoContext);

	return (
		<div className="relative w-full flex flex-row justify-end overflow-hidden h-screen text-white">
			<div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/20" />
			<div className="relative w-full h-full">
				<Image
					src="/trips/bromo.jpeg"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full md:w-2/5 flex flex-col gap-y-10 justify-center z-60">
				<h1 className="font-ubuntu drop-shadow-2xl text-center md:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
					{indo
						? "Rasakan Penjalanan yang Tidak Terlupakan"
						: "Experience world-class trip with Us"}
				</h1>
				<h1 className="drop-shadow-2xl font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
					{indo
						? ""
						: "Pack your bag, set your sights, and get ready for a memorable trip"}
				</h1>
			</div>
		</div>
	);
};

export default Trips;
