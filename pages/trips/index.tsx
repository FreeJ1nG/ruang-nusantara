import { DatasType, TripStage } from "../../constants/pages/trips/constants";
import { FC, ReactNode, useState } from "react";

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

	let component: ReactNode = null;

	switch (+stage) {
		case TripStage.HOMEPAGE:
			component = <LandingCard {...props} />;
			break;
		case TripStage.MAP:
			component = <MapCard {...props} />;
			break;
		case TripStage.WHEN_MONTH:
			component = (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
			break;
		case TripStage.WHEN_CALENDAR:
			component = (
				<Container {...props}>
					<CalendarForm {...props} />
				</Container>
			);
			break;
		case TripStage.DURATION:
			component = (
				<Container {...props}>
					<DurationForm {...props} />
				</Container>
			);
			break;
		case TripStage.WHO:
			component = (
				<Container {...props}>
					<TravelWithForm {...props} />
				</Container>
			);
			break;
		case TripStage.INTERESTS:
			component = (
				<Container {...props}>
					<InterestsForm {...props} />
				</Container>
			);
			break;
		case TripStage.ADDONS:
			component = (
				<Container {...props}>
					<AddonsForm {...props} />
				</Container>
			);
			break;
		case TripStage.CHECKOUT:
			component = (
				<Container {...props}>
					<MonthForm {...props} />
				</Container>
			);
			break;
		default:
			component = null;
			break;
	}

	console.log(component);

	return <div className="mb-10 md:mb-20 xl:mb-40">{component}</div>;
};

export default Trips;
