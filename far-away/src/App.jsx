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
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
    <footer>💼 You have X items on your list, and you already packed X</footer>
  );
}

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
    </div>
  );
};

export default App;
