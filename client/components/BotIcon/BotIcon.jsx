/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icons2 } from "../../icons/Icons2";

export const BotIcon = ({
  className,
  icon = <Icons2 className="!absolute !w-[45px] !h-[53px] !top-[-2px] !left-[-3px]" />,
}) => {
  return (
    <div
      className={`relative w-[40px] h-[40px] bg-[url(https://c.animaapp.com/wMI6dPLx/img/bitcoin--btc--3.svg)] bg-[100%_100%] ${className}`}
    >
      {icon}
    </div>
  );
};
