import React, { useState } from "react";
import CNASecuritiesOptionBox from "../../components/CreateNewAutomation/CNASecuritiesOptionBox";
import CNA1DayPriceReturnBox from "../../components/CreateNewAutomation/CNA1DayPriceReturnBox";
import CNAPriceRangeBox from "../../components/CreateNewAutomation/CNAPriceRangeBox";
import CNAMaxBalanceAllocated from "../../components/CreateNewAutomation/CNAMaxBalanceAllocated";
import CNAMaxStocksSelected from "../../components/CreateNewAutomation/CNAMaxStocksSelected";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const CNAForm = () => {
  //! Nanti seharusnya isi-isi select dibawah ini diganti menggunakan react redux agar dinamis dapat diatur melalui halaman lain
  const cnaMethodItem = [
    {
      method: "BSJP",
    },
    {
      method: "DLL",
    },
    {
      method: "DLL2",
    },
  ];
  const cnaSecuritiesItem = [
    {
      securities: "Stockbit",
    },
    {
      securities: "Others1",
    },
    {
      securities: "Others2",
    },
  ];
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
          jobType: "",
          sliderValue: 50, // Added for the range input
          startDate: "",
          endDate: "",
          percentageValue: 0, // Tambahkan nilai awal untuk input percentage
          rangeValues: [25, 75], // Tambahkan nilai awal untuk double range slider
      
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
          lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          acceptedTerms: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(["designer", "development", "product", "other"], "Invalid Job Type")
            .required("Required"),
          sliderValue: Yup.number().min(0, "Must be at least 0").max(100, "Must be at most 100").required("Required"),
          startDate: Yup.date()
            .required("Required")
            .min(new Date().toDateString(), "Start date must be today or later")
            .max(Yup.ref("endDate"), "Start date must be before end date"),
          endDate: Yup.date()
            .required("Required")
            .max(new Date(2099, 11, 31), "End date must be before or on 31st December 2099")
            .min(Yup.ref("startDate"), "End date must be after start date"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-5 mt-5 text-sm text-cuanbot-light-gray">
          <CNASecuritiesOptionBox cnaMethodItem={cnaMethodItem} cnaSecuritiesItem={cnaSecuritiesItem} />
          <CNA1DayPriceReturnBox />
          <CNAPriceRangeBox />
          <CNAMaxBalanceAllocated />
          <CNAMaxStocksSelected />
          <div className="flex justify-center items-center py-4 bg-cuanbot-green rounded-xl text-lg text-cuanbot-dark">
            <button type="submit">Activate</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default CNAForm;
