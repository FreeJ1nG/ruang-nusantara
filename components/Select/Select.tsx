import { FC, ReactNode, useEffect, useRef, useState } from "react";

type SelectProps = {
	label: string | ReactNode;
	selected: any;
	setSelected: Function;
	options: { id: number; value: any }[];
	fit?: boolean | undefined;
};

const Select: FC<SelectProps> = ({
	label,
	selected,
	setSelected,
	options,
	fit,
}) => {
	const selectedRef = useRef<HTMLButtonElement>(null);
	const selectionRef = useRef<HTMLDivElement>(null);
	const [showMore, setShowMore] = useState<boolean>(false);

	useEffect(() => {
		const handler = (e: any) => {
			if (
				selectedRef.current &&
				!selectedRef.current.contains(e.target) &&
				selectionRef.current &&
				!selectionRef.current.contains(e.target)
			) {
				setShowMore(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, [selectedRef, selectionRef]);

	return (
		<div className="relative flex flex-col gap-y-2">
			<div className="flex flex-col gap-y-2 z-80">
				<h1 className="font-ubuntu">{label}</h1>
				<button
					onClick={() => setShowMore(!showMore)}
					ref={selectedRef}
					className={`${
						fit ? "w-full" : "w-80"
					} font-medium outline-none rounded-md border-2 ${
						showMore ? "border-selectedBorder" : "border-selectBorder/50"
					} bg-white text-black transition-all duration-300 text-left px-5 py-2 flex items-center justify-between`}
				>
					{selected}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={`h-6 w-6 transition-all duration-300 ${
							showMore && "rotate-180"
						}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
			<div
				ref={selectionRef}
				className={`absolute z-100 top-[84px] ${fit ? "w-full" : "w-80"}`}
			>
				<div
					className={`w-full ${
						showMore ? "h-full" : "h-0"
					} transition-all duration-300 rounded-md border-2 ${
						showMore ? "border-selectedBorder" : "border-transparent"
					} flex flex-col text-black overflow-hidden`}
				>
					{options.map((option) => {
						return (
							<button
								key={option.id}
								onClick={() => {
									setSelected(option.value);
									setShowMore(false);
								}}
								className={`text-left px-5 ${
									showMore ? "h-12 text-black" : "h-0 text-transparent"
								} bg-white transition-all duration-300 flex items-center font-medium hover:bg-amber-300`}
							>
								{option.value}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Select;
