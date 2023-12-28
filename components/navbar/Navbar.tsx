"use client";

import { dashBoardLinks } from "@/utils/constants";
import {
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={"lg:hidden relative"}>
      {open ? (
        <div
          onClick={handleMenu}
          className="    duration-300  
          w-2/4
           p-1 bg-[#21224c] absolute h-screen flex flex-col   text-white  space-y-5 "
          style={{ zIndex: 10 }}>
          <div>
            {/* <XMarkIcon className="w-8 h-8  float-right" onClick={handleMenu} /> */}
            <div
              className="flex  flex-col  justify-between items-start pt-5 p-2 space-y-2"
              onClick={handleMenu}>
              {dashBoardLinks.map((link, index) => (
                <Link
                  key={link.id}
                  href={`${link.route}`}
                  className={`flex items-center justify-center space-x-2 p-2 `}>
                  {link.icon}
                  <p>{link.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className=" flex flex-col  text-[#d6d7da]  ">
            <div className=" space-y-2 p-2 ">
              <Link href="/" className={`flex items-center space-x-2 p-1 `}>
                <QuestionMarkCircleIcon className={`w-6 h-6 `} />
                <p>Help</p>
              </Link>

              <Link href="/" className={`flex items-center space-x-2 p-1 `}>
                <UserCircleIcon className={`w-6 h-6 `} />
                <p>Jason Collier</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex items-center space-x-2 w-full bg-[#21224c] p-5 text-white ">
          <Bars3Icon className="w-6 h-6 cursor-pointer" onClick={handleMenu} />
          <Link href="/">
            <h2 className="font-semi-bold text-lg">Matterbay</h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
