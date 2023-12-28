"use client";

import { Button, Form, Input } from "antd";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import toast, { Toaster } from 'react-hot-toast';


const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Required" })
    .refine(
      (email) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email),
      {
        message: "Invalid email format",
      }
    ),
});

function ForgotPassForm() {
  const [cookies, setCookie] = useCookies(["passwordreset_token"]);
  const [error, setError] = useState("");

  const changePasswordToken = async (email: string) => {
    try {
      const res = await axios.get( `http://localhost:5000/forget_password?email=${email}` );
      console.log(res.data.url);
      const parts = res.data.url.split("http://localhost:5050/");
      if (parts.length > 1) {
        const extractedString = parts[1];
        console.log(extractedString);
        setCookie("passwordreset_token", extractedString);
        toast.success('email sent successfully');
        router.push(`/changepassword/${extractedString}`);
      }
    } catch (error: any) {
      console.error("Error:", error.response);
      setError(error.response.data.detail);
    }
  };

  const [disabled, setDisabled] = useState(true);

  const router = useRouter();

  const submitLoginData = (data: any) => {
    console.log(data);
    setDisabled(false);
    changePasswordToken(data.email);
  };

  const sendOtp = (otp: number) => {
    console.log(otp);
  };

  const { control, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div className="w-5/6  lg:w-3/6    flex flex-col items-center justify-center  pb-5 lg:pb-0  ">
         <Toaster />
      <div className="w-full lg:w-5/6   py-3 space-y-3">
        <h2 className="font-normal text-4xl ">Trouble logging in ?</h2>

        <p className="text-gray-500 pl-2">
          Enter your email we&apos;ll send you a link to get back into your
          account.
        </p>
      </div>

      <Form
        onFinish={handleSubmit(submitLoginData)}
        className={`xl:w-5/6 lg:w-5/6 w-full lg:p-1 flex flex-col  h-full`}>
        <>
          <p>
            Email address <span className={`text-gray-500 `}>(User ID)</span>
          </p>
          <FormItem control={control} name="email">
            <Input className="h-10 " />
          </FormItem>
        </>

        {!formState.errors.email && error && (
          <p className="text-red-500 -mt-6">{error}</p>
        )}
        <Button htmlType="submit" type="primary" className="ant-btn-cstm">
          Send Link
        </Button>
      </Form>
    </div>
  );
}

export default ForgotPassForm;
