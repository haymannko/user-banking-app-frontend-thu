import type { BaseResponse } from "./Common";

export type QR = {
  token: string;
};

export type QRResponse = BaseResponse<QR>;
