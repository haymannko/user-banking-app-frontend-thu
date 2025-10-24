import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";
import type { QRResponse } from "@/types/Scan";

export const generateRecieveQR = async (data: {
  amount: number;
  note?: string;
}): Promise<QRResponse | undefined> => {
  try {
    const response = await API.post("/scan/qr-to-recieve/generate", {
      amount: data.amount,
      note: data.note ?? "",
    });
    return response.data;
  } catch (error) {
    throwError(error);
  }
};

// export const generateQRToPay = async ()
