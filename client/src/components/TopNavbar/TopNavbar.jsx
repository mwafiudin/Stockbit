import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SettingIcon } from "../../icons/setting.svg";
import { ReactComponent as NotificationIcon } from "../../icons/notification.svg";
import { ReactComponent as ProfilePictDummy } from "../../icons/profile-pict-dummy.svg";

const TopNavbar = () => {
  return (
    <>
      <div className="bg-cuanbot-header flex justify-between pt-9 px-6 pb-4">
        <Link to="/user/profile" className="">
          <ProfilePictDummy />
        </Link>
        <div className="flex">
          <Link to="/user/settings" className="mx-5">
            <SettingIcon />
          </Link>
          <Link to="">
            <NotificationIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
