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

  const handleHouseUpdate = (id, params, successCallback) => {
    axios
      .patch(`http://localhost:3000/houses/${id}.json`, params)
      .then((response) => {
        setHouses(
          houses.map((house) => {
            if (house.id === response.data.id) {
              return response.data;
            } else {
              return house;
            }
          })
        );
        successCallback();
      });
  };

  useEffect(handleHousesIndex, []);

  return (
    <div>
      <h1>House App</h1>
      <Routes>
        <Route path="/houses" element={<HousesIndex houses={houses} />} />
        <Route
          path="/houses/:id"
          element={<HousesShow onHouseUpdate={handleHouseUpdate} />}
        />
        <Route
          path="/houses/new"
          element={<HousesNew onHousesCreate={handleHousesCreate} />}
        />
      </Routes>
    </div>
  );
}
