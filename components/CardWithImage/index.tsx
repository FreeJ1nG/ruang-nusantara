import { FC, ReactNode, useState } from "react";
import { Genres, Interests, Regions, Sorts } from "../../constants/constants";

import Image from "next/image";

type CardWithImageProps = {
	width?: number | undefined;
	height?: number | undefined;
	imageSrc: string;
	label: ReactNode;
	value: Interests | Genres | Regions | Sorts;
	list: any[];
	setList: Function;
};

const CardWithImage: FC<CardWithImageProps> = ({
	width,
	height,
	imageSrc,
	label,
	value,
	list,
	setList,
}) => {
	const [on, setOn] = useState<boolean>(false);

	return (
		<button
			onClick={() => {
				if (on) {
					setList(list.filter((elm) => elm !== value));
				} else {
					setList([...list, value]);
				}
				setOn(!on);
			}}
			style={{
				width: JSON.stringify(width) + "px",
				height: JSON.stringify(height) + "px",
			}}
			className={`p-5 transition-all duration-300 ${
				on && "bg-yellowText"
			} flex flex-col gap-y-2 justify-center items-center rounded-xl shadow-md`}
		>
			<div className="relative w-24 h-32">
				<Image src={imageSrc} alt={value} layout="fill" />
			</div>
			<div className="font-ubuntu font-medium">{label}</div>
		</button>
	);
};

export default CardWithImage;
