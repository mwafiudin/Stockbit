import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceRangeInput from "./PriceRangeInput";

const CNAPriceRangeBox = () => {
  return (
    <>
      <GlobalDarkBox>
        <PriceRangeInput
          label="Price Range :"
          name="minPriceRange"
        />
      </GlobalDarkBox>
    </>
  );
};

export default CNAPriceRangeBox;
