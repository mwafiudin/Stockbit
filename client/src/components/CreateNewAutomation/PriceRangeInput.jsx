import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { useField } from "formik";
import PriceRangeMinInput from "./PriceRangeMinInput";
import PriceRangeMaxInput from "./PriceRangeMaxInput";

const minDistance = 2000;

const PriceRangeInput = ({ label, ...props }) => {
  const [field] = useField(props);

  //Material UI Slider
  const [valueSlider, setValueSlider] = useState([15000, 35000]);

  const handleSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueSlider([Math.min(newValue[0], valueSlider[1] - minDistance), valueSlider[1]]);
      field.onChange({
        target: {
          name: "minPriceRange",
          value: Math.min(newValue[0], valueSlider[1] - minDistance),
        },
      });
    } else {
      setValueSlider([valueSlider[0], Math.max(newValue[1], valueSlider[0] + minDistance)]);
      field.onChange({
        target: {
          name: "maxPriceRange",
          value: Math.max(newValue[1], valueSlider[0] + minDistance),
        },
      });
    }
  };

  const handleInputChangeMin = (event) => {
    setValueSlider([Number(event.target.value), valueSlider[1]]);
    console.log("event handleMin: ", Number(event.target.value));

    field.onChange({
      target: {
        name: "minPriceRange",
        value: Number(event.target.value),
      },
    });
  };
  const handleInputChangeMax = (event) => {
    setValueSlider([valueSlider[0], Number(event.target.value)]);

    field.onChange({
      target: {
        name: "maxPriceRange",
        value: Number(event.target.value),
      },
    });
  };

  //Material UI Input
  // const handleBlur = () => {
  //   if (valueSlider <= 0) {
  //     setValueSlider(0);
  //   } else if (valueSlider >= 50000) {
  //     setValueSlider(50000);
  //   }
  // };

  return (
    <>
      <div>
        <label htmlFor="minPriceRange">{label}</label>
        {/* Material UI */}
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={valueSlider}
          onChange={handleSlider}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0} // Atur nilai minimum
          max={50000} // Atur nilai maksimum
          disableSwap
          aria-labelledby="input-slider"
          step={1}
        />
        <div className="flex justify-center">
          {/* // INPUT KIRI */}
          <PriceRangeMinInput
            label="Min Price:"
            name="minPriceRange"
            // name={props.name}
            value={valueSlider[0]}
            // {...field}
            style={{ width: "4rem" }}
            // size="small"
            onChange={handleInputChangeMin}
            // onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: valueSlider[1] - minDistance,
              type: "number",
              "aria-labelledby": "input-slider",
              style: { color: "white" },
            }}
          />

          {/* // INPUT KANAN */}
          <PriceRangeMaxInput
            label="Max Price:"
            name="maxPriceRange"
            value={valueSlider[1]}
            // {...field}
            style={{ width: "4rem" }}
            // size="small"
            onChange={handleInputChangeMax}
            // onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: valueSlider[0] + minDistance,
              max: 50000,
              type: "number",
              "aria-labelledby": "input-slider",
              style: { color: "white" },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PriceRangeInput;
