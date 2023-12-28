"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { useCookies } from "react-cookie";
import UseToken from "@/utils/useToken";
import UserDetailsForm from "@/components/form/userDetails/UserDetailsForm";
import { setSearchQuery } from "@/slices/userSlice";
import ZniperLogo from "@/components/zniperLogo/ZniperLogo";

function UserDetails() {
  const isUser = UseToken();
  const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "Z001";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(setSearchQuery(selectedPlan));
  }, [selectedPlan]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <BarLoader color="#f43334" />
        </div>
      ) : (
        <>
          <div className="w-full lg:h-screen flex flex-col items-center px-10 overflow-auto bg-white ">
            <ZniperLogo />
            <div
              className="flex flex-col lg:flex-row items-center top-0 margin-auto w-full px-5 rounded-md 
            border-2 xl:max-w-screen-2xl lg:max-w-full mb-5 lg:mb-0">
              <UserDetailsForm />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UserDetails;
