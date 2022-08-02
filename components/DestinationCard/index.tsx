import { FC } from "react";
import Image from "next/image";
import { Interests } from "../../constants";
import { useRouter } from "next/router";

type ElementProps = {
	id: number;
	region: string;
	categories: Interests[];
	title: string;
	imageSrc: string;
};

const DestinationCard: FC<ElementProps> = ({
	id,
	region,
	categories,
	title,
	imageSrc,
}) => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/destinations/${id}`)}
			className={`w-full flex justify-center rounded-xl shadow-lg`}
		>
			<div className="w-full flex flex-col items-start gap-y-2 font-ubuntu">
				<div className="relative w-full h-60">
					<Image
						src={imageSrc}
						layout="fill"
						objectFit="cover"
						alt={title}
						className="rounded-tl-xl rounded-tr-xl"
					/>
				</div>
				<div className="flex flex-col gap-y-2 py-3 pb-8 px-5">
					<div className="flex flex-row items-center gap-x-4 text-sm font-medium">
						<h1 className="text-xs sm:text-sm text-center">{region}</h1>
						<div className="w-1 h-1 rounded-full bg-gray" />
						<h1 className="text-gray text-xs text-center">{categories[0]}</h1>
					</div>
					<h1 className="text-xl lg:text-2xl leading-none font-bold text-left">
						{title}
					</h1>
				</div>
			</div>
		</button>
	);
};

export default DestinationCard;
