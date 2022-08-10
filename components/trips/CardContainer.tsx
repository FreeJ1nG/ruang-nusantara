import { FC, ReactNode } from "react";

const CardContainer: FC<{ children: ReactNode; chosen: boolean }> = ({
	children,
	chosen,
}) => {
	return (
		<div
			className={`relative overflow-hidden rounded-xl border-2 border-gray7 bg-white ${
				chosen && "bg-greenHover/30"
			} hover:bg-greenHover/30 transition-all duration-300`}
		>
			{children}
			<div
				className={`absolute top-4 right-4 transition-all duration-300 text-transparent ${
					chosen && "text-greenHover"
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default CardContainer;
