import React from "react";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";
import CNAAvailableBalance from "../../components/CreateNewAutomation/CNAAvailableBalance";
import CNASecuritiesOptionBox from "../../components/CreateNewAutomation/CNASecuritiesOptionBox";
import CNA1DayPriceReturnBox from "../../components/CreateNewAutomation/CNA1DayPriceReturnBox";
import CNAPriceRangeBox from "../../components/CreateNewAutomation/CNAPriceRangeBox";
import CNAMaxBalanceAllocated from "../../components/CreateNewAutomation/CNAMaxBalanceAllocated";
import CNAMaxStocksSelected from "../../components/CreateNewAutomation/CNAMaxStocksSelected";

const CreateNewAutomationPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cuanbot-light h-screen">
        <div className="bg-cuanbot-dark flex justify-between py-5 px-[10px]">
          <button
            onClick={() => navigate(-1)}
            className="text-cuanbot-light-gray font-semibold text-lg flex items-center"
          >
            <LeftArrowIcon className="mr-[10px]" />
            <h1>Create New Automation</h1>
          </button>
        </div>
        <div className="flex flex-col mx-6 gap-5 mt-5 text-sm text-cuanbot-light-gray">
          <CNAAvailableBalance />
          <CNASecuritiesOptionBox />
          <CNA1DayPriceReturnBox />
          <CNAPriceRangeBox />
          <CNAMaxBalanceAllocated />
          <CNAMaxStocksSelected />
          <div className="flex justify-center items-center py-4 bg-cuanbot-green rounded-xl text-lg text-cuanbot-dark">
            <button type="submit">Activate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewAutomationPage;
