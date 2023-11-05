import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";

const Other1detailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { index, to, icon, title } = location.state;
  return (
    <>
      <div className="bg-cuanbot-light h-screen">
        <div className="bg-cuanbot-light flex justify-between pt-10 px-[10px] pb-5">
          <button
            onClick={() => navigate(-1)}
            className="text-cuanbot-light-gray font-semibold text-lg flex items-center"
          >
            <LeftArrowIcon className="mr-[10px]" />
            <h1>{title} Detail</h1>
          </button>
        </div>
        <div className="flex flex-col justify-start text-cuan mx-[22px] text-left">
          <h1 className="text-pure-white mb-5 text-2xl font-semibold">Security Access</h1>
          <div className="bg-cuanbot-white rounded-xl flex justify-center w-max">
            <img src={icon} alt={title} />
          </div>
        </div>
        {/* <SettingsMenu /> */}
        {/* <SecuritiesOptionMenu /> */}
      </div>
    </>
  );
};

export default Other1detailPage;
