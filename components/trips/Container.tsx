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
				className="min-w-fit bg-white font-semibold text-gray8 hover:text-lightBrown rounded-lg border-2 border-gray7 hover:border-yellowText transition-all duration-300 px-6 py-2"
			>
				{label}
			</button>
		);
	};

	return (
		<div className="w-full flex justify-center">
			<div className="w-full flex flex-col gap-y-12 my-20">
				<div className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-96 w-full flex flex-col gap-y-12">
					<div className="px-10 w-full flex flex-col gap-y-2">
						<h1 className="text-base font-medium">PLANNING YOUR TRIP TO</h1>
						<div className="flex flex-row gap-x-5 overflow-auto">
							{datas.region && stage > TripStage.MAP && (
								<StageButton
									label={datas.region}
									onClick={() => {
										setDatas({});
										setStage(TripStage.MAP);
									}}
								/>
							)}
							{datas.month && stage === TripStage.WHEN_CALENDAR && (
								<StageButton
									label={datas.month}
									onClick={() => {
										setDatas({ region: datas.region });
										setStage(TripStage.WHEN_MONTH);
									}}
								/>
							)}
							{datas.month &&
								datas.departure_date &&
								stage > TripStage.WHEN_CALENDAR && (
									<StageButton
										label={
											datas.month +
											" " +
											JSON.stringify(datas.departure_date.getDate())
										}
										onClick={() => {
											setDatas({ region: datas.region });
											setStage(TripStage.WHEN_MONTH);
										}}
									/>
								)}
							{datas.duration && stage > TripStage.DURATION && (
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
							{datas.travel_type && stage > TripStage.WHO && (
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
							{datas.interests && stage > TripStage.INTERESTS && (
								<StageButton
									label={
										datas.interests.length > 1
											? `${datas.interests[0]}  +${datas.interests.length - 1}`
											: datas.interests[0]
									}
									onClick={() => {
										setDatas({
											region: datas.region,
											month: datas.month,
											departure_date: datas.departure_date,
											duration: datas.duration,
											travel_type: datas.travel_type,
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
								} h-full transition-all duration-500 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHEN_CALENDAR ? "w-full" : "w-0"
								} h-full transition-all duration-500 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.DURATION ? "w-full" : "w-0"
								} h-full transition-all duration-500 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHO ? "w-full" : "w-0"
								} h-full transition-all duration-500 bg-yellowText`}
							></div>
						</div>
						<div className="w-1/5 h-2 rounded-xl overflow-hidden bg-whiteCover">
							<div
								className={`${
									stage > TripStage.INTERESTS ? "w-full" : "w-0"
								} h-full transition-all duration-500 bg-yellowText`}
							></div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">{children}</div>
			</div>
		</div>
	);
};

export default Container;
