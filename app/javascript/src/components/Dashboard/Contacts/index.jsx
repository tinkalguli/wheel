import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import CustomMenuBar from "components/Common/CustomMenuBar";

import { CONTACTS_VIEWS } from "./constants";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex w-full">
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
          <Table />
        </Scrollable>
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      </Container>
    </div>
  );
};

export default Contacts;
