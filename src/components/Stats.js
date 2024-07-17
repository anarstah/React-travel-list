export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        "You got everything! Ready to go ✈️"
      ) : (
        <em>
          👜 You have {numItems} items in your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
