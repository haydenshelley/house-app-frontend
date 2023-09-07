import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function HousesShow() {
  const [house, setHouse] = useState({});
  const params = useParams();

  const getHouseData = () => {
    axios
      .get(`http://localhost:3000/houses/${params.id}.json`)
      .then((response) => {
        setHouse(response.data);
      });
  };

  useEffect(getHouseData, []);

  return (
    <div>
      <h1>{house.address}</h1>
      <h2>Bedrooms: {house.bedrooms}</h2>
      <h2>Bathrooms: {house.bathrooms}</h2>
      <h2>Square Feet: {house.sqft}</h2>
    </div>
  );
}
