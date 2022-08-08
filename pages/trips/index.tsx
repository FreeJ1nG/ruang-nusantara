import {
	Addons,
	Interests,
	Months,
	Regions,
	TravelType,
} from "../../constants";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import LocationButton from "../../components/Button/LocationButton";
import { TripStage } from "./constants";
import { useLocalstorageState } from "rooks";
import { useRouter } from "next/router";

type DatasType = {
	region?: Regions;
	month?: Months;
	departure_date?: Date;
	duration?: { from: number; to: number };
	travel_type?: TravelType;
	interests?: Interests[];
	addons?: Addons[];
};

const Trips: FC = () => {
	const [stage, setStage] = useLocalstorageState<TripStage>(
		"trip:stage",
		TripStage.HOMEPAGE
	);
	const [component, setComponent] = useState<ReactNode>(null);
	const [datas, setDatas] = useLocalstorageState<DatasType>("trip:datas", {});

	const props = {
		stage,
		setStage,
		datas,
		setDatas,
	};

	useEffect(() => {
		switch (+stage) {
			case TripStage.HOMEPAGE:
				setComponent(<LandingCard {...props} />);
				break;
			case TripStage.MAP:
				setComponent(<MapCard {...props} />);
				break;
			default:
				setComponent(<Container {...props} />);
		}
	}, [stage]);

	return <div>{component}</div>;
};

type PropsType = {
	stage: TripStage;
	setStage: Function;
	datas: DatasType;
	setDatas: Function;
};

const Container: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	return <div className="flex flex-col my-20"></div>;
};

const MapCard: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const [filter, setFilter] = useState<string>("");

	return (
		<div className="flex flex-col gap-y-20 my-20">
			<div className="w-full flex justify-center">
				<div className="w-[300px] sm:w-[400px] flex flex-row justify-center rounded-xl shadow-lg">
					<input
						type="text"
						className="w-full rounded-tl-xl rounded-bl-xl outline-none px-5 py-3 placeholder:font-semibold placeholder:font-ubuntu"
						placeholder="Where are you planning to travel?"
					/>
					<div className="bg-lightBrown flex justify-center items-center px-4 rounded-tr-xl rounded-br-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
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
			<div className="px-10 flex justify-center">
				<div className="overflow-x-auto">
					<div className="relative min-w-[1200px] max-w-[1200px] h-[450px] text-sm">
						<Image src="/trips/map.png" alt="Map" layout="fill" />
						<div className="absolute top-32 left-32 drop-shadow-2xl">
							<LocationButton
								label="Sumatera"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.SUMATERA });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
						<div className="absolute bottom-24 left-80 drop-shadow-2xl">
							<LocationButton
								label="Java"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.JAVA });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
						<div className="absolute bottom-[74px] left-[505px] drop-shadow-2xl">
							<LocationButton
								label="Bali"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.BALI });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
						<div className="absolute top-36 left-[440px] drop-shadow-2xl">
							<LocationButton
								label="Kalimantan"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.KALIMANTAN });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
						<div className="absolute top-[170px] right-[420px] drop-shadow-2xl">
							<LocationButton
								label="Sulawesi"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.SULAWESI });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
						<div className="absolute top-[220px] right-4 drop-shadow-2xl">
							<LocationButton
								label="Papua"
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.PAPUA });
									setStage(TripStage.WHEN_MONTH);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const LandingCard: FC<PropsType> = ({ setStage, stage }) => {
	const indo = useContext(IndoContext);

	return (
		<div className="relative w-full h-screen flex flex-row text-white">
			<div className="absolute bottom-10 left-0 xl:w-[600px] xl:h-[300px]">
				<Image src="/trips/megamendung.png" alt="Megamendung" layout="fill" />
			</div>
			<div className="absolute top-0 bottom-0 right-0 w-full md:w-2/3 xl:w-1/2 h-full">
				<Image
					src="/trips/globe.png"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full md:w-2/5 flex flex-col gap-y-10 justify-center z-60">
				{indo ? (
					<div className="text-black font-poppins drop-shadow-2xl text-center md:text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
						Rasakan Penjalanan yang Tidak Terlupakan
					</div>
				) : (
					<h1 className="text-black font-poppins drop-shadow-2xl text-center md:text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
						Experience world-class trip with Us
					</h1>
				)}
				<h1 className="text-lightBrown drop-shadow-2xl font-ubuntu font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
					{indo
						? "Rasakan perjalanan yang tidak akan Anda lupakan"
						: "Pack your bag, set your sights, and get ready for a memorable trip"}
				</h1>
				<div className="flex justify-center md:justify-start">
					<Button
						label="Start the tour"
						rightIcon={
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
						}
						type="primary"
						width={250}
						height={50}
						mt={14}
						onClick={() => setStage(TripStage.MAP)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Trips;
