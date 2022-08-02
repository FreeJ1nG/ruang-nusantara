import { FC } from "react";
import Image from "next/image";
import { ProductCardProps } from "./constants";
import { ToRupiahFormat } from "../../constants";

const ProductCard: FC<ProductCardProps> = ({
	title,
	imageSrc,
	rating,
	reviews,
	price,
	genres,
}) => {
	return (
		<button className="relative text-left w-full h-full flex flex-col rounded-xl drop-shadow-xl bg-white">
			<div className="relative w-full h-52">
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-tl-xl rounded-tr-xl"
				/>
			</div>
			<div className="w-full h-52 flex flex-col justify-between gap-y-5 p-5">
				<div className="flex flex-col gap-y-2">
					<h1 className="font-medium font-ubuntu text-base md:text-base xl:text-lg">
						{title}
					</h1>
					<h1 className="text-sm font-ubuntu text-productCardGray">
						{genres.join(", ")}
					</h1>
				</div>
				<div className="flex flex-col gap-y-2">
					<div className="flex flex-row gap-x-4 text-xs md:text-sm">
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
						<h1 className="text-gray">|</h1>
						<h1>{reviews} reviews</h1>
					</div>
					<div className="text-2xl font-semibold font-poppins text-orange text-right">
						Rp{ToRupiahFormat(price)}
					</div>
				</div>
			</div>
		</button>
	);
};

export default ProductCard;
