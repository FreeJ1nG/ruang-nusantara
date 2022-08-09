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
	type: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({
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
	type,
}) => {
	const roundedClassName = `${rounded === "sm" && "rounded-sm"} ${
		rounded === "md" && "rounded-md"
	} ${rounded === "lg" && "rounded-lg"} ${rounded === "xl" && "rounded-xl"} ${
		rounded === "2xl" && "rounded-2xl"
	} ${rounded === "3xl" || (rounded === undefined && "rounded-3xl")}`;

	return (
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
			className={`${roundedClassName} disabled:cursor-not-allowed group relative flex flex-row gap-x-5 items-center justify-center ${
				fit && "w-full h-full"
			}`}
		>
			<div
				className={`${type === "primary" && "bg-lightBrown"} ${
					type === "secondary" && "bg-white border-2 border-lightBrown/60"
				} absolute top-0 left-0 right-0 bottom-0 ${roundedClassName} overflow-hidden flex flex-row`}
			>
				<div
					className={`transition-all duration-500 w-0 group-hover:w-full ${
						type === "primary" && "bg-darkBrown"
					} ${type === "secondary" && "bg-lightBrown"}`}
				/>
				<div className={`transition-all duration-500 w-full group-hover:w-0`} />
			</div>
			<div
				className={`${type === "primary" && "text-white"} ${
					type === "secondary" && "text-lightBrown group-hover:text-white"
				} w-full flex flex-row gap-x-5 justify-center items-center transition-all duration-200`}
			>
				{leftIcon && <div className={"z-40"}>{leftIcon}</div>}
				<div className="font-bold z-40">{label}</div>
				{rightIcon && <div className={"z-40"}>{rightIcon}</div>}
			</div>
		</button>
	);
};

export default Button;
