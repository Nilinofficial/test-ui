"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { loginFormSchema } from "@/schemas/loginSchema";
import { useCookies } from "react-cookie";
import { ClipLoader } from "react-spinners";
import { useLogin } from "@/hooks/useLogin";
import { request } from "@/utils/axios-utils";
import { InputOTP } from "antd-input-otp";
import UseToken from "@/utils/useToken";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const schema: ZodType<any> = loginFormSchema;

function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // to open the modal 
  const showModal = () => {
    setIsModalOpen(true);
  };
// to close the modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (e:any) => {
      if (e.key === 'Enter' && isModalOpen) {
        e.preventDefault();
        handleOk();
      }
    };

    document.body.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen]); // Run this effect when isModalOpen changes


  const [cookies, setCookie] = useCookies(["token"]);
  const [errorDetail, setErrorDetail] = useState("");
  const [receivedOtp, setReceivedOtp] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [otpError, setOtpError] = useState("");

  const searchQuery = useAppSelector((state) => state.user.user.searchQuery);
  const isUser = UseToken();

  const { control, handleSubmit } = useForm<any>({
    defaultValues: {
      email: "",
      password: "",
      otp: "",
    },
    resolver: zodResolver(schema),
  });

  // on success of API
  const onSuccess = async (resp: any) => {
    setCookie("token", resp.data.token);
    setIsModalOpen(false);
    const errorres = await isUser(resp.data.token);
    if (errorres) setErrorDetail(errorres);
  };

  // on error of API
  const onError = (err: any) => {
    setErrorDetail(err.response.data.detail);
  };

// validating the OTP

  const validateOtp = async (otpValue: string) => {
    const { email, password } = control._formValues;
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API}/verify_otp`, {
        params: {
          otp: otpValue,
        },
        headers: {
          Accept: "application/json",
        },
      });
      toast.success("OTP Verfifed");
      mutate({
        email,
        password,
      });
      setSubmitLoading(true);
      setIsModalOpen(false);
      setSubmitLoading(false);
    } catch (error: any) {
      setOtpError(error.response.data.detail);
    }
  };

  const handleOk = () => {
    const otpValue = Array.isArray(control._formValues.otp)
      ? control._formValues.otp.join("")
      : control._formValues.otp;
    validateOtp(otpValue);
  };

  const sendOtp = async () => {
    const returnedOtp = await request({
      url: `/otp`,
      method: "get",
    });
    setReceivedOtp(returnedOtp?.data?.detail);
    console.log(returnedOtp?.data?.detail);
  };

  const { mutate, isLoading } = useLogin(onSuccess, onError);

  const submitLoginData = async (data: any) => {
    setRegisterLoading(true);
    setIsModalOpen(true);
    await sendOtp();
    setRegisterLoading(false);
    setSubmitLoading(false);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-5/6 lg:w-3/6   flex flex-col items-center justify-center  ">
      <Toaster />
      <div className="w-full lg:w-5/6  py-3 space-y-3">
        <h2 className="font-normal text-2xl ">Login to Shield account</h2>
      </div>

      <Form
        onFinish={handleSubmit(submitLoginData)}
        className={`xl:w-5/6 lg:w-5/6 md:w-full lg:p-1 flex flex-col  h-full`}>
        <>
          <p>
            Email address <span className={`text-gray-500 `}>(User ID)</span>
          </p>
          <FormItem control={control} name="email">
            <Input className="h-10" />
          </FormItem>
        </>
        <>
          Password
          <FormItem control={control} name="password">
            <Input.Password
              type="password"
              id="password"
              className="h-10"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </FormItem>
          {errorDetail && <p className="text-red-500 pt">{errorDetail}</p>}
        </>

        <Button
          htmlType="submit"
          className="ant-btn-cstm-reg"
          disabled={isLoading}>
          <div className="flex items-center justify-center space-x-2">
            <p>
              {" "}
              {isLoading && (
                <ClipLoader color="#ffffff" className="mt-2 " size={18} />
              )}
            </p>
            {isLoading ? <p> Logging</p> : <p>Login</p>}
          </div>
        </Button>

        <Modal
          className="otp"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}

        
        
          okText={
            submitLoading ? (
              <div className="flex items-center space-x-3">
                {" "}
                <ClipLoader color="#ffffff" className="" size={10} />
                <p>Submitting</p>{" "}
              </div>
            ) : (
              "Submit"
            )
          } //
          okButtonProps={{ className: "custom-ok-button" }}
          cancelButtonProps={{ className: "custom-cancel-button" }}>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg">
              You will receive a 6 digit OTP in your email
            </p>
            <FormItem control={control} name="otp" className="p-4">
              <InputOTP autoFocus inputType="numeric" length={6} />
            </FormItem>
            <div className="w-3/4 pl-3">
              {otpError && <p className="text-red-500  -mt-8">{otpError}</p>}
            </div>
            <p className="">
              Didn&apos;t receive the code ?{" "}
              <span className="text-blue-500 cursor-pointer" onClick={sendOtp}>
                Request again
              </span>
            </p>
          </div>
        </Modal>
      </Form>

      <div className="flex flex-col items-start space-y-1 pt-5  md:pb-5 lg:pb-0">
        <p className={`flex text-gray-500 `}>
          Forgot password ?
          <Link
            href="/forgotpassword"
            className="text-blue-500 cursor-pointer pl-1">
            {" "}
            Click here
          </Link>
        </p>

        <p className={`flex text-gray-500 `}>
          New to Shield ?{" "}
          <Link
            href={{
              pathname: "/register",
              query: `plan=${searchQuery}`,
            }}
            className="text-blue-500 cursor-pointer pl-1">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
