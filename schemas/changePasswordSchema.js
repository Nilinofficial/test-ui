import {z} from "zod";

 
 export const changePasswordFormSchema =  z.object({
  password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password cannot exceed 20 characters" })
        .refine(
          (password) => {
            // Add custom password requirements here
            // For example, require at least one uppercase letter and one digit
            return /[A-Z]/.test(password) && /[0-9]/.test(password);
          },
          {
            message: "Password must contain an uppercase letter and a digit",
          }
        ),
      confirmPassword: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password cannot exceed 20 characters" })
        .refine(
          (confirmPassword) => {
            // Add custom password requirements here
            // For example, require at least one uppercase letter and one digit
            return /[A-Z]/.test(confirmPassword) && /[0-9]/.test(confirmPassword);
          },
          {
            message: "Password must contain an uppercase letter and a digit",
          }
        ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ["confirmPassword"],
    });