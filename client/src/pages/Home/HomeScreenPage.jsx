import React from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import DashboardGreeting from "../../components/DashboardGreeting/DashboardGreeting";
import DashboardMenu from "../../components/DashboardMenu/DashboardMenu";
import DashboardBotOverview from "../../components/DashboardBotOverview/DashboardBotOverview";
import DashboardRecentActivity from "../../components/DashboardRecentActivity/DashboardRecentActivity";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col bg-cuanbot-light">
        {/* <TopNavbar /> */}
        <DashboardGreeting />
        <DashboardMenu />
        <DashboardBotOverview />
        <DashboardRecentActivity />
        <span className="bg-cuanbot-dark py-16"></span>
      </div>
    </>
  );
};

export default HomePage;
