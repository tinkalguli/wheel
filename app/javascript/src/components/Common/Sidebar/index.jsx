import React, { useState } from "react";

import { RightArrow, LeftArrow } from "neetoicons";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import {
  PROFILE_PATH,
  CHANGE_PASSWORD_PATH,
  LOGIN_PATH,
} from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { APP_NAME, SIDENAV_LINKS } from "./constants";
import Logo from "./Logo";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const history = useHistory();
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (error) {
      logger.error(error);
    }
  };

  const bottomLinks = [
    {
      label: "My Profile",
      onClick: () => history.push(PROFILE_PATH, { resetTab: true }),
    },
    {
      label: "Change Password",
      onClick: () => history.push(CHANGE_PASSWORD_PATH, { resetTab: true }),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <nav>
      <NeetoUISidebar
        isCollapsed={isSidebarCollapsed}
        navLinks={SIDENAV_LINKS}
        appName={APP_NAME}
        organizationInfo={{
          logo: <Logo />,
        }}
        profileInfo={{
          name: `${user.first_name} ${user.last_name}`,
          imageUrl: user.profile_image_path,
          email: user.email,
          bottomLinks,
        }}
        changelogProps={{ id: "neetochangelog-trigger" }}
      />
      <div className="collapse-btn flex cursor-pointer justify-center">
        {isSidebarCollapsed ? (
          <RightArrow
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        ) : (
          <LeftArrow
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
