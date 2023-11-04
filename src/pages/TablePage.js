import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Fruit", render: (fruit) => fruit.name },
    {
      label: "color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    { label: "score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return <Table data={data} config={config} keyFn={keyFn} />;
};

export default TablePage;
