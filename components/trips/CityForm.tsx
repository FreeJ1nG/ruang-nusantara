import {
	DatasType,
	PropsType,
	TRAVEL_TYPE_CARDS,
	TripStage,
} from "$constants/pages/trips/constants";
import { FC, useContext, useState } from "react";

import Button from "$components/Button/Button";
import { CITIES } from "$constants/pages/trips/constants";
import CardContainer from "./CardContainer";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { Regions } from "$constants/constants";

const CityCard: FC<{
	imageSrc: string;
	title: string;
	region: Regions;
	trending: boolean;
	setStage: Function;
	datas: DatasType;
	setDatas: Function;
}> = ({ imageSrc, title, trending, setStage, datas, setDatas }) => {
	return (
		<button
			onClick={() => {
				setStage(TripStage.WHEN_MONTH);
				setDatas({ ...datas, city: title });
			}}
			className="relative flex flex-col rounded-md border-[1px] border-gray"
		>
			{trending && (
				<div className="absolute top-4 right-4 z-80">
					<div className="flex justify-center rounded-3xl bg-red-600 px-4 py-1 text-xs font-semibold text-white">
						TRENDING
					</div>
				</div>
			)}
			<div className="relative h-52 w-full">
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					className="rounded-tl-md rounded-tr-md"
				/>
			</div>
			<div className="w-full p-4 text-center">{title}</div>
		</button>
	);
};

const CityForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const indo = useContext(IndoContext);

	return (
		<div className="flex w-[300px] flex-col items-center gap-y-14 md:w-[500px] xl:w-[1000px]">
			<h1 className="text-2xl font-medium">
				{indo
					? "Kemanakan tujuan yang menarik bagi Anda?"
					: "Where would you like to visit?"}
			</h1>
			<div className="grid w-full grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
				{CITIES.filter((city) => city.region === datas.region).map((city) => (
					<CityCard
						key={city.id}
						{...city}
						setStage={setStage}
						datas={datas}
						setDatas={setDatas}
					/>
				))}
			</div>
		</div>
	);
};

export default CityForm;
