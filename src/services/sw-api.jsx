export default async function getAllStarships() {
    const url = `https://www.swapi.tech/api/starships`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch starships:", error);
    }
  }
  console.log(getAllStarships());