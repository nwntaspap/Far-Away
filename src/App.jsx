import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => id !== item.id));
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        items={items}
        toggleItem={handleToggleItem}
        deleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  );
}

export default App;
