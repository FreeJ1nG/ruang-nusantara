import { Months, Recommendations, To_Month } from "../../constants/constants";

export type MonthCardType = {
	month: Months;
	recommend: Recommendations;
	lowestTemp: number;
	highestTemp: number;
};

export const MonthCards: MonthCardType[] = [
	{
		month: To_Month[0],
		recommend: Recommendations.TOO_CROWDED,
		lowestTemp: 12,
		highestTemp: 30,
	},
	{
		month: To_Month[1],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 12,
		highestTemp: 30,
	},
	{
		month: To_Month[2],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 16,
		highestTemp: 30,
	},
	{
		month: To_Month[3],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 18,
		highestTemp: 30,
	},
	{
		month: To_Month[4],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 19,
		highestTemp: 30,
	},
	{
		month: To_Month[5],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 15,
		highestTemp: 30,
	},
	{
		month: To_Month[6],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 20,
		highestTemp: 30,
	},
	{
		month: To_Month[7],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 23,
		highestTemp: 32,
	},
	{
		month: To_Month[8],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 23,
		highestTemp: 31,
	},
	{
		month: To_Month[9],
		recommend: Recommendations.SECOND_BEST,
		lowestTemp: 23,
		highestTemp: 30,
	},
	{
		month: To_Month[10],
		recommend: Recommendations.OUR_PICK,
		lowestTemp: 21,
		highestTemp: 30,
	},
	{
		month: To_Month[11],
		recommend: Recommendations.OFF_SEASON,
		lowestTemp: 17,
		highestTemp: 30,
	},
];
