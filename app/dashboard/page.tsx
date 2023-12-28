"use client";
import {
  columnsDashboard,
  onChangeDashboard,
} from "@/utils/tableData/dashboardData";
import Header from "@/components/header/Header";
import TableLayout from "@/components/table/TableLayout";
import { dashboardData } from "@/utils/constants";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import IssueDashboard from "@/components/IssuesSection/IssueDashboard";
import { BarLoader } from "react-spinners";
import Sidebar from "@/components/sidebar/Sidebar";
import { useCookies } from "react-cookie";
import UseToken from "@/utils/useToken";
import { useRouter } from "next/navigation";
import { Toaster} from 'react-hot-toast';
export default function Home() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isUser = UseToken();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!cookies.token) {
      router.push("/login");
    } else {
      isUser(cookies.token);
      console.log("check");
    }
  }, [cookies.token, router, isUser]);

  return (
    <>
      {!loading ? (
        <div className="flex flex-col lg:flex-row h-screen md:overflow-y-hidden bg-white ">
          <Sidebar />

          <div className="flex flex-col  w-full overflow-y-auto h-screen pb-5 bg-[#ffffff] space-y-6 px-2  ">
            <Toaster/>
            <Header headerName="dashboard" buttonName="Add Projects" />

            <IssueDashboard />

            <div className="px-5 ">
              <h2 className="font-semibold">Pending Tasks</h2>
              <p className="text-gray-600 text-sm">
                Snyk Tracks and flags Pull Requests(PRs) in the top most
                vulnerable projects
              </p>
            </div>

            <TableLayout
              data={dashboardData}
              columns={columnsDashboard}
              onChange={onChangeDashboard}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <BarLoader color="#f43334" />
        </div>
      )}
    </>
  );
}
