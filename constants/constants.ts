// REVIEW: enum itu type, yang set of objectsnya kecil, naming-wise mereka
// selalu singular sama kyk "string" atau "number" karena trippy misal
// x: numbers  x nya itu kan cuma suatu angka. bukan banyak angka.
//
// konvensinya PascalCase
// e.g. Nature instead of NATURE, ThemePark instead of THEME_PARK.
//
// types rasanya bukan constants kalo lu mau bikin types file gamasalah.
//

// REVIEW: lu bedain apa yang enum apa yang actually emang naturally dynamic
// misal genres, interests
//
// ini ga fit ke enum kalo lu simpen di DB dia basically cuma tags doang yang
// naturally untyped, something yang lu biasanya "iterate-through" gitu loh.
// gamasalah untuk lu access by ID doang.
//
// Kyk months are technically enums, tapi apakah lu gain anything dari
// type-safety nya dibanding storing in bare 0-11 ato 1-12? I don't think so :/
//
// things kyk sort-order dsb is a good enums karena ya... emang limited gitu.
// bukan something yang kyk backend lu update terus lu harus keep-up
export enum Interests {
	NATURE = "Nature and Wildlife",
	CULINARY = "Culinary and Wellness",
	RECREATION = "Recreation and Leisure",
	ARTS = "Arts, Culture, and Heritage",
	THEME_PARK = "Theme Park",
	EVERYTHING = "A bit of everything",
}

export enum UserStatus {
	LOGGED_IN,
	NOT_LOGGED_IN,
}

export const To_Interest: { [key: string]: Interests } = {
	"Nature and Wildlife": Interests.NATURE,
	"Culinary and Wellness": Interests.CULINARY,
	"Recreation and Leisure": Interests.RECREATION,
	"Arts, Culture, and Heritage": Interests.ARTS,
	"Theme Park": Interests.THEME_PARK,
	"A bit of everything": Interests.EVERYTHING,
};

export const INTERESTS_CARDS: {
	id: number;
	imageSrc: string;
	label: string;
	value: Interests;
}[] = [
		{
			id: 0,
			imageSrc: "/cards/nature.png",
			label: "Nature",
			value: Interests.NATURE,
		},
		{
			id: 1,
			imageSrc: "/cards/culinary.png",
			label: "Culinary",
			value: Interests.CULINARY,
		},
		{
			id: 2,
			imageSrc: "/cards/recreation.png",
			label: "Recreation",
			value: Interests.RECREATION,
		},
		{ id: 3, imageSrc: "/cards/arts.png", label: "Arts", value: Interests.ARTS },
		{
			id: 4,
			imageSrc: "/cards/theme_park.png",
			label: "Theme Park",
			value: Interests.THEME_PARK,
		},
	];

export enum Recommendations {
	OFF_SEASON = "OFF SEASON",
	SECOND_BEST = "SECOND BEST",
	TOO_CROWDED = "TOO CROWDED",
	OUR_PICK = "OUR PICK",
}

// REVIEW: gw gangerti kenapa ini penting tbh
export enum Months {
	January = "Jan",
	February = "Feb",
	March = "Mar",
	April = "Apr",
	May = "May",
	June = "Jun",
	July = "Jul",
	August = "Aug",
	September = "Sep",
	October = "Oct",
	November = "Nov",
	December = "Dec",
}

export const Month_Index: { [key: string]: number } = {
	[Months.January]: 0,
	[Months.February]: 1,
	[Months.March]: 2,
	[Months.April]: 3,
	[Months.May]: 4,
	[Months.June]: 5,
	[Months.July]: 6,
	[Months.August]: 7,
	[Months.September]: 8,
	[Months.October]: 9,
	[Months.November]: 10,
	[Months.December]: 11,
};

export const To_Month: { [key: number]: Months } = {
	0: Months.January,
	1: Months.February,
	2: Months.March,
	3: Months.April,
	4: Months.May,
	5: Months.June,
	6: Months.July,
	7: Months.August,
	8: Months.September,
	9: Months.October,
	10: Months.November,
	11: Months.December,
};

export enum Addons {
	TOUR_GUIDES = "Tour Guides",
	ELDERLY = "Elderly",
	VEGAN = "Vegan",
	KIDS = "Travelling with small kids",
}

