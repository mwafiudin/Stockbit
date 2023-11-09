import React, { useEffect, useState } from "react";
import { Form, Formik, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

//? The Form Field //////////////////////////////////
const SecuritiesEmail = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("allProps in emailForm:", field);
  // if (props.isReset === true) {
  //   field.value = props.email;
  //   props.setIsReset(false);
  // }
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2 dark:bg-red-100 dark:border-red-400"
            : props.className
        }`}
      />
      {meta.touched && meta.error ? <div className="error mb-5">{meta.error}</div> : <div></div>}
    </>
  );
};
const SecuritiesPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2 dark:bg-red-100 dark:border-red-400"
            : props.className
        }`}
      />
      {meta.touched && meta.error ? <div className="error mb-5">{meta.error}</div> : null}
    </>
  );
};
const SecuritiesPin = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2 dark:bg-red-100 dark:border-red-400"
            : props.className
        }`}
      />
      {meta.touched && meta.error ? <div className="error mb-5">{meta.error}</div> : null}
    </>
  );
};

//? The Form Field //////////////////////////////////

const GlobalSecuritiesProductDetailForm = ({ index, to, icon, title, idAccSecurity, email, password, pin }) => {
  const [emailEvent, setEmailEvent] = useState("");
  const [passEvent, setPassEvent] = useState("");
  const [pinEvent, setPinEvent] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [first, setFirst] = useState(false);
  const formik = useFormikContext();

  useEffect(() => {
    setFirst(true);
  }, []);

  // console.log("emailEvent === email:", emailEvent === email)
  // console.log("emailEvent.length > 0:", emailEvent.length > 0)
  // console.log("email props is not null:", !email)
  // console.log("emailEvent useState:", emailEvent)
  // console.log("email props:", email.length)

  const handleEmail = (e) => {
    setEmailEvent(e.target.value);
    setFirst(false);
  };
  const handlePass = (e) => {
    setPassEvent(e.target.value);
    setFirst(false);
  };
  const handlePin = (e) => {
    setPinEvent(e.target.value);
    setFirst(false);
  };
  // const focusEmail = (e) => {
  //   console.log("focus e:", e.target.value);
  //   console.log("focus is same:", e.target.value !== email && e.target.value !== password && e.target.value !== pin);
  // };
  // const blurEmail = (e) => {
  //   console.log("blur e:", e.target.value);
  //   console.log("blur is same:",  e.target.value !== email && e.target.value !== password && e.target.value !== pin);
  // };
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
              title: "Your changes has been saved!",
              // text: "You won't be able to revert this!",
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
        <Form className="flex flex-col gap-1 mt-5 text-sm text-cuanbot-light-gray">
          <SecuritiesEmail
            label="Email"
            id="email"
            name="email"
            type="email"
            onInput={handleEmail}
            // isReset={isReset}
            // setIsReset={setIsReset}
            // email={email}
            // onFocus={focusEmail}
            // onBlur={blurEmail}
            // value={email}

            //! Use conditional for placeholder base on actual data from props
            placeholder={`Your existed ${title} account's email`}
            className="text-cuanbot-white bg-cuanbot-light p-2 text-sm rounded-lg mb-8"
          />
          <SecuritiesPassword
            label="Password"
            id="password"
            name="password"
            type="password"
            onInput={handlePass}
            // onFocus={focusEmail}
            // onBlur={blurEmail}
            //! Use conditional for placeholder base on actual data from props
            placeholder={`Your existed ${title} account's password`}
            className="text-cuanbot-white bg-cuanbot-light p-2 text-sm rounded-lg mb-8"
          />
          <SecuritiesPin
            label="PIN"
            id="pin"
            name="pin"
            type="password"
            onInput={handlePin}
            isReset={isReset}
            // onFocus={focusEmail}
            // onBlur={blurEmail}
            //! Use conditional for placeholder base on actual data from props
            placeholder={`Your existed ${title} account's PIN`}
            className="text-cuanbot-white bg-cuanbot-light p-2 text-sm rounded-lg mb-8"
          />
          {/* //! Testing for showing submit and cancel button only when data has change based on similarity values in global state via props and user keyboard push/change */}
          {/* {console.log("email:" + typeof email)}
          {console.log("pass:" + typeof password)}
          {console.log("pin:" + typeof pin, typeof idAccSecurity)} */}

          {/* {console.log("emailEvent === email:", emailEvent === email)}
          {console.log("emailEvent.length > 0:", emailEvent.length > 0 )}
          {console.log("emailEvent useState:", emailEvent)}
          {console.log("email props:", email)} */}
          {console.log("emailevent:", emailEvent)}
          {console.log("emailprops:", email)}
          {passEvent === password || pinEvent === pin || emailEvent === email || first ? (
            <></>
          ) : (
            <>
              <div className="flex justify-between gap-6">
                <button
                  className="flex justify-center items-center py-4 mb-20 bg-cuanbot-gray rounded-xl text-lg text-cuanbot-white grow"
                  onClick={() => setIsReset(true)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center py-4 mb-20 bg-cuanbot-green rounded-xl text-lg text-cuanbot-dark grow"
                >
                  Save Changes
                </button>
              </div>
            </>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default GlobalSecuritiesProductDetailForm;
