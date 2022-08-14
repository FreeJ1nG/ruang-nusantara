import { createContext } from "react";

export type Users = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	bookings: [];
};

export const UsersContext = createContext<Users[]>([]);
