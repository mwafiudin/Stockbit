import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import SecuritiesOptionActivePeriod from "./SecuritiesOptionActivePeriod";
import SecuritiesOptionMethod from "./SecuritiesOptionMethod";
import SecuritiesOptionChoose from "./SecuritiesOptionChoose";

const CNASecuritiesOptionBox = () => {
  return (
    <>
      <GlobalDarkBox>
        <SecuritiesOptionActivePeriod />
        <SecuritiesOptionMethod />
        <SecuritiesOptionChoose />
      </GlobalDarkBox>
    </>
  );
};

export default CNASecuritiesOptionBox;
