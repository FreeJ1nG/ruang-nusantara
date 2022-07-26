export enum Interests {
	NATURE = "Nature and Wildlife",
	CULINARY = "Culinary and Wellness",
	RECREATION = "Recreation and Leisure",
	ARTS = "Arts, Culture, and Heritage",
}

export enum Regions {
	ALL = "All Regions",
	BALI = "Bali",
	JAVA = "Java",
	KALIMANTAN = "Kalimantan",
	SUMATERA = "Sumatera",
	SULAWESI = "Sulawesi",
	NUSA_TENGGARA = "Nusa Tenggara",
	PAPUA = "Papua",
}

export const REGION_CHOICES = [
	{ id: 0, value: Regions.ALL },
	{ id: 1, value: Regions.BALI },
	{ id: 2, value: Regions.JAVA },
	{ id: 3, value: Regions.KALIMANTAN },
	{ id: 4, value: Regions.SUMATERA },
	{ id: 5, value: Regions.SULAWESI },
	{ id: 6, value: Regions.NUSA_TENGGARA },
	{ id: 7, value: Regions.PAPUA },
];

export const INTERESTS_FILTER = [
	{ id: 0, value: Interests.NATURE },
	{ id: 1, value: Interests.CULINARY },
	{ id: 2, value: Interests.RECREATION },
	{ id: 3, value: Interests.ARTS },
];

export const DESTINATIONS = [
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
