import React from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import DashboardGreeting from "../../components/Dashboard/DashboardGreeting";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col bg-cuanbot-light">
        {/* <h1 className="text-3xl font-bold underline bg-red-600">Home</h1> */}
        <TopNavbar />
        <DashboardGreeting />
        {/* <img src={require("../../../public/assets/icons/setting.svg")} alt="settings" /> */}
      </div>
    </>
  );
};

export default HomePage;
