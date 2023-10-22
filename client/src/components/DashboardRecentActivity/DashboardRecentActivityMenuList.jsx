import React from "react";
import RecentActivityEmpty from "./RecentActivityEmpty";
import { Link } from "react-router-dom";
import { ReactComponent as RightIcon } from "../../icons/right.svg";

const RecentActivityListItem = ({
  to,
  stockName,
  activityIcon,
  activeDate,
  activityHour,
  stockLot,
  stockAmount,
  stockPrice,
  stockStatus,
}) => {
  return (
    <li>
      <Link to={to} className="flex items-center mb-5">
        <div className="self-start mr-2">{activityIcon}</div>
        <div className="flex flex-col flex-grow">
          <p className="flex justify-between items-center">
            <p className="text-pure-white">{stockName}</p>
            <p className="flex items-center text-cuanbot-light-gray">
              {activeDate}
              {activityHour}
              <RightIcon className="ml-2" />
            </p>
          </p>
          <p className="flex justify-between text-cuanbot-gray">
            <p>Lot/Amount</p>
            <p className="text-cuanbot-light-gray">
              {stockLot}/{stockAmount}
            </p>
          </p>
          <p className="flex justify-between text-cuanbot-gray">
            <p>Price</p>
            <p className="text-cuanbot-light-gray">{stockPrice}</p>
          </p>
          <p className="flex justify-between text-cuanbot-gray">
            <p>Status</p>
            <p
              className={`${
                stockStatus === "Match"
                  ? "text-cuanbot-green"
                  : stockStatus === "Open"
                  ? "text-cuanbot-light-gray"
                  : "text-cuanbot-red"
              }`}
            >
              {stockStatus}
            </p>
          </p>
        </div>
      </Link>
    </li>
  );
};

const DashboardRecentActivityMenuList = ({ recentActivityItems }) => {
  return (
    <>
      <ul className="mx-6">
        {recentActivityItems.length !== 0 ? (
          recentActivityItems.map((item, index) => (
            <RecentActivityListItem
              key={index}
              to={item.to}
              stockName={item.stockName}
              activityIcon={item.activityIcon}
              activityDate={item.activityDate}
              activityHour={item.activityHour}
              stockLot={item.stockLot}
              stockAmount={item.stockAmount}
              stockPrice={item.stockPrice}
              stockStatus={item.stockStatus}
            />
          ))
        ) : (
          <RecentActivityEmpty />
        )}
      </ul>
    </>
  );
};

export default DashboardRecentActivityMenuList;
