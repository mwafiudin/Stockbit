import React from "react";
import { useField } from "formik";

const MaxStockInput = ({ label, ...props }) => {
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
        value: Math.max(parseFloat(field.value || 0) - 1, 1),
      },
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="flex">
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <input type="number" {...field} {...props} min="1" max="100" />
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default MaxStockInput;
