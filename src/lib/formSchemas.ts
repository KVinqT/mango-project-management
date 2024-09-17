import { z } from "zod";

export const FormSchema = z.object({
  userName: z
    .string()
    .min(1, {
      message: "Username must be at least 2 characters",
    })
    .max(50, {
      message: "Username must not exceed 50 characters",
    }),
  phoneNumber: z.coerce
    .string({
      message: "Please enter a valid phone number",
    })
    .min(5, {
      message: "Phone number must be at least 5 characters",
    })
    .max(15, {
      message: "Please enter a valid phone number",
    }),
  gender: z.enum(["male", "female"], {
    required_error: "You must select a gender",
  }),
  dateOfBirth: z.string(),
  useMangoFor: z.string().nullable(),
  carrier: z.string().nonempty({
    message: "You must select one field",
  }),
});
