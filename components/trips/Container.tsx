import { FC, ReactNode } from "react";

import { PropsType } from "$constants/pages/trips/constants";
import { TripStage } from "$constants/pages/trips/constants";

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
				className="min-w-fit rounded-lg border-2 border-gray7 bg-white px-6 py-2 font-semibold text-gray8 transition-all duration-300 hover:border-yellowText hover:text-lightBrown"
			>
				{label}
			</button>
		);
	};

	const initData = {
		region: null,
		month: null,
		departure_date: null,
		duration: null,
		travel_type: null,
		interests: null,
		addons: null,
	};

	return (
		<div className="flex w-full justify-center">
			<div className="my-10 flex w-full flex-col gap-y-12">
				<div className="flex w-full flex-col gap-y-12 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-96">
					<div className="flex w-full flex-col gap-y-2 px-10">
						<h1 className="text-base font-medium">PLANNING YOUR TRIP TO</h1>
						<div className="flex flex-row gap-x-5 overflow-auto">
							{datas?.region && stage === TripStage.WHERE_CITY && (
								<StageButton
									label={datas.region}
									onClick={() => {
										setDatas({ ...initData });
										setStage(TripStage.MAP);
									}}
								/>
							)}
							{datas.region && datas.city && stage > TripStage.WHERE_CITY && (
								<StageButton
									label={`${datas.region}, ${datas.city}`}
									onClick={() => {
										setDatas({ ...initData });
										setStage(TripStage.MAP);
									}}
								/>
							)}
							{datas?.month && stage === TripStage.WHEN_CALENDAR && (
								<StageButton
									label={datas.month}
									onClick={() => {
										setDatas({
											...initData,
											region: datas.region,
											city: datas.city,
										});
										setStage(TripStage.WHEN_MONTH);
									}}
								/>
							)}
							{datas?.month &&
								datas?.departure_date &&
								stage > TripStage.WHEN_CALENDAR && (
									<StageButton
										label={
											datas.month +
											" " +
											JSON.stringify(datas.departure_date.getDate())
										}
										onClick={() => {
											setDatas({
												...initData,
												region: datas.region,
												city: datas.city,
											});
											setStage(TripStage.WHEN_MONTH);
										}}
									/>
								)}
							{datas?.duration && stage > TripStage.DURATION && (
								<StageButton
									label={`${datas.duration.from}-${datas.duration.to} days`}
									onClick={() => {
										setDatas({
											...initData,
											region: datas.region,
											city: datas.city,
											month: datas.month,
											departure_date: datas.departure_date,
										});
										setStage(TripStage.DURATION);
									}}
								/>
							)}
							{datas?.travel_type && stage > TripStage.WHO && (
								<StageButton
									label={datas.travel_type}
									onClick={() => {
										setDatas({
											...initData,
											region: datas.region,
											city: datas.city,
											month: datas.month,
											departure_date: datas.departure_date,
											duration: datas.duration,
										});
										setStage(TripStage.WHO);
									}}
								/>
							)}
							{datas?.interests && stage > TripStage.INTERESTS && (
								<StageButton
									label={
										datas.interests.length > 1
											? `${datas.interests[0]}  +${datas.interests.length - 1}`
											: datas.interests[0]
									}
									onClick={() => {
										setDatas({
											...initData,
											region: datas.region,
											city: datas.city,
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
						<div className="h-2 w-1/5 overflow-hidden rounded-xl bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHERE_CITY ? "w-full" : "w-0"
								} h-full bg-yellowText transition-all duration-500`}
							></div>
						</div>
						<div className="h-2 w-1/5 overflow-hidden rounded-xl bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHEN_CALENDAR ? "w-full" : "w-0"
								} h-full bg-yellowText transition-all duration-500`}
							></div>
						</div>
						<div className="h-2 w-1/5 overflow-hidden rounded-xl bg-whiteCover">
							<div
								className={`${
									stage > TripStage.DURATION ? "w-full" : "w-0"
								} h-full bg-yellowText transition-all duration-500`}
							></div>
						</div>
						<div className="h-2 w-1/5 overflow-hidden rounded-xl bg-whiteCover">
							<div
								className={`${
									stage > TripStage.WHO ? "w-full" : "w-0"
								} h-full bg-yellowText transition-all duration-500`}
							></div>
						</div>
						<div className="h-2 w-1/5 overflow-hidden rounded-xl bg-whiteCover">
							<div
								className={`${
									stage > TripStage.INTERESTS ? "w-full" : "w-0"
								} h-full bg-yellowText transition-all duration-500`}
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
