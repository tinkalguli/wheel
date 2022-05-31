import React from "react";

import { MenuBar } from "neetoui/layouts";

import Views from "./Views";

const CustomMenuBar = ({ showMenu }) => (
  <MenuBar title={"Notes"} showMenu={showMenu}>
    <Views />
  </MenuBar>
);

export default CustomMenuBar;
