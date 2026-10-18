function PackingItem({ item, toggleItem, deleteItem }) {
  return (
    <li>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
        />
        <span className="checkmark"></span>
      </label>
      <span
        className="item-text"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.text}
        <span className="item-quantity">{item.quantity}</span>
      </span>
      <button className="delete-item" onClick={() => deleteItem(item.id)}>
        🗙
      </button>
    </li>
  );
}

export default PackingItem;
