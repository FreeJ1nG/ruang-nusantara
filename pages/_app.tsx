import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { IndoContext } from "../context/IndoContext";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [indo, setIndo] = useState(true);

	return (
		<IndoContext.Provider value={indo}>
			<Head>
				<title>Ruang Nusantara</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<div className="relative flex flex-col text-white">
				<Navbar indo={indo} setIndo={setIndo} />
				<div className="h-24" />
				<Component {...pageProps} />
				<Footer />
			</div>
		</IndoContext.Provider>
	);
}

export default MyApp;
