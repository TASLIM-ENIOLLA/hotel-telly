import z from "zod";

export const formSchema = z.object({
  email: z.email({ message: "Kindly provide a valid email address" }),
});