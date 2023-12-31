import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    // this is used when state is updated according to pre val and state can be changed very frequently
    setExpandedIndex((current) => {
      if (current === index) {
        return -1;
      }
      return index;
    });
    // if (index === expandedIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(index);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label}
          {icon}
        </div>

        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  console.log(expandedIndex);
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
