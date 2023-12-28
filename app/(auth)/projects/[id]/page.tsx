"use client";

import IssueDashboard from "@/components/IssuesSection/IssueDashboard";
import IssueDetails from "@/components/IssuesSection/IssueDetails";

import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useAppSelector } from "@/store/hooks";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Project = () => {
  const params = useParams();
  console.log(params);
  const projectNameParam = params.id.toString();

  // Decode the URL-encoded project name
  const projectName = decodeURIComponent(projectNameParam);

  return (
    <div className="flex flex-col lg:flex-row h-screen md:overflow-y-hidden bg-white ">
      <Sidebar />

      <div className="w-full overflow-auto h-screen bg-white">
        <Header headerName={projectName} buttonName="Export to PDF" />
        <IssueDashboard />
        <IssueDetails />
      </div>
    </div>
  );
};

export default Project;
