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

export const DURATION_CARDS: {
	id: number;
	imageSrc: string;
	from: number;
	to: number;
	start_from: string;
}[] = [
	{
		id: 0,
		imageSrc: "/trips/2-3days.png",
		from: 2,
		to: 3,
		start_from: "129",
	},
	{
		id: 1,
		imageSrc: "/trips/4-6days.png",
		from: 4,
		to: 6,
		start_from: "219",
	},
	{
		id: 2,
		imageSrc: "/trips/7-8days.png",
		from: 7,
		to: 8,
		start_from: "379",
	},
	{
		id: 3,
		imageSrc: "/trips/9-11days.png",
		from: 9,
		to: 11,
		start_from: "529",
	},
];

export const CITIES: {
	id: number;
	imageSrc: string;
	title: string;
	region: Regions;
	trending: boolean;
}[] = [
	{
		id: 0,
		imageSrc: "/destinations/borobudur.png",
		title: "Yogyakarta",
		region: Regions.JAVA,
		trending: true,
	},
	{
		id: 1,
		imageSrc: "/trips/bandung.png",
		title: "Bandung",
		region: Regions.JAVA,
		trending: false,
	},
	{
		id: 2,
		imageSrc: "/trips/jakarta.png",
		title: "Jakarta",
		region: Regions.JAVA,
		trending: false,
	},
	{
		id: 3,
		imageSrc: "/trips/batu.jpeg",
		title: "Batu",
		region: Regions.JAVA,
		trending: false,
	},
	{
		id: 4,
		imageSrc: "/trips/pontianak.jpeg",
		title: "Pontianak",
		region: Regions.KALIMANTAN,
		trending: true,
	},
	{
		id: 5,
		imageSrc: "/trips/tanjung-selor.png",
		title: "Tanjung Selor",
		region: Regions.KALIMANTAN,
		trending: false,
	},
	{
		id: 6,
		imageSrc: "/trips/samarinda.jpeg",
		title: "Samarinda",
		region: Regions.KALIMANTAN,
		trending: false,
	},
	{
		id: 7,
		imageSrc: "/trips/balikpapan.jpeg",
		title: "Balikpapan",
		region: Regions.KALIMANTAN,
		trending: false,
	},
	{
		id: 8,
		imageSrc: "/trips/denpasar.jpeg",
		title: "Denpasar",
		region: Regions.BALI,
		trending: true,
	},
	{
		id: 9,
		imageSrc: "/trips/badung.jpeg",
		title: "Badung",
		region: Regions.BALI,
		trending: false,
	},
	{
		id: 10,
		imageSrc: "/trips/buleleng.jpeg",
		title: "Buleleng",
		region: Regions.BALI,
		trending: false,
	},
	{
		id: 11,
		imageSrc: "/trips/tabanan.webp",
		title: "Tabanan",
		region: Regions.BALI,
		trending: false,
	},
	{
		id: 12,
		imageSrc: "/trips/sumbawa.jpeg",
		title: "Sumbawa",
		region: Regions.NUSA_TENGGARA,
		trending: true,
	},
	{
		id: 13,
		imageSrc: "/trips/dompu.jpeg",
		title: "Badung",
		region: Regions.NUSA_TENGGARA,
		trending: false,
	},
	{
		id: 14,
		imageSrc: "/trips/lombok.jpeg",
		title: "Buleleng",
		region: Regions.NUSA_TENGGARA,
		trending: false,
	},
	{
		id: 15,
		imageSrc: "/trips/malaka.jpeg",
		title: "Tabanan",
		region: Regions.NUSA_TENGGARA,
		trending: false,
	},
];

export const TRAVEL_TYPE_CARDS: {
	id: number;
	imageSrc: string;
	type: TravelType;
}[] = [
	{ id: 0, imageSrc: "/trips/couple.png", type: TravelType.COUPLE },
	{ id: 1, imageSrc: "/trips/family.png", type: TravelType.FAMILY },
	{ id: 2, imageSrc: "/trips/friends.png", type: TravelType.FRIENDS },
	{ id: 3, imageSrc: "/trips/solo.png", type: TravelType.SOLO },
];

export const ADDON_CARDS: { id: number; imageSrc: string; addon: Addons }[] = [
	{ id: 0, imageSrc: "/trips/tour_guides.jpeg", addon: Addons.TOUR_GUIDES },
	{ id: 1, imageSrc: "/trips/elderly.png", addon: Addons.ELDERLY },
	{ id: 2, imageSrc: "/trips/vegan.png", addon: Addons.VEGAN },
	{ id: 3, imageSrc: "/trips/kids.png", addon: Addons.KIDS },
];

export const INTEREST_CARDS: {
	id: number;
	imageSrc: string;
	title: string;
	interest: Interests;
}[] = [
	{
		id: 0,
		imageSrc: "/trips/arts.png",
		title: "Art & Culture",
		interest: Interests.ARTS,
	},
	{
		id: 1,
		imageSrc: "/trips/nature.png",
		title: "Nature & Wildlife",
		interest: Interests.NATURE,
	},
	{
		id: 2,
		imageSrc: "/trips/culinary.png",
		title: "Culinary",
		interest: Interests.CULINARY,
	},
	{
		id: 3,
		imageSrc: "/trips/leisure.png",
		title: "Recreation & Leisure",
		interest: Interests.RECREATION,
	},
	{
		id: 4,
		imageSrc: "/trips/theme_park.png",
		title: "Theme Park",
		interest: Interests.THEME_PARK,
	},
	{
		id: 5,
		imageSrc: "/trips/no_particular.png",
		title: "A bit of everything",
		interest: Interests.EVERYTHING,
	},
];

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
	region?: Regions | null;
	city?: string;
	month?: Months | null;
	departure_date?: Date | null;
	duration?: { from: number; to: number } | null;
	travel_type?: TravelType | null;
	interests?: Interests[] | null;
	addons?: Addons[] | null;
};

export const Cities: {
	name: string;
	region: Regions;
	trending?: boolean;
	imageSrc: string;
}[] = [];

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
	WHERE_CITY = 2,
	WHEN_MONTH = 3,
	WHEN_CALENDAR = 4,
	DURATION = 5,
	WHO = 6,
	INTERESTS = 7,
	ADDONS = 8,
	CHECKOUT = 9,
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
