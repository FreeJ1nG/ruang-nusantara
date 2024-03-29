/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				serifpro: ["Source Serif Pro", "serif"],
				sanspro: ["Source Sans Pro", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
			},
			colors: {
				primary: "#f3f3f3",
				defaultText: "#41342B",
				yellowText: "#FFD552",

				brownBg: "#150F09",
				lightBrown: "#A56831",
				darkBrown: "#7C4930",
				darkBrown2: "#452A0E",
				darkBrown3: "#332821",
				lightBrownText: "#CAAEA1",

				footer: "#24262B",
				footerText: "#BBBBBB",

				contactGrayText: "#828282",

				textInputBg: "#434345",
				whiteCover: "#D9D9D9",

				selectBorder: "#575757",
				selectedBorder: "#F8B525",

				lighter: "#4B4B4B",
				lighter2: "#50504F",
				lighter3: "#969696",

				gray: "#B3B3B3",
				gray2: "#636363",
				gray3: "#838383",
				gray4: "#434343",
				gray5: "#50504F",
				gray6: "#525252",
				gray7: "#C0C0C0",
				gray8: "#8B8B8B",

				greenHover: "#4FAF7C",

				orange: "#F56801",

				productCardGray: "#A7A7A7",

				hyperlink: "#215EFB",

				startFrom: "#FFC100",
			},
			zIndex: {
				5: "5",
				60: "60",
				70: "70",
				80: "80",
				90: "90",
				100: "100",
			},
		},
	},
	plugins: [],
};
