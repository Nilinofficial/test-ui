import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

interface reportProps {
  type: string;
  count: string;
  bgColor: string;
  textColor: string;
}

function IssueBox({ type, count, bgColor, textColor }: reportProps) {
  return (
    <div
      className={`border px-5 py-7 flex-1 rounded-md`}
      style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="flex items-center space-x-2 ">
        <ShieldCheckIcon className="w-4 h-4" />
        <h5>{type}</h5>
      </div>
      <h1 className="text-3xl">{count} </h1>
    </div>
  );
}

export default IssueBox;
