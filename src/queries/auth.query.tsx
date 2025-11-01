import { errorToast, successToast } from "@/lib/helper/customToasts";
import { verifyEmail } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (data: { email: string }) => verifyEmail(data),
    onSuccess: () => {
      successToast("Email Sent", "Please check your email");
    },
    onError: (err) => {
      errorToast("Error Occured", err.message);
    },
  });
};
