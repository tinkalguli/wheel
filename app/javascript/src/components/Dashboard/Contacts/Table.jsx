import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, CONTACTS_TABLE_COLUMN_DATA } from "./constants";

const Table = () => {
  const [, setSelectedNote] = useState(null);
  const [, setShowEditNote] = useState(false);
  const [, setSelectedContactsIds] = useState([]);

  return (
    <NeetoUITable
      rowData={CONTACTS}
      columnData={CONTACTS_TABLE_COLUMN_DATA}
      onRowSelect={selectedRowKeys => setSelectedContactsIds(selectedRowKeys)}
      onRowClick={(_, note) => {
        setSelectedNote(note);
        setShowEditNote(true);
      }}
      allowRowClick={true}
    />
  );
};

export default Table;
