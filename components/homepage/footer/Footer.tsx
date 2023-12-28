import React from "react";
import FooterLinks from "./FooterLinks";
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";
function Footer() {
  return (
    <div className="w-full bg-[#0d0f24]  text-white  flex   md:justify-between items-center flex-col">
      <div className="flex flex-col items-center lg:flex-row space-y-8 lg:space-y-0  md:items-start justify-between w-full xl:px-44 lg:px-12 md:px-16  py-12 ">
        <div className="flex flex-col items-center md:items-start space-y-2  ">
          <img src="images/navLogo.png" className=" h-12 " alt="logo" />

          <button className="bg-[#e21f36] md:p-2  p-2 px-6   rounded-md">
            GET IN TOUCH
          </button>
        </div>

        <div
          className="md:flex  md:flex-row  items-start justify-center 
       md:space-x-16   md:pt-0 md:space-y-0  grid grid-cols-2 sm:grid-cols-4  gap-12 md:gap-0   w-full md:w-auto  ">
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />
          <FooterLinks />

          <div className="hidden md:flex lg:hidden space-x-4">
            <FacebookFilled className="text-lg" />
            <TwitterCircleFilled className="text-lg" />
            <LinkedinFilled className="text-lg" />
          </div>
        </div>

        <div className="flex md:hidden lg:flex space-x-4">
          <FacebookFilled className="text-lg" />
          <TwitterCircleFilled className="text-lg" />
          <LinkedinFilled className="text-lg" />
        </div>
      </div>

      <div className="w-full bg-[#000219] text-white py-5 flex md:flex-row   md:justify-between items-center xl:px-44 lg:px-12 md:px-16 flex-col">
        <p>
          © Zniper is Proudly Owned by{" "}
          <span className="text-[#e21f36] cursor-pointer">MatterBay</span>
        </p>

        <div className="flex flex-col md:flex-row items-center text-sm space-x-3 py-3 md:py-0">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
