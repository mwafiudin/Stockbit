import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import MaxStockInput from "./MaxStockInput";

const CNAMaxStocksSelected = () => {
  return (
    <>
      <GlobalDarkBox>
        <MaxStockInput label="Max Stocks Selected:" name="maxStocksValue" />
      </GlobalDarkBox>
    </>
  );
};

export default CNAMaxStocksSelected;
