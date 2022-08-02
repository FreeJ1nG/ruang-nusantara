import { Genres } from "../../constants";

export type ProductCardProps = {
	id?: number | undefined;
	title: string;
	imageSrc: string;
	rating: number;
	reviews: number;
	price: number;
	genres: Genres[];
};
