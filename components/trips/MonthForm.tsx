import { FC, useContext } from "react";
import {
	MonthCards,
	PropsType,
	TripStage,
} from "$constants/pages/trips/constants";

import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import MonthCard from "$components/MonthCard";
import { To_Month } from "$constants/constants";

const MonthForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const date = new Date();
	const month = date.getMonth();
	let months = [];
	for (let i = month; i < month + 6; i++) {
		months.push(i % 12);
	}
	const indo = useContext(IndoContext);

	return (
		<>
			<div className="absolute right-0 bottom-0">
				<div className="relative h-[500px] w-[500px]">
					<Image
						src="/trips/monthformbg.png"
						alt="Month Form Background"
						layout="fill"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center gap-y-14">
				<h1 className="text-center text-lg font-semibold sm:text-left md:text-xl lg:text-2xl xl:text-3xl">
					{indo ? "Kapan keberangkatan Anda?" : "When is your departure?"}
				</h1>
				<div className="grid grid-cols-1 grid-rows-6 gap-10 sm:grid-cols-3 sm:grid-rows-2">
					{months.map((month) => (
						<MonthCard
							key={month}
							{...MonthCards[month]}
							onClick={() => {
								setDatas({ ...datas, month: To_Month[month] });
								setStage(TripStage.WHEN_CALENDAR);
							}}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default MonthForm;
