import type { BaseResponse } from "./Common";

export type QR = {
  token: string;
};

export type GenerateQRToPayPayload = {
  fromAccountId: number;
};

export type QRToPayResponse = BaseResponse<QR>;

export type QRResponse = BaseResponse<QR>;
