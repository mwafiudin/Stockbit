import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as AutomationIcon } from "../../icons/automation.svg";
import { ReactComponent as ActivityIcon } from "../../icons/activity.svg";
// import { AiFillHome } from "react-icons/ai";

const FloatNavbar = ({ currentFloatNav }) => {
  const [activeTab, setActiveTab] = useState(currentFloatNav);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const floatNavItem = [
    {
      title: "Home",
      // icon: <HomeIcon />,
      // icon: <AiFillHome />,
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
      //     <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      //     <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      //   </svg>
      // ),
      icon: (
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-cuanbot-green"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 25"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),

      to: "/",
    },
    {
      title: "Automation",
      // icon: <AutomationIcon />,
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
      //     <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
      //   </svg>
      // ),
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      //     <path
      //       fillRule="evenodd"
      //       d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
      //       clipRule="evenodd"
      //     />
      //   </svg>
      // ),
      icon: (
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-cuanbot-green"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 25"
        >
          <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
        </svg>
      ),
      to: "/automation",
    },
    {
      title: "Activity",
      // icon: <ActivityIcon />,
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
      //     <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" />
      //   </svg>
      // ),
      // icon: (
      //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      //     <path
      //       fillRule="evenodd"
      //       d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
      //       clipRule="evenodd"
      //     />
      //   </svg>
      // ),
      icon: (
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-cuanbot-green"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 25"
        >
          <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
        </svg>
      ),
      to: "/activity",
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 w-full">
        <nav className="container flex bg-cuanbot-header items-center justify-evenly fixed bottom-0 backdrop-blur-2xl">
          {floatNavItem.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              onClick={() => handleTabClick(item.title)}
              className={`cursor-pointer rounded group hover:text-cuanbot-green ${
                activeTab === item.title ? "text-cuanbot-text-gray" : "text-cuanbot-gray"
              }`}
            >
              <div
                className={`flex flex-col justify-center items-center p-[12px] text-xs ${
                  activeTab === item.title ? "border-t-2 border-cuanbot-green text-cuanbot-green" : ""
                }`}
              >
                {item.icon}
                {item.title}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FloatNavbar;

//flex px-[30px] gap-[10px] items-center bg-cuanbot-light rounded-xl w-max-content fixed left-1/2 -translate-x-1/2 bottom-8 backdrop-blur-2xl
