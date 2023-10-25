import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
// import "./priceRangeInput.css";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 2000;
const Input = styled(MuiInput)`
  width: 42px;
`;

const PriceRangeInput = ({ label, name, min, max, values, onChange }) => {
  //! GOKIL susah banget, lanjut besok lagi. Coba pakai material ui, gabungin kedua cara berikut:
  //? https://mui.com/material-ui/react-slider/#minimum-distance
  //? https://mui.com/material-ui/react-slider/#slider-with-input-field
  //! GOKILLL BERHASIL CUYY

  //Material UI Slider
  const [valueSlider, setValueSlider] = React.useState([26000, 35000]);

  const handleSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueSlider([Math.min(newValue[0], valueSlider[1] - minDistance), valueSlider[1]]);
    } else {
      setValueSlider([valueSlider[0], Math.max(newValue[1], valueSlider[0] + minDistance)]);
    }
  };

  const handleInputChangeMin = (event) => {
    setValueSlider([Number(event.target.value), valueSlider[1]]);
  };
  const handleInputChangeMax = (event) => {
    setValueSlider([valueSlider[0], Number(event.target.value)]);
  };

  //Material UI Input
  const handleBlur = () => {
    if (valueSlider <= 0) {
      setValueSlider(0);
    } else if (valueSlider >= 50000) {
      setValueSlider(50000);
    }
  };

  /// Normal Double slider //
  // const [minValue, setMinValue] = useState(values[0]);
  // const [maxValue, setMaxValue] = useState(values[1]);

  // const handleMinChange = (e) => {
  //   const value = Math.min(e.target.value, maxValue - 1);
  //   setMinValue(value);
  //   onChange([value, maxValue]);
  // };

  // const handleMaxChange = (e) => {
  //   const value = Math.max(e.target.value, minValue + 1);
  //   setMaxValue(value);
  //   onChange([minValue, value]);
  // };

  /////////////////////////////
  /////////////////////////////

  return (
    <>
      {/* Material UI */}
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={valueSlider}
        onChange={handleSlider}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0} // Atur nilai minimum
        max={50000} // Atur nilai maksimum
        disableSwap
        aria-labelledby="input-slider"
      />
      {/* {console.log("slider kiri:", valueSlider[0])}
      {console.log("slider kanan:", valueSlider[1])} */}

      {/* //? INPUT KIRI */}
      <Input
        value={valueSlider[0]}
        style={{ width: "100px" }}
        // size="small"
        onChange={handleInputChangeMin}
        // onBlur={handleBlur}
        inputProps={{
          step: 1000,
          min: 0,
          max: valueSlider[1] - minDistance,
          type: "number",
          "aria-labelledby": "input-slider",
          style: { color: "white" },
        }}
      />

      {/* //? INPUT KANAN */}
      <Input
        value={valueSlider[1]}
        style={{ width: "100px" }}
        // size="small"
        onChange={handleInputChangeMax}
        // onBlur={handleBlur}
        inputProps={{
          step: 1000,
          min: valueSlider[0] + minDistance,
          max: 50000,
          type: "number",
          "aria-labelledby": "input-slider",
          style: { color: "white" },
        }}
      />
      {/* Normal double slider */}
      {/* <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <div className="flex items-center justify-between">
          <input type="range" min={min} max={max} value={minValue} onChange={handleMinChange} className="w-full mr-2" />
          <input type="range" min={min} max={max} value={maxValue} onChange={handleMaxChange} className="w-full ml-2" />
        </div>
        <div className="flex justify-between mt-2">
          <span>{minValue}</span>
          <span>{maxValue}</span>
        </div>
      </div> */}
    </>
  );
};

export default PriceRangeInput;
