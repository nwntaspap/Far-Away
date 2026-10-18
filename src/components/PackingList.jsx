import PackingItem from "./PackingItem.jsx";

function PackingList({ items, toggleItem, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
