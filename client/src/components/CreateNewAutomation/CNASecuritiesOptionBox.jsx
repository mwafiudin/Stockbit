import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import SecuritiesOptionActivePeriod from "./SecuritiesOptionActivePeriod";
import SecuritiesOptionMethod from "./SecuritiesOptionMethod";
import SecuritiesOptionChoose from "./SecuritiesOptionChoose";

const CNASecuritiesOptionBox = ({ cnaMethodItem, cnaSecuritiesItem }) => {
  return (
    <>
      <GlobalDarkBox>
        <SecuritiesOptionActivePeriod label="Start Date" name="startDate" />
        <span>-</span>
        <SecuritiesOptionActivePeriod label="End Date" name="endDate" />
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
