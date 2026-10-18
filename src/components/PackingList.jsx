import PackingItem from "./PackingItem.jsx";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <PackingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
