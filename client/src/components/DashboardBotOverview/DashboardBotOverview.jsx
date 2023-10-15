import React, { useState } from "react";
import DashboardBotOverviewTab from "./DashboardBotOverviewTab";
import DashboardBotOverviewMenu from "./DashboardBotOverviewMenu";

const DashboardBotOverview = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex flex-col mx-6 mb-5">
        <DashboardBotOverviewTab activeTab={activeTab} handleTabClick={handleTabClick} className='flex' />
        <DashboardBotOverviewMenu activeTab={activeTab} />
      </div>
    </>
  );
};

export default DashboardBotOverview;
