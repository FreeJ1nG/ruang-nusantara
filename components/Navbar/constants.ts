export type MenuType = {
	id: number;
	where: string;
	indoTitle: string;
	indoFocusTitle?: string | undefined;
	englishTitle: string;
	englishFocusTitle?: string | undefined;
	setShowMenu?: Function | undefined;
};

export const MENUS: MenuType[] = [
	{ id: 0, where: "/", indoTitle: "Utama", englishTitle: "Home" },
	{
		id: 1,
		where: "/destinations",
		indoTitle: "Tujuan",
		englishTitle: "Destinations",
	},
	{
		id: 2,
		where: "/trips",
		indoTitle: "Perjalanan",
		englishTitle: "Trips",
	},
	{
		id: 3,
		where: "/stories",
		indoTitle: "Blog",
		englishTitle: "Stories",
	},
];

export const BLACK_TEXT = ["/destinations", "/trips", "/stories"];
