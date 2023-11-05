import React from "react";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

//? The Form Field //////////////////////////////////
const SecuritiesEmail = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};
const SecuritiesPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};
const SecuritiesPin = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

//? The Form Field //////////////////////////////////

const GlobalSecuritiesProductDetailForm = ({ index, to, icon, title, idAccSecurity, email, password, pin }) => {
  return (
    <>
      <Formik
        initialValues={{
          email,
          password,
          pin,
          idAccSecurity,
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
          pin: Yup.string()
            .matches(/^[0-9]{6}$/, "The PIN must consist of 6 numbers")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Saving form values
            // alert(JSON.stringify(values, null, 2));

            Swal.fire({
              title: "Are you sure want to activate?",
              text: "You won't be able to revert this!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then((result) => {
              console.log("json:", JSON.stringify(values, null, 2));
              console.log("result:", result);
            });

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-5 mt-5 text-sm text-cuanbot-light-gray">
          <SecuritiesEmail
            label="Email"
            name="email"
            type="email"
            //! Use conditional for placeholder base on actual data from props
            placeholder="Jane"
          />
          <SecuritiesPassword
            label="Password"
            name="password"
            type="password"
            //! Use conditional for placeholder base on actual data from props
            placeholder="Doe"
          />
          <SecuritiesPin
            label="PIN"
            name="pin"
            type="password"
            //! Use conditional for placeholder base on actual data from props
            placeholder="DRe"
          />

          <button
            type="submit"
            className="flex justify-center items-center py-4 mb-20 bg-cuanbot-green rounded-xl text-lg text-cuanbot-dark"
          >
            Activate
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default GlobalSecuritiesProductDetailForm;
