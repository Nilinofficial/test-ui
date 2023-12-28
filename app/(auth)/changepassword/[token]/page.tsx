"use client";

import ChangePassForm from "@/components/form/changePass/changePass";
import PurchaseType from "@/components/purchase/PurchaseType";
import ZniperLogo from "@/components/zniperLogo/ZniperLogo";
import { useAppSelector } from "@/store/hooks";

import { Divider } from "antd";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ChangePassword() {
  const { token } = useParams();
  console.log(token);

  const userExists = useAppSelector((state) => state.user.user.userExists);
  const planActivated = useAppSelector(
    (state) => state.user.user.planActivated
  );

  const router = useRouter();


  
  // useEffect(() => {
  //   if (userExists && !planActivated) {
  //     router.push("/checkout");
  //   }

  //   if (userExists && planActivated) {
  //     router.push("/dashboard");
  //   }
  // }, [planActivated, router, userExists]);

  return (
    <>
      {(
        <div
          className={`w-full lg:h-screen flex flex-col items-center px-10 overflow-auto bg-white`}>
         <ZniperLogo/>

          <div
            className={`flex flex-col lg:flex-row items-center top-0 margin-auto w-full px-5 rounded-md 
            border-2 xl:max-w-screen-2xl lg:max-w-full  `}>
            <ChangePassForm />

            <Divider type="vertical" className="bg-gray-300 h-5/6" />

            <PurchaseType />
          </div>
        </div>
      )}
    </>
  );
}

export default ChangePassword;
