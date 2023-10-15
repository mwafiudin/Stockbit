import React from "react";

const DashboardBotOverviewTab = ({ activeTab, handleTabClick }) => {
  return (
    <>
      <div className="flex justify-center gap-2 bg-cuanbot-dark rounded-xl text-pure-white">
        {["All", "Active", "Done", "Idle"].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer px-5 py-2 rounded my-1.5 ${
              activeTab === tab ? "bg-cuanbot-light rounded-xl" : ""
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardBotOverviewTab;
