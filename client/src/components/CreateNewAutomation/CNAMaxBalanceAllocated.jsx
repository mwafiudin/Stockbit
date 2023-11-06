import React from "react";
import GlobalDarkBox from "../GlobalComponents/GlobalDarkBox";
import MaxBalanceInput from "./MaxBalanceInput";

const CNAMaxBalanceAllocated = () => {
  return (
    <>
      <GlobalDarkBox>
        <MaxBalanceInput label="Max Balance Allocated:" name="maxBalance" min="25" max="100" step="25" list="values" />
      </GlobalDarkBox>
    </>
  );
};

export default CNAMaxBalanceAllocated;
