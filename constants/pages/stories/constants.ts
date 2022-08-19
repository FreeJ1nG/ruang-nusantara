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
		genres: [NewsGenre.HIKING],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 1,
		genres: [NewsGenre.STAYCATION],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 2,
		genres: [NewsGenre.STAYCATION],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 3,
		genres: [NewsGenre.STAYCATION],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
	{
		id: 4,
		genres: [NewsGenre.STAYCATION],
		imageSrc: "/stories/bromo.png",
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e...',
		interest: Interests.NATURE,
	},
];
