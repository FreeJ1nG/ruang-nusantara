import { FC, useEffect, useRef, useState } from "react";

import { DestinationType } from "$constants/pages/destinations/constants";

const LocationButton: FC<{
	destination: DestinationType;
	chosen: number;
	setChosen: Function;
}> = ({ destination, chosen, setChosen }) => {
	const [clicked, setClicked] = useState<boolean>(chosen === destination.id);

	useEffect(() => {
		setClicked(chosen === destination.id);
	}, [chosen, destination.id]);

	const divRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handler = (e: any) => {
			if (divRef.current && !divRef.current.contains(e.target)) {
				setClicked(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);

	return (
		<div ref={divRef} className="flex flex-col gap-y-2 items-center">
			<div className="flex flex-col pointer-events-none">
				<div
					className={`transition-all duration-300 p-2 ${
						clicked ? "bg-white" : "bg-transparent"
					} flex flex-col gap-y-1 py-2 px-5 items-center justify-center rounded-md`}
				>
					<h1
						className={`transition-all duration-300 ${
							clicked ? "text-black" : "text-transparent"
						} text-xs font-bold`}
					>
						{destination.title}
					</h1>
					<h1
						className={`transition-all duration-300 ${
							clicked ? "text-black" : "text-transparent"
						} text-xs`}
					>
						{destination.region}
					</h1>
				</div>
				<div className="flex justify-center">
					<div
						className={`shadow-xl w-0 h-0 border-l-4 border-l-transparent border-r-transparent border-r-4 ${
							clicked ? "border-t-white" : "border-t-transparent"
						}  border-t-8 transition-all duration-500`}
					/>
				</div>
			</div>
			<button
				onClick={() => {
					setClicked(true);
					setChosen(destination.id);
				}}
				className={`transition ease-in-out duration-300 ${
					clicked ? "scale-125" : "scale-100"
				}`}
			>
				<picture>
					<img src="/location_pin.png" alt="Location Pin" className="w-6 h-8" />
				</picture>
			</button>
		</div>
	);
};

export default LocationButton;
