import React from "react";

const SecuritiesOptionMenu = () => {
  const securitiesItems = [
    {
      to: "/user/profile",
      icon: <ProfileIcon />,
      title: "Stockbit",
    },
    {
      to: "/securities/product",
      icon: <BubbleIcon />,
      title: "{Other Securities}",
    },
    {
      to: "/user/currency",
      icon: <DollarIcon />,
      title: "{Other Currency}",
    },
  ];
  return <div>SecuritiesOptionMenu</div>;
};

export default SecuritiesOptionMenu;
