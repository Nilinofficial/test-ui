"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { dashBoardLinks } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser, logoutUser } from "@/slices/userSlice";
import { useCookies } from "react-cookie";

function Sidebar() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const logOut = () => {
    const userCookie =  removeCookie("token", { path: "/" , domain: 'localhost'});
    dispatch(loginUser(userCookie));
  };

  const userExists = useAppSelector((state) => state.user.user.userExists);

  const [selectedDashboard, setSelectedDashboard] = useState<number>(0);

  // Load the selected index from sessionStorage on component mount
  useEffect(() => {
    const storedIndex = sessionStorage.getItem("selectedDashboardIndex");
    if (storedIndex !== null) {
      setSelectedDashboard(parseInt(storedIndex));
    }
  }, []);

  const handleDashboardClick = (index: number) => {
    setSelectedDashboard(index);
    // Save the selected index to sessionStorage
    sessionStorage.setItem("selectedDashboardIndex", index.toString());
  };

  return (
    <>
      <div className="hidden lg:flex lg:w-56 xl:w-64 h-screen p-2   ">
        <div className="bg-[#fafafa] w-full flex flex-col flex-1 border  rounded-md  ">
          <div className="flex items-center  space-x-2 px-5 pt-5  ">
            <HomeIcon className="w-7 h-7 text-black " />
            <h1 className=" text-black font-bold">Zniper </h1>
          </div>

          {/* <div className="flex items-start space-x-2 p-3">
              <HomeIcon className="w-6 h-6 text-black" />
              <p className=" text-black ">
                Company Name /
                <br />
                Line of Business
              </p>
            </div> */}

          <div className=" flex flex-col flex-1 text-black">
            <div className=" space-y-2 px-2 pt-5">
              {/* <div className="flex items-center space-x-2 p-1">
                  <HomeIcon className={`w-6 h-6 `} />
                  <p>Organisation Name</p>
                </div> */}
              {dashBoardLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={`${link.route}`}
                  className={`flex items-center space-x-2 p-3 rounded-md ${
                    selectedDashboard === index
                      ? "bg-red-500 text-white font-bold "
                      : ""
                  }`}
                  onClick={() => handleDashboardClick(index)}>
                  <p>{link.icon}</p>
                  <p className="">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className=" flex flex-col  text-black ">
            <div className=" space-y-2 p-2 ">
              <Link href="/" className={`flex items-center space-x-2 p-1 `}>
                <QuestionMarkCircleIcon className={`w-6 h-6 `} />
                <p>Help</p>
              </Link>

              <div
                onClick={logOut}
                className={`flex items-center space-x-2 p-1 py-4 cursor-pointer`}>
                <UserCircleIcon className={`w-6 h-6`} />
                <p className="">Logout</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Sidebar;
