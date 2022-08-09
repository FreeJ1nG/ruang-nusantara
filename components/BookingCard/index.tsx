import { Interests, Regions, ToRupiahFormat } from "../../constants/constants";

import { FC } from "react";
import Image from "next/image";

type BookingCardProps = {
	imageSrc: string;
	categories: Interests[];
	region: Regions;
	title: string;
	rating: number;
	reviews: number;
	days: number;
	price: number;
	trending?: boolean | undefined;
	onClick?: Function | undefined;
};

const BookingCard: FC<BookingCardProps> = ({
	imageSrc,
	categories,
	region,
	title,
	rating,
	reviews,
	days,
	price,
	trending,
	onClick,
}) => {
	return (
		<button
			onClick={() => {
				if (onClick) onClick();
			}}
			className="relative w-full flex flex-col justify-between rounded-xl shadow-lg"
		>
			<div className="w-full text-left flex flex-col">
				<div className="relative w-full h-52">
					<Image
						src={imageSrc}
						alt={title}
						layout="fill"
						objectFit="cover"
						className="rounded-tl-xl rounded-tr-xl"
						objectPosition="center"
					/>
					{trending && (
						<div className="absolute top-4 right-4">
							<div className="px-4 py-1 text-xs font-black flex justify-center rounded-3xl bg-red-600 text-white">
								TRENDING
							</div>
						</div>
					)}
				</div>
				<div className="p-5 w-full flex flex-col gap-y-1">
					<div className="text-xs flex flex-row gap-x-4 items-center font-semibold">
						<h1 className="text-xs text-center">{region}</h1>
						<div className="w-1.5 h-1.5 rounded-full bg-whiteCover" />
						<h1 className="text-gray text-xs text-center">{categories[0]}</h1>
					</div>
					<h1 className="font-bold font-poppins leading-2 text-base md:text-lg xl:text-2xl">
						{title}
					</h1>
					<div className="flex flex-row gap-x-5 text-xs">
						<div className="flex flex-row gap-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 fill-yellowText"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							{rating}
						</div>
						<h1>|</h1>
						<h1>{reviews} reviews</h1>
					</div>
					<h1 className="text-xs">{`${days} Day${days > 1 && "s"} ${
						days === 1 ? "" : days - 1
					} Nights`}</h1>
				</div>
				<div className="py-5 px-5 w-full"></div>
				<div className="absolute bottom-4 right-4 text-2xl font-bold text-orange">
					Rp{ToRupiahFormat(price)}
				</div>
			</div>
		</button>
	);
};

export default BookingCard;
