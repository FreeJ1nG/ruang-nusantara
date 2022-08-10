import { FC, useContext } from "react";

import Button from "../../../components/Button/Button";
import Image from "next/image";
import { IndoContext } from "../../../context/IndoContext";
import { PropsType } from "../../../constants/pages/trips/constants";
import { TripStage } from "../../../constants/pages/trips/constants";

const LandingCard: FC<PropsType> = ({ setStage, stage }) => {
	const indo = useContext(IndoContext);

	return (
		<div className="relative w-full h-screen flex flex-row text-white">
			<div className="absolute bottom-10 left-0 xl:w-[600px] xl:h-[300px]">
				<Image src="/trips/megamendung.png" alt="Megamendung" layout="fill" />
			</div>
			<div className="absolute top-0 bottom-0 right-0 w-full md:w-2/3 xl:w-1/2 h-full">
				<Image
					src="/trips/globe.png"
					layout="fill"
					objectFit="cover"
					objectPosition="top"
					alt="Homepage Image"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 md:left-20 px-10 md:px-0 w-full md:w-2/5 flex flex-col gap-y-10 justify-center z-60">
				{indo ? (
					<div className="font-ubuntu text-black drop-shadow-2xl text-center md:text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
						Rasakan Penjalanan yang Tidak Terlupakan
					</div>
				) : (
					<h1 className="font-ubuntu text-black drop-shadow-2xl text-center md:text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
						Experience world-class trip with Us
					</h1>
				)}
				<h1 className="text-lightBrown drop-shadow-2xl font-normal text-center md:text-left text-lg sm:text-xl xl:text-2xl">
					{indo
						? "Rasakan perjalanan yang tidak akan Anda lupakan"
						: "Pack your bag, set your sights, and get ready for a memorable trip"}
				</h1>
				<div className="flex justify-center md:justify-start">
					<Button
						label="Start the tour"
						rightIcon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						}
						type="primary"
						width={250}
						height={50}
						mt={14}
						onClick={() => setStage(TripStage.MAP)}
					/>
				</div>
			</div>
		</div>
	);
};

export default LandingCard;
