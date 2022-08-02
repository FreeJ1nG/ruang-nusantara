import { FC, useContext, useEffect, useState } from "react";

import { BLACK_TEXT } from "./constants";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import Link from "next/link";
import { MENUS } from "./constants";
import Popup from "./components/Popup/Popup";
import { useRouter } from "next/router";

type NavbarProps = {
	indo: boolean;
	setIndo: Function;
};

const Index: FC<NavbarProps> = ({ indo, setIndo }) => {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<div
			className={`${
				BLACK_TEXT.filter(
					(route: string) =>
						router.pathname.includes(route) && route !== router.pathname
				).length > 0
					? "text-black"
					: "text-white"
			} `}
		>
			<Popup showPopup={showMenu} setShowPopup={setShowMenu}>
				<div className="w-full h-full p-10 flex flex-col gap-y-5">
					{MENUS.map((menu) => (
						<MenuElement key={menu.id} {...menu} />
					))}
				</div>
			</Popup>
			<div className="z-90 absolute top-0 left-0 right-0 flex flex-row justify-between items-center px-5 md:px-10 xl:px-20 h-24 bg-transparent">
				<Link href="/">
					<a className="flex flex-row items-center gap-x-2 md:gap-x-5">
						<div className="relative w-10 h-10 md:w-14 md:h-14">
							<Image src="/logo.png" layout="fill" alt="logo" />
						</div>
						<div className="drop-shadow-2xl flex flex-row font-bold text-md md:text-xl font-montserrat">
							Ruang
							<div className="text-lightBrown drop-shadow-2xl">Nusantara</div>
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
					{MENUS.map((menu) => (
						<MenuElement key={menu.id} {...menu} />
					))}
					<LanguageButton indo={indo} setIndo={setIndo} />
				</div>
			</div>
		</div>
	);
};

type MenuElementPropType = {
	where: string;
	indoTitle: string;
	indoFocusTitle?: string | undefined;
	englishTitle: string;
	englishFocusTitle?: string | undefined;
	setShowMenu?: Function | undefined;
};

const MenuElement: FC<MenuElementPropType> = ({
	where,
	indoTitle,
	indoFocusTitle,
	englishTitle,
	englishFocusTitle,
	setShowMenu,
}) => {
	const router = useRouter();
	const indo = useContext(IndoContext);
	const [title, setTitle] = useState<{
		indo: string;
		english: string;
	}>({
		indo:
			router.pathname === where
				? indoFocusTitle
					? indoFocusTitle
					: indoTitle
				: indoTitle,
		english:
			router.pathname === where
				? englishFocusTitle
					? englishFocusTitle
					: englishTitle
				: englishTitle,
	});

	useEffect(() => {
		setTitle({
			indo:
				router.pathname === where
					? indoFocusTitle
						? indoFocusTitle
						: indoTitle
					: indoTitle,
			english:
				router.pathname === where
					? englishFocusTitle
						? englishFocusTitle
						: englishTitle
					: englishTitle,
		});
	}, [
		router,
		where,
		englishTitle,
		englishFocusTitle,
		indoTitle,
		indoFocusTitle,
	]);

	return (
		<button
			onClick={() => {
				if (setShowMenu) setShowMenu(false);
				router.push(where);
			}}
		>
			<h1
				className={`drop-shadow-2xl text-left lg:text-center font-poppins font-semibold text-base xl:text-lg px-4 py-1 rounded-full transition-all duration-300 ${
					where !== "/" &&
					(router.pathname.includes(where)
						? "bg-lightBrown text-white"
						: "bg-transparent")
				} ${
					where === "/" && router.pathname === "/" && "bg-lightBrown text-white"
				}`}
			>
				{indo ? title.indo : title.english}
			</h1>
		</button>
	);
};

type LanguageButtonProps = {
	indo: boolean;
	setIndo: Function;
};

const LanguageButton: FC<LanguageButtonProps> = ({ indo, setIndo }) => {
	return (
		<button
			onClick={() => setIndo(!indo)}
			className="text-white relative w-[74px] h-[37px] lg:w-[100px] lg:h-[50px] flex flex-row justify-center items-center rounded-full bg-darkBrown"
		>
			<div className="pl-1 font-bold text-base lg:text-2xl w-1/2 z-50 flex justify-center items-center">
				ID
			</div>
			<div
				onClick={() => setIndo(true)}
				className="pr-1 font-bold text-base lg:text-2xl w-1/2 z-50 flex justify-center items-center"
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
