import Image from "next/image";

export const FACEBOOK_ICON = () => {
	return (
		<button className="relative w-7 h-7 md:w-10 md:h-10">
			<Image src="/facebook.png" layout="fill" alt="Facebook Logo" />
		</button>
	);
};

export const INSTAGRAM_ICON = () => {
	return (
		<button className="relative w-7 h-7 md:w-10 md:h-10">
			<Image src="/instagram.png" layout="fill" alt="Instagram Logo" />
		</button>
	);
};

export const YOUTUBE_ICON = () => {
	return (
		<button className="relative w-7 h-7 md:w-10 md:h-10">
			<Image src="/youtube.png" layout="fill" alt="Youtube Logo" />
		</button>
	);
};
