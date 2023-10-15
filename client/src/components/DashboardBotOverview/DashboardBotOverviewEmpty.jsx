import React from "react";

const DashboardBotOverviewEmpty = ({ activeTab }) => {
  let msgContent;
  switch (activeTab) {
    case "Active":
      msgContent = "active";
      break;
    case "Done":
      msgContent = "finished";
      break;
    case "Idle":
      msgContent = "idle";
      break;

    default:
      msgContent = "single";
      break;
  }
  return <div className="text-cuanbot-gray m-5 p-5">No {msgContent} automation here 🤖</div>;
};

export default DashboardBotOverviewEmpty;
