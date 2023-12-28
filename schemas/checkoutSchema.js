import {z} from 'zod';

export const checkoutFormSchema = z.object({
    firstName:z.string().min(1,{message:"Required"}),
    lastName:z.string().min(1,{message:"Required"}),
    companyName:z.string().min(1,{message:"Required"}),
    companyWebsiteURL:z.string().min(1,{message:"Required"}),
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
    mobileNumber:z.string().min(1,{message:"Required"}),
    addressline1:z.string().min(1,{message:"Required"}),
    addressline2:z.string(),
    city:z.string().min(1,{message:"Required"}),
    zipCode:z.string().min(1,{message:"Required"}),
    country:z.string().min(1,{message:"Required"}),
    state:z.string().min(1,{message:"Required"}),
})