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
		indoFocusTitle: "Pemesanan",
		englishTitle: "Trips",
		englishFocusTitle: "Bookings",
	},
	{
		id: 3,
		where: "/shop",
		indoTitle: "Belanja",
		indoFocusTitle: "Keranjang (0)",
		englishTitle: "Shop",
		englishFocusTitle: "Cart (0)",
	},
];

export const BLACK_TEXT = ["/destinations", "/trips", "/shop"];
