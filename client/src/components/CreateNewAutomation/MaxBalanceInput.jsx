import React, { useState } from "react";
import { useField } from "formik";

const MaxBalanceInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [sliderValue, setSliderValue] = useState(props.value || 50);
  const [active, setActive] = useState(props.value || 50);

  // Define onChange and onClick handler function
  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
    setActive(Number(e.target.value));

    field.onChange({
      target: {
        name: "maxBalance",
        value: Number(e.target.value),
      },
    });
  };
  ///---------------------------------///
  const handleClickChange = (balanceItem) => {
    setActive(balanceItem);
    setSliderValue(balanceItem);

    field.onChange({
      target: {
        name: "maxBalance",
        value: balanceItem,
      },
    });
  };

  const sliderItem = [
    {
      value: 25,
      label: "25%",
    },
    {
      value: 50,
      label: "50%",
    },
    {
      value: 75,
      label: "75%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name} className="self-start my-2">
          {label}
        </label>
        <input type="range" {...field} {...props} value={sliderValue} onChange={handleSliderChange} className="mx-7" />
        <datalist id="values" className="flex flex-col justify-between  [writing-mode:vertical-lr]">
          {sliderItem.map((item, index) => {
            return (
              <option
                {...field}
                {...props}
                key={index}
                onClick={() => handleClickChange(item.value)}
                className={`${
                  active === item.value ? "bg-cuanbot-light" : ""
                } text-cuanbot-light-gray p-5 mt-2 rounded-full [writing-mode:horizontal-tb] cursor-pointer mb-2`}
                value={item.value}
                label={item.label}
              ></option>
            );
          })}
        </datalist>
        {/* <div className="slider-value">{sliderValue}</div> */}
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default MaxBalanceInput;
