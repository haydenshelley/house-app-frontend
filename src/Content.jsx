import axios from "axios";
import { useState, useEffect } from "react";
import { HousesIndex } from "./HousesIndex";

export function Content() {
  const [houses, setHouses] = useState([]);

  const handleHousesIndex = () => {
    axios.get("http://localhost:3000/houses.json").then((response) => {
      setHouses(response.data);
    });
  };

  useEffect(handleHousesIndex, []);

  return (
    <div>
      <h1>House App</h1>
      <HousesIndex houses={houses} />
    </div>
  );
}
