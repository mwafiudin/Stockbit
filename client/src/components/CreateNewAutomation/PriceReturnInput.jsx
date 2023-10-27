import React from "react";
import { useField } from "formik";

const PriceReturnInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const handleIncrement = () => {
    field.onChange({
      target: {
        name: field.name,
        value: Math.min(parseFloat(field.value || 0) + 1, 100),
      },
    });
  };

  const handleDecrement = () => {
    field.onChange({
      target: {
        name: field.name,
        value: Math.max(parseFloat(field.value || 0) - 1, -100),
      },
    });
  };

  //   const displayedValue = `${field.value || 0}%`;
  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="flex items-center">
          <input
            type="number"
            {...field}
            {...props}
            min="-100"
            max="100"
            className="text-cuanbot-white text-base bg-cuanbot-dark py-2 rounded-xl text-center"
          />
          <span className="">%</span>
        </div>
        <div>
          <button type="button" onClick={handleIncrement} className="text-3xl px-5 pb-3 pt-1">
            +
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            className="text-3xl bg-cuanbot-light px-5 pb-3 pt-1 rounded-e-xl"
          >
            -
          </button>
        </div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default PriceReturnInput;
