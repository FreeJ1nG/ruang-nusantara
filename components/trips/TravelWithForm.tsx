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
				className="flex w-72 flex-col items-center justify-center gap-y-4 px-2 py-10"
			>
				<div className="relative h-60 w-60">
					<Image src={imageSrc} alt={type} layout="fill" />
				</div>
				<div className="text-2xl font-medium">{type}</div>
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
		<div className="flex flex-col items-center gap-y-14">
			<h1 className="text-center text-lg font-semibold sm:text-left md:text-xl lg:text-2xl xl:text-3xl">
				{indo ? "Dengan siapakah Anda pergi?" : "Who is travelling with you?"}
			</h1>
			<div className="flex flex-row flex-wrap justify-center gap-5">
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
