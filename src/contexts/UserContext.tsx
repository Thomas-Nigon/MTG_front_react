import { createContext, useState } from "react";
import { myUserContext, UserContextType } from "../types-d";

const defaultUser: myUserContext = {
  id: "1",
  name: "Thomas",
  email: "thomas@gmail.com",
  role: "user",
  isLogged: true,
  avatar: "",
};

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  defaultUser: defaultUser,
  setUser: () => {},
});
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser, defaultUser }}>
      {children}
    </UserContext.Provider>
  );
}
