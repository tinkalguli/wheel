import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar } from "neetoui";

import { formatDate } from "utils/time";

export const CONTACTS = [
  {
    name: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    name: "Jacob Jones",
    email: "jacob@borer.com",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    name: "John Smith",
    email: "john@borer.com",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    name: "Jack Snow",
    email: "jack@borer.com",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    name: "Nalson Richards",
    email: "nalson@borer.com",
    created_at: "2022-05-31T12:38:32.806Z",
  },
];

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    render: name => (
      <div className="flex flex-row items-center justify-start">
        <div>
          <Avatar
            size="medium"
            className="mr-3"
            user={{ name, imageUrl: null }}
          />
        </div>
        {name}
      </div>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    render: created_at => (
      <div className="flex flex-row items-center justify-start">
        {formatDate(created_at)}
      </div>
    ),
  },
  {
    dataIndex: "icon",
    key: "icon",
    render: () => <MenuHorizontal />,
  },
];
