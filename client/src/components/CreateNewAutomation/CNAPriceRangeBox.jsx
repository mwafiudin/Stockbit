import React, { useEffect } from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import PriceRangeInput from "../PriceRangeInputSlider/PriceRangeInput";
import { useFormikContext } from "formik";

const CNAPriceRangeBox = () => {
  const { setFieldValue } = useFormikContext(); // Dapatkan setFieldValue dari useFormikContext

  useEffect(() => {
    setFieldValue("rangeValues", [25, 75]); // Atur nilai awal
  }, [setFieldValue]);
  return (
    <>
      <GlobalDarkBox>
        <PriceRangeInput
          label="Range Values"
          name="rangeValues"
          min={0}
          max={100}
          values={[25, 75]}
          onChange={(values) => {
            setFieldValue("rangeValues", values);
          }}
        />
      </GlobalDarkBox>
    </>
  );
};

export default CNAPriceRangeBox;
