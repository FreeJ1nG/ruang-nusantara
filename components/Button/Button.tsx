import { FC, ReactNode } from "react";

import toast from "react-hot-toast";

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
	type,
}) => {
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
			className={`group relative flex flex-row gap-x-5 items-center justify-center rounded-3xl ${
				fit && "w-full h-full"
			}`}
		>
			<div
				className={`${type === "primary" && "bg-lightBrown"} ${
					type === "secondary" && "bg-white border-2 border-lightBrown/60"
				} absolute top-0 left-0 right-0 bottom-0 rounded-3xl overflow-hidden flex flex-row`}
			>
				<div
					className={`transition-all duration-500 w-0 group-hover:w-full ${
						type === "primary" && "bg-darkBrown"
					} ${type === "secondary" && "bg-yellow-400"}`}
				/>
				<div className={`transition-all duration-500 w-full group-hover:w-0`} />
			</div>
			<div
				className={`${type === "primary" && "text-white"} ${
					type === "secondary" && "text-lightBrown"
				} w-full flex flex-row gap-x-5 justify-center items-center`}
			>
				{leftIcon && <div className={"z-40"}>{leftIcon}</div>}
				<h1 className="font-bold z-40">{label}</h1>
				{rightIcon && <div className={"z-40"}>{rightIcon}</div>}
			</div>
		</button>
	);
};

export default Button;
