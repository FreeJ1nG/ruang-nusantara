import { BIG_STORIES, STORIES, StoryProps } from "./constants";
import { FC, useContext, useEffect, useState } from "react";

import Button from "../Button/Button";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import { split } from "../../constants";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks/useWindowSize";

type PropTypes = {
	brownStyle?: boolean | undefined;
};

const TripsCard: FC<PropTypes> = ({ brownStyle }) => {
	const router = useRouter();
	const indo = useContext(IndoContext);
	const [storiesLists, setStoriesLists] = useState<
		{ id: number; value: StoryProps[] }[]
	>(split(STORIES, 2));
	const windowSize = useWindowSize();
	useEffect(() => {
		if ((windowSize.width ?? 0) >= 640) {
			setStoriesLists(split(STORIES, 2));
		} else {
			setStoriesLists(split(STORIES, 1));
		}
	}, [windowSize]);

	return (
		<div
			className={`${
				brownStyle && "bg-darkBrown3 text-white"
			} flex flex-col py-10 md:py-20 lg:py-40 px-5 md:px-14 lg:px-20 gap-y-5 sm:gap-y-8 md:gap-y-20`}
		>
			<div className="flex flex-col gap-y-2 md:gap-y-5">
				<h1 className="font-ubuntu font-medium tracking-wide text-center md:text-left">
					{indo ? "CERITA PERJALANAN" : "TRAVEL STORIES"}
				</h1>
				<div className="flex flex-col items-center md:flex-row gap-y-2 justify-between">
					<h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-center md:text-left">
						{indo
							? "Inspirasi Perjalanan"
							: "Get inspired from the latest stories"}
					</h1>
					<Button
						label="View all trips"
						type="secondary"
						width={250}
						height={35}
						onClick={() => router.push("/trips")}
					/>
				</div>
			</div>
			<div className="lg:h-[500px] xl:h-[650px] flex flex-col gap-y-10 lg:flex-row gap-x-5 xl:gap-x-14">
				<div className="bigcard h-[500px] xl:h-[650px] w-full lg:w-1/2 2xl:w-3/5 rounded-3xl shadow-2xl">
					<Carousel
						emulateTouch={true}
						showThumbs={false}
						showStatus={false}
						className="w-full"
					>
						{BIG_STORIES.map((story) => {
							return (
								<div key={story.id} className="rounded-3xl w-full">
									<BigStoryCard {...story} />
								</div>
							);
						})}
					</Carousel>
				</div>
				<div className="smallcard w-full lg:w-1/2 2xl:w-2/5">
					<Carousel
						emulateTouch={true}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						className="w-full"
					>
						{storiesLists.map((stories) => {
							return (
								<div
									key={stories.id}
									className="flex h-[500px] xl:h-[650px] flex-col gap-y-10 sm:flex-row items-center justify-center gap-x-5 xl:gap-x-10"
								>
									{stories.value.map((story) => (
										<StoryCard
											brownStyle={brownStyle}
											key={story.id}
											{...story}
										/>
									))}
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

type StoryCardProps = {
	brownStyle?: boolean | undefined;
	onClick?: Function;
	imageSrc: string;
	category: string;
	title: string;
	date: string;
	author: string;
	description: string;
};

const BigStoryCard: FC<StoryCardProps> = ({
	onClick,
	imageSrc,
	category,
	title,
	date,
	author,
	description,
}) => {
	return (
		<button
			onClick={() => {
				if (onClick) onClick();
			}}
			className="text-left rounded-3xl relative w-full h-[500px] xl:h-[650px]"
		>
			<div className="absolute bottom-0 top-0 left-0 right-0 bg-black/20 z-50 rounded-3xl"></div>
			<Image
				src={imageSrc}
				layout="fill"
				alt={title}
				className="rounded-3xl"
				objectFit="cover"
			/>
			<div className="text-sm md:text-base absolute left-0 right-0 bottom-10 md:bottom-20 flex flex-col gap-y-5 mx-10 mr-10 md:mr-20 xl:mr-60 font-medium font-ubuntu text-white z-60">
				<h1>{category}</h1>
				<h1 className="font-bold font-sanspro text-2xl lg:text-4xl">{title}</h1>
				<div className="flex flex-row gap-x-5 xl:gap-x-10 items-center">
					<h1>{date}</h1>
					<div className="w-2 h-2 rounded-full bg-white" />
					<h1>{author}</h1>
				</div>
				<h1 className="font-normal">{description}</h1>
			</div>
		</button>
	);
};

const StoryCard: FC<StoryCardProps> = ({
	onClick,
	brownStyle,
	imageSrc,
	category,
	title,
	date,
	author,
	description,
}) => {
	return (
		<button
			onClick={() => {
				if (onClick) onClick();
			}}
			className={`text-left h-[500px] xl:h-[650px] ${
				brownStyle && "bg-brownBg"
			} transition-all duration-200 border-gray hover:border-yellowText border-2 rounded-xl p-7 text-sm md:text-base font-ubuntu w-full sm:w-1/2 xl:w-1/2 flex flex-col gap-y-2 xl:gap-y-5`}
		>
			<div className="relative w-full h-80">
				<Image
					objectFit="cover"
					src={imageSrc}
					layout="fill"
					alt={title}
					className="rounded-full"
				/>
			</div>
			<h1
				className={`${
					brownStyle ? "text-lightBrownText" : "text-lighter"
				} text-xs md:text-sm tracking-wide`}
			>
				{category}
			</h1>
			<h1 className="font-bold font-poppins leading-2 text-base md:text-lg xl:text-xl">
				{title}
			</h1>
			<div
				className={`${
					brownStyle && "text-lightBrownText"
				} text-xs flex flex-row items-center gap-x-2`}
			>
				<h1>{date}</h1>
				<div className="w-1.5 h-1.5 rounded-full bg-lighter" />
				<h1>{author}</h1>
			</div>
			<h1 className={`tracking-wide text-xs ${brownStyle && "text-lighter3"}`}>
				{description}
			</h1>
		</button>
	);
};

export default TripsCard;
