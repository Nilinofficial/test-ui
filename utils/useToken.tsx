import { loginUser } from "@/slices/userSlice";
import { useAppDispatch } from "@/store/hooks";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

function UseToken() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  return async (token: any) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/customer`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 1) {
        router.push("/dashboard");
        console.log(response.data);
        dispatch(loginUser("user"));
      } else if (response.data.status === 0) {
        removeCookie("token", { path: "/", domain: "localhost" });
        router.push("/login");
        return response?.data?.detail;
      }
      else {
        
      }
    } catch (error) {
      router.push("/login");
      if (pathname === "/register") {
        router.push("/register");
      }

      if (pathname === "/user-details") {
        router.push("/user-details");
      }
      console.error("Error fetching user details:", error);
    }
  };
}

export default UseToken;
