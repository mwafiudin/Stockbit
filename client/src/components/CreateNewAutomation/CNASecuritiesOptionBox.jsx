import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import SecuritiesOptionActivePeriod from "./SecuritiesOptionActivePeriod";
import SecuritiesOptionMethod from "./SecuritiesOptionMethod";
import SecuritiesOptionChoose from "./SecuritiesOptionChoose";

const CNASecuritiesOptionBox = ({ cnaMethodItem, cnaSecuritiesItem }) => {
  return (
    <>
      <GlobalDarkBox>
        <label htmlFor="activePeriod" className="mr-auto mt-5">
          Active Period :
        </label>
        <div className="flex items-center justify-between -mt-4">
          <SecuritiesOptionActivePeriod
            id="activePeriod"
            label="Start Date"
            name="startDate"
            // value={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}
            // value={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}
            // value={`2023-10-29`}
            // value={`${new Date().getFullYear()}-${
            //   new Date().toLocaleDateString().split("/")[0]
            // }-${new Date().getDate()}`}
          />
          <span className="text-4xl">-</span>
          <SecuritiesOptionActivePeriod label="End Date" name="endDate" />
        </div>
        <SecuritiesOptionMethod label="Method" name="automationMethod">
          <option value="">Select Method</option>
          {cnaMethodItem.map((item, index) => (
            <option key={index} value={item.method}>
              {item.method}
            </option>
          ))}
        </SecuritiesOptionMethod>

        <SecuritiesOptionChoose label="Security" name="automationSecurity">
          <option value="">Select Security</option>
          {cnaSecuritiesItem.map((item, index) => (
            <option key={index} value={item.securities}>
              {item.securities}
            </option>
          ))}
        </SecuritiesOptionChoose>
      </GlobalDarkBox>
    </>
  );
};

export default CNASecuritiesOptionBox;
