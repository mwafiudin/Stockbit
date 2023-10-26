import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceReturnInput from "./PriceReturnInput";

const CNA1DayPriceReturnBox = () => {
  return (
    <>
      <GlobalDarkBox>
        <PriceReturnInput label="1 Day Price Return:" name="priceReturnValue" />
      </GlobalDarkBox>
    </>
  );
};

export default CNA1DayPriceReturnBox;
