"use client";

import ForgotPass from "@/components/form/forgotPass/ForgotPass";
import PurchaseType from "@/components/purchase/PurchaseType";
import ZniperLogo from "@/components/zniperLogo/ZniperLogo";
import { useAppSelector } from "@/store/hooks";
import UseToken from "@/utils/useToken";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BarLoader } from "react-spinners";

function Forgotpassword() {
  const isUser = UseToken();
  const [cookies, setCookie] = useCookies(['token']);
  const userExists = useAppSelector((state) => state.user.user.userExists);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);

    if(cookies.token) router.push("/dashboard")
  }, [router, userExists, isUser]);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <BarLoader color="#f43334" />
        </div>
      ) : (
        <div
          className={`w-full lg:h-screen flex flex-col items-center px-10 overflow-auto bg-white `}>
         <ZniperLogo/>
          <div
            className={`flex flex-col lg:flex-row items-center top-0 margin-auto w-full px-5 rounded-md 
            border-2 xl:max-w-screen-2xl lg:max-w-full `}>
            <ForgotPass />

            {/* <Divider type="vertical" className="bg-gray-300 h-5/6" /> */}

            <div className="w-3/6  h-full flex justify-center items-center py-20 ">
              <img
                className="w-96"
                src="https://i.ibb.co/rQN8R78/banner-img.png"
                alt="banner"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Forgotpassword;
