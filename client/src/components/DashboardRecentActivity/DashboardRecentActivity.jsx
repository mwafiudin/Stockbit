import React from "react";
import DashboardRecentActivityHeader from "./DashboardRecentActivityHeader";
import DashboardRecentActivityMenu from "./DashboardRecentActivityMenu";

const DashboardRecentActivity = () => {
  return (
    <>
      <div className="bg-cuanbot-dark">
        <DashboardRecentActivityHeader />
        <DashboardRecentActivityMenu />
      </div>
    </>
  );
};

export default DashboardRecentActivity;
