import { DatasType, TripStage } from "../../constants/pages/trips/constants";
import { FC, useState } from "react";

import AddonsForm from "./components/AddonsForm";
import CalendarForm from "./components/CalendarForm";
import Container from "./components/Container";
import DurationForm from "./components/DurationForm";
import InterestsForm from "./components/InterestsForm";
import LandingCard from "./components/LandingCard";
import MapCard from "./components/MapCard";
import MonthForm from "./components/MonthForm";
import TravelWithForm from "./components/TravelWithForm";

const Trips: FC = () => {
	const [stage, setStage] = useState<TripStage>(TripStage.HOMEPAGE);
	const [datas, setDatas] = useState<DatasType>({});

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
					<DurationForm {...props} />
				</Container>
			);
		case TripStage.WHO:
			return (
				<Container {...props}>
					<TravelWithForm {...props} />
				</Container>
			);
		case TripStage.INTERESTS:
			return (
				<Container {...props}>
					<InterestsForm {...props} />
				</Container>
			);
		case TripStage.ADDONS:
			return (
				<Container {...props}>
					<AddonsForm {...props} />
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
