import { FC, useContext, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import Link from "next/link";
import { MENUS } from "./constants";
import Popup from "./components/Popup/Popup";
import { UserContext } from "$context/UserContext";
import { UserStatus } from "$constants/constants";
import { useRouter } from "next/router";

type NavbarProps = {
	indo: boolean;
	setIndo: Function;
	setUser: Function;
};

const Index: FC<NavbarProps> = ({ indo, setIndo, setUser }) => {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState<boolean>(false);

	return (
		<div className={`font-ubuntu text-black`}>
			<Popup showPopup={showMenu} setShowPopup={setShowMenu}>
				<div className="w-full h-full p-10 text-white flex flex-col gap-y-5">
					{MENUS.map((menu) => (
						<MenuElement key={menu.id} {...menu} setShowMenu={setShowMenu} />
					))}
				</div>
			</Popup>
			<div
				className={`shadow-md z-90 flex flex-row justify-between items-center px-5 md:px-10 xl:px-20 h-20 bg-white relative`}
			>
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
					<Profile setUser={setUser} />
				</div>
			</div>
		</div>
	);
};

const Profile: FC<{ setUser: Function }> = ({ setUser }) => {
	const user = useContext(UserContext);
	const [open, setOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const MenuItem: FC<{
		title: string;
		imageSrc: string;
		onClick: Function;
	}> = ({ title, imageSrc, onClick }) => {
		return (
			<button
				onClick={() => onClick()}
				className={`${
					open ? "block" : "hidden"
				} w-full pl-5 py-2 transition-all duration-300 hover:bg-yellowText`}
			>
				<div
					className={`flex items-center gap-x-5 duration-500 ${
						open ? "block" : "hidden"
					}`}
				>
					<Image src={imageSrc} alt={title} width={20} height={20} />
					<h1 className="text-[16px]">{title}</h1>
				</div>
			</button>
		);
	};

	useEffect(() => {
		const handler = (e: any) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<div className="relative">
			<button
				ref={buttonRef}
				onClick={() => setOpen(!open)}
				className="ml-10 w-10 h-10 flex justify-center items-center bg-darkBrown rounded-full"
			>
				<Image src="/avatar.png" alt="Avatar" width={24} height={24} />
			</button>
			<div
				ref={dropdownRef}
				className="absolute -left-28 right-0 top-16 flex flex-col shadow-xl"
			>
				<div
					className={`transition-all duration-300 rounded-md ${
						open ? "h-28" : "h-0"
					} flex flex-col justify-center items-start bg-white`}
				>
					<MenuItem
						title="My Bookings"
						imageSrc="/navbar/bookings.png"
						onClick={() => null}
					/>
					{user === UserStatus.LOGGED_IN && (
						<MenuItem
							title="Logout"
							imageSrc="/navbar/logout.png"
							onClick={() => setUser(UserStatus.NOT_LOGGED_IN)}
						/>
					)}
					{user === UserStatus.NOT_LOGGED_IN && (
						<MenuItem
							title="Login"
							imageSrc="/navbar/login.png"
							onClick={() => setUser(UserStatus.LOGGED_IN)}
						/>
					)}
				</div>
			</div>
		</div>
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
				className={`drop-shadow-2xl text-left lg:text-center font-semibold text-base xl:text-lg px-4 py-1 rounded-full transition-all duration-300 ${
					where !== "/" &&
					(router.pathname.includes(where)
						? "bg-darkBrown text-white"
						: "bg-transparent")
				} ${
					where === "/" && router.pathname === "/" && "bg-darkBrown text-white"
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
	return (
		<button
			onClick={() => setIndo(!indo)}
			className="text-white relative w-[74px] h-[37px] lg:w-[90px] lg:h-[45px] flex flex-row justify-center items-center rounded-full bg-darkBrown"
		>
			<div className="pl-1 font-bold text-base lg:text-xl w-1/2 z-50 flex justify-center items-center">
				ID
			</div>
			<div
				onClick={() => setIndo(true)}
				className="pr-1 font-bold text-base lg:text-xl w-1/2 z-50 flex justify-center items-center"
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
