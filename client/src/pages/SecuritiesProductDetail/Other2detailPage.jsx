import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import GlobalSecuritiesProductDetailForm from "../../components/GlobalComponents/GlobalSecuritiesProductDetailForm";

const Other2detailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { index, to, icon, title, idAccSecurity, email, password, pin } = location.state;
  console.log("damn:", to)
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
        <div className="flex flex-col justify-start mx-[24px] text-left">
          <div className="flex flex-col items-center border-b-[1px] border-cuanbot-gray mx-auto">
            <div className="bg-cuanbot-white rounded-xl w-max mb-4">
              <img className="w-20 h-20" src={icon} alt={title} />
            </div>
            <h1 className="text-cuanbot-white text-md font-semibold">{title}</h1>
          </div>
          <GlobalSecuritiesProductDetailForm
            index={index}
            to={to}
            icon={icon}
            title={title}
            idAccSecurity={idAccSecurity}
            email={email}
            password={password}
            pin={pin}
          />
        </div>
      </div>
    </>
  );
};

export default Other2detailPage;
