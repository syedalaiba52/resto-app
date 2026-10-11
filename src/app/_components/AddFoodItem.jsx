import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [path, setPath] = useState();
  const [description, setDescription] = useState();

  const handleAddFoodItem = () => {
    console.log(name, price, path, description);
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
