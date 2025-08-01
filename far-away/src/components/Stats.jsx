function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start Adding items to your list</p>;
  const numItems = items.length;
  const PackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((PackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You ready to go"
          : ` 💼 You have ${numItems} items on your list, and you already packed
        ${PackedItems} ${percentage}%`}
      </em>
    </footer>
  );
}

export default Stats;
