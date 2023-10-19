import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import SettingsMenu from "../../components/Settings/SettingsMenu";

const UserSettingsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cuanbot-light h-screen">
        <div className="bg-cuanbot-light flex justify-between pt-10 px-[10px] pb-5">
          <button
            onClick={() => navigate(-1)}
            className="text-cuanbot-light-gray font-semibold text-lg flex items-center"
          >
            <LeftArrowIcon className="mr-[10px]" />
            <h1>Settings</h1>
          </button>
        </div>
        <SettingsMenu />
      </div>
    </>
  );
};

export default UserSettingsPage;
