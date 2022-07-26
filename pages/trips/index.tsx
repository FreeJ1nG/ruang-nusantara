import Button from "../../components/Button/Button";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import { useContext } from "react";

const Trips = () => {
	return (
		<div className="flex flex-col">
			<LandingCard />
		</div>
	);
};

const TripsDisplay = () => {};

const LandingCard = () => {
	const indo = useContext(IndoContext);

	return (
		<div className="relative w-full flex flex-row justify-end overflow-hidden h-screen text-white">
			<div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/20" />
			<div className="relative w-full h-full">
				<Image
					src="/trips/bromo.jpeg"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full md:w-2/5 flex flex-col gap-y-10 justify-center z-60">
				<h1 className="text-center md:text-left text-2xl sm:text-4xl xl:text-6xl font-bold">
					{indo
						? "Rasakan Penjalanan yang Tidak Terlupakan"
						: "Experience world-class trip with Us"}
				</h1>
				<h1 className="font-ubuntu font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
					{indo
						? ""
						: "Pack your bag, set your sights, and get ready for a memorable trip"}
				</h1>
			</div>
		</div>
	);
};

export default Trips;
