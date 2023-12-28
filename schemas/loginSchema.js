import {z} from "zod";

export const loginFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Required" })
      .refine(
        (email) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email),
        {
          message: "Invalid email format",
        }
      ),
  
    password: z
   .string().min(1,{message:"Required"}),

  });