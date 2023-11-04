const Table = ({ data, config, keyFn }) => {
  const renderTableHeader = config.map((column) => {
    return <td key={column.label}>{column.label}</td>;
  });

  const renderTableData = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-2">
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderTableHeader}</tr>
        </thead>
        <tbody>{renderTableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
