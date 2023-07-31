export const getCards = async () => {
  const response = await fetch("http://localhost:1337/api/services?populate=*");
  const data = await response.json();
  return data;
};
