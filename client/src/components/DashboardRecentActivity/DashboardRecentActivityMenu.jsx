import React from "react";
import { ReactComponent as BuyStockIcon } from "../../icons/buy-stock.svg";
import { ReactComponent as SellStockIcon } from "../../icons/sell-stock.svg";

import DashboardRecentActivityMenuList from "./DashboardRecentActivityMenuList";

const DashboardRecentActivityMenu = () => {
  const recentActivityItems = [
    // stockStatus: "Match"||"Rejected"||"Open"
    {
      stockName: "SEMA",
      to: "",
      activityIcon: <BuyStockIcon />,
      activityDate: "2021-08-02",
      activityHour: "04:39:26",
      stockLot: 32,
      stockAmount: 15_000_000,
      stockPrice: 2652.0,
      stockStatus: "Match",
    },
    {
      stockName: "GIAA",
      to: "",
      activityIcon: <SellStockIcon />,
      activityDate: "2021-08-02",
      activityHour: "04:39:26",
      stockLot: 32,
      stockAmount: 15_000_000,
      stockPrice: 2652.0,
      stockStatus: "Rejected",
    },
    {
      stockName: "BBCA",
      to: "",
      activityIcon: <SellStockIcon />,
      activityDate: "2021-08-02",
      activityHour: "04:39:26",
      stockLot: 32,
      stockAmount: 15_000_000,
      stockPrice: 2652.0,
      stockStatus: "Open",
    },
    {
      stockName: "BBCA",
      to: "",
      activityIcon: <SellStockIcon />,
      activityDate: "2021-08-02",
      activityHour: "04:39:26",
      stockLot: 32,
      stockAmount: 15_000_000,
      stockPrice: 2652.0,
      stockStatus: "Open",
    },
  ];
  return (
    <>
      <div>
        <DashboardRecentActivityMenuList recentActivityItems={recentActivityItems} />
      </div>
    </>
  );
};

export default DashboardRecentActivityMenu;
