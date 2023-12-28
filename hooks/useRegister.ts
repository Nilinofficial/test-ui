import { useMutation } from "react-query";
import { request } from "@/utils/axios-utils";
import { useCookies } from "react-cookie";

export const useRegister = (onSuccess: any, onError: any) => {
  const [cookies, setCookies] = useCookies(["token"]);

  const createUser = async (formData: any) => {
    return request({
      url: "/register",
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${cookies.token}`, // Ensure correct key
      },
    });
  };

  return useMutation(createUser, {
    onSuccess,
    onError,
  });
};
