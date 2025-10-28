import { errorToast, successToast } from "@/lib/helper/customToasts";
import {
  changePassword,
  createNickname,
  deleteNickname,
  getCurrentUser,
  getFromAccounts,
  getNicknameList,
  mediaUpload,
  switchAccount,
  updateNickname,
} from "@/services/users.service";
import type {
  UserDetailResponse,
  ChangePasswordPayload,
  NicknameListResponse,
  NicknameEditPayload,
  NicknameCreatePayload,
  SwitchAccountsResponse,
} from "@/types/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (payload: ChangePasswordPayload) => changePassword(payload),
    onSuccess: () => {
      successToast("Success", "Change password successful.");
    },
    onError: (error) => {
      errorToast("Failed to Change Password", error.message);
    },
  });
};

export const useGetCurrentUser = () => {
  return useQuery<UserDetailResponse>({
    queryKey: ["me"],
    queryFn: getCurrentUser,
  });
};

export const useGetNicknameList = () => {
  return useQuery<NicknameListResponse>({
    queryKey: ["nickname"],
    queryFn: getNicknameList,
  });
};

export const useCreateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NicknameCreatePayload) => createNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["nickname"],
      });
      successToast("Success", "Nickname created successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useUpdateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NicknameEditPayload) => updateNickname(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nickname"] });
      successToast("Success", "Nickname updated successfully.");
    },
    onError: () => {
      errorToast("Failed", "Nickname update failed.");
    },
  });
};

export const useDeleteNickname = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNickname(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nickname"] });
      successToast("Success", "Nickname deleted successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useGetFromAccounts = (props?: any) => {
  return useQuery<SwitchAccountsResponse>({
    queryKey: ["from-accounts"],
    queryFn: getFromAccounts,
    ...props,
  });
};

export const useSwitchAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (accountId: number) => switchAccount(accountId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
      successToast("Success", "Account switched successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};

export const useMediaUpload = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => mediaUpload(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      successToast("Success", "Media uploaded successfully.");
    },
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};
