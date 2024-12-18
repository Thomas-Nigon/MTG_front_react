export const getDecks = async (id: string) => {
  const response = await fetch(`http://localhost:5050/users/${id}/decks`);
  const data = await response.json();
  return data;
};
