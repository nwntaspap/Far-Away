import { useState } from "react";
import PackingItem from "./PackingItem.jsx";

function PackingList({ items, toggleItem, deleteItem, resetItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = [...items].sort((a, b) => a.text.localeCompare(b.text));
  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button className="reset-list" onClick={resetItems}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default PackingList;
