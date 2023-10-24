import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceReturnInput from "./PriceReturnInput";

const CNA1DayPriceReturnBox = () => {
  return (
    <>
      <GlobalDarkBox>
        <PriceReturnInput label="1 Day Price Return" name="percentageValue" />
      </GlobalDarkBox>
    </>
  );
};

export default CNA1DayPriceReturnBox;
