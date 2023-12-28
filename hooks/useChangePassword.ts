import { useMutation } from "react-query";
import axios from "axios";
import { useCookies } from "react-cookie";
import { request } from "@/utils/axios-utils";

export const useChangePassword = (onSuccess:any, onError:any) => {
  const [cookies, removeCookie] = useCookies(["passwordreset_token"]);

  const changePassword = async (formData:any) => {
    return request({
      url: "/reset_password",
      method: "post",
      data: { password: formData },
      headers: {
        Authorization: `Bearer ${cookies.passwordreset_token}`,
      },
    });
  };

  return useMutation(changePassword, {
    onSuccess,
    onError,
  });
};
