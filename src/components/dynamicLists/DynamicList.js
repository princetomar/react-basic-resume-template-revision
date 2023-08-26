import "./dynamicList.css";

function DynamicList({ layout, items, itemName }) {
  return (
    <div>
      <h4 className="titleHeading">{items && itemName}</h4>
      {layout === "bullet" ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : layout === "alpha" ? (
        <ul type="a" className="alphabet-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default DynamicList;
