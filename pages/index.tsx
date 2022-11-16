import { FC, useContext } from "react";

import Button from "../components/Button/Button";
import DestinationsCard from "../components/DestinationsCard/index";
import Image from "next/image";
import { IndoContext } from "../context/IndoContext";
import type { NextPage } from "next";
import TripsCard from "../components/TripsCard/index";
import { useRouter } from "next/router";

type PropTypes = {
  indo: boolean;
};

const Home: NextPage = () => {
  const indo = useContext(IndoContext);

  return (
    <div className="flex w-full flex-col">
      <HomepageCard indo={indo} />
      <DestinationsCard />
      <TripsCard />
    </div>
  );
};

// type DestinationElementProps = {
// 	to: string;
// 	imageSrc: string;
// 	title: string;
// 	description: string;
// };

// const DestinationElement: FC<DestinationElementProps> = ({
// 	to,
// 	imageSrc,
// 	title,
// 	description,
// 	destination,
// }) => {
// 	return (
// 		<div className="group relative w-full sm:w-1/3 md:w-1/4 xl:w-1/5 h-[450px] xl:h-[600px]">
// 			<Image
// 				src={imageSrc}
// 				layout="fill"
// 				objectFit="cover"
// 				alt={title}
// 				className="rounded-3xl"
// 			/>
// 			<button className="text-transparent hover:text-black absolute top-0 bottom-0 left-0 right-0 transition-all duration-200 bg-transparent hover:bg-whiteCover/60 rounded-3xl z-60">
// 				<div className="w-full h-full px-10 sm:px-5 xl:px-8 flex flex-col gap-y-5 justify-center">
// 					<h1 className="font-bold text-2xl xl:text-3xl text-left">{title}</h1>
// 					<h1 className="font-normal text-sm md:text-base xl:text-lg text-left">
// 						{description}
// 					</h1>
// 					<div className="transition-all duration-200 flex flex-row rounded-3xl justify-center items-center gap-x-2 w-32 h-12 text-transparent group-hover:text-white group-hover:bg-lightBrown">
// 						<h1 className="font-bold">More</h1>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							className="h-6 w-6"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							stroke="currentColor"
// 							strokeWidth={2}
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M9 5l7 7-7 7"
// 							/>
// 						</svg>
// 					</div>
// 				</div>
// 			</button>
// 		</div>
// 	);
// };

const HomepageCard: FC<PropTypes> = ({ indo }) => {
  const router = useRouter();

  return (
    <div className="relative flex h-[calc(100vh-80px)] w-full flex-row items-center gap-x-10 overflow-hidden text-white">
      <Image
        src="/homepagebg.jpg"
        alt="Homepage Background"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
      />
      <div className="z-60 mx-8 flex w-full flex-col justify-center gap-y-10 sm:mx-20 md:w-[800px]">
        <h1 className="text-center font-poppins text-2xl font-bold text-white drop-shadow-2xl sm:text-3xl md:text-left lg:text-4xl xl:text-5xl 2xl:text-6xl">
          {indo
            ? "Rasakan Penjalanan yang Tidak Terlupakan"
            : "Discover story-worthy moments with us!"}
        </h1>
        <h1 className="w-full text-center font-ubuntu text-sm font-normal text-white sm:text-lg md:w-[400px] md:text-left xl:text-xl">
          {indo
            ? "Siapkan diri Anda untuk perjalanan yang tak terlupakan"
            : "Pack your bag, set your sights, and get ready for a memorable trip"}
        </h1>
        <div className="flex justify-center text-base font-medium md:justify-start md:text-lg">
          <Button
            label={indo ? "Pesan sekarang!" : "Book a trip!"}
            width={260}
            height={50}
            mt={10}
            type="primary"
            onClick={() => router.push("/destinations")}
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
