import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function Logo() {
  return <h1>🏝️ Far Away</h1>;
}

const App = () => {
  const [item, setItem] = useState([]);

  function handleItems(item) {
    setItem((items) => [...items, item]);
  }
  function onDeleteItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        item={item}
        onDeleteItems={onDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={item} />
    </div>
  );
};

export default App;
