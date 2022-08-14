import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { AppProps } from "next/app";
import { DatasType } from "$constants/pages/trips/constants";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { IndoContext } from "$context/IndoContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "$components/Toaster/Index";
import { UserContext } from "$context/UserContext";
import { UserStatus } from "$constants/constants";
import { UserType } from "$context/UserContext";
import { Users } from "$context/UsersContext";
import { UsersContext } from "$context/UsersContext";
import { useLocalstorageState } from "rooks";

function MyApp({ Component, pageProps }: AppProps) {
	const [indo, setIndo] = useState(true);
	const [storedUsers, setStoredUsers] = useLocalstorageState<Users[]>(
		"stored-users",
		[]
	);
	const [loggedInUser, setLoggedInUser] = useLocalstorageState<UserType>(
		"logged-in-user",
		{
			status: UserStatus.NOT_LOGGED_IN,
			first_name: null,
			last_name: null,
			email: null,
			password: null,
			bookings: [],
		}
	);
	const [storedBookings, setStoredBookings] = useLocalstorageState<DatasType[]>(
		"stored-bookings",
		[]
	);

	const [users, setUsers] = useState<Users[]>([]);
	const [user, setUser] = useState<UserType>({
		status: UserStatus.NOT_LOGGED_IN,
		first_name: null,
		last_name: null,
		email: null,
		password: null,
		bookings: [],
	});

	useEffect(() => {
		setUsers(storedUsers);
	}, [storedUsers]);

	useEffect(() => {
		setUser(loggedInUser);
	}, [loggedInUser]);

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
				<UsersContext.Provider value={users}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<ThemeProvider theme={theme}>
							<Head>
								<title>Ruang Nusantara</title>
								<link rel="icon" href="/logo.png" />
							</Head>
							<div className="relative flex flex-col text-defaultText font-poppins">
								<Navbar
									indo={indo}
									setIndo={setIndo}
									setUser={setLoggedInUser}
									setUsers={setStoredUsers}
								/>
								<Component {...pageProps} />
								<Footer />
								<Toaster />
							</div>
						</ThemeProvider>
					</LocalizationProvider>
				</UsersContext.Provider>
			</UserContext.Provider>
		</IndoContext.Provider>
	);
}

export default MyApp;
