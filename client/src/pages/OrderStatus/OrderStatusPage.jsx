import React from "react";
import OrderStatus from "../../components/DashboardRecentActivity/DashboardRecentActivityMenu";
import ActivityHeader from "../../components/Activity/ActivityHeader";

const OrderStatusPage = () => {
  return (
    <>
      <ActivityHeader />
      <OrderStatus />
    </>
  );
};

export default OrderStatusPage;
