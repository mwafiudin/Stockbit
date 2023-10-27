import React, { useState } from "react";
import { useField } from "formik";

const MaxBalanceInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [sliderValue, setSliderValue] = useState(props.value || 50);
  // const [active, setActive] = useState(0);
  const [active, setActive] = useState(false);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    field.onChange(e); // Inform Formik of the change
  };
  const handleClickChange = (e) => {
    handleSliderChange(e);
    field.onChange(e); // Inform Formik of the change
    console.log("e click:", e.target.value);
    // setActive(Number(e.target.value));
    setActive(!active);
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
  console.log(active);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name} className="self-start my-2">
          {label}
        </label>
        <input type="range" {...field} {...props} value={sliderValue} onChange={handleSliderChange} className=" m-0" />
        <datalist id="values" className="flex flex-col justify-between  [writing-mode:vertical-lr]">
          {sliderItem.map((item, index) => {
            return (
              <option
                // {...field}
                // {...props}
                key={index}
                onClick={handleClickChange}
                className={`{${
                  active ? "bg-cuanbot-light" : ""
                } text-cuanbot-light-gray p-5 mt-2 rounded-full [writing-mode:horizontal-tb] cursor-pointer`}
                value={item.value}
                label={item.label}
              ></option>
            );
          })}
          {/* <option
            value="25"
            label="25"
            className="bg-cuanbot-green text-cuanbot-dark [writing-mode:horizontal-tb]"
          ></option>
          <option
            value="50"
            label="50"
            className="bg-cuanbot-green text-cuanbot-dark [writing-mode:horizontal-tb]"
          ></option>
          <option
            value="75"
            label="75"
            className="bg-cuanbot-green text-cuanbot-dark [writing-mode:horizontal-tb]"
          ></option>
          <option
            value="100"
            label="100"
            className="bg-cuanbot-green text-cuanbot-dark [writing-mode:horizontal-tb]"
          ></option> */}
        </datalist>
        <div className="slider-value">{sliderValue}</div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default MaxBalanceInput;
