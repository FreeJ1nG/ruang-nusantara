import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { IndoContext } from "$context/IndoContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "$context/UserContext";
import { UserStatus } from "$constants/constants";
import { useLocalstorageState } from "rooks";

function MyApp({ Component, pageProps }: AppProps) {
	const [indo, setIndo] = useState(true);
	const [storedUser, setStoredUser] = useLocalstorageState<UserStatus>(
		"user",
		UserStatus.NOT_LOGGED_IN
	);
	const [user, setUser] = useState<UserStatus>(UserStatus.NOT_LOGGED_IN);

	useEffect(() => {
		setUser(storedUser);
	}, [storedUser]);

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
			<UserContext.Provider value={user}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<ThemeProvider theme={theme}>
						<Head>
							<title>Ruang Nusantara</title>
							<link rel="icon" href="/logo.png" />
						</Head>
						<div className="relative flex flex-col text-defaultText font-poppins">
							<Navbar indo={indo} setIndo={setIndo} setUser={setStoredUser} />
							<Component {...pageProps} />
							<Footer />
						</div>
					</ThemeProvider>
				</LocalizationProvider>
			</UserContext.Provider>
		</IndoContext.Provider>
	);
}

export default MyApp;
