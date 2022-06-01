import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, CONTACTS_TABLE_COLUMN_DATA } from "./constants";

const Table = () => {
  const [, setSelectedNote] = useState(null);
  const [, setShowEditNote] = useState(false);
  const [, setSelectedContactsIds] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <NeetoUITable
      fixedHeight
      rowData={CONTACTS}
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      onRowSelect={selectedRowKeys => setSelectedContactsIds(selectedRowKeys)}
      onRowClick={(_, note) => {
        setSelectedNote(note);
        setShowEditNote(true);
      }}
      allowRowClick={true}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={value => setCurrentPageNumber(value)}
    />
  );
};

export default Table;
