import { useMutation } from "react-query";
import { request } from "@/utils/axios-utils";
import { loginFormData } from "@/types";

const useloginUser = async (formData: any) => {
    return await request({ url: "/login", method: "post", data: formData });
  };

export const useLogin = (onSuccess: any, onError: any) => {
  return useMutation(useloginUser, {
    onSuccess,
    onError,
  });
};


