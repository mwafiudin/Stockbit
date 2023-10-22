import React from "react";
import { ReactComponent as RightArrowIcon } from "../../icons/right-arrow.svg";
import { Link } from "react-router-dom";

const DashboardGreeting = () => {
  return (
    <>
      <div className="my-5 mx-8">
        <Link to="" className="flex justify-between items-center">
          <h1 className="text-cuanbot-white py-1">Hello, {"mwafiudin"}!</h1>
          <RightArrowIcon />
        </Link>
      </div>
    </>
  );
};

export default DashboardGreeting;
