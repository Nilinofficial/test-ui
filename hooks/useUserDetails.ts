import { useMutation } from "react-query";
import { request } from "@/utils/axios-utils";
import { userDetailsFormData } from "@/types";
import { useCookies } from "react-cookie";


export const useUserDetails = (onSuccess: any, onError: any) => {
  const [cookies, setCookies] = useCookies(["token"]);
  const submitUserData = async (formData: any) => {
    // console.log("check",formData);
    return await request({ url: "/website", method: "post", data: formData ,headers: {
      Authorization: `Bearer ${cookies.token}`, // Ensure correct key
    }, });
  };

  return useMutation(submitUserData, {
    onSuccess,
    onError,
  });
};


