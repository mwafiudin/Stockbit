/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LimitBuySellBuy = ({ property1, className, divClassName, text = "L/B", text1 = "L/S" }) => {
  return (
    <div className={`w-[40px] h-[40px] ${className}`}>
      <div className="h-[40px] rounded-[100px] relative">
        <div
          className={`w-[40px] left-0 opacity-10 top-0 h-[40px] rounded-[100px] absolute ${
            property1 === "limit-sell" ? "bg-[#dd4a4a]" : "bg-[#5ed5a8]"
          }`}
        />
        <div
          className={`[font-family:'Lato',Helvetica] tracking-[0.37px] text-[14px] top-[7px] font-normal text-center whitespace-nowrap leading-[24px] absolute ${
            property1 === "limit-sell" ? "left-[9px]" : "left-[8px]"
          } ${property1 === "limit-sell" ? "text-[#dd4a4a]" : "text-[#5ed5a8]"} ${divClassName}`}
        >
          {property1 === "limit-buy" && <>{text}</>}

          {property1 === "limit-sell" && <>{text1}</>}
        </div>
      </div>
    </div>
  );
};
