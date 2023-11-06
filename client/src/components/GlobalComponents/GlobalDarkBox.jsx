import React from "react";

const GlobalDarkBox = (props) => {
  return (
    <>
      <div className="flex flex-col bg-cuanbot-dark py-1 gap-y-5 rounded-xl px-4">{props.children}</div>
    </>
  );
};

export default GlobalDarkBox;
