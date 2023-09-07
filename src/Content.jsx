import axios from "axios";
import { useState, useEffect } from "react";
import { HousesIndex } from "./HousesIndex";
import { HousesNew } from "./HousesNew";

export function Content() {
  const [houses, setHouses] = useState([]);

  const handleHousesIndex = () => {
    axios.get("http://localhost:3000/houses.json").then((response) => {
      setHouses(response.data);
    });
  };

  const handleHousesCreate = (params, successCallBack) => {
    axios.post("http://localhost:3000/houses.json", params).then((response) => {
      setHouses([...houses, response.data]);
      successCallBack();
    });
  };

  useEffect(handleHousesIndex, []);

  return (
    <div>
      <h1>House App</h1>
      <HousesIndex houses={houses} />
      <HousesNew onHousesCreate={handleHousesCreate} />
    </div>
  );
}
