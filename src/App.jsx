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

  console.log(items);
  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
