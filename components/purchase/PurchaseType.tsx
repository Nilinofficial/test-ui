import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Divider } from "antd";
import React from "react";

function PurchaseType() {
  const searchQuery = useAppSelector((state) => state.user.user.searchQuery);
  return (
    <div className="w-3/6  h-full lg:flex flex-col md:items-center lg:items-stretch hidden ">
      <div className="lg:p-20 ">
        <h4 className="font-bold md:text-sm lg:text-lg">You are purchasing</h4>
        <h4 className="font-bold lg:text-2xl pt-6 md:text-md">
          Shield360 Business
        </h4>
        <h2 className="font-bold lg:text-4xl">
          $39.00 <span className="font-light text-base">/month</span>
        </h2>

        <ul className={`pl-4 pt-2 font-normal text-gray-800 text-md list-disc`}>
          <li>Automatic data backups</li>
          <li>Scan up to 3 accounts</li>
          <li>Access data from all your devices</li>
        </ul>
        {searchQuery}
        <p className="text-gray-500 text-sm py-5">
          You can cancel or switch plans at any time.
        </p>

        <Divider className="w-3/6" />

        <div className="flex  justify-between">
          <h4 className="font-bold lg: text-2xl md:text-lg">
            Today&apos;s total
          </h4>
          <div>
            <h2 className="font-bold lg:text-2xl  md:text-md">$39.00</h2>
            <p className="lg:text-xl  md:text-sm">+ GST @ 8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseType;
