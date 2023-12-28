"use client";

import React from "react";
import { columnsReport, onChangeReport } from "@/utils/tableData/projectData";
import TableLayout from "../table/TableLayout";
import { reportData } from "@/utils/constants";

function IssueDetails() {
  return (
    <div className=" text-gray-500">
      <p className="px-5 pt-5 pb-3 font-medium">Issue Details</p>
      <TableLayout
        data={reportData}
        columns={columnsReport}
        onChange={onChangeReport}
      />
    </div>
  );
}

export default IssueDetails;
