import { FC, ReactNode } from "react";

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
}) => {
	const roundedClassName = `${rounded === "sm" && "rounded-sm"} ${
		rounded === "md" && "rounded-md"
	} ${rounded === "lg" && "rounded-lg"} ${rounded === "xl" && "rounded-xl"} ${
		rounded === "2xl" && "rounded-2xl"
	} ${rounded === "3xl" || (rounded === undefined && "rounded-3xl")}`;

	return (
		<div className="flex flex-col group">
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
				className={`${roundedClassName} shadow-xl relative flex flex-row gap-x-5 items-center justify-center ${
					fit && "w-full h-full"
				}`}
			>
				<div
					className={`bg-white absolute top-0 left-0 right-0 bottom-0 ${roundedClassName} overflow-hidden flex flex-row`}
				>
					<div
						className={`transition-all duration-500 w-0 group-hover:w-full bg-darkBrown`}
					/>
					<div
						className={`transition-all duration-500 w-full group-hover:w-0`}
					/>
				</div>
				<div
					className={`text-lightBrown group-hover:text-white w-full flex flex-row gap-x-5 justify-center items-center transition-all duration-200`}
				>
					{leftIcon && <div className={"z-40"}>{leftIcon}</div>}
					<div className="font-bold z-40">{label}</div>
					{rightIcon && <div className={"z-40"}>{rightIcon}</div>}
				</div>
			</button>
			<div className="pl-5">
				<div className="shadow-xl w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[20px] border-t-white group-hover:border-t-darkBrown transition-all duration-500" />
			</div>
		</div>
	);
};

export default LocationButton;
