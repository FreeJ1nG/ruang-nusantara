import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { IndoContext } from "../context/IndoContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [indo, setIndo] = useState(true);
	const theme = createTheme({
		components: {
			MuiDatePicker: {
				styleOverrides: {
					root: {
						backgroundColor: "red",
					},
				},
			},
		},
	});

	return (
		<IndoContext.Provider value={indo}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<ThemeProvider theme={theme}>
					<Head>
						<title>Ruang Nusantara</title>
						<link rel="icon" href="/logo.png" />
					</Head>
					<div className="relative flex flex-col text-defaultText font-poppins">
						<Navbar indo={indo} setIndo={setIndo} />
						<Component {...pageProps} />
						<Footer />
					</div>
				</ThemeProvider>
			</LocalizationProvider>
		</IndoContext.Provider>
	);
}

export default MyApp;
