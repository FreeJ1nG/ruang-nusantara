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
			{ id: 0, src: "/destinations/borobudur/borobudur1.jpg" },
			{ id: 1, src: "/destinations/borobudur/borobudur2.jpg" },
		],
		address: "East Java",
		phone: "(0341) 491828",
		website: "borobudurandprambanan.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "Go to Borobudur now!",
		headlineContent: "Go to Borobudur now!",
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
			{ id: 0, src: "/destinations/toba/toba1.jpg" },
			{ id: 1, src: "/destinations/toba/toba2.jpg" },
			{ id: 2, src: "/destinations/toba/toba3.jpg" },
		],
		address: "Sumatera, Medan",
		phone: "(0341) 491828",
		website: "danautoba.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "Go to one of the most beautiful destination in Indonesia",
		headlineContent: "Go to one of the most beautiful destination in Indonesia",
	},
	{
		destination: DESTINATIONS[3],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/1000is/1.jpg" },
			{ id: 1, src: "/destinations/1000is/2.png" },
			{ id: 2, src: "/destinations/1000is/3.jpg" },
		],
		address: "West Java",
		phone: "(0341) 491828",
		website: "pulai-seribu.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "Go to Pulau Seribu!",
		headlineContent: "Go to Pulau Seribu!",
	},
	{
		destination: DESTINATIONS[4],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/tanjung_lesung/1.jpg" },
			{ id: 0, src: "/destinations/tanjung_lesung/2.jpg" },
			{ id: 0, src: "/destinations/tanjung_lesung/3.jpg" },
		],
		address: "Banten",
		phone: "(0341) 491828",
		website: "tanjung-lesung.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "Go to Tanjung Lesung Beach.",
		headlineContent: "Go to Tanjung Lesung Beach.",
	},
	{
		destination: DESTINATIONS[5],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/mandalika/1.jpg" },
			{ id: 1, src: "/destinations/mandalika/2.jpg" },
			{ id: 2, src: "/destinations/mandalika/3.jpg" },
		],
		address: "Nusa Tenggara",
		phone: "(0341) 491828",
		website: "mandalika.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle: "A place where heaven on Earth can truly be found",
		headlineContent: "A place where heaven on Earth can truly be found",
	},
	{
		destination: DESTINATIONS[6],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/labuan_bajo/1.jpg" },
			{ id: 1, src: "/destinations/labuan_bajo/2.jpg" },
			{ id: 2, src: "/destinations/labuan_bajo/3.png" },
		],
		address: "Nusa Tenggara",
		phone: "(0341) 491828",
		website: "labuan-bajo.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle:
			"Located on the island of Flores in Nusa Tenggara, Labuan Bajo is a breathtaking small fishing town in the most west of the island.",
		headlineContent:
			"Located on the island of Flores in Nusa Tenggara, Labuan Bajo is a breathtaking small fishing town in the most west of the island.",
	},
	{
		destination: DESTINATIONS[7],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/morotai/1.jpg" },
			{ id: 1, src: "/destinations/morotai/2.jpg" },
			{ id: 2, src: "/destinations/morotai/3.jpg" },
		],
		address: "Sulawesi",
		phone: "(0341) 491828",
		website: "morotai.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle:
			"Located in the Northside of Halmahera Islands, Northernmost corner of Maluku.",
		headlineContent:
			"Located in the Northside of Halmahera Islands, Northernmost corner of Maluku.",
	},
	{
		destination: DESTINATIONS[8],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/wakatobi/1.jpeg" },
			{ id: 1, src: "/destinations/wakatobi/2.jpg" },
			{ id: 2, src: "/destinations/wakatobi/3.jpg" },
		],
		address: "Sulawesi",
		phone: "(0341) 491828",
		website: "wakatobi.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle:
			"What if you can find a rural version of Bali? We present to you Wakatobi, a new place of island travel destination.",
		headlineContent:
			"What if you can find a rural version of Bali? We present to you Wakatobi, a new place of island travel destination.",
	},
	{
		destination: DESTINATIONS[9],
		brownText: "Most Popular",
		italicText: "National Park",
		imageSrcs: [
			{ id: 0, src: "/destinations/tanjung_kelayang/1.jpg" },
			{ id: 1, src: "/destinations/tanjung_kelayang/2.jpeg" },
			{ id: 2, src: "/destinations/tanjung_kelayang/3.jpg" },
		],
		address: "Belitung Islands",
		phone: "(0341) 491828",
		website: "tanjung-kelayang.org",
		bestTimeToVisit: { from: "July", to: "August" },
		headlineTitle:
			"A really sweet escape from your crowded city to the beauty rock islands in Tanjung Kelayang",
		headlineContent:
			"A really sweet escape from your crowded city to the beauty rock islands in Tanjung Kelayang",
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
