import { FC, useContext, useState } from "react";

import Button from "$components/Button/Button";
import CardContainer from "./CardContainer";
import { DURATION_CARDS } from "$constants/pages/trips/constants";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { PropsType } from "$constants/pages/trips/constants";
import { TripStage } from "$constants/pages/trips/constants";

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
				className="flex w-72 flex-col items-center justify-center gap-y-4 p-5 py-10"
			>
				<div className="relative h-48 w-48">
					<Image src={imageSrc} alt={`${from}-${to} days`} layout="fill" />
				</div>
				<div className="text-2xl font-medium">{`${from}-${to} days`}</div>
				<div className="flex flex-row items-center gap-x-4">
					<div className="flex flex-col text-sm text-footerText">
						<h1 className="text-xs">START</h1>
						<h1 className="text-xs">FROM</h1>
					</div>
					<h1 className="text-2xl text-startFrom">${start_from}</h1>
				</div>
			</button>
		</CardContainer>
	);
};

const DurationForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const indo = useContext(IndoContext);
	const [chosen, setChosen] = useState<number>(-1);

	return (
		<div className="flex flex-col items-center gap-y-14">
			<h1 className="text-center text-lg font-semibold sm:text-left md:text-xl lg:text-2xl xl:text-3xl">
				{indo
					? "Seberapa lama liburan Anda?"
					: "What's the duration of your holiday?"}
			</h1>
			<div className="flex flex-row flex-wrap justify-center gap-5">
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
