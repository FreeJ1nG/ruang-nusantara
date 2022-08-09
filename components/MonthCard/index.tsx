import { Months, Recommendations } from "../../constants/constants";

import { FC } from "react";
import Image from "next/image";
import { MonthCardType } from "./constants";

type MonthCardProps = {
	month: Months;
	recommend: Recommendations;
	lowestTemp: number;
	highestTemp: number;
	onClick: Function;
};

const MonthCard: FC<MonthCardProps> = ({
	month,
	recommend,
	lowestTemp,
	highestTemp,
	onClick,
}) => {
	return (
		<button
			onClick={() => onClick()}
			className="bg-white hover:bg-greenHover/30 transition-all duration-300 p-8 rounded-xl border-2 border-gray7 flex flex-col gap-y-5 items-center justify-center"
		>
			<div className="text-3xl font-medium font-ubuntu text-center">
				{month}
			</div>
			<div className="text-base text-defaultText text-center">{recommend}</div>
			<div className="flex flex-row gap-x-4 items-center">
				<Image src="/sun.png" alt="sun" width={30} height={30} />
				{`${lowestTemp}℃/${highestTemp}℃`}
			</div>
		</button>
	);
};

export default MonthCard;
