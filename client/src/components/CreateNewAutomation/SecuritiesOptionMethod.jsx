import React from "react";
import { useField } from "formik";

const SecuritiesOptionMethod = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name} className="self-start mb-2">{label}</label>
        <select {...field} {...props}  className="text-cuanbot-white bg-cuanbot-light py-2 px-4 rounded-xl" />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default SecuritiesOptionMethod;
