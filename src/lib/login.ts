import { UserInterface } from "@/types-d";

export async function loginUser(user: UserInterface) {
  console.log("login function", user);
  try {
    const response = await fetch("http://localhost:5050/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
