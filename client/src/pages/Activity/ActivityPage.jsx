import React, { useState } from "react";
import GlobalTabMenu from "../../components/GlobalComponents/GlobalTabMenu";
import OrderListPage from "../OrderList/OrderListPage";
import OrderStatusPage from "../OrderStatus/OrderStatusPage";

const ActivityPage = () => {
  const [activeTab, setActiveTab] = useState("Order List");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activityTabItem = ["Order List", "Order Status"];
  return (
    <div className="flex flex-col bg-cuanbot-light h-screen">
      <div className="bg-cuanbot-header py-5 px-6">
        <GlobalTabMenu
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          tabItem={activityTabItem}
          className="flex"
        />
      </div>
      {activeTab === "Order List" ? <OrderListPage /> : <OrderStatusPage />}
    </div>
  );
};

export default ActivityPage;
