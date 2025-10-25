import { errorToast, successToast } from "@/lib/helper/customToasts";
import { generateQRToPay, generateRecieveQR } from "@/services/scan.service";
import type { GenerateQRToPayPayload, QRResponse } from "@/types/Scan";
import { useMutation } from "@tanstack/react-query";

export const useGenerateRecieveQR = () => {
  return useMutation({
    mutationFn: (data: {
      amount: number;
      note?: string;
    }): Promise<QRResponse | undefined> => generateRecieveQR(data),
    onSuccess: () => {
      successToast("Success", "Generate Success");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useGenerateQRToPayQR = () => {
  return useMutation({
    mutationFn: (data: GenerateQRToPayPayload) => generateQRToPay(data),
    onSuccess: () => {
      successToast("Success", "Generate Success");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
    retry: 3,
  });
};
