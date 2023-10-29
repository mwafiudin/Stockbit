import React from "react";
import { useField } from "formik";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  width: 42px;
`;

const PriceRangeMinInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <label htmlFor="minPriceRange">{label}</label>
          <Input {...field} {...props} />
        </div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  );
};

export default PriceRangeMinInput;
