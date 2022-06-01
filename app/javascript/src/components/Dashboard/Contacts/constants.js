import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar } from "neetoui";

import { formatDate } from "utils/time";

export const CONTACTS = [
  {
    email: "Barry_Taylor3408@twace.org",
    name: "Barry Taylor",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Chuck_Dyson5768@atink.com",
    name: "Chuck Dyson",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eduardo_Gunn5778@gembat.biz",
    name: "Eduardo_Gunn5778",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eduardo_Allcott9101@sveldo.biz",
    name: "Eduardo Allcott",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Nathan_Khan8258@bungar.biz",
    name: "Nathan Khan",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Zoe_Terry2465@nanoff.biz",
    name: "Zoe Terry",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Cecilia_Watt8135@naiker.biz",
    name: "Cecilia Watt",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Jennifer_Lewis9652@gmail.com",
    name: "Jennifer Lewis",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Lana_Shields2803@cispeto.com",
    name: "Lana Shields",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Julian_Cunningham2816@zorer.org",
    name: "Julian Cunningham",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Diane_Hilton5577@mafthy.com",
    name: "Diane Hilton",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Mason_Goodman4082@eirey.tech",
    name: "Mason Goodman",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Candace_Lindsay3978@atink.com",
    name: "Candace Lindsay",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Harry_Miller7846@extex.org",
    name: "Harry Miller",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Alexander_Palmer5366@bungar.biz",
    name: "Alexander Palmer",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Johnathan_Porter3237@iatim.tech",
    name: "Johnathan Porter",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Alexander_Ring3679@eirey.tech",
    name: "Alexander Ring",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Analise_Neville2234@deavo.com",
    name: "Analise Neville",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Carter_Walter7155@nanoff.biz",
    name: "Carter Walter",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eryn_Nanton1351@muall.tech",
    name: "Eryn Nanton",
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

export const CONTACTS_VIEWS = [
  { label: "All", count: 200 },
  { label: "Archived", count: 80 },
  { label: "Completed", count: 60 },
  { label: "Phase 2", count: 60 },
];
