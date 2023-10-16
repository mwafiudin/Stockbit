import React from "react";
import { ReactComponent as RightArrowIcon } from "../../icons/right-arrow.svg";
import { Link } from "react-router-dom";

const SettingsMenuItem = ({ to, icon, title, label, isLast }) => {
  const classNameOfList = ["border-b-[1px]  border-cuanbot-header py-[5px]", isLast && "border-none"]
    .filter(Boolean)
    .join(" ");
  return (
    <li className={classNameOfList}>
      <Link to={to} className="flex justify-between py-[18px] items-center">
        <div className="flex items-center">
          {icon}
          <h2 className="text-cuanbot-text-gray ml-3">{label}</h2>
        </div>
        <div className="flex items-center">
          <h2 className="text-cuanbot-gray">{title}</h2>
          <RightArrowIcon className="ml-[10px]" />
        </div>
      </Link>
    </li>
  );
};
// gap-[10px]
const SettingsMenuList = ({ settingsItems }) => {
  return (
    <>
      <ul className="flex flex-col  mb-7 mx-[22px]">
        {settingsItems.map((item, index) => (
          <SettingsMenuItem
            key={index}
            to={item.to}
            icon={item.icon}
            title={item.title}
            label={item.label}
            isLast={index === settingsItems.length - 1}
          />
        ))}
      </ul>
    </>
  );
};

export default SettingsMenuList;
