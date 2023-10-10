// import React from "react";
// import { MainNavigationIcons2 } from "../../icons/MainNavigationIcons2";
// import { Property1ActivityProperty2Default } from "../../icons/Property1ActivityProperty2Default";
// import { Property1EthernumProperty2Disabled1 } from "../../icons/Property1EthernumProperty2Disabled1";

// export const MainNavigation = ({ className, overlapClassName, divClassName }) => {
//   return (
//     <div className={`w-[366px] h-[76px] bg-[#1b232a] rounded-[20px] shadow-[0px_12px_50px_#161c2280] ${className}`}>
//       <div className="flex w-[366px] h-[76px] items-center justify-between pt-[11px] pb-[15px] px-[45px] relative">
//         <div className="relative w-[46px] h-[51px] mt-[-0.50px] mb-[-0.50px]">
//           <div className="relative w-[52px] h-[53px] left-[-4px]">
//             <div className="absolute top-[37px] left-[10px] [font-family:'Lato',Helvetica] font-normal text-[#c1c7cd] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
//               Home
//             </div>
//             <MainNavigationIcons2 className="!w-[52px] !h-[53px] !left-0 !absolute !top-0" />
//           </div>
//         </div>
//         <div className="relative w-[65px] h-[51px] mt-[-0.50px] mb-[-0.50px]">
//           <div className={`relative w-[63px] h-[52px] -top-px ${overlapClassName}`}>
//             <div
//               className={`absolute top-[38px] left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap ${divClassName}`}
//             >
//               Automation
//             </div>
//             <div className="w-[44px] h-[44px] left-[10px] absolute top-0">
//               <Property1EthernumProperty2Disabled1
//                 className="!absolute !w-[24px] !h-[24px] !top-[10px] !left-[10px]"
//                 color="#777777"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="relative w-[47px] h-[51px] mt-[-0.50px] mb-[-0.50px] mr-[-2.00px]">
//           <div className="relative w-[45px] h-[51px]">
//             <div className="absolute top-[37px] left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//               Activity
//             </div>
//             <Property1ActivityProperty2Default
//               className="!w-[44px] !h-[44px] !left-px !absolute !top-0"
//               color="#777777"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

///////////////////// Below are the code

import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";

export const MainNavigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  // Fungsi untuk memantau posisi scroll
  const handleScroll = () => {
    const sections = ["#home", "#about", "#experience", "#portfolio", "#contact"];

    // Menentukan bagian mana yang sedang aktif berdasarkan posisi scroll
    for (const section of sections) {
      const elem = document.querySelector(section);
      if (elem) {
        const rect = elem.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveNav(section);
          break; // Keluar dari loop setelah menemukan bagian yang aktif
        }
      }
    }
  };

  // Menjalankan handleScroll saat komponen dimuat dan ketika scrolling terjadi
  useEffect(() => {
    handleScroll(); // Memastikan kondisi awal saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>
        <AiOutlineHome /> Home
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <VscCode /> Automation
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail /> Activity
      </a>
    </nav>
  );
};
