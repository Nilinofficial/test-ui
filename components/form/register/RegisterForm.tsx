"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { registerFormData } from "@/types";
import { registerFormSchema } from "@/schemas/registerSchema";
import { ClipLoader } from "react-spinners";
import { useRegister } from "@/hooks/useRegister";
import { useRouter } from "next/navigation";
import { InputOTP } from "antd-input-otp";
import { useCookies } from "react-cookie";
import { request } from "@/utils/axios-utils";
import axios from "axios";
import { useAppSelector } from "@/store/hooks";
import toast, { Toaster } from "react-hot-toast";

const schema: ZodType<any> = registerFormSchema;

function RegisterForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchQuery = useAppSelector((state) => state.user.user.searchQuery);

  const search = searchQuery.toString();
  const query = search ? `?plan=${search}` : "";
  const pathname = "/user-details";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const router = useRouter();
  const [errorDetail, setErrorDetail] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [makeDisabled, setMakeDisabled] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [receivedOtp, setReceivedOtp] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);



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

  const { control, handleSubmit } = useForm<registerFormData>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      receiveMails: false,
      otp: "",
      planStatus: 0,
    },
    resolver: zodResolver(schema),
  });

  const onSuccess = (resp: any) => {
    console.log(resp);
    setCookie("token", resp.data.detail, {});
    router.push(`${pathname}${query}`);

    setSubmitLoading(false);
    setIsModalOpen(false);
  };

  const onError = (err: any) => {
    setErrorDetail(err.response.data.detail);
    setSubmitLoading(false);
    setIsModalOpen(false);
  };

  const { mutate, isLoading, reset } = useRegister(onSuccess, onError);

  const validateOtp = async (otpValue: string) => {
    const { email, password, firstName, lastName, mobileNumber, planStatus } =
      control._formValues;
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API}/verify_otp`, {
        params: {
          otp: otpValue,
        },
        headers: {
          Accept: "application/json",
        },
      });
      toast.success("OTP verified");
      mutate({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        mobile_number: mobileNumber,
        status: planStatus,
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
    console.log(otpValue);
    validateOtp(otpValue);
  };

  const sendOtp = async () => {
    const returnedOtp = await request({ url: "/otp", method: "get" });
    setReceivedOtp(returnedOtp?.data?.detail);
    console.log(returnedOtp?.data?.detail);
  };

  const submitRegistrationData = async (data: registerFormData) => {
    setRegisterLoading(true);
    await sendOtp();
    setRegisterLoading(false);
    setIsModalOpen(true);
  };

  return (
    <div className="md:w-5/6 lg:w-3/6  h-full  flex flex-col items-center justify-center overflow-auto ">
      <Toaster />
      <div className="w-full lg:w-5/6 py-3 space-y-2">
        <h2 className="font-normal text-2xl ">Create a Shield account</h2>
        <p className="flex text-gray-500 ">
          Already have a shield account ?{" "}
          <Link
            href={{
              pathname: "/login",
              query: `plan=${searchQuery}`,
            }}
            className="text-blue-500 cursor-pointer pl-1">
            {" "}
            Sign In
          </Link>
        </p>
      </div>

      <Form
        onFinish={handleSubmit(submitRegistrationData)}
        className="xl:w-5/6 lg:w-5/6 lg:p-1 flex flex-col   h-full  ">
        <div className="">
          Email address <span className="text-gray-500">(User ID)</span>
          <FormItem control={control} name="email">
            <Input className="h-10" type="email" disabled={makeDisabled} />
          </FormItem>
        </div>

        <>
          First name
          <FormItem control={control} name="firstName">
            <Input className="h-10" type="text" />
          </FormItem>
        </>

        <>
          Last Name
          <FormItem control={control} name="lastName">
            <Input className="h-10" type="text" />
          </FormItem>
        </>

        <div className="flex flex-col ">
          Mobile number
          <div className="flex flex-col justify-center ">
            <FormItem
              control={control}
              name="mobileNumber"
              style={{ width: "100%" }}>
              <PhoneInput
                className="bg-white rounded-md pl-2 border"
                onChange={() => console.log("")}
              />
            </FormItem>
            <div className=" -mt-3 pb-4">
              <span className="text-gray-400 text-xs font-thin">
                Standard call,message or data rates may apply
              </span>
              <p className="text-xs text-slate-600 font-light">
                I&apos;m happy for intuit to call and SMS me to help me set up
                my account and use my number for verification purposes.
              </p>
            </div>
          </div>
        </div>

        <>
          Password
          <FormItem control={control} name="password">
            <Input.Password
              type="password"
              className="h-10"
              placeholder="password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </FormItem>
        </>

        <>
          Confirm Password
          <FormItem control={control} name="confirmPassword">
            <Input.Password
              type="password"
              id="confirmPassword"
              className="h-10"
              placeholder="confirm password"
              visibilityToggle={{
                visible: confirmPasswordVisible,
                onVisibleChange: setConfirmPasswordVisible,
              }}
            />
          </FormItem>
        </>

        <div className="flex items-center">
          <Controller
            control={control}
            name="receiveMails"
            render={({ field: { value, onChange } }) => (
              <Checkbox
                checked={value}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
              />
            )}
          />

          <p className="pl-2">
            {" "}
            I&apos;d like to receive helpful marketing emails and SMS from
            Zniper.
          </p>
        </div>

        {errorDetail && <p className="text-red-500 pt-2">{errorDetail}</p>}

        <Button
          htmlType="submit"
          className="ant-btn-cstm-reg"
          disabled={isLoading}>
          <div className="flex items-center justify-center space-x-2">
            <p>
              {" "}
              {registerLoading && (
                <ClipLoader color="#ffffff" className="mt-2 " size={18} />
              )}
            </p>
            {registerLoading ? <p> Sending OTP</p> : <p>Save and Continue</p>}
          </div>
        </Button>

        <div className="flex items-center  ">
          <p className="text-gray-400 font-thin text-xs ">
            By registering, you agree to our{" "}
            <span className="text-blue-500">Terms</span> and acknowledge our{" "}
            <span className="text-blue-500">Privacy Statement.</span>
          </p>
        </div>

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
              <span className="text-blue-500" onClick={sendOtp}>
                Request again
              </span>
            </p>
          </div>
        </Modal>
      </Form>
    </div>
  );
}

export default RegisterForm;
