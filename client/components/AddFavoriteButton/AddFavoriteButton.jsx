/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const AddFavoriteButton = ({
  className,
  groupClassName,
  overlapGroupClassName,
  subtract = "https://c.animaapp.com/wMI6dPLx/img/subtract.svg",
  vectorClassName,
  vector = "https://c.animaapp.com/wMI6dPLx/img/vector-23@2x.png",
  divClassName,
  text = "Add Favorite",
}) => {
  return (
    <div
      className={`w-[366px] h-[60px] bg-[#3e474f1a] rounded-[12px] border-2 border-dashed border-[#3e474f80] ${className}`}
    >
      <div className={`relative w-[146px] h-[44px] top-[6px] left-[104px] ${groupClassName}`}>
        <div className={`relative w-[144px] h-[44px] ${overlapGroupClassName}`}>
          <div className="absolute w-[44px] h-[44px] top-0 left-0">
            <div className="relative w-[24px] h-[24px] top-[10px] left-[10px]">
              <div className="relative h-[24px]">
                <img className="absolute w-[20px] h-[20px] top-[2px] left-[2px]" alt="Subtract" src={subtract} />
                <img
                  className={`absolute w-[24px] h-[24px] top-[-9451px] left-[-5238px] ${vectorClassName}`}
                  alt="Vector"
                  src={vector}
                />
              </div>
            </div>
          </div>
          <div
            className={`absolute top-[11px] left-[42px] [font-family:'Lato',Helvetica] font-normal text-[#3e474f] text-[18px] text-center tracking-[0.48px] leading-[normal] ${divClassName}`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
