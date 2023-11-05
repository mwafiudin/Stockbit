import React, { useState } from "react";
import CNASecuritiesOptionBox from "../../components/CreateNewAutomation/CNASecuritiesOptionBox";
import CNA1DayPriceReturnBox from "../../components/CreateNewAutomation/CNA1DayPriceReturnBox";
import CNAPriceRangeBox from "../../components/CreateNewAutomation/CNAPriceRangeBox";
import CNAMaxBalanceAllocated from "../../components/CreateNewAutomation/CNAMaxBalanceAllocated";
import CNAMaxStocksSelected from "../../components/CreateNewAutomation/CNAMaxStocksSelected";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const CNAForm = () => {
  const minPriceDefault = 15000;
  const maxPriceDefault = 35000;
  const [minPriceSliderValue, setMinPriceSliderValue] = useState(minPriceDefault);
  const [maxPriceSliderValue, setMaxPriceSliderValue] = useState(maxPriceDefault);
  const handleMinPriceChance = (value) => {
    setMinPriceSliderValue(value);
  };
  const handleMaxPriceChance = (value) => {
    setMaxPriceSliderValue(value);
  };
  // console.log("minPrice slider:", minPriceSliderValue);
  // console.log("maxPrice slider:", maxPriceSliderValue);
  //! Nanti seharusnya isi-isi select dibawah ini diganti menggunakan react redux agar dinamis dapat diatur melalui halaman lain. Tapi liat nanti :D
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
          startDate: "",
          endDate: "",
          automationMethod: "",
          automationSecurity: "",
          priceReturnValue: 0,
          minPriceRange: minPriceDefault,
          maxPriceRange: maxPriceDefault,
          maxBalance: 0,
          maxStocksValue: 0,
        }}
        validationSchema={Yup.object({
          startDate: Yup.date()
            .required("Required")
            .min(new Date().toDateString(), "Start date must be at least today or later")
            .max(Yup.ref("endDate"), "Start date must be at most before end date"),
          endDate: Yup.date()
            .required("Required")
            .min(Yup.ref("startDate"), "End date must be at least after start date")
            .max(new Date(2099, 11, 31), "End date must be at most before or on 31st December 2099")
            .test("is-one-day-after-start", "End date must be at least one day after start date", function (value) {
              const startDate = this.resolve(Yup.ref("startDate"));
              const endDate = new Date(startDate);
              endDate.setDate(startDate.getDate() + 1);
              return value >= endDate;
            }),
          automationMethod: Yup.string()
            .oneOf(
              cnaMethodItem.map((item, index, array) => {
                return item.method;
              }),
              "Invalid Method Type"
            )
            .required("Required"),
          automationSecurity: Yup.string()
            .oneOf(
              cnaSecuritiesItem.map((item, index, array) => {
                return item.securities;
              }),
              "Invalid Security Type"
            )
            .required("Required"),
          priceReturnValue: Yup.number()
            .min(-100, "Must be at least -100%")
            .max(100, "Must be at most 100%")
            .required("Required"),
          minPriceRange: Yup.number()
            .min(0, "Must be at least 0")
            .max(maxPriceSliderValue - 1, "Must be less than Max Price")
            .required("Required"),
          maxPriceRange: Yup.number()
            .min(minPriceSliderValue + 1, "Must be more than Min Price")
            .max(50000, "Must be at most 50000")
            .required("Required"),
          maxBalance: Yup.number().min(0, "Must be at least 0").max(100, "Must be at most 100").required("Required"),
          maxStocksValue: Yup.number()
            .min(0, "Must be at least 0")
            .max(100, "Must be at most 100")
            .required("Required"),

          // minPriceRange: Yup.number().min(0, "Must be at least 0").max(100, "Must be at most 100").required("Required"),
          // maxPriceRange: Yup.number().min(0, "Must be at least 0").max(100, "Must be at most 100").required("Required"),
          // lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          // email: Yup.string().email("Invalid email address").required("Required"),
          // acceptedTerms: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions."),
          // sliderValue: Yup.number().min(0, "Must be at least 0").max(100, "Must be at most 100").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Saving form values
            // alert(JSON.stringify(values, null, 2));

            Swal.fire({
              title: "Are you sure want to activate?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, activate it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Activated!", "Your bot has been activated.", "success");
                console.log(JSON.stringify(values, null, 2));
              }
            });

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-5 mt-5 text-sm text-cuanbot-light-gray">
          <CNASecuritiesOptionBox cnaMethodItem={cnaMethodItem} cnaSecuritiesItem={cnaSecuritiesItem} />
          <CNA1DayPriceReturnBox />
          <CNAPriceRangeBox
            minPriceDefault={minPriceDefault}
            maxPriceDefault={maxPriceDefault}
            // setMinPriceSliderValue={setMinPriceSliderValue}
            // setMaxPriceSliderValue={setMaxPriceSliderValue}
            handleMinPriceChance={handleMinPriceChance}
            handleMaxPriceChance={handleMaxPriceChance}
          />
          <CNAMaxBalanceAllocated />
          <CNAMaxStocksSelected />

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

export default CNAForm;
