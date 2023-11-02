import { useState } from "react";
import DropDown from "../components/DropDown";

const DropDwonPage = () => {
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

export default DropDwonPage;
