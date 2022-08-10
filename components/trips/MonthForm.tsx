import {
	MonthCards,
	PropsType,
	TripStage,
} from "../../../constants/pages/trips/constants";

import { FC } from "react";
import MonthCard from "../../../components/MonthCard";
import { To_Month } from "../../../constants/constants";

const MonthForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const date = new Date();
	const month = date.getMonth();
	let months = [];
	for (let i = month; i < month + 6; i++) {
		months.push(i % 12);
	}

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-3xl font-semibold">When is your departure?</h1>
			<div className="grid grid-rows-6 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-10">
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
	);
};

export default MonthForm;
