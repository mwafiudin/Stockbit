import React from "react";
import { ReactComponent as FilterIcon } from "../../icons/filter.svg";

const ActivityHeader = () => {
  return (
    <div className="flex justify-between text-cuanbot-white text-lg mt-5 mx-6 mb-7">
      <h1>"TANGGAL DINAMIS*"</h1>
      <FilterIcon />
    </div>
  );
};

export default ActivityHeader;
