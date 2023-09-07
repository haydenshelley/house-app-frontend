import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { HousesIndex } from "./HousesIndex";
import { HousesNew } from "./HousesNew";
import { HousesShow } from "./HousesShow";

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
      <Routes>
        <Route path="/houses" element={<HousesIndex houses={houses} />} />
        <Route path="/houses/:id" element={<HousesShow />} />
        <Route
          path="/houses/new"
          element={<HousesNew onHousesCreate={handleHousesCreate} />}
        />
      </Routes>
    </div>
  );
}
