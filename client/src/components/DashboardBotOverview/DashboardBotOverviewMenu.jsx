import React from "react";
import { ReactComponent as StockIcon } from "../../icons/bitcoin.svg";
import DashboardBotOverviewMenuList from "./DashboardBotOverviewMenuList";

const DashboardBotOverviewMenu = ({ activeTab }) => {
  // botStatus: "active||done||idle"
  const botOverviewItems = [
    {
      to: "",
      stockIcon: <StockIcon />,
      botName: "Bot 3",
      activeDate: "01 Sep - 30 Sep",
      botEarning: "32,697.05",
      stockName: "BSJP",
      activePeriod: "21 Active Days",
      botEarningPercentage: "-0.81%",
      botStatus: "active",
      isIncrease: false,
    },
    {
      to: "",
      stockIcon: <StockIcon />,
      botName: "Bot 2",
      activeDate: "01 Sep - 30 Sep",
      botEarning: "32,697.05",
      stockName: "BSJP",
      activePeriod: "21 Active Days",
      botEarningPercentage: "+0.81%",
      botStatus: "active",
      isIncrease: true,
    },
    {
      to: "",
      stockIcon: <StockIcon />,
      botName: "Bot 1",
      activeDate: "01 Sep - 30 Sep",
      botEarning: "32,697.05",
      stockName: "BSJP",
      activePeriod: "21 Active Days",
      botEarningPercentage: "+0.81%",
      botStatus: "done",
      isIncrease: true,
    },
  ];

  let propsContent;

  switch (activeTab) {
    case "Active":
      propsContent = botOverviewItems.filter((item) => item.botStatus === activeTab.toLowerCase());
      break;
    case "Done":
      propsContent = botOverviewItems.filter((item) => item.botStatus === activeTab.toLowerCase());
      break;
    case "Idle":
      propsContent = botOverviewItems.filter((item) => item.botStatus === activeTab.toLowerCase());
      break;
    default:
      propsContent = botOverviewItems;
      console.log("bot: " + botOverviewItems.length);
      console.log("final: " + propsContent);
      console.log("length all: " + propsContent.length);
      break;
  }
  return (
    <>
      <DashboardBotOverviewMenuList propsContent={propsContent} activeTab={activeTab} />
    </>
  );
};

export default DashboardBotOverviewMenu;
