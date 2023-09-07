export function HousesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onHousesCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New House</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          Square Feet: <input name="sqft" type="text" />
        </div>
        <div>
          Bedrooms: <input name="bedrooms" type="text" />
        </div>
        <div>
          Bathrooms: <input name="bathrooms" type="text" />
        </div>
        <button type="submit">Create House</button>
      </form>
    </div>
  );
}
