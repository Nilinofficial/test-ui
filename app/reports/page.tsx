import IssueDashboard from "@/components/IssuesSection/IssueDashboard";
import IssueDetails from "@/components/IssuesSection/IssueDetails";

import Header from "@/components/header/Header";
import React from "react";

function Reports() {
  return (
    <div className="w-full overflow-auto h-screen bg-white">
      <Header headerName="reports" buttonName="Export to PDF" />
      <IssueDashboard />
      <IssueDetails />
    </div>
  );
}

export default Reports;
