import React, { useEffect } from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceRangeInput from "./PriceRangeInput";
import { useFormikContext } from "formik";

const CNAPriceRangeBox = () => {

  return (
    <>
      <GlobalDarkBox>
        <PriceRangeInput
          label="Price Range:"
          name="minPriceRange"
       
        />
      </GlobalDarkBox>
    </>
  );
};

export default CNAPriceRangeBox;
