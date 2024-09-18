import { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    id: "",
    imageUrl: "",
    name: "",
    description: "",
    price: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Convert price and id to number
      const productData = {
        ...formData,
        id: parseInt(formData.id),
        price: parseFloat(formData.price),
      };

      await axios.post(
        "http://localhost:4000/api/v1/addProduct",
        productData
      );

      setStatusMessage("Product added successfully!");
      // Reset form after successful submission
      setFormData({
        id: "",
        imageUrl: "",
        name: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setStatusMessage("Failed to add product.");
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default AddProducts;
