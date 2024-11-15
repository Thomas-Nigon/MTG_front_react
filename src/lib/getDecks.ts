export const getDecks = async (id: string) => {
  console.log("id", id);
  const response = await fetch(`http://localhost:5050/users/${id}/decks`);
  const data = await response.json();
  return data;
};
