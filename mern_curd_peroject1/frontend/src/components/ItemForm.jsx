import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../api/itemApi";

const ItemForm = () => {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createItem({ ...form, price: Number(form.price) });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Item</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          min="0"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ItemForm;
