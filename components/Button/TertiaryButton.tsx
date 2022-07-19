import { FC, ReactNode } from "react";

type ButtonProps = {
	onClick?: Function | undefined;
	label: string | ReactNode;
	disabled?: boolean | undefined;
	align?: "left" | "right" | "center" | "justify" | undefined;
};

const Button: FC<ButtonProps> = ({ onClick, label, disabled, align }) => {
	return (
		<div
			onClick={() => {
				if (onClick) onClick();
			}}
			className="w-full"
		>
			<button>
				<h1
					className={`transition-all duration-75 hover:text-lightBrown text-footerText font-medium text-sm md:text-lg ${
						align === "left" && "text-left"
					} ${align === "center" && "text-center"} ${
						align === "right" && "text-right"
					} ${align === "justify" && "text-justify"}`}
				>
					{label}
				</h1>
			</button>
		</div>
	);
};

export default Button;
