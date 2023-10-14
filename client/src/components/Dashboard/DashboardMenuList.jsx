import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../../icons/right-arrow.svg";

const DashboardMenuItem = ({ to, icon, title, isFirst, isLast }) => {
  const classNameOfList = ["bg-cuanbot-dark", isFirst && "rounded-t-xl", isLast && "rounded-b-xl"]
    .filter(Boolean)
    .join(" ");
  return (
    <li className={classNameOfList}>
      <Link to={to} className="flex justify-between my-3 ml-4 mr-2">
        <div className="flex">
          {icon}
          <h2 className="text-cuanbot-text-gray ml-3">{title}</h2>
        </div>
        <RightArrowIcon />
      </Link>
    </li>
  );
};

const DashboardMenuList = ({ menuItems }) => {
  return (
    <>
      <ul className="flex flex-col gap-1 mb-7 mx-6">
        {menuItems.map((item, index) => (
          <DashboardMenuItem
            key={index}
            to={item.to}
            icon={item.icon}
            title={item.title}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
          />
        ))}
      </ul>
    </>
  );
};

export default DashboardMenuList;
