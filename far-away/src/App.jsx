import { useState } from "react";

const initialItems = [
  {
    id: 1,
    desc: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    desc: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    desc: "Charger",
    quantity: 1,
    packed: true,
  },
];

function Logo() {
  return <h1>🏝️ Far Away</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;
    const newItems = {
      quantity,
      description,
      package: false,
      id: Date.now(),
    };
    console.log(newItems);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>
        {item.quantity} {item.desc}
      </span>
      <button> ❌ </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      💼 You have X items on your list, and you already packed X
    </footer>
  );
}

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
