import React from "react";
import { ReactComponent as FilterIcon } from "../../icons/filter.svg";

const DashboardRecentActivityHeader = () => {
  return (
    <>
      <div className="flex justify-between text-cuanbot-white text-lg mt-9 mx-6 mb-7">
        <h1>Recent Activity</h1>
        <FilterIcon />
      </div>
    </>
  );
};

export default DashboardRecentActivityHeader;
