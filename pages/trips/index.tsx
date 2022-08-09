import { DatasType, TripStage } from "../../constants/pages/trips/constants";
import { FC, ReactNode, useEffect, useState } from "react";

import CalendarForm from "./components/CalendarForm";
import Container from "./components/Container";
import LandingCard from "./components/LandingCard";
import MapCard from "./components/MapCard";
import MonthForm from "./components/MonthForm";
import { useLocalstorageState } from "rooks";

const Trips: FC = () => {
	const [storedStage, setStoredStage] = useLocalstorageState<TripStage>(
		"trip:stage",
		TripStage.HOMEPAGE
	);
	const [stage, setStage] = useState<TripStage>(TripStage.HOMEPAGE);
	useEffect(() => {
		setStage(storedStage);
	}, [storedStage]);
	const [component, setComponent] = useState<ReactNode>(null);
	const [datas, setDatas] = useLocalstorageState<DatasType>("trip:datas", {});
	console.log(datas);
	console.log(stage);

	// useEffect(() => {
	// 	setStage(TripStage.HOMEPAGE);
	// 	setDatas({});
	// }, [setDatas]);

	const props = {
		stage,
		setStage,
		datas,
		setDatas,
	};

	switch (+stage) {
		case TripStage.HOMEPAGE:
			return <LandingCard {...props} />;
		case TripStage.MAP:
			return <MapCard {...props} />;
		case TripStage.WHEN_MONTH:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		case TripStage.WHEN_CALENDAR:
			return (
				<Container {...props}>
					<CalendarForm {...props} />
				</Container>
			);
		case TripStage.DURATION:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		case TripStage.WHO:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		case TripStage.INTERESTS:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		case TripStage.ADDONS:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		case TripStage.CHECKOUT:
			return (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
		default:
			return null;
	}
};

export default Trips;
