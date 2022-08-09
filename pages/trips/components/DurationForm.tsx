import { FC, useContext, useState } from "react";

import Button from "../../../components/Button/Button";
import CardContainer from "./CardContainer";
import { DURATION_CARDS } from "../../../constants/pages/trips/constants";
import Image from "next/image";
import { IndoContext } from "../../../context/IndoContext";
import { PropsType } from "../../../constants/pages/trips/constants";
import { TripStage } from "../../../constants/pages/trips/constants";

const DurationCard: FC<{
	id: number;
	from: number;
	to: number;
	start_from: string;
	imageSrc: string;
	chosen: number;
	setChosen: Function;
}> = ({ id, from, to, start_from, imageSrc, chosen, setChosen }) => {
	return (
		<CardContainer chosen={chosen === id}>
			<button
				onClick={() => {
					if (chosen === id) {
						setChosen(-1);
					} else {
						setChosen(id);
					}
				}}
				className="p-5 py-10 flex flex-col gap-y-4 justify-center items-center w-72"
			>
				<div className="relative w-48 h-48">
					<Image src={imageSrc} alt={`${from}-${to} days`} layout="fill" />
				</div>
				<div className="font-medium text-2xl">{`${from}-${to} days`}</div>
				<div className="flex flex-row gap-x-4 items-center">
					<div className="flex flex-col text-footerText text-sm">
						<h1>START</h1>
						<h1>FROM</h1>
					</div>
					<h1 className="text-startFrom text-2xl">${start_from}</h1>
				</div>
			</button>
		</CardContainer>
	);
};

const DurationForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const indo = useContext(IndoContext);
	const [chosen, setChosen] = useState<number>(-1);

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-2xl font-medium">
				{indo
					? "Seberapa lama liburan Anda?"
					: "What's the duration of your holiday?"}
			</h1>
			<div className="flex flex-row flex-wrap gap-5 justify-center">
				{DURATION_CARDS.map((durationCard) => (
					<DurationCard
						key={durationCard.id}
						{...durationCard}
						chosen={chosen}
						setChosen={setChosen}
					/>
				))}
			</div>
			<Button
				label={indo ? "Lanjut" : "Next"}
				disabled={chosen === -1}
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
					setStage(TripStage.WHO);
					setDatas({
						...datas,
						duration: {
							from: DURATION_CARDS[chosen].from,
							to: DURATION_CARDS[chosen].to,
						},
					});
				}}
				type="primary"
			/>
		</div>
	);
};

export default DurationForm;
