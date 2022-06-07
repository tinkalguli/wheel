import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import TableColumns from "./TableColumns";

import { DEFAULT_PAGE_SIZE, INITIAL_PAGE_NUMBER } from "../constants";

const Table = ({ handleDeleteClick, handleEditClick, contacts }) => {
  const [currentPageNumber, setCurrentPageNumber] =
    useState(INITIAL_PAGE_NUMBER);

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
      currentPageNumber={currentPageNumber}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      handlePageChange={value => setCurrentPageNumber(value)}
    />
  );
};

export default Table;
