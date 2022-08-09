import { FC, ReactNode, useEffect, useRef, useState } from "react";

type SelectProps = {
	label: string | ReactNode;
	selected: any[];
	setSelected: Function;
	options: { id: number; value: any }[];
	placeholder?: string | undefined;
	fit?: boolean | undefined;
};

const Select: FC<SelectProps> = ({
	label,
	selected,
	setSelected,
	options,
	placeholder,
	fit,
}) => {
	const selectedRef = useRef<HTMLDivElement>(null);
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
	}, []);

	useEffect(() => {
		setShowMore(false);
	}, [selected]);

	return (
		<div className="relative flex flex-col gap-y-2 z-90">
			<div className="flex flex-col gap-y-2">
				<div className="font-ubuntu">{label}</div>
				<div
					ref={selectedRef}
					onClick={() => setShowMore(!showMore)}
					className={`${
						fit ? "w-full" : "w-80"
					} font-medium outline-none rounded-md border-2 ${
						showMore ? "border-selectedBorder" : "border-selectBorder/50"
					} bg-white text-black transition-all duration-300 text-left px-5 py-2 flex items-center justify-between`}
				>
					{selected.length === 0 && (
						<h1 className="text-gray3 font-medium">{placeholder}</h1>
					)}
					<div className="flex flex-row gap-x-4 gap-y-2 flex-wrap">
						{selected.map((value) => {
							return (
								<div key={value} className="flex flex-row items-center">
									<div className="pl-2 pr-2 py-1 text-xs bg-lightBrown text-white flex gap-x-2 items-center">
										{value}
									</div>
									<button
										onClick={() =>
											setSelected(selected.filter((option) => option !== value))
										}
										className="bg-yellowText hover:text-red-500 hover:bg-red-300 py-1 px-1"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
							);
						})}
					</div>
					<div className="min-w-[24px]">
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
					</div>
				</div>
			</div>
			<div
				ref={selectionRef}
				className={`absolute top-full mt-2 ${fit ? "w-full" : "w-80"}`}
			>
				<div
					className={`w-full ${
						showMore ? "h-full" : "h-0"
					} transition-all duration-300 rounded-md border-2 ${
						showMore ? "border-selectedBorder" : "border-transparent"
					} flex flex-col text-black overflow-hidden`}
				>
					{options
						.filter((option) => !selected.includes(option.value))
						.map((option) => {
							return (
								<button
									key={option.id}
									onClick={() => {
										if (!selected.includes(option.value)) {
											setSelected([...selected, option.value]);
										}
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
