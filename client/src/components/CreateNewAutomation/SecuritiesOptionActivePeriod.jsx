import React from "react";
import { useField } from "formik";

const SecuritiesOptionActivePeriod = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="flex flex-col">
          <input
            type="date"
            {...field}
            {...props}
            className="text-cuanbot-white bg-cuanbot-light py-2 px-2 rounded-xl"
          />
          {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
      </div>
    </>
  );
};

export default SecuritiesOptionActivePeriod;
