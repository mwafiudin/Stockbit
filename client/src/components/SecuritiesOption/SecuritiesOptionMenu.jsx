import React from "react";
import SecuritiesOptionMenuList from "./SecuritiesOptionMenuList";
import { useSelector } from "react-redux";

// import { stockBitIcon } from "../../icons/stockbit-logo.png";

const SecuritiesOptionMenu = () => {
  const securitiesItems = useSelector((state) => state.securities.securitiesItems);
  return <SecuritiesOptionMenuList securitiesItems={securitiesItems} />;
};

export default SecuritiesOptionMenu;
