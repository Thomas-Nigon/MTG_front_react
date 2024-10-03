import { UserInterface } from "@/types-d";

export const createUser = async (user: UserInterface) => {
  try {
    const response = await fetch("http://localhost:5050/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
