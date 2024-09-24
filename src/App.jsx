import { useState, useEffect } from "react";
import Header from "./components/Header";
import StarShipCard from "./components/StarShipCard";
import getAllStarships from "./services/sw-api";

export default function App() {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data.results);
      } catch (error) {
        console.error("Starships can't be fetched.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        {starships.map((starship) => (
          <StarShipCard key={starship.uid} starship={starship} />
        ))}
      </div>
    </div>
  );
}