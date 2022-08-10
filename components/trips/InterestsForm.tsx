import { FC, useContext, useState } from "react";
import {
	INTEREST_CARDS,
	PropsType,
	TripStage,
} from "$constants/pages/trips/constants";

import Button from "$components/Button/Button";
import CardContainer from "./CardContainer";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { Interests } from "$constants/constants";

const InterestCard: FC<{
	imageSrc: string;
	title: string;
	interest: Interests;
	chosen: Interests[];
	setChosen: Function;
}> = ({ imageSrc, title, interest, chosen, setChosen }) => {
	return (
		<CardContainer chosen={chosen.includes(interest)}>
			<button
				disabled={
					chosen.includes(Interests.EVERYTHING) &&
					interest !== Interests.EVERYTHING
				}
				onClick={() => {
					if (chosen.includes(interest)) {
						setChosen(chosen.filter((i) => i != interest));
					} else {
						if (interest === Interests.EVERYTHING) {
							setChosen([Interests.EVERYTHING]);
						} else {
							setChosen([...chosen, interest]);
						}
					}
				}}
				className="group relative p-5 py-10 flex flex-col gap-y-4 justify-center items-center w-72"
			>
				<div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 group-disabled:bg-white/50 z-80"></div>
				<div className="relative w-60 h-60">
					<Image src={imageSrc} alt={title} layout="fill" />
				</div>
				<div className="font-medium text-2xl">{title}</div>
			</button>
		</CardContainer>
	);
};

const InterestsForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const indo = useContext(IndoContext);
	const [chosen, setChosen] = useState<Interests[]>([]);

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-2xl font-medium">
				{indo
					? "Apakah aktivitas yang Anda suka?"
					: "What do you like to see and do?"}
			</h1>
			<div className="grid gap-5 grid-rows-6 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 justify-center">
				{INTEREST_CARDS.map((interestCard) => (
					<InterestCard
						key={interestCard.id}
						{...interestCard}
						chosen={chosen}
						setChosen={setChosen}
					/>
				))}
			</div>
			<Button
				label={indo ? "Lanjut" : "Next"}
				disabled={chosen.length === 0}
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
					setStage(TripStage.ADDONS);
					setDatas({
						...datas,
						interests: chosen,
					});
				}}
				type="primary"
			/>
		</div>
	);
};

export default InterestsForm;
