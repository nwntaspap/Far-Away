function Stats({ items, packedItems }) {
  const total = items.length;
  const packed = packedItems.length;
  const percent = total === 0 ? 0 : Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      {total === 0
        ? "Start adding some items to your packing list 🚀"
        : percent === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${total} items on your list, and you already packed ${packed} (${percent}%)`}
    </footer>
  );
}

export default Stats;
