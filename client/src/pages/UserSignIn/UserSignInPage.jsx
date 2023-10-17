import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../icons/x.svg";
import GlobalTabMenu from "../../components/GlobalComponents/GlobalTabMenu";
import UserSignInForm from "../../components/UserSignInForm/UserSignInForm";
import UserSignUpPage from "../UserSignUp/UserSignUpPage";

const UserSignInPage = () => {
  const navigate = useNavigate();
  // for showing signup when clicked
  const [isSignup, setIsSignup] = useState(false);

  // changing tab function
  const [activeTab, setActiveTab] = useState("Sign In");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    tab === "Sign Up" ? setIsSignup(true) : setIsSignup(false);
  };

  const signInTabItem = ["Sign In", "Sign Up"];

  return (
    <>
      <div className="bg-cuanbot-light h-screen flex flex-col px-6">
        <div className="bg-cuanbot-light flex justify-between pt-10 px-[1px] pb-5">
          <button onClick={() => navigate(-1)} className="text-cuanbot-light-gray font-semibold flex items-center">
            <div className="pr-[10px]">
              <CloseIcon />
            </div>
          </button>
        </div>
        <GlobalTabMenu
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          botTabItem={signInTabItem}
          className="flex"
        />
        {isSignup ? <UserSignUpPage /> : <UserSignInForm />}
      </div>
    </>
  );
};

export default UserSignInPage;
