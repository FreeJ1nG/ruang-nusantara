import { FC, ReactNode } from "react";

type ButtonProps = {
	onClick?: Function | undefined;
	label: string | ReactNode;
	disabled?: boolean | undefined;
	align?: "left" | "right" | "center" | "justify" | undefined;
	footer?: boolean | undefined;
	blackText?: boolean | undefined;
};

const TertiaryButton: FC<ButtonProps> = ({
	onClick,
	label,
	disabled,
	align,
	footer,
	blackText,
}) => {
	return (
		<div
			onClick={() => {
				if (onClick) onClick();
			}}
		>
			<button>
				<h1
					className={`transition-all duration-75 hover:text-yellowText ${
						blackText && "text-black"
					} ${footer && "text-footerText"} text-sm font-medium md:text-lg ${
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

export default TertiaryButton;
