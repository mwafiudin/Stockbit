import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceRangeInput from "./PriceRangeInput";

const CNAPriceRangeBox = ({ minPriceDefault, maxPriceDefault, handleMinPriceChance, handleMaxPriceChance }) => {
  return (
    <>
      <GlobalDarkBox>
        <PriceRangeInput
          minPriceDefault={minPriceDefault}
          maxPriceDefault={maxPriceDefault}
          // setMinPriceSliderValue={setMinPriceSliderValue}
          // setMaxPriceSliderValue={setMaxPriceSliderValue}
          handleMinPriceChance={handleMinPriceChance}
          handleMaxPriceChance={handleMaxPriceChance}
          label="Price Range :"
          name="minPriceRange"
        />
      </GlobalDarkBox>
    </>
  );
};

export default CNAPriceRangeBox;
