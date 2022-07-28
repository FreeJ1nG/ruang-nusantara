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

export enum Sorts {
	LOWEST_PRICE = "Lowest Price",
	HIGHEST_PRICE = "Highest Price",
	MOST_POPULAR = "Most Popular",
}

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
];

const reverseString = (str: string) => {
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");
	return joinArray;
};

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
