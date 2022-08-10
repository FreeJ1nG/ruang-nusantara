import { FC, useState } from "react";
import { PropsType, TripStage } from "$constants/pages/trips/constants";

import Image from "next/image";
import LocationButton from "$components/Button/LocationButton";
import { Regions } from "$constants/constants";

const MapCard: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const [filter, setFilter] = useState<string>("");

	return (
		<div className="flex flex-col gap-y-20 my-20">
			<div className="w-full flex justify-center">
				<div className="w-[300px] sm:w-[400px] flex flex-row justify-center rounded-xl shadow-lg">
					<input
						type="text"
						className="w-full rounded-tl-xl rounded-bl-xl outline-none px-5 py-3 placeholder:font-semibold"
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

export default MapCard;
