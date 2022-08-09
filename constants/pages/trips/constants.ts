import {
	Addons,
	BookingsType,
	Interests,
	Months,
	Recommendations,
	Regions,
	To_Month,
	TravelType,
} from "../../constants";

import { ReactNode } from "react";

export type MonthCardType = {
	month: Months;
	recommend: Recommendations;
	lowestTemp: number;
	highestTemp: number;
};

export type PropsType = {
	children?: ReactNode;
	stage: TripStage;
	setStage: Function;
	datas: DatasType;
	setDatas: Function;
};

export type DatasType = {
	region?: Regions;
	month?: Months;
	departure_date?: Date;
	duration?: { from: number; to: number };
	travel_type?: TravelType;
	interests?: Interests[];
	addons?: Addons[];
};

export const MonthCards: MonthCardType[] = [
	{
		month: To_Month[0],
		recommend: Recommendations.TOO_CROWDED,
		lowestTemp: 12,
		highestTemp: 30,
	},
	{
		month: To_Month[1],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 12,
		highestTemp: 30,
	},
	{
		month: To_Month[2],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 16,
		highestTemp: 30,
	},
	{
		month: To_Month[3],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 18,
		highestTemp: 30,
	},
	{
		month: To_Month[4],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 19,
		highestTemp: 30,
	},
	{
		month: To_Month[5],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 15,
		highestTemp: 30,
	},
	{
		month: To_Month[6],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 20,
		highestTemp: 30,
	},
	{
		month: To_Month[7],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 23,
		highestTemp: 32,
	},
	{
		month: To_Month[8],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 23,
		highestTemp: 31,
	},
	{
		month: To_Month[9],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 23,
		highestTemp: 30,
	},
	{
		month: To_Month[10],
		recommend: Recommendations.OUR_PICK,
		lowestTemp: 21,
		highestTemp: 30,
	},
	{
		month: To_Month[11],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 17,
		highestTemp: 30,
	},
];

export enum TripStage {
	HOMEPAGE = 0,
	MAP = 1,
	WHEN_MONTH = 2,
	WHEN_CALENDAR = 3,
	DURATION = 4,
	WHO = 5,
	INTERESTS = 6,
	ADDONS = 7,
	CHECKOUT = 8,
}

export const BOOKINGS: BookingsType[] = [
	{
		id: 0,
		imageSrc: "/trips/labuan_bajo.webp",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.NUSA_TENGGARA,
		title: "Labuan Bajo",
		rating: 4.9,
		reviews: 1125,
		days: 4,
		price: 5000000,
		trending: true,
	},
	{
		id: 1,
		imageSrc: "/trips/cape_kri.jpeg",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.PAPUA,
		title: "Cape Kri",
		rating: 5.0,
		reviews: 125,
		days: 5,
		price: 10000000,
	},
	{
		id: 2,
		imageSrc: "/trips/gang_pendopo.jpeg",
		categories: [Interests.NATURE],
		region: Regions.KALIMANTAN,
		title: "Gang Pendopo",
		rating: 4.5,
		reviews: 505,
		days: 3,
		price: 3000000,
	},
	{
		id: 3,
		imageSrc: "/trips/labuan_bajo.webp",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.NUSA_TENGGARA,
		title: "Labuan Bajo",
		rating: 4.9,
		reviews: 1125,
		days: 4,
		price: 5000000,
		trending: true,
	},
	{
		id: 4,
		imageSrc: "/trips/cape_kri.jpeg",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.PAPUA,
		title: "Cape Kri",
		rating: 5.0,
		reviews: 125,
		days: 5,
		price: 10000000,
	},
	{
		id: 5,
		imageSrc: "/trips/gang_pendopo.jpeg",
		categories: [Interests.NATURE],
		region: Regions.KALIMANTAN,
		title: "Gang Pendopo",
		rating: 4.5,
		reviews: 505,
		days: 3,
		price: 3000000,
	},
	{
		id: 6,
		imageSrc: "/trips/labuan_bajo.webp",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.NUSA_TENGGARA,
		title: "Labuan Bajo",
		rating: 4.9,
		reviews: 1125,
		days: 4,
		price: 5000000,
		trending: true,
	},
	{
		id: 7,
		imageSrc: "/trips/cape_kri.jpeg",
		categories: [Interests.NATURE, Interests.RECREATION],
		region: Regions.PAPUA,
		title: "Cape Kri",
		rating: 5.0,
		reviews: 125,
		days: 5,
		price: 10000000,
	},
	{
		id: 8,
		imageSrc: "/trips/gang_pendopo.jpeg",
		categories: [Interests.NATURE],
		region: Regions.KALIMANTAN,
		title: "Gang Pendopo",
		rating: 4.5,
		reviews: 505,
		days: 3,
		price: 3000000,
	},
	{
		id: 9,
		imageSrc: "/trips/bromo.jpeg",
		categories: [Interests.NATURE],
		region: Regions.JAVA,
		title: "Bromo",
		rating: 5.0,
		reviews: 3024,
		days: 3,
		price: 3000000,
	},
];
