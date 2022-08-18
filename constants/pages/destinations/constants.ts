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
	description: string;
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
		title: "Borobudur & Prambanan",
		imageSrc: "/destinations/borobudur.png",
		description:
			"History comes alive as you step into the realm of Borobudur and Prambanan.",
	},
	{
		id: 1,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Bromo Tengger Semeru",
		imageSrc: "/destinations/bromo.png",
		description:
			"Bromo Tengger Semeru National Park is one of the best mountain range in the world.",
	},
	{
		id: 2,
		region: Regions.SUMATERA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Lake Toba",
		imageSrc: "/destinations/lake_toba.png",
		description:
			"An eye over the mount. Lake Toba is one of the most iconic destinations in Indonesia",
	},
	{
		id: 3,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Thousand Islands",
		imageSrc: "/destinations/thousand_islands.png",
		description:
			"Beyond the bustling megapolitan of Jakarta, lies a paradise just by its coast.",
	},
	{
		id: 4,
		region: Regions.JAVA,
		categories: [Interests.NATURE, Interests.RECREATION],
		title: "Tanjung Lesung",
		imageSrc: "/destinations/tanjung_lesung.png",
		description:
			"A combination of natural wealth and native culture of Banten.",
	},
	{
		id: 5,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.RECREATION],
		title: "Mandalika",
		imageSrc: "/destinations/mandalika.png",
		description: "A place where paradise on Earth can truly be found",
	},
	{
		id: 6,
		region: Regions.NUSA_TENGGARA,
		categories: [Interests.NATURE],
		title: "Labuan Bajo",
		imageSrc: "/destinations/labuan_bajo.png",
		description:
			"Located on the island of Flores in Nusa Tenggara, Labuan Bajo is a breathtaking small fishing town in the most west of the island.",
	},
	{
		id: 7,
		region: Regions.SULAWESI,
		categories: [Interests.NATURE],
		title: "Morotai",
		imageSrc: "/destinations/morotai.png",
		description:
			"Located in the Northside of Halmahera Islands, Northernmost corner of Maluku.",
	},
	{
		id: 8,
		region: Regions.SULAWESI,
		categories: [Interests.NATURE],
		title: "Wakatobi",
		imageSrc: "/destinations/wakatobi.png",
		description:
			"What if you can find a rural version of Bali? We present to you Wakatobi, a new place of island travel destination.",
	},
	{
		id: 9,
		region: Regions.SUMATERA,
		categories: [Interests.NATURE],
		title: "Tanjung Kelayang",
		imageSrc: "/destinations/tanjung_kelayang.png",
		description:
			"A really sweet escape from your crowded city to the beauty rock islands in Tanjung Kelayang",
	},
];

export const DESTINATION_DETAIL: DestinationDetailType[] = [
	{
		destination: DESTINATIONS[0],
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
	{
		destination: DESTINATIONS[2],
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
	{
		destination: DESTINATIONS[3],
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
	{
		destination: DESTINATIONS[4],
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
	{
		destination: DESTINATIONS[5],
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
	{
		destination: DESTINATIONS[6],
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
	{
		destination: DESTINATIONS[7],
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
	{
		destination: DESTINATIONS[8],
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
	{
		destination: DESTINATIONS[9],
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
