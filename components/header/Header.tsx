"use client";

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";

interface HeaderProps {
  headerName: string;
  buttonName: string;
}

function Header({ headerName, buttonName }: HeaderProps) {
  return (
    <div className="bg-[#fafafa] flex items-center w-full p-5 space-x-4 border my-3 rounded-md">
      <div className="flex items-center flex-1 space-x-2 text-gray-500">
        <p>Organisation Name</p>
        <p>
          <ChevronRightIcon className="w-3 h-3" />{" "}
        </p>
        <p> {headerName} </p>
      </div>

      <Button type="primary" className="ant-btn-cstm">
        {buttonName}
      </Button>
    </div>
  );
}

export default Header;