export enum TravelType {
	COUPLE = "Couple",
	FAMILY = "Family",
	FRIENDS = "Friends",
	SOLO = "Solo",
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

export const To_Region: { [key: string]: Regions } = {
	"All Regions": Regions.ALL,
	Bali: Regions.BALI,
	Java: Regions.JAVA,
	Kalimantan: Regions.KALIMANTAN,
	Sumatera: Regions.SUMATERA,
	Sulawesi: Regions.SULAWESI,
	"Nusa Tenggara": Regions.NUSA_TENGGARA,
	Papua: Regions.PAPUA,
};

export enum Sorts {
	LOWEST_PRICE = "Lowest Price",
	HIGHEST_PRICE = "Highest Price",
	MOST_POPULAR = "Most Popular",
}

export const To_Sort: { [key: string]: Sorts } = {
	"Lowest Price": Sorts.LOWEST_PRICE,
	"Highest Price": Sorts.HIGHEST_PRICE,
	"Most Popular": Sorts.MOST_POPULAR,
};

export enum Genres {
	PAINTINGS = "Paintings",
	FASHION = "Fashion",
	CRAFTS = "Crafts",
	BOOKS = "Books",
	CULINARY = "Culinary",
	DIY_KITS = "DIY Kits",
	TRAVEL_KITS = "Travel Kits",
}

export const To_Genres: { [key: string]: Genres } = {
	Paintings: Genres.PAINTINGS,
	Fashion: Genres.FASHION,
	Crafts: Genres.CRAFTS,
	Books: Genres.BOOKS,
	Culinary: Genres.CULINARY,
	"DIY Kits": Genres.DIY_KITS,
	"Travel Kits": Genres.TRAVEL_KITS,
};

export type BookingsType = {
	id: number;
	imageSrc: string;
	categories: Interests[];
	region: Regions;
	title: string;
	rating: number;
	reviews: number;
	days: number;
	price: number;
	trending?: boolean | undefined;
	onClick?: Function | undefined;
};

export const GENRES = [
	{ id: 0, value: Genres.PAINTINGS },
	{ id: 1, value: Genres.FASHION },
	{ id: 2, value: Genres.CRAFTS },
	{ id: 3, value: Genres.BOOKS },
	{ id: 4, value: Genres.CULINARY },
	{ id: 5, value: Genres.DIY_KITS },
	{ id: 6, value: Genres.TRAVEL_KITS },
];

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

export const SORT_FILTER: { id: number; value: Sorts }[] = [
	{ id: 0, value: Sorts.LOWEST_PRICE },
	{ id: 1, value: Sorts.HIGHEST_PRICE },
	{ id: 2, value: Sorts.MOST_POPULAR },
];

export const INTERESTS_FILTER = [
	{ id: 0, value: Interests.NATURE },
	{ id: 1, value: Interests.CULINARY },
	{ id: 2, value: Interests.RECREATION },
	{ id: 3, value: Interests.ARTS },
	{ id: 4, value: Interests.THEME_PARK },
];

const reverseString = (str: string) => {
	// REVIEW: okay to be terse
	return str.split("").reverse().join("");
};


// REVIEW: look into
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
export const ToRupiahFormat = (rupiah: number) => {
	if (rupiah === 0) {
		return "";
	}

	let rupiahDigits = rupiah.toString().split("");
	rupiahDigits = rupiahDigits.reverse();

	let ret = "";
	for (let i = 0; i < rupiahDigits.length; i++) {
		ret += rupiahDigits[i];
		if (i === rupiahDigits.length - 1) continue;
		if ((i + 1) % 3 === 0) ret += ".";
	}

	return reverseString(ret);
};

export const ToNumberFormat = (rupiah: string) => {
	let ret: number = 0;
	for (let i = 0; i < rupiah.length; i++) {
		if (rupiah[i] === ".") continue;
		if (rupiah[i] < "0" || rupiah[i] > "9") continue;
		ret += parseInt(rupiah[i]);
		ret *= 10;
	}
	ret /= 10;
	return ret;
};

// REVIEW: look into lodash chunk
// https://lodash.com/docs/4.17.15#chunk
export const split = (array: any[], every: number) => {
	let id = 0;
	let ret: { id: number; value: any[] }[] = [];
	for (let i = 0; i < array.length; i += every) {
		ret.push({
			id: id++,
			value: array.slice(i, i + every),
		});
	}
	return ret;
};
