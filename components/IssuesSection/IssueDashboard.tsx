import React from "react";
import IssueBox from "./IssueBox";

function IssueDashboard() {
  return (
    <div className=" p-5 border flex flex-col rounded-md bg-[#fafafa]  ">
      <h5 className="text-xl text-gray-600 ">Issues</h5>

      <div
        className="flex flex-col 
      lg:flex-col
     xl:flex-row justify-between xl:items-center  xl:space-x-10 ">
        <div className="flex py-5 space-x-5 xl:space-x-0 xl:py-0">
          <div className="xl:p-5 ">
            <h5 className="text-gray-500">TOTAL ISSUES</h5>
            <h1 className="font-normal text-5xl text-gray-500 ">20K </h1>
          </div>
          <div className="xl:p-5  ">
            <h5 className="text-gray-500">UNIQUE VULNS</h5>
            <h1 className="font-normal text-5xl text-gray-500">6293 </h1>
          </div>
        </div>

        <div className="flex flex-col flex-1 md:space-x-1 md:flex-row">
          <IssueBox
            type="CRITICAL"
            count="212"
            bgColor="#eecfdd"
            textColor="#80293b"
          />
          <IssueBox
            type="HIGH"
            count="212"
            bgColor="#f9ede7"
            textColor="#7d432e"
          />
          <IssueBox
            type="MEDIUM"
            count="212"
            bgColor="#f9f2e9"
            textColor="#946944"
          />
          <IssueBox
            type="LOW"
            count="212"
            bgColor="#f5f5f5"
            textColor="#636a70"
          />
        </div>
      </div>
    </div>
  );
}

export default IssueDashboard;





