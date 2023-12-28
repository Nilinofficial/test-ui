import { z } from "zod";

export const userDetailsFormSchema = z
  .object({
    companyName: z
      .string()
      .min(1, { message: "Required" })
      .max(25)
     ,  
    website: z
      .string()
      .min(1, { message: "Required" })
      .max(25, { message: "First name cannot exceed 25 characters" }),
    guestLogin: z
      .string(),
    guestPassword: z.string()
     ,
      environment: z.string()
     ,
     preferredTime :z.string()

    
  })