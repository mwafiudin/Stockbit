import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../../icons/add-circle.svg";
import DashboardBotOverviewEmpty from "./DashboardBotOverviewEmpty";

const BotOverviewMenuItem = ({
  to,
  stockIcon,
  botName,
  activeDate,
  botEarning,
  stockName,
  activePeriod,
  botEarningPercentage,
  botStatus,
  isIncrease,
}) => {
  return (
    <li>
      <Link to={to} className="flex border-b-[1px] border-cuanbot-gray py-5 items-center gap-[12.99px]">
        <div className="">{stockIcon}</div>
        <div className="flex flex-col flex-grow">
          <p className="flex justify-between text-pure-white">
            <p>{botName}</p>
            <p>{activeDate}</p>
            <p>{botEarning}</p>
          </p>
          <p className="flex justify-between gap-12 text-cuanbot-gray">
            <p>{stockName}</p>
            <p>{activePeriod}</p>
            <p className={`${isIncrease ? "text-cuanbot-green" : "text-cuanbot-red"}`}>{botEarningPercentage}</p>
          </p>
        </div>
      </Link>
    </li>
  );
};

const DashboardBotOverviewMenuList = ({ propsContent, activeTab }) => {
  return (
    <>
      <ul>
        {propsContent.length !== 0 ? (
          propsContent.map((item, index) => (
            <BotOverviewMenuItem
              key={index}
              to={item.to}
              stockIcon={item.stockIcon}
              botName={item.botName}
              activeDate={item.activeDate}
              botEarning={item.botEarning}
              stockName={item.stockName}
              activePeriod={item.activePeriod}
              botEarningPercentage={item.botEarningPercentage}
              botStatus={item.botStatus}
              isIncrease={item.isIncrease}
            />
          ))
        ) : (
          <DashboardBotOverviewEmpty activeTab={activeTab} />
        )}
        <li className="flex justify-center py-[18px] rounded-xl my-5 gap-2.5 items-center bg-cuanbot-light border-2 border-dashed border-cuanbot-gray ">
          <AddIcon />
          <h1 className="text-cuanbot-gray">Run Automation</h1>
        </li>
      </ul>
    </>
  );
};

export default DashboardBotOverviewMenuList;
