import { FC, useContext } from "react";

import Button from "$components/Button/Button";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { PropsType } from "$constants/pages/trips/constants";
import { TripStage } from "$constants/pages/trips/constants";

const LandingCard: FC<PropsType> = ({ setStage, stage }) => {
	const indo = useContext(IndoContext);

	return (
		<div className="relative flex h-[calc(100vh-80px)] w-full flex-row text-white">
			<div className="absolute top-10 left-0 h-[125px] w-[250px] sm:top-auto sm:bottom-10 sm:h-[200px] sm:w-[400px] xl:h-[300px] xl:w-[600px]">
				<Image src="/trips/megamendung.png" alt="Megamendung" layout="fill" />
			</div>
			<div className="absolute bottom-10 right-0 h-1/2 w-full xl:w-2/3">
				<Image
					src="/homepage_map.png"
					layout="fill"
					objectFit="cover"
					alt="Map"
				/>
			</div>
			<div className="flex w-full items-center justify-center gap-x-5 xl:gap-x-20">
				<div className="relative hidden sm:w-[400px] md:block md:h-[400px] xl:h-[600px] xl:w-[600px]">
					<Image src="/trips/globe.png" layout="fill" alt="Homepage Image" />
				</div>
				<div className="flex flex-col justify-center gap-y-10 px-10 md:w-2/5 md:px-0 xl:w-1/2">
					<div className="text-center font-ubuntu text-xl font-bold text-black drop-shadow-2xl sm:text-2xl md:text-left lg:text-3xl xl:text-4xl 2xl:text-6xl">
						{indo
							? "Rasakan Penjalanan yang Tidak Terlupakan"
							: "Experience world-class trip with Us"}
					</div>
					<h1 className="text-center text-lg font-normal text-lightBrown drop-shadow-2xl sm:text-xl md:text-left xl:text-2xl">
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
		</div>
	);
};

export default LandingCard;
