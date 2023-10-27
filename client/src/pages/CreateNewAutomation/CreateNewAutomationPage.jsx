import React from "react";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";
import CNAAvailableBalance from "../../components/CreateNewAutomation/CNAAvailableBalance";
import CNAForm from "../../components/CreateNewAutomation/CNAForm";

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
        <div className="flex flex-col mx-6 mt-5 text-sm">
          <CNAAvailableBalance />
          <CNAForm />
        </div>
      </div>
    </>
  );
};

export default CreateNewAutomationPage;
