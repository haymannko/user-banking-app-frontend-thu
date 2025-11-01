import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";

export const verifyEmail = async (data: { email: string }) => {
  try {
    const res = await API.post("/api/auth/register/email/verify", data);
    return res.data;
  } catch (err) {
    throwError(err);
  }
};
