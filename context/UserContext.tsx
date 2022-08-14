import { DatasType } from "$constants/pages/trips/constants";
import { UserStatus } from "$constants/constants";
import { createContext } from "react";

export type UserType = {
	status: UserStatus;
	first_name: string | null;
	last_name: string | null;
	email: string | null;
	password: string | null;
	bookings: DatasType[];
};

export const UserContext = createContext<UserType>({
	status: UserStatus.NOT_LOGGED_IN,
	first_name: null,
	last_name: null,
	email: null,
	password: null,
	bookings: [],
});
