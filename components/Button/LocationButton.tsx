import { FC, ReactNode, useEffect, useState } from "react";

import { CITIES } from "$constants/pages/trips/constants";
import { Regions } from "$constants/constants";

type ButtonProps = {
	onClick: Function;
	width?: number | undefined;
	height?: number | undefined;
	fit?: boolean | undefined;
	label: string | ReactNode;
	leftIcon?: ReactNode | undefined;
	rightIcon?: ReactNode | undefined;
	disabled?: boolean | undefined;
	mt?: number | undefined;
	mb?: number | undefined;
	rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | undefined;
	filter?: string | undefined;
	region?: Regions | undefined;
};

const LocationButton: FC<ButtonProps> = ({
	onClick,
	width,
	height,
	fit,
	label,
	leftIcon,
	rightIcon,
	disabled,
	mt,
	mb,
	rounded,
	filter,
	region,
}) => {
	const roundedClassName = `${rounded === "sm" && "rounded-sm"} ${
		rounded === "md" && "rounded-md"
	} ${rounded === "lg" && "rounded-lg"} ${rounded === "xl" && "rounded-xl"} ${
		rounded === "2xl" && "rounded-2xl"
	} ${rounded === "3xl" || (rounded === undefined && "rounded-3xl")}`;
	const [on, setOn] = useState<boolean>(false);

	useEffect(() => {
		if (filter) {
			if (
				filter !== "" &&
				CITIES.some(
					(city) =>
						city.region === region &&
						city.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1
				)
			) {
				setOn(true);
			} else {
				setOn(false);
			}
		} else {
			setOn(false);
		}
	}, [region, filter]);

	console.log(label, on);

	return (
		<div className="group flex flex-col">
			<button
				onClick={() => {
					if (onClick) {
						onClick();
					}
				}}
				style={{
					marginTop: mt ? JSON.stringify(mt * 4) + "px" : "0px",
					marginBottom: mb ? JSON.stringify(mb * 4) + "px" : "0px",
					height: JSON.stringify(height) + "px",
					width: JSON.stringify(width) + "px",
				}}
				disabled={disabled}
				className={`${roundedClassName} relative flex flex-row items-center justify-center gap-x-5 shadow-xl ${
					fit && "h-full w-full"
				}`}
			>
				<div
					className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ${
						on ? "bg-yellowText" : "bg-white"
					} ${roundedClassName} flex flex-row overflow-hidden`}
				>
					<div
						className={`w-0 bg-darkBrown  transition-all duration-500 group-hover:w-full`}
					/>
					<div
						className={`w-full transition-all duration-500 group-hover:w-0`}
					/>
				</div>
				<div
					className={`flex w-full flex-row items-center justify-center gap-x-5 text-lightBrown transition-all duration-200 group-hover:text-white`}
				>
					{leftIcon && <div className={"z-40"}>{leftIcon}</div>}
					<div className="z-40 font-bold">{label}</div>
					{rightIcon && <div className={"z-40"}>{rightIcon}</div>}
				</div>
			</button>
			<div className="pl-5">
				<div
					className={`h-0 w-0 border-l-4 border-r-4 border-t-[20px] border-l-transparent border-r-transparent transition-all duration-300 ${
						on ? "border-yellowText" : "border-t-white"
					} shadow-xl transition-all duration-500 group-hover:border-t-darkBrown`}
				/>
			</div>
		</div>
	);
};

export default LocationButton;
