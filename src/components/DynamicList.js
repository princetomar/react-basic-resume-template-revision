function DynamicList({ items, itemName }) {
  return (
    <div>
      <h4 className="titleHeading">{itemName}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
