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

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .patch(`http://localhost:3000/houses/${house.id}.json`, params)
      .then((response) => {
        setHouse(response.data);
      });
    event.target.reset();
  };

  const handleClick = () => {
    axios.delete(`http://localhost:3000/houses/${house.id}.json`);
    window.location.href = "/houses";
  };

  useEffect(getHouseData, []);

  return (
    <div>
      <h1>{house.address}</h1>
      <h2>Bedrooms: {house.bedrooms}</h2>
      <h2>Bathrooms: {house.bathrooms}</h2>
      <h2>Square Feet: {house.sqft}</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          Address:{" "}
          <input defaultValue={house.address} name="address" type="text" />
        </div>
        <div>
          Square Feet:{" "}
          <input defaultValue={house.sqft} name="sqft" type="text" />
        </div>
        <div>
          Bedrooms:{" "}
          <input defaultValue={house.bedrooms} name="bedrooms" type="text" />
        </div>
        <div>
          Bathrooms:{" "}
          <input defaultValue={house.bathrooms} name="bathrooms" type="text" />
        </div>
        <button type="submit">Update House</button>
        <br />
        <br />
        <button onClick={handleClick}>Delete House</button>
      </form>
    </div>
  );
}
