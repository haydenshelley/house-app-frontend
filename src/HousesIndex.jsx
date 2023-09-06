export function HousesIndex(props) {
  return (
    <div>
      <h1>All Houses</h1>
      <hr />
      {props.houses.map((house) => (
        <div key={house.id}>
          <h2>{house.address}</h2>
          <h3>Bedrooms: {house.bedrooms}</h3>
          <h3>Bathrooms: {house.bathrooms}</h3>
          <h3>Square Feet: {house.sqft}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}
