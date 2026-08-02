import { useState } from "react";

function ListGroup() {
  let items: string[] = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* Fragment avoids unnecessary wrapper div */}
      <h1>List Group</h1>
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
                onClick={() => setSelectedIndex(index)}
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
