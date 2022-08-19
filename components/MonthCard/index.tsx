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
			className="z-80 flex flex-col items-center justify-center gap-y-5 rounded-xl border-2 border-gray7 bg-white p-8 transition-all duration-300 hover:bg-greenHover/30"
		>
			<div className="text-center font-ubuntu text-3xl font-medium">
				{month}
			</div>
			<div className="text-center text-base text-defaultText">{recommend}</div>
			<div className="flex flex-row items-center gap-x-4">
				<Image src="/sun.png" alt="sun" width={30} height={30} />
				{`${lowestTemp}℃/${highestTemp}℃`}
			</div>
		</button>
	);
};

export default MonthCard;
