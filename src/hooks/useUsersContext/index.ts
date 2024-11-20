import { UsersContext } from "@/contexts";
import { useContext } from "react";

export const useUsersContext = () => useContext(UsersContext);
