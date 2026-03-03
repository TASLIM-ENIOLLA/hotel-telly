import { toast } from "sonner";
import { cms } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

import { SubscribeResponse } from "./types";

export function useSubscriber() {
  const url = "/newsletter-subscribers";

  return useMutation({
    async mutationFn(payload: {
      data: {
        email: string;
      }
    }) {
      const response = await cms.post<SubscribeResponse>(url, payload);

      return response.data;
    },

    onSuccess(response: any) {
      toast.success(`Your email address '${response.data.email}' has been successfully subscribed to our newsletter`);
    },

    onError(error: any) {
      if (error?.error) {
        return toast.error(error.error.message);
      }

      return toast.error(error.message);
    },
  });
}