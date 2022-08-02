import { Interests } from "../../constants";

export type StoryProps = {
	id: number;
	imageSrc: string;
	category: string;
	title: string;
	date: string;
	author: string;
	description: string;
};

export const BIG_STORIES: StoryProps[] = [
	{
		id: 0,
		imageSrc: "/bromo.png",
		category: Interests.NATURE,
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		date: "July 26, 2022",
		author: "Baymax Disney",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, ...',
	},
	{
		id: 1,
		imageSrc: "/rinjani.jpeg",
		category: Interests.NATURE,
		title: "The Best Hiking Routes at Bromo Tengger Semeru",
		date: "July 26, 2022",
		author: "Baymax Disney",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, ...',
	},
];

export const STORIES: {
	id: number;
	imageSrc: string;
	category: string;
	title: string;
	date: string;
	author: string;
	description: string;
}[] = [
	{
		id: 0,
		imageSrc: "/tripcard/nature_and_wildlife.png",
		category: Interests.NATURE,
		title: "From the beach to the mountains: 5 Best Healing Sp...",
		date: "May 12th, 2022",
		author: "Bocil Tidur",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
	{
		id: 1,
		imageSrc: "/tripcard/art_culture_heritage.png",
		category: Interests.ARTS,
		title: "Make your own batik at Kampung Giriloyo, Yogya...",
		date: "June 4th, 2022",
		author: "Ko Rew +3",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
	{
		id: 2,
		imageSrc: "/tripcard/nature_and_wildlife.png",
		category: Interests.NATURE,
		title: "From the beach to the mountains: 5 Best Healing Sp...",
		date: "May 12th, 2022",
		author: "Bocil Tidur",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
	{
		id: 3,
		imageSrc: "/tripcard/art_culture_heritage.png",
		category: Interests.ARTS,
		title: "Make your own batik at Kampung Giriloyo, Yogya...",
		date: "June 4th, 2022",
		author: "Ko Rew +3",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
	{
		id: 4,
		imageSrc: "/tripcard/tanjung_lesung.png",
		category: Interests.NATURE,
		title: "Make your own batik at Kampung Giriloyo, Yogya...",
		date: "June 4th, 2022",
		author: "Ko Rew +3",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
	{
		id: 5,
		imageSrc: "/tripcard/art_culture_heritage.png",
		category: Interests.ARTS,
		title: "Make your own batik at Kampung Giriloyo, Yogya...",
		date: "June 4th, 2022",
		author: "Ko Rew +3",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ...',
	},
];
