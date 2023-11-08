import { useState } from "react";
import Table from "./Table";
import {
  GoTriangleDown,
  GoTriangleUp,
  GoChevronDown,
  GoChevronUp,
} from "react-icons/go";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setsortBy] = useState(null);

  let sortedData = data;

  const onSortClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setsortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setsortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setsortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setsortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => onSortClick(column.label)}
        >
          <div className="flex items-center justify-normal">
            <div className="text-sm">
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
            {column.label}
          </div>
        </th>
      ),
    };
  });

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const order = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * order;
      }
      return (valueA - valueB) * order;
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp /> <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoTriangleUp /> <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoChevronUp />
        <GoTriangleDown />
      </div>
    );
  }
}

export default SortableTable;
