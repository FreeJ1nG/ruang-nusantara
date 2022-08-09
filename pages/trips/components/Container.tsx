import { FC, ReactNode } from "react";

import { PropsType } from "../../../constants/pages/trips/constants";
import { TripStage } from "../../../constants/pages/trips/constants";

const Container: FC<PropsType> = ({
	children,
	setStage,
	stage,
	datas,
	setDatas,
}) => {
	type StageButtonProps = {
		label: ReactNode;
		onClick: Function;
	};
	const StageButton: FC<StageButtonProps> = ({ label, onClick }) => {
		return (
			<button
				onClick={() => onClick()}
				className="bg-white font-semibold text-gray8 hover:text-lightBrown rounded-lg border-2 border-gray7 hover:border-yellowText transition-all duration-300 px-6 py-2"
			>
				{label}
			</button>
		);
	};

	return (
		<div className="flex justify-center">
			<div className="flex flex-col my-20 w-[800px]">
				<div className="flex flex-col gap-y-10">
					<div className="px-10 flex flex-col gap-y-2">
						<h1 className="text-base font-medium">PLANNING YOUR TRIP TO</h1>
						<div className="flex flex-row gap-x-5">
							{datas.region && (
								<StageButton
									label={datas.region}
									onClick={() => {
										setDatas({});
										setStage(TripStage.MAP);
									}}
								/>
							)}
							{datas.month && datas.departure_date && (
								<StageButton
									label={
										JSON.stringify(datas.departure_date.getDate()) + datas.month
									}
									onClick={() => {
										setDatas({ region: datas.region });
										setStage(TripStage.WHEN_MONTH);
									}}
								/>
							)}
							{datas.duration && (
								<StageButton
									label={`${datas.duration.from}-${datas.duration.to} days`}
									onClick={() => {
										setDatas({
											region: datas.region,
											month: datas.month,
											departure_date: datas.departure_date,
										});
										setStage(TripStage.DURATION);
									}}
								/>
							)}
							{datas.travel_type && (
								<StageButton
									label={datas.travel_type}
									onClick={() => {
										setDatas({
											region: datas.region,
											month: datas.month,
											departure_date: datas.departure_date,
											duration: datas.duration,
										});
										setStage(TripStage.WHO);
									}}
								/>
							)}
							{datas.interests && (
								<StageButton
									label={`${datas.interests[0]} +${
										datas.interests.length > 1 && datas.interests.length - 1
									}`}
									onClick={() => {
										setDatas({
											region: datas.region,
											month: datas.month,
											departure_date: datas.departure_date,
											duration: datas.duration,
											interests: datas.interests,
										});
										setStage(TripStage.INTERESTS);
									}}
								/>
							)}
						</div>
					</div>
					<div className="flex flex-row gap-x-3 px-5">
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.MAP ? "w-full" : "w-0"
								} h-full transition-all duration-300 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHEN_CALENDAR ? "w-full" : "w-0"
								} h-full transition-all duration-300 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.DURATION ? "w-full" : "w-0"
								} h-full transition-all duration-300 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHO ? "w-full" : "w-0"
								} h-full transition-all duration-300 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.INTERESTS ? "w-full" : "w-0"
								} h-full transition-all duration-300 bg-yellowText`}
							></div>
						</div>
					</div>
					<div className="flex justify-center">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Container;
