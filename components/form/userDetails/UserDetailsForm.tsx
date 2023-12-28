"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { userDetailsFormData } from "@/types";
import { userDetailsFormSchema } from "@/schemas/userDetailsSchema";
import { useUserDetails } from "@/hooks/useUserDetails";
import { RedirectCheckout } from "@/utils/stripe";
import { TimepickerUI } from "timepicker-ui";
import { useCookies } from "react-cookie";
import { useAppSelector } from "@/store/hooks";
import axios from "axios";

const schema: ZodType<userDetailsFormData> = userDetailsFormSchema;

function UserDetailsForm() {
  const searchQuery = useAppSelector((state) => state.user.user.searchQuery);
  const [errorDetail, setErrorDetail] = useState("");
  const [payment_Id, setPayment_Id] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies();
  const [inputValue, setInputValue] = useState("12:00 AM");
  const tmRef = useRef(null);

  useEffect(() => {
    


    // Removing the token from the cookie when the user clicks the back button
    const handlePopState = () => {
      if (cookies.token) {
        removeCookie("token", { path: "/", domain: "localhost" });
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [removeCookie, cookies.token]);

  const { control, handleSubmit, setValue } = useForm<any>({
    defaultValues: {
      companyName: "",
      website: "",
      guestLogin: "",
      guestPassword: "",
      environment: "prod",
      preferredTime: "12.00 AM",
    },
    resolver: zodResolver(schema),
  });

  const testHandler = useCallback(
    (e: CustomEvent) => {
      const selectedTime = `${e.detail.hour}:${e.detail.minutes} ${e.detail.type}`;
      setInputValue(selectedTime);
      setValue("preferredTime", selectedTime);
    },
    [setValue]
  );

  const fetchPlan = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/plan?plan_id=${searchQuery}`
      );
      setPayment_Id(res?.data?.payment_id);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchPlan();
  });

  useEffect(() => {
    const tm = tmRef.current as unknown as HTMLDivElement;
    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();
    //@ts-ignore
    tm.addEventListener("accept", testHandler);
    return () => {
      //@ts-ignore
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);

  const onSuccess = (resp: any) => {
    RedirectCheckout(payment_Id);
  };

  const onError = (err: any) => {
    setErrorDetail("An error occurred, please try again");
  };

  const { mutate, isLoading } = useUserDetails(onSuccess, onError);

  const submitUserDetails = (data: userDetailsFormData) => {
    const {
      companyName,
      website,
      guestLogin,
      guestPassword,
      environment,
      preferredTime,
    } = data;

    mutate({
      company_name: companyName,
      website: website,
      guest_login: guestLogin,
      guest_password: guestPassword,
      environment,
      preferred_time: preferredTime,
    });
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center  ">
      <div className="w-full lg:w-5/6  py-3 space-y-3">
        <h2 className="font-normal text-2xl ">Add Website Links</h2>
      </div>

      <Form
        onFinish={handleSubmit(submitUserDetails)}
        className={`xl:w-5/6 lg:w-5/6 md:w-full lg:p-1 flex flex-col  h-full`}>
        <>
          <>
            <p>Company Name</p>
            <FormItem control={control} name="companyName">
              <Input className="h-10" />
            </FormItem>
          </>

          <>
            <p>Website</p>
            <FormItem control={control} name="website">
              <Input className="h-10" />
            </FormItem>
          </>

          <>
            <p>Guest Login</p>
            <FormItem control={control} name="guestLogin">
              <Input className="h-10" />
            </FormItem>
          </>

          <>
            <p>Guest Password</p>
            <FormItem control={control} name="guestPassword">
              <Input className="h-10" />
            </FormItem>
          </>

          <>
            <p>Environment</p>
            <FormItem control={control} name="environment">
              <Select className="h-10 w-full" size={"large"}>
                {/* Add Select Options here */}
                <Select.Option value="prod">Production</Select.Option>
                <Select.Option value="test">Test</Select.Option>
                {/* Add more options as needed */}
              </Select>
            </FormItem>
          </>

          <>
            <p>Preferred Time</p>
            <FormItem control={control} name="preferredTime">
              <div className="border flex p-2 rounded-md h-10" ref={tmRef}>
                <input
                  type="test"
                  className="border-none outline-none"
                  defaultValue={inputValue}
                />
              </div>
            </FormItem>
          </>

          {errorDetail && <div className="text-red-500">{errorDetail}</div>}
          <Button htmlType="submit" className="ant-btn-cstm-project_2">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-white"> Continue to checkout</p>
            </div>
          </Button>
        </>
      </Form>

    </div>
  );
}

export default UserDetailsForm;
