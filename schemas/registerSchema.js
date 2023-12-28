import { z } from "zod";
const freeEmailDomains = require("free-email-domains");

function isPublicEmailDomain(email) {
  const [, domain] = email.split("@");
  return freeEmailDomains.includes(domain);
}

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Required" })
      .max(25)
      .refine(
        (email) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email),
        { message: "Invalid email format" }
      )
      .refine((email) => !isPublicEmailDomain(email), {
        message: "Only office/organisation emails are allowed",
      }),
  
    firstName: z
      .string()
      .min(1, { message: "Required" })
      .max(15, { message: "First name cannot exceed 15 characters" }),
    lastName: z
      .string()
      .min(1, { message: "Required" })
      .max(15, { message: "Last name cannot exceed 15 characters" }),
    mobileNumber: z
      .string()
      .min(10, { message: "Must be a valid mobile number" })
      .max(14, { message: "Must be a valid mobile number" }),
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
    receiveMails: z.boolean(),
    planStatus: z.number(),

  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });
