"use client";

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";


function PaymentSuccessful() {

    const router = useRouter();
  //   const [cookies, setCookie] = useCookies();
  const [loading, setLoading] = useState(true);
  //   const isUser = UseToken();

  useEffect(() => {
    // isUser(cookies.token);
    // // if (cookies.token) {
    // //   isUser(cookies.token);
    // // }

    setTimeout(() => {
   router.push("/dashboard")
    },2000)

    toast.success("Payment Successfull");
  }, []);

  return (
    <>
      <>
        {
          <div
            className={`w-full lg:h-screen flex flex-col items-center px-10 overflow-auto bg-white `}>
            <h1
              className={`font-bold text-2xl w-full left-10 py-3 flex justify-between  items-start xl:max-w-screen-2xl lg:max-w-full`}>
              Zniper
            </h1>

            <div
              className={`flex flex-col lg:flex-row items-center top-0 margin-auto w-full  rounded-md 
      border-2 xl:max-w-screen-2xl lg:max-w-full  justify-center `}>
               
               <div className=' my-5 flex flex-col items-center'>
                <div className='flex flex-col md:flex-row justify-center items-center space-x-1'>
                <CheckCircleIcon className='w-10 h-10 text-green-500' />
                <h1 className='text-green-500 text-4xl font-light py-3'>Payment Successful !</h1>
                </div>
<div className='flex flex-col items-center mt-2 space-y-2'>

<h2 className='font-bold'>Thank You ! Your payment has been received</h2>

<p className=''>You will redirected to dashboard in 3  seconds...</p>
</div>
       
               </div>
            </div>
          </div>
        }
      </>
      
    </>
  );
}

export default PaymentSuccessful;
