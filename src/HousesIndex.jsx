export function HousesIndex(props) {
  return (
    <div>
      <h1>All Houses</h1>
      <hr />
      {props.houses.map((house) => (
        <div key={house.id}>
          <h2>{house.address}</h2>
          <a href={`/houses/${house.id}`}>More Info</a>
          <hr />
        </div>
      ))}
    </div>
  );
}
