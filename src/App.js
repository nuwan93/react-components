import DropDown from "./components/DropDown";
import { useState } from "react";

const App = () => {
  const [SelectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];
  return (
    <DropDown options={options} onChange={handleSelect} value={SelectedValue} />
  );
};

export default App;
