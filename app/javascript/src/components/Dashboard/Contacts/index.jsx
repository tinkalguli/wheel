import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import CustomMenuBar from "components/Common/CustomMenuBar";

import { CONTACTS, CONTACTS_VIEWS } from "./constants";
import NewContactPane from "./Pane/Create";
import EditContactPane from "./Pane/Edit";
import Table from "./Table";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showEditContact, setShowEditContact] = useState(false);
  const [, setShowDeleteAlert] = useState(false);
  const [, setSelectedContactsIds] = useState([]);

  const handleDeleteClick = contact => {
    setShowDeleteAlert(true);
    setSelectedContactsIds(state => [...state, contact?.id]);
  };

  const handleEditClick = contact => {
    setSelectedContact(contact);
    setShowEditContact(true);
  };

  return (
    <div className="flex w-full overflow-hidden">
      <CustomMenuBar
        title="Contacts"
        showMenu={showMenu}
        views={CONTACTS_VIEWS}
        segments={[]}
        tags={[]}
      />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add Contact"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone, Ect.",
          }}
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        <Scrollable className="w-full">
          <Table
            contacts={CONTACTS}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        </Scrollable>
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
        <EditContactPane
          showPane={showEditContact}
          setShowPane={setShowEditContact}
          contact={selectedContact}
        />
      </Container>
    </div>
  );
};

export default Contacts;
