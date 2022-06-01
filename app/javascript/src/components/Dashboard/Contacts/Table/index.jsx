import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import TableColumns from "./TableColumns";

const Table = ({ handleDeleteClick, handleEditClick, contacts }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const contactOptions = [
    {
      label: "Delete",
      onClick: handleDeleteClick,
    },
    {
      label: "Edit",
      onClick: handleEditClick,
    },
  ];

  return (
    <NeetoUITable
      rowData={contacts}
      columnData={TableColumns(contactOptions)}
      allowRowClick={true}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={value => setCurrentPageNumber(value)}
    />
  );
};

export default Table;
