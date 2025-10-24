import { errorToast, successToast } from "@/lib/helper/customToasts";
import { generateRecieveQR } from "@/services/scan.service";
import type { QRResponse } from "@/types/Scan";
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
