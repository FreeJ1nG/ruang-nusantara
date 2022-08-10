import {
	ADDON_CARDS,
	PropsType,
	TRAVEL_TYPE_CARDS,
	TripStage,
} from "../../../constants/pages/trips/constants";
import { Addons, TravelType } from "../../../constants/constants";
import { FC, useContext, useState } from "react";

import Button from "../../../components/Button/Button";
import CardContainer from "./CardContainer";
import Image from "next/image";
import { IndoContext } from "../../../context/IndoContext";

const AddonCard: FC<{
	imageSrc: string;
	addon: Addons;
	chosen: Addons[];
	setChosen: Function;
}> = ({ addon, imageSrc, chosen, setChosen }) => {
	return (
		<CardContainer chosen={chosen.includes(addon)}>
			<button
				onClick={() => {
					if (chosen.includes(addon)) {
						setChosen(chosen.filter((a) => a !== addon));
					} else {
						setChosen([...chosen, addon]);
					}
				}}
				className="px-2 py-10 flex flex-col gap-y-4 justify-center items-center w-60"
			>
				<div className="relative w-40 h-40">
					<Image
						src={imageSrc}
						alt={addon}
						objectFit="cover"
						objectPosition="center"
						layout="fill"
					/>
				</div>
				<div className="font-medium text-2xl text-center">{addon}</div>
			</button>
		</CardContainer>
	);
};

const AddonsForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const indo = useContext(IndoContext);
	const [chosen, setChosen] = useState<Addons[]>([]);

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-2xl font-medium text-center">
				{indo
					? "Apakah ada servis tambahan yang Anda butuhkan?"
					: "Is there any extra services you need?"}
			</h1>
			<div className="grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 gap-5 justify-center">
				{ADDON_CARDS.map((addonCard) => (
					<AddonCard
						key={addonCard.id}
						{...addonCard}
						chosen={chosen}
						setChosen={setChosen}
					/>
				))}
			</div>
			<div className="flex justify-center text-sm">
				<Button
					label={
						indo
							? "Lihat perjalanan pribadi Anda"
							: "View your personalized trip"
					}
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
					width={300}
					height={50}
					onClick={() => {
						setStage(TripStage.CHECKOUT);
						setDatas({
							...datas,
							addons: chosen,
						});
					}}
					type="primary"
				/>
			</div>
		</div>
	);
};

export default AddonsForm;
