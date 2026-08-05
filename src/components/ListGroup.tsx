import { useState } from "react";

interface ListGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* Fragment avoids unnecessary wrapper div */}
      <h1>{title}</h1>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map(function (item, index) {
            return (
              <li
                key={index}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => {
                  setSelectedIndex(index);
                  // Call the onSelectItem callback with the selected item
                  onSelectItem(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
}

export default ListGroup;
