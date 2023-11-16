import React, { useState } from "react";
import GlobalTabMenu from "../../components/GlobalComponents/GlobalTabMenu";
import { ReactComponent as CloseIcon } from "../../icons/x.svg";
import UserSignUpForm from "../../components/UserSignUpForm/UserSignUpForm";
import UserSignInForm from "../../components/UserSignInForm/UserSignInForm";

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState("Sign In");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const signInTabItem = ["Sign In", "Sign Up"];
  return (
    <>
    <div className="bg-cuanbot-light h-screen flex flex-col px-6">
      <div className="bg-cuanbot-light flex justify-between pt-10 px-[1px] pb-5">
        {/* <button onClick={() => navigate(-1)} className="text-cuanbot-light-gray font-semibold flex items-center">
          <div className="pr-[10px]">
            <CloseIcon />
          </div>
        </button> */}
      </div>
      <GlobalTabMenu
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        tabItem={signInTabItem}
        className="flex"
      />
      {activeTab === "Sign In" ? <UserSignInForm /> : <UserSignUpForm />}
    </div>
  </>
    
  );
};

export default AuthenticationPage;
