import { Interests, Regions } from "../../constants";

export enum Attractions {
	SIGHTS = "Sights",
	RESTAURANTS = "Restaurants",
	SHOPPING = "Shopping",
	ENTERTAINMENT = "Entertainment",
}

export type DestinationType = {
	id: number;
	region: Regions;
	categories: Interests[];
	title: string;
	imageSrc: string;
};

export type AttractionType = {
	id: number;
	destination: DestinationType;
	type: Attractions;
	title: string;
	content: string;
	imageSrc: string;
};

export type DestinationDetailType = {
	destination: DestinationType;
	brownText?: string | undefined;
	italicText?: string | undefined;
	imageSrcs: { id: number; src: string }[];
	address: string;
	phone: string;
	website: string;
	bestTimeToVisit?: { from: string; to: string } | undefined;
	headlineTitle: string;
	headlineContent: string;
};

export const DESTINATIONS: DestinationType[] = [
	{
		id: 0,
		region: Regions.JAVA,
		categories: [Interests.ARTS],
		title: "Borobudur Temple",
		imageSrc: "/destinations/borobudur.png",
	},
	{
		id: 1,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Bromo Tengger Semeru",
		imageSrc: "/destinations/bromo.png",
	},
	{
		id: 2,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Wae Rebo",
		imageSrc: "/destinations/wae_rebo.png",
	},
	{
		id: 3,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Thousand Islands",
		imageSrc: "/destinations/thousand_islands.png",
	},
	{
		id: 4,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Tanjung Lesung",
		imageSrc: "/destinations/tanjung_lesung.png",
	},
	{
		id: 5,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.RECREATION],
		title: "Mandalika",
		imageSrc: "/destinations/mandalika.png",
	},
	{
		id: 6,
		region: Regions.JAVA,
		categories: [Interests.ARTS],
		title: "Borobudur Temple",
		imageSrc: "/destinations/borobudur.png",
	},
	{
		id: 7,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Bromo Tengger Semeru",
		imageSrc: "/destinations/bromo.png",
	},
	{
		id: 8,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Wae Rebo",
		imageSrc: "/destinations/wae_rebo.png",
	},
	{
		id: 9,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Thousand Islands",
		imageSrc: "/destinations/thousand_islands.png",
	},
	{
		id: 10,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Tanjung Lesung",
		imageSrc: "/destinations/tanjung_lesung.png",
	},
	{
		id: 11,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.RECREATION],
		title: "Mandalika",
		imageSrc: "/destinations/mandalika.png",
	},
];

export const DESTINATION_DETAIL: DestinationDetailType[] = [
	{
		destination: DESTINATIONS[1],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/bromo.png" },
			{ id: 1, src: "/bromo2.jpeg" },
		],
		address: "East Java",
		phone: "(0341) 491828",
		website: "bromotenggersemeru.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "Witness the Greatest Beauty of Sunrise on Bromo.",
		headlineContent: "Witness the Greatest Beauty of Sunrise on Bromo.",
	},
];

export const ATTRACTIONS: AttractionType[] = [
	{
		id: 0,
		destination: DESTINATIONS[1],
		type: Attractions.SIGHTS,
		title: "Golden Sunrise",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/golden_sunrise.png",
	},
	{
		id: 1,
		destination: DESTINATIONS[1],
		type: Attractions.SIGHTS,
		title: "Golden Sunrise",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/golden_sunrise.png",
	},
	{
		id: 2,
		destination: DESTINATIONS[1],
		type: Attractions.SIGHTS,
		title: "Golden Sunrise",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/golden_sunrise.png",
	},
	{
		id: 3,
		destination: DESTINATIONS[1],
		type: Attractions.RESTAURANTS,
		title: "Bawangan Resto",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bawangan_resto.png",
	},
	{
		id: 4,
		destination: DESTINATIONS[1],
		type: Attractions.RESTAURANTS,
		title: "Bawangan Resto",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bawangan_resto.png",
	},
	{
		id: 5,
		destination: DESTINATIONS[1],
		type: Attractions.RESTAURANTS,
		title: "Bawangan Resto",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bawangan_resto.png",
	},
	{
		id: 6,
		destination: DESTINATIONS[1],
		type: Attractions.SHOPPING,
		title: "Bromo T-Shirt",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bromo_shirt.png",
	},
	{
		id: 7,
		destination: DESTINATIONS[1],
		type: Attractions.SHOPPING,
		title: "Bromo T-Shirt",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bromo_shirt.png",
	},
	{
		id: 8,
		destination: DESTINATIONS[1],
		type: Attractions.SHOPPING,
		title: "Bromo T-Shirt",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/bromo_shirt.png",
	},
	{
		id: 9,
		destination: DESTINATIONS[1],
		type: Attractions.ENTERTAINMENT,
		title: "Horse Riding",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/horse_riding.png",
	},
	{
		id: 10,
		destination: DESTINATIONS[1],
		type: Attractions.ENTERTAINMENT,
		title: "Horse Riding",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/horse_riding.png",
	},
	{
		id: 11,
		destination: DESTINATIONS[1],
		type: Attractions.ENTERTAINMENT,
		title: "Horse Riding",
		content:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
		imageSrc: "/destinations/attractions/horse_riding.png",
	},
];
