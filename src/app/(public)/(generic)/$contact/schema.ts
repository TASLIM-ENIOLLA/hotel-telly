import { z } from "zod";

export const formSchema = z.object({
  email: z.email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
  fullName: z.string().nonempty("Full name is required"),
});