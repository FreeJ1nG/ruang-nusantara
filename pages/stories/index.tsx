import { Interests, split } from "$constants/constants";
import { NewsGenre, STORIES } from "$constants/pages/stories/constants";
import React, { Component, FC, Ref, useEffect, useRef, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks/useWindowSize";

const amt: { [key: number]: number } = { 1: 2, 2: 2, 3: 3 };

const GenreButton: FC<{ onClick: Function; label: string }> = ({
	onClick,
	label,
}) => {
	return (
		<button
			onClick={() => onClick()}
			className="min-w-fit rounded-md border-[2px] border-gray bg-white px-6 py-1.5 font-semibold text-gray8 transition-all duration-300 hover:border-yellowText hover:text-lightBrown"
		>
			{label}
		</button>
	);
};

const NewsCard: FC<{
	imageSrc: string;
	title: string;
	description: string;
	interest: Interests;
	height: number;
}> = ({ imageSrc, title, description, interest, height }) => {
	return (
		<div className="group flex flex-col gap-y-5">
			<button
				style={{ height: JSON.stringify(height * 4) + "px" }}
				className="relative"
			>
				<Image
					src={imageSrc}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-md"
				/>
			</button>
			<button className="flex flex-col gap-y-2 text-left transition-all duration-300 group-hover:text-lightBrown">
				<div className="text-sm">{interest}</div>
				<div className="text-base font-bold">{title}</div>
			</button>
		</div>
	);
};

const NewsSection: FC<{ genre: NewsGenre }> = ({ genre }) => {
	const windowSize = useWindowSize();
	const [columns, setColumns] = useState<number>(3);
	const [storiesList, setStoriesList] = useState(
		split(
			STORIES.filter((story) => story.genres.includes(genre)),
			columns
		)
	);

	useEffect(() => {
		if ((windowSize.width ?? 0) >= 1000) {
			setColumns(3);
		} else if ((windowSize.width ?? 0) >= 700) {
			setColumns(2);
		} else {
			setColumns(1);
		}
	}, [windowSize]);

	useEffect(() => {
		setStoriesList(
			split(
				STORIES.filter((story) => story.genres.includes(genre)),
				amt[columns]
			)
		);
	}, [columns, genre]);

	class ExternalControlledCarousel extends Component<
		{},
		{ currentSlide: number; autoPlay: boolean }
	> {
		constructor(props: any) {
			super(props);

			this.state = {
				currentSlide: 0,
				autoPlay: false,
			};
		}

		change = (new_id: number) => {
			this.setState((state) => ({
				currentSlide: new_id,
			}));
		};

		next = () => {
			this.setState((state) => ({
				currentSlide: state.currentSlide + 1,
			}));
		};

		prev = () => {
			this.setState((state) => ({
				currentSlide: state.currentSlide - 1,
			}));
		};

		updateCurrentSlide = (index: number) => {
			const { currentSlide } = this.state;

			if (currentSlide !== index) {
				this.setState({
					currentSlide: index,
				});
			}
		};

		render() {
			return (
				<div className="flex flex-col gap-y-5">
					<div className="flex flex-col">
						<div className="w-fit bg-lightBrown py-1 px-4 text-white">
							{genre}
						</div>
						<div className="h-0.5 w-full bg-lightBrown" />
					</div>
					<Carousel
						showArrows={false}
						showStatus={false}
						infiniteLoop={true}
						showIndicators={false}
						showThumbs={false}
						selectedItem={this.state.currentSlide}
						onChange={this.updateCurrentSlide}
						{...this.props}
					>
						{storiesList.map((stories) => (
							<div
								key={stories.id}
								className={`grid gap-5 ${
									columns === 3 && "grid-cols-3 grid-rows-1"
								} ${columns === 2 && "grid-cols-2 grid-rows-1"} ${
									columns === 1 && "grid-cols-1 grid-rows-2"
								}`}
							>
								{stories.value.map((story) => (
									<NewsCard key={story.id} height={60} {...story} />
								))}
							</div>
						))}
					</Carousel>
					<div className="mt-5 flex gap-x-5">
						<button
							onClick={this.prev}
							className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
						>
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
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							onClick={this.next}
							className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
						>
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
						</button>
					</div>
				</div>
			);
		}
	}

	return <ExternalControlledCarousel />;
};

const Stories: FC = () => {
	const staycationRef = useRef<HTMLDivElement>(null);
	const hikingRef = useRef<HTMLDivElement>(null);
	const familyTripsRef = useRef<HTMLDivElement>(null);
	const covidRef = useRef<HTMLDivElement>(null);
	const travelRef = useRef<HTMLDivElement>(null);

	return (
		<div className="flex flex-col py-24 px-5 sm:px-14 md:px-20 lg:px-40 2xl:px-80">
			<div className="flex w-full gap-x-5 overflow-auto">
				<GenreButton
					onClick={() =>
						staycationRef.current?.scrollIntoView({ behavior: "smooth" })
					}
					label="Staycation"
				/>
				<GenreButton
					onClick={() =>
						hikingRef.current?.scrollIntoView({ behavior: "smooth" })
					}
					label="Hiking"
				/>
				<GenreButton
					onClick={() =>
						familyTripsRef.current?.scrollIntoView({ behavior: "smooth" })
					}
					label="Family Trips"
				/>
				<GenreButton
					onClick={() =>
						covidRef.current?.scrollIntoView({ behavior: "smooth" })
					}
					label="COVID Updates"
				/>
				<GenreButton
					onClick={() =>
						travelRef.current?.scrollIntoView({ behavior: "smooth" })
					}
					label="Travel Guidelines"
				/>
			</div>
			<div className="flex flex-col gap-y-10 py-10">
				<div ref={staycationRef} className="pt-8">
					<NewsSection genre={NewsGenre.STAYCATION} />
				</div>
				<div ref={hikingRef} className="pt-8">
					<NewsSection genre={NewsGenre.HIKING} />
				</div>
				<div ref={familyTripsRef} className="pt-8">
					<NewsSection genre={NewsGenre.FAMILY_TRIP} />
				</div>
				<div ref={covidRef} className="pt-8">
					<NewsSection genre={NewsGenre.COVID_NEWS} />
				</div>
				<div ref={travelRef} className="pt-8">
					<NewsSection genre={NewsGenre.TRAVEL_GUIDELINES} />
				</div>
			</div>
		</div>
	);
};

export default Stories;
