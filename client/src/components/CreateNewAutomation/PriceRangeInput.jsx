import React, { useState } from "react";
// import "./priceRangeInput.css";

const PriceRangeInput = ({ label, name, min, max, values, onChange }) => {
  //! GOKIL susah banget, lanjut besok lagi. Coba pakai material ui, gabungin kedua cara berikut:
  //? https://mui.com/material-ui/react-slider/#minimum-distance
  //? https://mui.com/material-ui/react-slider/#slider-with-input-field

  const [minValue, setMinValue] = useState(values[0]);
  const [maxValue, setMaxValue] = useState(values[1]);

  const handleMinChange = (e) => {
    const value = Math.min(e.target.value, maxValue - 1);
    setMinValue(value);
    onChange([value, maxValue]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(e.target.value, minValue + 1);
    setMaxValue(value);
    onChange([minValue, value]);
  };

  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////

  // function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  //   const [from, to] = getParsed(fromInput, toInput);
  //   fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
  //   if (from > to) {
  //     fromSlider.value = to;
  //     fromInput.value = to;
  //   } else {
  //     fromSlider.value = from;
  //   }
  // }

  // function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  //   const [from, to] = getParsed(fromInput, toInput);
  //   fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
  //   setToggleAccessible(toInput);
  //   if (from <= to) {
  //     toSlider.value = to;
  //     toInput.value = to;
  //   } else {
  //     toInput.value = from;
  //   }
  // }

  // function controlFromSlider(fromSlider, toSlider, fromInput) {
  //   const [from, to] = getParsed(fromSlider, toSlider);
  //   fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
  //   if (from > to) {
  //     fromSlider.value = to;
  //     fromInput.value = to;
  //   } else {
  //     fromInput.value = from;
  //   }
  // }

  // function controlToSlider(fromSlider, toSlider, toInput) {
  //   const [from, to] = getParsed(fromSlider, toSlider);
  //   fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
  //   setToggleAccessible(toSlider);
  //   if (from <= to) {
  //     toSlider.value = to;
  //     toInput.value = to;
  //   } else {
  //     toInput.value = from;
  //     toSlider.value = from;
  //   }
  // }

  // function getParsed(currentFrom, currentTo) {
  //   const from = parseInt(currentFrom.value, 10);
  //   const to = parseInt(currentTo.value, 10);
  //   return [from, to];
  // }

  // function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  //   const rangeDistance = to.max - to.min;
  //   const fromPosition = from.value - to.min;
  //   const toPosition = to.value - to.min;
  //   controlSlider.style.background = `linear-gradient(
  //     to right,
  //     ${sliderColor} 0%,
  //     ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
  //     ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
  //     ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
  //     ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
  //     ${sliderColor} 100%)`;
  // }

  // function setToggleAccessible(currentTarget) {
  //   const toSlider = document.querySelector("#toSlider");
  //   if (Number(currentTarget.value) <= 0) {
  //     toSlider.style.zIndex = 2;
  //   } else {
  //     toSlider.style.zIndex = 0;
  //   }
  // }

  // const fromSlider = document.querySelector("#fromSlider");
  // const toSlider = document.querySelector("#toSlider");
  // const fromInput = document.querySelector("#fromInput");
  // const toInput = document.querySelector("#toInput");
  // fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
  // setToggleAccessible(toSlider);

  // fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  // toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  // fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  // toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

  //////////////////////////////

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <div className="flex items-center justify-between">
          <input type="range" min={min} max={max} value={minValue} onChange={handleMinChange} className="w-full mr-2" />
          <input type="range" min={min} max={max} value={maxValue} onChange={handleMaxChange} className="w-full ml-2" />
        </div>
        <div className="flex justify-between mt-2">
          <span>{minValue}</span>
          <span>{maxValue}</span>
        </div>
      </div>

      {/* <div class="range_container">
        <div class="sliders_control">
          <input id="fromSlider" type="range" value="10" min="0" max="100" />
          <input id="toSlider" type="range" value="40" min="0" max="100" />
        </div>
        <div class="form_control">
          <div class="form_control_container">
            <div class="form_control_container__time">Min</div>
            <input
              class="form_control_container__time__input"
              type="number"
              id="fromInput"
              value="10"
              min="0"
              max="100"
            />
          </div>
          <div class="form_control_container">
            <div class="form_control_container__time">Max</div>
            <input
              class="form_control_container__time__input"
              type="number"
              id="toInput"
              value="40"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PriceRangeInput;
