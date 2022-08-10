import { Month_Index, Months, To_Month } from "$constants/constants";
import { PropsType, TripStage } from "$constants/pages/trips/constants";

import Button from "$components/Button/Button";
import { FC } from "react";
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

	return (
		<div className="flex flex-col gap-y-14 items-center">
			<h1 className="text-2xl font-medium">When do you wish to travel?</h1>
			<div className="p-5 rounded-xl bg-white">
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
	);
};

export default CalendarForm;
