import React from "react";
import { ReactComponent as ScreeningListIcon } from "../../icons/screening-list.svg";
import { ReactComponent as OrderListIcon } from "../../icons/order-list.svg";
import { ReactComponent as PortfolioIcon } from "../../icons/portfolio.svg";
import DashboardMenuList from "./DashboardMenuList";

const DashboardMenu = () => {
  const menuItems = [
    {
      to: "/screening-list",
      icon: <ScreeningListIcon />,
      title: "Screening List",
    },
    {
      to: "/order-list",
      icon: <OrderListIcon />,
      title: "Order List",
    },
    {
      to: "portfolio",
      icon: <PortfolioIcon />,
      title: "Portfolio",
    },
  ];

  return <DashboardMenuList menuItems={menuItems} />;
};

export default DashboardMenu;

// const DashboardMenu = () => {
//   return (
//     <>
//       <div>
//         <ul className="flex flex-col gap-1">
//           <li className="bg-cuanbot-dark">
//             <Link to="/screening-list" className="flex justify-between">
//               <div className="flex">
//                 <ScreeningListIcon />
//                 <h2 className="text-cuanbot-text-gray">Screening List</h2>
//               </div>
//               <RightArrowIcon />
//             </Link>
//           </li>
//           <li className="bg-cuanbot-dark">
//             <Link to="/order-list" className="flex justify-between">
//               <div className="flex">
//                 <OrderListIcon />
//                 <h2 className="text-cuanbot-text-gray">Order List</h2>
//               </div>
//               <RightArrowIcon />
//             </Link>
//           </li>
//           <li className="bg-cuanbot-dark">
//             <Link to="/portfolio" className="flex justify-between">
//               <div className="flex">
//                 <PortfolioIcon />
//                 <h2 className="text-cuanbot-text-gray">Portfolio</h2>
//               </div>
//               <RightArrowIcon />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };
