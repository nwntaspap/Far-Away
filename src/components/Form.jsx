import { useState } from "react";

function Form({ addItem }) {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputText = text.trim();

    // user must provide an item
    if (!inputText) return;

    let item = {
      id: crypto.randomUUID(),
      text: inputText,
      quantity: quantity,
      packed: false,
    };

    setText("");
    setQuantity(1);
    // call parents fn through props
    addItem(item);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤠 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Insert your Items here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
