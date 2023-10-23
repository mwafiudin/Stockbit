import React from "react";
import { ReactComponent as NotFound } from "../../icons/notfound.svg";

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
  return (
    <div className="flex flex-col items-center text-cuanbot-gray gap-y-5 m-5 p-5">
      <NotFound />
      No {msgContent} automation here 🤖{" "}
    </div>
  );
};

export default DashboardBotOverviewEmpty;
