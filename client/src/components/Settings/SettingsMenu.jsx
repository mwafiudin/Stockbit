import React from "react";
import SettingsMenuList from "./SettingsMenuList";
import { ReactComponent as ProfileIcon } from "../../icons/profile-add.svg";
import { ReactComponent as BubbleIcon } from "../../icons/bubble.svg";
import { ReactComponent as DollarIcon } from "../../icons/dollar.svg";
import { ReactComponent as GlobeIcon } from "../../icons/globe.svg";
import { ReactComponent as GroupIcon } from "../../icons/group.svg";

const SettingsMenu = () => {
  const settingsItems = [
    {
      to: "/user/profile",
      icon: <ProfileIcon />,
      title: "Edit Profile",
      label: "Profile",
    },
    {
      to: "/securities/product",
      icon: <BubbleIcon />,
      title: "{Selected Securities}",
      label: "Securities",
    },
    {
      to: "/user/currency",
      icon: <DollarIcon />,
      title: "{Selected Currency}",
      label: "Currency",
    },
    {
      to: "/user/language",
      icon: <GlobeIcon />,
      title: "{Selected Language}",
      label: "Language",
    },
    {
      to: "/about-us",
      icon: <GroupIcon />,
      title: "v1.0.0",
      label: "About Us",
    },
  ];
  return <SettingsMenuList settingsItems={settingsItems} />;
};

export default SettingsMenu;
