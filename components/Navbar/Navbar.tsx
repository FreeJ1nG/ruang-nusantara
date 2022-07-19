import { FC, useContext, useState } from "react";

import Image from "next/image";
import { IndoContext } from "../../pages/IndoContext";
import Link from "next/link";
import Popup from "../../pages/contact/components/Popup/Popup";
import { useRouter } from "next/router";

type NavbarProps = {
	indo: boolean;
	setIndo: Function;
};

const Index: FC<NavbarProps> = ({ indo, setIndo }) => {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<>
			<Popup showPopup={showMenu} setShowPopup={setShowMenu}>
				<div className="w-full h-full p-10 flex flex-col gap-y-5">
					<MenuElement
						where="/"
						indoTitle="Utama"
						englishTitle="Home"
						setShowMenu={setShowMenu}
					/>
					<MenuElement
						where="/explore"
						indoTitle="Jelajahi"
						englishTitle="Explore"
						setShowMenu={setShowMenu}
					/>
					<MenuElement
						where="/products"
						indoTitle="Produk"
						englishTitle="Products"
						setShowMenu={setShowMenu}
					/>
					<MenuElement
						where="/bookings"
						indoTitle="Booking"
						englishTitle="Booking"
						setShowMenu={setShowMenu}
					/>
					<MenuElement
						where="/contact"
						indoTitle="Kontak"
						englishTitle="Contact"
						setShowMenu={setShowMenu}
					/>
				</div>
			</Popup>
			<div className="z-90 fixed w-full flex flex-row justify-between items-center px-5 md:px-10 xl:px-20 h-24 bg-black">
				<Link href="/">
					<a className="flex flex-row items-center gap-x-2 md:gap-x-5">
						<div className="relative w-10 h-10 md:w-14 md:h-14">
							<Image src="/logo.png" layout="fill" alt="logo" />
						</div>
						<div className="flex flex-row font-bold text-md md:text-xl font-montserrat">
							Ruang
							<div className="text-lightBrown">Nusantara</div>
						</div>
					</a>
				</Link>
				<div className="flex gap-x-5 items-center lg:hidden">
					<LanguageButton indo={indo} setIndo={setIndo} />
					<button onClick={() => setShowMenu(true)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex flex-row items-center gap-x-5">
					<MenuElement where="/" indoTitle="Utama" englishTitle="Home" />
					<MenuElement
						where="/explore"
						indoTitle="Jelajahi"
						englishTitle="Explore"
					/>
					<MenuElement
						where="/products"
						indoTitle="Produk"
						englishTitle="Products"
					/>
					<MenuElement
						where="/bookings"
						indoTitle="Booking"
						englishTitle="Booking"
					/>
					<MenuElement
						where="/contact"
						indoTitle="Kontak"
						englishTitle="Contact"
					/>
					<LanguageButton indo={indo} setIndo={setIndo} />
				</div>
			</div>
		</>
	);
};

type MenuElementPropType = {
	where: string;
	indoTitle: string;
	englishTitle: string;
	setShowMenu?: Function | undefined;
};

const MenuElement: FC<MenuElementPropType> = ({
	where,
	indoTitle,
	englishTitle,
	setShowMenu,
}) => {
	const router = useRouter();
	const indo = useContext(IndoContext);

	return (
		<button
			onClick={() => {
				if (setShowMenu) setShowMenu(false);
				router.push(where);
			}}
		>
			<h1
				className={`text-left lg:text-center font-poppins font-semibold text-base xl:text-xl px-5 xl:px-8 py-2 rounded-full transition-all duration-300 ${
					router.pathname === where ? "bg-lightBrown" : "bg-transparent"
				}`}
			>
				{indo ? indoTitle : englishTitle}
			</h1>
		</button>
	);
};

type LanguageButtonProps = {
	indo: boolean;
	setIndo: Function;
};

const LanguageButton: FC<LanguageButtonProps> = ({ indo, setIndo }) => {
	console.log(indo);
	return (
		<button
			onClick={() => setIndo(!indo)}
			className="relative w-[74px] h-[37px] lg:w-[100px] lg:h-[50px] flex flex-row justify-center items-center rounded-full bg-darkBrown"
		>
			<div className="font-bold text-base lg:text-2xl w-1/2 z-50 flex justify-center items-center">
				ID
			</div>
			<div
				onClick={() => setIndo(true)}
				className="font-bold text-base lg:text-2xl w-1/2 z-50 flex justify-center items-center"
			>
				EN
			</div>
			<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row">
				<div
					className={`transition-all duration-300 ${indo ? "w-1/2" : "w-0"}`}
				/>
				<div className="w-1/2 p-1">
					<div className="relative flex justify-center items-center w-full h-full bg-white rounded-full z-60">
						<Image src="/globe.png" width={30} height={30} alt="globe" />
					</div>
				</div>
			</div>
		</button>
	);
};

export default Index;
