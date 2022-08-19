import { FC, useContext } from "react";
import { Month_Index, To_Month } from "$constants/constants";
import { PropsType, TripStage } from "$constants/pages/trips/constants";

import Button from "$components/Button/Button";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import TextField from "@mui/material/TextField";
import { useWindowSize } from "rooks";

const CalendarForm: FC<PropsType> = ({ setStage, stage, datas, setDatas }) => {
	const value: Date | null = datas.departure_date ?? null;
	const now = new Date();
	if (Month_Index[datas?.month ?? To_Month[now.getMonth()]] < now.getMonth()) {
		now.setFullYear(now.getFullYear() + 1);
	}
	now.setMonth(Month_Index[datas?.month ?? To_Month[now.getMonth()]]);
	let defaultDate: Date | null = now;
	const windowSize = useWindowSize();
	const indo = useContext(IndoContext);

	return (
		<>
			<div className="absolute right-0 bottom-0">
				<div className="relative h-[300px] w-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[500px]">
					<Image
						src="/trips/monthformbg.png"
						alt="Month Form Background"
						layout="fill"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center gap-y-14">
				<h1 className="text-center text-lg font-semibold sm:text-left md:text-xl lg:text-2xl xl:text-3xl">
					{indo ? "Kapan keberangkatan Anda?" : "When do you wish to travel?"}
				</h1>
				<div className="z-80 rounded-xl bg-white p-2 sm:p-5">
					<StaticDatePicker<Date>
						orientation={
							(windowSize.innerWidth ?? 0) < 600 ? "portrait" : "landscape"
						}
						disablePast={true}
						openTo="day"
						displayStaticWrapperAs="desktop"
						value={value}
						defaultCalendarMonth={defaultDate}
						onChange={(newValue) => {
							setDatas({
								...datas,
								month:
									To_Month[newValue?.getMonth() ?? now.getMonth()] ?? undefined,
								departure_date: newValue ?? undefined,
							});
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</div>
				<Button
					label="Next"
					disabled={datas.departure_date === undefined}
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
						setStage(TripStage.DURATION);
					}}
					type="primary"
				/>
			</div>
		</>
	);
};

export default CalendarForm;
