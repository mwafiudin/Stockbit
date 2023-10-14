import React from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import DashboardGreeting from "../../components/Dashboard/DashboardGreeting";
import DashboardMenu from "../../components/Dashboard/DashboardMenu";
import DashboardBotOverview from "../../components/Dashboard/DashboardBotOverview";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col bg-cuanbot-light">
        {/* <h1 className="text-3xl font-bold underline bg-red-600">Home</h1> */}
        <TopNavbar />
        <DashboardGreeting />
        <DashboardMenu />
        <DashboardBotOverview />
        {/* <img src={require("../../../public/assets/icons/setting.svg")} alt="settings" /> */}
      </div>
    </>
  );
};

export default HomePage;
