"use client";

import RegisterForm from "@/components/form/register/RegisterForm";
import PurchaseType from "@/components/purchase/PurchaseType";
import ZniperLogo from "@/components/zniperLogo/ZniperLogo";
import { setSearchQuery } from "@/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import UseToken from "@/utils/useToken";
import { Divider } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BarLoader } from "react-spinners";

function Register() {
  const isUser = UseToken();
  const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "Z001";

  useEffect(() => {
    dispatch(setSearchQuery(selectedPlan));
  }, [selectedPlan, dispatch]);

  useEffect(() => {
  if(cookies.token) {
    isUser(cookies.token);
  }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <BarLoader color="#f43334" />
        </div>
      ) : (
        <>
          {
            <div className="w-full lg:h-screen flex flex-col items-center px-10 overflow-auto bg-white pb-2 ">
            <ZniperLogo/>
              <div
                className="flex flex-col lg:flex-row items-center top-0 margin-auto w-full px-5 rounded-md 
            border-2 xl:max-w-screen-2xl lg:max-w-full mb-5 lg:mb-0">
                <RegisterForm />

                <Divider type="vertical" className="bg-gray-300 h-5/6" />

                <PurchaseType />
              </div>
            </div>
          }
        </>
      )}
    </>
  );
}

export default Register;
