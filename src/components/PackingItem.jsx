function PackingItem({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button className="delete-item">🗙</button>
    </li>
  );
}

export default PackingItem;
