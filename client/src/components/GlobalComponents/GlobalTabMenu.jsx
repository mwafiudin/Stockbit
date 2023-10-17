import React from "react";

const GlobalTabMenu = ({ activeTab, handleTabClick, botTabItem }) => {
  return (
    <>
      <div className="flex justify-center gap-2 bg-cuanbot-dark rounded-xl text-pure-white px-5">
        {botTabItem.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer px-5 py-2 rounded my-1.5 flex-grow flex-shrink ${
              activeTab === tab ? "bg-cuanbot-light rounded-xl" : "text-cuanbot-gray"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    </>
  );
};

export default GlobalTabMenu;
