"use client";
import { AddFavoriteButton } from "../../components/AddFavoriteButton";
import { BotIcon } from "../../components/BotIcon";
import { LimitBuySellBuy } from "../../components/LimitBuySellBuy";
import { MainNavigation } from "../../components/MainNavigation";
import { BulkIconBuyOrder } from "../../icons/BulkIconBuyOrder";
import { Component6 } from "../../icons/Component6";
import { EssentialsArrow } from "../../icons/EssentialsArrow";
import { Icons } from "../../icons/Icons";
import { Icons1 } from "../../icons/Icons1";
import { Icons6 } from "../../icons/Icons6";
import { Property1SearchProperty2Ticon } from "../../icons/Property1SearchProperty2Ticon";
import { TopMidIcons1 } from "../../icons/TopMidIcons1";

// ///////////////////////////////////

import { Fragment, useState } from "react";
import { Disclosure, Listbox, Menu, Transition } from "@headlessui/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const tabs = [
  { name: "Applied", href: "#", count: "2", current: false },
  { name: "Phone Screening", href: "#", count: "4", current: false },
  { name: "Interview", href: "#", count: "6", current: true },
  { name: "Offer", href: "#", current: false },
  { name: "Disqualified", href: "#", current: false },
];
const candidates = [
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    applied: "January 7, 2020",
    appliedDatetime: "2020-07-01T15:34:56",
    status: "Completed phone screening",
  },
  // More candidates...
];
const publishingOptions = [
  { name: "Published", description: "This job posting can be viewed by anyone who has the link.", current: true },
  { name: "Draft", description: "This job posting will no longer be publicly accessible.", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
      <div className="min-h-full">
        {/* Navbar */}
        <Disclosure as="nav" className="bg-gray-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500"
                        alt="Your Company"
                      />
                    </div>

                    {/* Links section */}
                    <div className="hidden lg:ml-10 lg:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? "bg-gray-100" : "hover:text-gray-700",
                              "px-3 py-2 rounded-md text-sm font-medium text-gray-900"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                    {/* Search section */}
                    <div className="w-full max-w-lg lg:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-gray-400 focus-within:text-gray-500">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>

                  {/* Actions section */}
                  <div className="hidden lg:ml-4 lg:block">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="border-b border-gray-200 bg-gray-50 lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-100" : "hover:bg-gray-100",
                        "block px-3 py-2 rounded-md font-medium text-gray-900"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Page heading */}
        <div className="relative w-[414px] h-[1287px] bg-[#161c22] rounded-[40px] overflow-hidden">
          <div className="absolute w-[414px] h-[738px] top-0 left-0 bg-[url(https://c.animaapp.com/wMI6dPLx/img/background.svg)] bg-[100%_100%]">
            <div className="absolute w-[414px] h-[390px] top-[345px] left-0">
              <img
                className="absolute w-[367px] h-px top-[310px] left-[24px]"
                alt="Vector"
                src="https://c.animaapp.com/wMI6dPLx/img/vector-9.svg"
              />
              <div className="inline-flex flex-col items-start gap-px absolute top-0 left-0">
                <div className="relative w-[414px] h-[46px]">
                  <div className="relative h-[46px]">
                    <div className="w-[366px] h-[46px] left-[24px] bg-[#161c22] rounded-[12px] absolute top-0" />
                    <div className="flex w-[414px] h-[46px] items-center justify-center gap-[8px] px-[24px] py-0 absolute top-0 left-0">
                      <div className="inline-flex items-start gap-[4px] px-[20px] py-[10px] relative flex-[0_0_auto] bg-[#161c22] rounded-[10px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                          All
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[4px] px-[20px] py-[10px] relative flex-[0_0_auto] bg-[#1b232a] rounded-[10px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                          Active
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[4px] px-[20px] py-[10px] relative flex-[0_0_auto] bg-[#161c22] rounded-[10px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                          Done
                        </div>
                      </div>
                      <div className="inline-flex items-start gap-[4px] px-[20px] py-[10px] relative flex-[0_0_auto] bg-[#161c22] rounded-[10px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                          Idle
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[414px] items-center pt-0 pb-[20px] px-0 relative flex-[0_0_auto]">
                  <div className="flex flex-col w-[366px] items-center justify-center gap-[20px] px-0 py-[20px] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[20px] relative flex-[0_0_auto]">
                      <div className="relative w-[363.25px] h-[41.02px]">
                        <div className="flex w-[363px] h-[41px] items-end gap-[48px] relative">
                          <div className="relative w-[89px] h-[41.02px]">
                            <div className="absolute w-[40px] h-[41px] top-0 left-[53px]">
                              <div className="top-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap absolute left-0">
                                Bot 1
                              </div>
                              <div className="absolute top-[24px] left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                                BSJP
                              </div>
                            </div>
                            <BotIcon className="!absolute !left-0 !top-px" />
                          </div>
                          <div className="relative w-[113px] h-[40px]">
                            <div className="relative w-[109px] h-[40px]">
                              <p className="top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-right leading-[24px] whitespace-nowrap absolute text-[14px] tracking-[0.37px]">
                                01 Sep - 30 Sep
                              </p>
                              <div className="top-[23px] left-[6px] [font-family:'Lato',Helvetica] font-normal text-[#777777] leading-[normal] absolute text-[14px] tracking-[0.37px]">
                                21 Active Days
                              </div>
                            </div>
                          </div>
                          <div className="relative w-[74px] h-[41px] mr-[-4.75px]">
                            <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] text-right tracking-[0.37px] leading-[24px] whitespace-nowrap">
                              32,697.05
                            </div>
                            <div className="absolute top-[24px] left-[25px] [font-family:'Lato',Helvetica] font-normal text-[#5ed5a8] text-[14px] tracking-[0.37px] leading-[normal]">
                              +0.81%
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="relative w-[367px] h-px mb-[-0.50px] ml-[-0.50px] mr-[-0.50px]"
                        alt="Vector"
                        src="https://c.animaapp.com/wMI6dPLx/img/vector-4-2.svg"
                      />
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-[20px] relative flex-[0_0_auto]">
                      <div className="relative w-[363.25px] h-[41.02px]">
                        <div className="flex w-[363px] h-[41px] items-end gap-[48px] relative">
                          <div className="relative w-[89px] h-[41.02px]">
                            <div className="absolute w-[40px] h-[41px] top-0 left-[53px]">
                              <div className="top-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap absolute left-0">
                                Bot 1
                              </div>
                              <div className="absolute top-[24px] left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                                BSJP
                              </div>
                            </div>
                            <BotIcon
                              className="bg-[url(https://c.animaapp.com/wMI6dPLx/img/bitcoin--btc--1.svg)] !absolute !left-0 !top-px"
                              icon={<Icons1 className="!absolute !w-[45px] !h-[53px] !top-[-2px] !left-[-3px]" />}
                            />
                          </div>
                          <div className="relative w-[113px] h-[40px]">
                            <div className="relative w-[109px] h-[40px]">
                              <p className="top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-right leading-[24px] whitespace-nowrap absolute text-[14px] tracking-[0.37px]">
                                01 Sep - 30 Sep
                              </p>
                              <div className="top-[23px] left-[6px] [font-family:'Lato',Helvetica] font-normal text-[#777777] leading-[normal] absolute text-[14px] tracking-[0.37px]">
                                21 Active Days
                              </div>
                            </div>
                          </div>
                          <div className="relative w-[74px] h-[41px] mr-[-4.75px]">
                            <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] text-right tracking-[0.37px] leading-[24px] whitespace-nowrap">
                              32,697.05
                            </div>
                            <div className="absolute top-[24px] left-[25px] [font-family:'Lato',Helvetica] font-normal text-[#5ed5a8] text-[14px] tracking-[0.37px] leading-[normal]">
                              +0.81%
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="relative w-[367px] h-px mb-[-0.50px] ml-[-0.50px] mr-[-0.50px]"
                        alt="Vector"
                        src="https://c.animaapp.com/wMI6dPLx/img/vector-4-1.svg"
                      />
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-[20px] relative flex-[0_0_auto]">
                      <div className="relative w-[363.25px] h-[41.02px]">
                        <div className="flex w-[363px] h-[41px] items-end gap-[48px] relative">
                          <div className="relative w-[89px] h-[41.02px]">
                            <div className="absolute w-[40px] h-[41px] top-0 left-[53px]">
                              <div className="top-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap absolute left-0">
                                Bot 1
                              </div>
                              <div className="absolute top-[24px] left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                                BSJP
                              </div>
                            </div>
                            <BotIcon
                              className="bg-[url(https://c.animaapp.com/wMI6dPLx/img/bitcoin--btc-.svg)] !absolute !left-0 !top-px"
                              icon={<Icons className="!absolute !w-[45px] !h-[53px] !top-[-2px] !left-[-3px]" />}
                            />
                          </div>
                          <div className="relative w-[113px] h-[40px]">
                            <div className="relative w-[109px] h-[40px]">
                              <p className="top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-right leading-[24px] whitespace-nowrap absolute text-[14px] tracking-[0.37px]">
                                01 Sep - 30 Sep
                              </p>
                              <div className="top-[23px] left-[6px] [font-family:'Lato',Helvetica] font-normal text-[#777777] leading-[normal] absolute text-[14px] tracking-[0.37px]">
                                21 Active Days
                              </div>
                            </div>
                          </div>
                          <div className="relative w-[74px] h-[41px] mr-[-4.75px]">
                            <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[14px] text-right tracking-[0.37px] leading-[24px] whitespace-nowrap">
                              32,697.05
                            </div>
                            <div className="absolute top-[24px] left-[25px] [font-family:'Lato',Helvetica] font-normal text-[#5ed5a8] text-[14px] tracking-[0.37px] leading-[normal]">
                              +0.81%
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="relative w-[367px] h-px mb-[-0.50px] ml-[-0.50px] mr-[-0.50px]"
                        alt="Vector"
                        src="https://c.animaapp.com/wMI6dPLx/img/vector-4.svg"
                      />
                    </div>
                  </div>
                  <AddFavoriteButton
                    className="!relative"
                    divClassName="!text-[#777777] ![text-align:unset]"
                    groupClassName="!w-[180px]"
                    overlapGroupClassName="!w-[178px]"
                    subtract="https://c.animaapp.com/wMI6dPLx/img/subtract-1.svg"
                    text="Run Automation"
                    vector="https://c.animaapp.com/wMI6dPLx/img/vector@2x.png"
                    vectorClassName="!left-[-31582px] !top-[-11037px]"
                  />
                </div>
              </div>
            </div>
            <header className="absolute w-[414px] h-[95px] top-0 left-0 bg-[#1b232a] shadow-[0px_12px_16px_#161c2280]">
              <div className="inline-flex items-center gap-[242px] relative top-[37px] left-[24px]">
                <div className="relative w-[36px] h-[36px] bg-[url(https://c.animaapp.com/wMI6dPLx/img/ellipse-441@2x.png)] bg-cover bg-[50%_50%]" />
                <div className="inline-flex items-start relative flex-[0_0_auto]">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="h-[44px]">
                      <div className="relative w-[24px] h-[24px] top-[10px] left-[10px]">
                        <Icons6 className="!absolute !w-[44px] !h-[43px] !top-[-9px] !left-[-10px]" />
                      </div>
                    </div>
                  </div>
                  <TopMidIcons1 className="!relative !w-[44px] !h-[44px]" />
                </div>
              </div>
            </header>
            <div className="inline-flex flex-col items-center gap-[20px] px-0 py-[20px] absolute top-[95px] left-0">
              <div className="flex w-[414px] items-center justify-center gap-[144px] relative flex-[0_0_auto]">
                <div className="relative w-[182px] h-[40px]">
                  <div className="absolute top-[5px] left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[20px] tracking-[0] leading-[28.0px] whitespace-nowrap">
                    Hello, mwafiudin!
                  </div>
                </div>
                <img
                  className="relative w-[24px] h-[24px]"
                  alt="Group"
                  src="https://c.animaapp.com/wMI6dPLx/img/group-162@2x.png"
                />
              </div>
              <div className="relative w-[366px] h-[144px] bg-[#161c22] rounded-[12px]">
                <div className="absolute w-[103px] top-[15px] left-[56px] [font-family:'Lato',Helvetica] font-normal text-[#c1c7cd] text-[14px] tracking-[0] leading-[normal]">
                  Screening List
                </div>
                <EssentialsArrow className="!top-[2px] !absolute !w-[44px] !h-[44px] !left-[322px]" color="#777777" />
                <div className="absolute w-[65px] h-[17px] top-[64px] left-[56px]">
                  <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#c1c7cd] text-[14px] tracking-[0] leading-[normal]">
                    Order List
                  </div>
                </div>
                <img
                  className="absolute w-[367px] h-px top-[48px] left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/wMI6dPLx/img/vector-6.svg"
                />
                <img
                  className="absolute w-[367px] h-px top-[96px] left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/wMI6dPLx/img/vector-6.svg"
                />
                <EssentialsArrow className="!top-[51px] !absolute !w-[44px] !h-[44px] !left-[322px]" color="#777777" />
                <div className="absolute w-[65px] h-[17px] top-[111px] left-[56px]">
                  <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#c1c7cd] text-[14px] tracking-[0] leading-[normal]">
                    Portofolio
                  </div>
                </div>
                <EssentialsArrow className="!top-[98px] !absolute !w-[44px] !h-[44px] !left-[322px]" color="#777777" />
                <BulkIconBuyOrder className="!absolute !w-[44px] !h-[44px] !top-[50px] !left-[6px]" color="#777777" />
                <Component6 className="!absolute !w-[37px] !h-[38px] !top-[106px] !left-[16px]" />
                <Property1SearchProperty2Ticon
                  className="!absolute !w-[44px] !h-[44px] !top-[2px] !left-[6px]"
                  color="#777777"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[414px] h-[506px] top-[754px] left-0">
            <div className="inline-flex flex-col items-center gap-[28px] px-0 py-[20px] absolute top-0 left-0">
              <div className="flex w-[414px] items-start justify-center gap-[202px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[18px] tracking-[0.48px] leading-[normal]">
                  Recent Activity
                </div>
                <img
                  className="relative w-[22px] h-[22px]"
                  alt="Filter"
                  src="https://c.animaapp.com/wMI6dPLx/img/filter.svg"
                />
              </div>
              <div className="inline-flex flex-col items-start gap-[20px] relative flex-[0_0_auto]">
                <div className="relative w-[372px] h-[87px] mr-[-4.00px]">
                  <div className="absolute top-0 left-[48px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap">
                    SEMA
                  </div>
                  <div className="absolute top-[28px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[#767677] text-[14px] tracking-[0.37px] leading-[normal]">
                    Lot/Amount
                  </div>
                  <div className="text-[#767677] absolute top-[49px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Price
                  </div>
                  <div className="text-[#767677] absolute top-[70px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Status
                  </div>
                  <div className="absolute w-[139px] h-[87px] top-0 left-[231px]">
                    <div className="top-[28px] left-[36px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      32/15.000.000
                    </div>
                    <div className="absolute top-[70px] left-[92px] [font-family:'Lato',Helvetica] font-normal text-[#5ed5a8] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      Match
                    </div>
                    <div className="top-[49px] left-[79px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      2652.00
                    </div>
                    <div className="absolute w-[134px] h-[24px] top-0 left-0">
                      <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-right tracking-[0.32px] leading-[24px] whitespace-nowrap">
                        2021-08-02 04:39:26
                      </div>
                      <img
                        className="absolute w-[6px] h-[10px] top-[8px] left-[127px]"
                        alt="Group"
                        src="https://c.animaapp.com/wMI6dPLx/img/group-116@2x.png"
                      />
                    </div>
                  </div>
                  <LimitBuySellBuy
                    className="!absolute !left-0 !top-px"
                    divClassName="!tracking-[0.26px] !text-[10px] !left-[10px]"
                    property1="limit-buy"
                    text="BUY"
                  />
                </div>
                <div className="relative w-[376px] h-[87px] mr-[-8.00px]">
                  <div className="text-[#777777] absolute top-[70px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Status
                  </div>
                  <div className="absolute top-0 left-[48px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap">
                    GIAA
                  </div>
                  <div className="absolute top-[28px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                    Lot/Amount
                  </div>
                  <div className="text-[#777777] absolute top-[49px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Price
                  </div>
                  <div className="absolute w-[143px] h-[87px] top-0 left-[231px]">
                    <div className="absolute top-[70px] left-[80px] [font-family:'Lato',Helvetica] font-normal text-[#dd4a4a] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      Rejected
                    </div>
                    <div className="top-[28px] left-[36px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      32/15.000.000
                    </div>
                    <div className="top-[49px] left-[79px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      2652.00
                    </div>
                    <div className="absolute w-[134px] h-[24px] top-0 left-0">
                      <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-right tracking-[0.32px] leading-[24px] whitespace-nowrap">
                        2021-08-02 04:39:26
                      </div>
                      <img
                        className="absolute w-[6px] h-[10px] top-[8px] left-[127px]"
                        alt="Group"
                        src="https://c.animaapp.com/wMI6dPLx/img/group-117-2@2x.png"
                      />
                    </div>
                  </div>
                  <LimitBuySellBuy
                    className="!absolute !left-0 !top-px"
                    divClassName="!tracking-[0.26px] !text-[10px]"
                    property1="limit-sell"
                    text1="SELL"
                  />
                </div>
                <div className="relative w-[376px] h-[87px] mr-[-8.00px]">
                  <div className="text-[#777777] absolute top-[70px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Status
                  </div>
                  <div className="absolute top-0 left-[48px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap">
                    BBCA
                  </div>
                  <div className="absolute top-[28px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                    Lot/Amount
                  </div>
                  <div className="text-[#777777] absolute top-[49px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Price
                  </div>
                  <div className="absolute w-[140px] h-[87px] top-0 left-[234px]">
                    <div className="absolute top-[70px] left-[98px] [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      Open
                    </div>
                    <div className="top-[28px] left-[33px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      32/15.000.000
                    </div>
                    <div className="absolute top-[49px] left-[96px] [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      2652
                    </div>
                    <div className="absolute w-[131px] h-[24px] top-0 left-0">
                      <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-right tracking-[0.32px] leading-[24px] whitespace-nowrap">
                        2021-08-02 04:39:26
                      </div>
                      <img
                        className="absolute w-[6px] h-[10px] top-[8px] left-[124px]"
                        alt="Group"
                        src="https://c.animaapp.com/wMI6dPLx/img/group-117-2@2x.png"
                      />
                    </div>
                  </div>
                  <LimitBuySellBuy
                    className="!absolute !left-0 !top-px"
                    divClassName="!tracking-[0.26px] !text-[10px]"
                    property1="limit-sell"
                    text1="SELL"
                  />
                </div>
                <div className="relative w-[376px] h-[87px] mr-[-8.00px]">
                  <div className="text-[#777777] absolute top-[70px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Status
                  </div>
                  <div className="absolute top-0 left-[48px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#fffffc] text-[14px] tracking-[0.37px] leading-[24px] whitespace-nowrap">
                    BBCA
                  </div>
                  <div className="absolute top-[28px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[14px] tracking-[0.37px] leading-[normal]">
                    Lot/Amount
                  </div>
                  <div className="text-[#777777] absolute top-[49px] left-[48px] [font-family:'Lato',Helvetica] font-normal text-[14px] tracking-[0.37px] leading-[normal]">
                    Price
                  </div>
                  <div className="absolute w-[140px] h-[87px] top-0 left-[234px]">
                    <div className="absolute top-[70px] left-[98px] [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      Open
                    </div>
                    <div className="top-[28px] left-[33px] absolute [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      32/15.000.000
                    </div>
                    <div className="absolute top-[49px] left-[96px] [font-family:'Lato',Helvetica] font-normal text-[#a6aeb6] text-[14px] text-right tracking-[0.37px] leading-[normal]">
                      2652
                    </div>
                    <div className="absolute w-[131px] h-[24px] top-0 left-0">
                      <div className="absolute top-0 left-0 [font-family:'Lato',Helvetica] font-normal text-[#777777] text-[12px] text-right tracking-[0.32px] leading-[24px] whitespace-nowrap">
                        2021-08-02 04:39:26
                      </div>
                      <img
                        className="absolute w-[6px] h-[10px] top-[8px] left-[124px]"
                        alt="Group"
                        src="https://c.animaapp.com/wMI6dPLx/img/group-117-2@2x.png"
                      />
                    </div>
                  </div>
                  <LimitBuySellBuy
                    className="!absolute !left-0 !top-px"
                    divClassName="!tracking-[0.26px] !text-[10px]"
                    property1="limit-sell"
                    text1="SELL"
                  />
                </div>
              </div>
            </div>
            <MainNavigation
              className="!absolute !left-[24px] !top-[430px]"
              divClassName="!top-[37px]"
              overlapClassName="!h-[51px] !top-[unset]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
