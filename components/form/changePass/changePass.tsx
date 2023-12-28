"use client";

import { useState } from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { changePasswordFormData } from "@/types";
import { changePasswordFormSchema } from "@/schemas/changePasswordSchema";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useChangePassword } from "@/hooks/useChangePassword";
import toast, { Toaster } from 'react-hot-toast';


const schema: ZodType<changePasswordFormData> = changePasswordFormSchema;

function ChangePassForm() {
  const [cookies, setCookie, removeCookie] = useCookies([ "passwordreset_token"]);
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

  const changePasswordMutation = useChangePassword(
    (data: any) => {
      console.log("Success:", data);
      removeCookie("passwordreset_token", { path: "/" });
      toast.success("Password Changed Successfully")
      setTimeout(() => { router.push("/login");},1400)
    },
    (error: any) => {
      console.error("Error:", error);
      setError(error.response.data.detail);
    }
  );

  const { control, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const submitPassword = (data: any) => {
    changePasswordMutation.mutate(data.password);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <div className="w-5/6 lg:w-3/6    flex flex-col items-center justify-center  pb-5 lg:pb-0  ">
      <Toaster/>
      <div className="w-full  lg:w-5/6 py-3 space-y-3">
        <h2 className="font-normal text-2xl ">Change Password</h2>
      </div>

      <Form
        onFinish={handleSubmit(submitPassword)}
        className={`xl:w-5/6 lg:w-5/6 w-full lg:p-1 flex flex-col  h-full`}>
        New Password
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
        Confirm New Password
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
        {!formState.errors.email && error && (
          <p className="text-red-500 -mt-6">{error}</p>
        )}
        <Button htmlType="submit" type="primary" className="ant-btn-cstm">
          Change Password
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassForm;
