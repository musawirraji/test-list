"use client";
import { User } from "@/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import userData from "../../mockData/users.json";

interface UserContextType {
  users: User[];
  isLoading: boolean;
  getUserData: (userId?: number) => User | undefined;
}

export const UsersContext = createContext<UserContextType>({
  users: [],
  isLoading: false,
  getUserData: () => {
    return undefined;
  },
});

type UsersProviderProps = {
  children: ReactNode;
};
export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUserData = useCallback(
    (userId?: number) => users.find(({ id }) => id === userId),
    [users]
  );

  useEffect(() => {
    setIsLoading(true);

    setUsers(userData);

    setIsLoading(false);
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        getUserData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
