import { Interests } from "$constants/constants";

export enum NewsGenre {
	STAYCATION = "Staycation",
	HIKING = "Hiking",
	FAMILY_TRIP = "Family Trips",
	COVID_NEWS = "COVID News",
	TRAVEL_GUIDELINES = "Travel Guidelines",
}

export const STORIES: {
	genres: NewsGenre[];
	id: number;
	imageSrc: string;
	title: string;
	description: string;
	interest: Interests;
}[] = [
	{
		id: 0,
		genres: [
			NewsGenre.STAYCATION,
			NewsGenre.COVID_NEWS,
			NewsGenre.HIKING,
			NewsGenre.TRAVEL_GUIDELINES,
			NewsGenre.FAMILY_TRIP,
		],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 1,
		genres: [
			NewsGenre.STAYCATION,
			NewsGenre.COVID_NEWS,
			NewsGenre.HIKING,
			NewsGenre.TRAVEL_GUIDELINES,
			NewsGenre.FAMILY_TRIP,
		],
		imageSrc: "/stories/art_culture_heritage.png",
		title: "Make your own batik at Kampung Giriloyo, Yogya",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.ARTS,
	},
	{
		id: 2,
		genres: [
			NewsGenre.STAYCATION,
			NewsGenre.COVID_NEWS,
			NewsGenre.HIKING,
			NewsGenre.TRAVEL_GUIDELINES,
			NewsGenre.FAMILY_TRIP,
		],
		imageSrc: "/stories/tanjung_lesung.png",
		title: "Get some breather in Tanjung Lesung!",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 3,
		genres: [
			NewsGenre.STAYCATION,
			NewsGenre.COVID_NEWS,
			NewsGenre.HIKING,
			NewsGenre.TRAVEL_GUIDELINES,
			NewsGenre.FAMILY_TRIP,
		],
		imageSrc: "/stories/nature_and_wildlife.png",
		title: "From the beach to the mountains: 5 Best Healing Spots",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 4,
		genres: [
			NewsGenre.STAYCATION,
			NewsGenre.COVID_NEWS,
			NewsGenre.HIKING,
			NewsGenre.TRAVEL_GUIDELINES,
			NewsGenre.FAMILY_TRIP,
		],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
];
