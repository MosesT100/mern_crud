import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import EditItem from "./components/EditItem";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1> 📦 MERN CRUD App</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/create" element={<ItemForm />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
