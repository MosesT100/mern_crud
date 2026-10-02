import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchItems, deleteItem } from "../api/itemApi";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadItems = async () => {
    try {
      const { data } = await fetchItems();
      setItems(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>All Items ({items.length})</h2>
      <Link to="/create">
        <button className="btn-add">+ Add Item</button>
      </Link>

      {items.length === 0 ? (
        <p>No items yet. Create one!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>
                    <button className="btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ItemList;
