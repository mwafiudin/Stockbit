import React from "react";
import { useField } from "formik";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  width: 42px;
`;

const PriceRangeMinInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);

  
  return (
    <>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default PriceRangeMinInput;
