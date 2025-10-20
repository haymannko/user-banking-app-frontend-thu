import { dummyUserAccountInfo, dummyUserInfo } from "@/app/constants/dummyData";
import { useGetCurrentUser } from "@/queries/users.query";

function useGetUserData() {
  const { data: user, isLoading: isUserDataLoading } = useGetCurrentUser();

  const info = user?.data.info ?? dummyUserInfo;
  const accountDetail = user?.data.accountDetail ?? dummyUserAccountInfo;

  return {
    info,
    accountDetail,
    isUserDataLoading,
  };
}

export default useGetUserData;
