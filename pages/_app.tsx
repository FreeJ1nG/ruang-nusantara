import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
			<div className="relative flex flex-col text-defaultText font-poppins">
				<Navbar indo={indo} setIndo={setIndo} />
				<Component {...pageProps} />
				<Footer />
			</div>
		</IndoContext.Provider>
	);
}

export default MyApp;
