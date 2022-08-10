import { FC, useContext, useState } from "react";
import {
	PropsType,
	TRAVEL_TYPE_CARDS,
	TripStage,
} from "$constants/pages/trips/constants";

import Button from "$components/Button/Button";
import CardContainer from "./CardContainer";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { TravelType } from "$constants/constants";

const TravelTypeCard: FC<{
	imageSrc: string;
	type: TravelType;
	chosen: TravelType | null;
	setChosen: Function;
}> = ({ type, imageSrc, chosen, setChosen }) => {
	return (
		<CardContainer chosen={chosen === type}>
			<button
				onClick={() => {
					if (chosen === type) {
						setChosen(null);
					} else {
						setChosen(type);
					}
				}}
				className="px-2 py-10 flex flex-col gap-y-4 justify-center items-center w-72"
			>
				<div className="relative w-60 h-60">
					<Image src={imageSrc} alt={type} layout="fill" />
				</div>
				<div className="font-medium text-2xl">{type}</div>
			</button>
		</CardContainer>
	);
};

const TravelWithForm: FC<PropsType> = ({
	setStage,
	stage,
	datas,
	setDatas,
}) => {
	const indo = useContext(IndoContext);
	const [chosen, setChosen] = useState<TravelType | null>(null);

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-2xl font-medium">
				{indo ? "Dengan siapakah Anda pergi?" : "Who is travelling with you?"}
			</h1>
			<div className="flex flex-row flex-wrap gap-5 justify-center">
				{TRAVEL_TYPE_CARDS.map((travelTypeCard) => (
					<TravelTypeCard
						key={travelTypeCard.id}
						{...travelTypeCard}
						chosen={chosen}
						setChosen={setChosen}
					/>
				))}
			</div>
			<Button
				label={indo ? "Lanjut" : "Next"}
				disabled={chosen === null}
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
				width={150}
				height={50}
				onClick={() => {
					setStage(TripStage.INTERESTS);
					setDatas({
						...datas,
						travel_type: chosen,
					});
				}}
				type="primary"
			/>
		</div>
	);
};

export default TravelWithForm;
