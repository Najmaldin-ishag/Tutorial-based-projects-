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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList item={item} />
      <Stats />
    </div>
  );
};

export default App;
