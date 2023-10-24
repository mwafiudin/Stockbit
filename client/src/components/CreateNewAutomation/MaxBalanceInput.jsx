import React, { useState } from "react";
import { useField } from "formik";

const MaxBalanceInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [sliderValue, setSliderValue] = useState(props.value || 0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    field.onChange(e); // Inform Formik of the change
  };
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input
          type="range"
          {...field}
          {...props}
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-[200px] m-0"
        />
        <datalist id="values" className="flex flex-col justify-between w-[200px] [writing-mode:vertical-lr]">
          <option
            value="0"
            label="0"
            className="bg-cuanbot-green text-cuanbot-dark [writing-mode:horizontal-tb]"
          ></option>
          <option
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
          ></option>
        </datalist>
        <div className="slider-value">{sliderValue}</div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default MaxBalanceInput;
