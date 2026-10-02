import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchItem, updateItem } from "../api/itemApi";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const loadItem = async () => {
      try {
        const { data } = await fetchItem(id);
        setForm(data.data);
      } catch {
        setError("Item not found");
      }
    };
    loadItem();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await updateItem(id, { ...form, price: Number(form.price) });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Item</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem;
