import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [path, setPath] = useState();
  const [description, setDescription] = useState();

  
const handleAddFoodItem = async () => {
  const restaurantData = JSON.parse(
    localStorage.getItem("restaurantUser")
  );

  if (!restaurantData?._id) {
    alert("Please login as a restaurant first");
    return;
  }

  const resto_id = restaurantData._id;

  let response = await fetch("/api/restaurant/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price: Number(price),
      img_path: path,
      description,
      resto_id,
    }),
  });

  response = await response.json();

  if (response.success) {
    alert("Food Item Added");
  }
};

  return (
    <div className="container">
      <h1>Add New Food Item</h1>

      <div>
        {/* name */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter food name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        {/* price */}
        <div className="input-wrapper">
          <input
            type="number"
            className="input-field"
            placeholder="Enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        {/* path */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter image path"
            value={path}
            onChange={(event) => {
              setPath(event.target.value);
            }}
          />
        </div>

        {/* description */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div className="input-wrapper">
          <button onClick={handleAddFoodItem} className="button">
            Add Food Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFoodItem;
