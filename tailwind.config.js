/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				mobile: "400px",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				brownBg: "#150F09",
				lightBrown: "#A56831",
				darkBrown: "#7C4930",
				darkBrown2: "#452A0E",

				footer: "#24262B",
				footerText: "#BBBBBB",

				contactGrayText: "#828282",

				textInputBg: "#434345",
				whiteCover: "#D9D9D9",
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
