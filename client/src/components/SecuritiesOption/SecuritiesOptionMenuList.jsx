import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../../icons/right-arrow.svg";

const SecuritiesMenuItem = ({ index, to, icon, title, idAccSecurity, email, password, pin }) => {
  return (
    <li className="border-b-[1px]  border-cuanbot-header py-[5px]">
      <Link
        to={to}
        state={{ index, to, icon, title, idAccSecurity, email, password, pin }}
        className="flex justify-between py-[18px] px-[18px] mb-2 items-center bg-cuanbot-light-gray hover:bg-cuanbot-green rounded-xl"
      >
        <div className="flex items-center">
          {/* <div className="bg-cuanbot-white rounded-xl px-4 py-2">{icon}</div> */}
          <div className="bg-cuanbot-white rounded-xl">
            {<img key={index} src={icon} alt={title} className="h-12 w-12" />}
          </div>
          <h2 className="text-cuanbot-header ml-3 font-semibold">{title}</h2>
        </div>
        <div className="flex items-center bg-cuanbot-white rounded-xl px-1 py-1">
          <RightArrowIcon />
        </div>
      </Link>
    </li>
  );
};

const SecuritiesOptionMenuList = ({ securitiesItems }) => {
  return (
    <>
      <ul className="flex flex-col my-10 mb-7 mx-[22px]">
        {securitiesItems.map((item, index) => (
          <SecuritiesMenuItem
            key={index}
            to={item.to}
            icon={item.icon}
            title={item.title}
            idAccSecurity={item.idAccSecurity}
            email={item.email}
            password={item.password}
            pin={item.pin}
            // isLast={index === securitiesItems.length - 1}
          />
        ))}
      </ul>
    </>
  );
};

export default SecuritiesOptionMenuList;
