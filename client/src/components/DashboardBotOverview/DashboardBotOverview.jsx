import React, { useState } from "react";
import DashboardBotOverviewMenu from "./DashboardBotOverviewMenu";
import GlobalTabMenu from "../GlobalComponents/GlobalTabMenu";

const DashboardBotOverview = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const botTabItem = ["All", "Active", "Done", "Idle"];

  return (
    <>
      <div className="flex flex-col mx-6 mb-5">
        <GlobalTabMenu activeTab={activeTab} handleTabClick={handleTabClick} tabItem={botTabItem} className="flex" />
        <DashboardBotOverviewMenu activeTab={activeTab} />
      </div>
    </>
  );
};

export default DashboardBotOverview;
