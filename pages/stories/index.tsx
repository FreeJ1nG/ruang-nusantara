import { FC } from "react";

const GenreButton: FC<{ label: string }> = ({ label }) => {
	return (
		<button className="min-w-fit rounded-md border-[2px] border-gray bg-white px-6 py-1.5 font-semibold text-gray8 transition-all duration-300 hover:border-yellowText hover:text-lightBrown">
			{label}
		</button>
	);
};

const Stories: FC = () => {
	return (
		<div className="flex flex-col py-24 px-5 sm:px-14 md:px-20 lg:px-40 2xl:px-80">
			<div className="flex w-full gap-x-5 overflow-auto">
				<GenreButton label="Staycation" />
				<GenreButton label="Hiking" />
				<GenreButton label="Family Trips" />
				<GenreButton label="COVID Updates" />
				<GenreButton label="Travel Guidelines" />
			</div>
		</div>
	);
};

export default Stories;
