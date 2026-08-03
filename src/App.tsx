import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import SubSection from "./components/SubSection";

function App() {
  const items: string[] = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Bangalore",
  ];
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>
      <Alert message="This is an alert message!" />
      <ListGroup
        items={items}
        title="Cities"
        onSelectItem={(item) => setSelectedItem(item)}
      />
      <SubSection title="Selected City">
        <p>Selected city: {selectedItem || "No city selected"}</p>
      </SubSection>
    </div>
  );
}

export default App;
