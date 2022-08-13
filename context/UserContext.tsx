import { UserStatus } from "$constants/constants";
import { createContext } from "react";

export const UserContext = createContext(UserStatus.NOT_LOGGED_IN);
