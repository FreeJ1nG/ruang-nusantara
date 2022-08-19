import { FC, useRef, useState } from "react";
import { PropsType, TripStage } from "$constants/pages/trips/constants";

import Image from "next/image";
import LocationButton from "$components/Button/LocationButton";
import { Regions } from "$constants/constants";

const MapCard: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const [filter, setFilter] = useState<string>("");

	return (
		<div className="flex h-[calc(100vh-80px)] min-h-full flex-col justify-center gap-y-10">
			<div className="flex w-full justify-center">
				<div className="flex w-[300px] flex-row justify-center rounded-xl shadow-lg sm:w-[400px]">
					<input
						type="text"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="w-full rounded-tl-xl rounded-bl-xl px-5 py-3 outline-none placeholder:font-semibold"
						placeholder="Where are you planning to travel?"
					/>
					<div className="flex items-center justify-center rounded-tr-xl rounded-br-xl bg-lightBrown px-4">
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
			<div className="flex justify-center px-10">
				<div className="overflow-x-auto">
					<div className="relative h-[450px] min-w-[1200px] max-w-[1200px] text-sm">
						<Image src="/trips/map.png" alt="Map" layout="fill" />
						<div className="absolute top-32 left-32 drop-shadow-2xl">
							<LocationButton
								label="Sumatera"
								region={Regions.SUMATERA}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.SUMATERA });
									setStage(TripStage.WHERE_CITY);
								}}
							/>
						</div>
						<div className="absolute bottom-24 left-80 drop-shadow-2xl">
							<LocationButton
								label="Java"
								region={Regions.JAVA}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.JAVA });
									setStage(TripStage.WHERE_CITY);
								}}
							/>
						</div>
						<div className="absolute bottom-[74px] left-[505px] drop-shadow-2xl">
							<LocationButton
								label="Bali"
								region={Regions.BALI}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.BALI });
									setStage(TripStage.WHERE_CITY);
								}}
							/>
						</div>
						<div className="absolute top-36 left-[440px] drop-shadow-2xl">
							<LocationButton
								label="Kalimantan"
								region={Regions.KALIMANTAN}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.KALIMANTAN });
									setStage(TripStage.WHERE_CITY);
								}}
							/>
						</div>
						<div className="absolute top-[170px] right-[420px] drop-shadow-2xl">
							<LocationButton
								label="Sulawesi"
								region={Regions.SULAWESI}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.SULAWESI });
									setStage(TripStage.WHERE_CITY);
								}}
							/>
						</div>
						<div className="absolute top-[220px] right-4 drop-shadow-2xl">
							<LocationButton
								label="Papua"
								region={Regions.PAPUA}
								filter={filter}
								width={110}
								height={30}
								onClick={() => {
									setDatas({ ...datas, region: Regions.PAPUA });
									setStage(TripStage.WHERE_CITY);
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
