// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";

// function useAuthAndPlanRouting() {
//   const [loading, setLoading] = useState(true);

//   const router = useRouter();
//   const pathname = usePathname();

//   return (userExists: any) => {
//     if (!userExists) {
//       if (pathname === "/register") {
//         router.push("/register");
//         setLoading(false);
//       }

//       if (pathname === "/user-details") {
//         router.push("/user-details");
//         setLoading(false);
//       }
//       router.push("/login");
//     }

//     if (userExists) {
//       router.push("/dashboard");
//       setLoading(false);
//     }
//   };
// }

// export default useAuthAndPlanRouting;
