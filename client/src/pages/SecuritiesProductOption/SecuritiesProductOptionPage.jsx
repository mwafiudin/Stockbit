import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";

const SecuritiesProductOptionPage = () => {
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
            <h1>Securities</h1>
          </button>
        </div>
        <div className="flex flex-col justify-start text-cuan mx-[22px] text-left">
        <h1 className="text-pure-white mb-5 text-2xl font-semibold">Security Access</h1>
        <p className="text-cuanbot-light-gray text-sm">
        Please complete the access data for each security to be able to run the robot
        </p>
      </div>
        {/* <SettingsMenu /> */}
      </div>
    </>
  );
};

export default SecuritiesProductOptionPage;
