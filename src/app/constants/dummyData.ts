import type { AccountDetail, Nickname, UserInfo } from "@/types/User";

export const dummyUserInfo: UserInfo = {
  fullname: "Mr. San",
  username: "mrsan99",
  email: "mrsan99@example.com",
  dateOfBirth: "1999-12-01",
  gender: { id: 1, name: "Male" },
  nationality: { id: 104, name: "Myanmar" },
  phoneNumber: "+959123456789",
  relationship: { id: 2, name: "Single" },
  address: "No. 123, Pyay Road, Yangon, Myanmar",
};

export const dummyUserAccountInfo: AccountDetail = {
  accountNumber: "81312371283",
  id: 12,
  currentBalance: 3000000,
};

export const dummyNickname: Nickname[] = [
  {
    id: 1,
    nickname: "Savings Jar",
    toAccountDetail: {
      id: 101,
      accountNumber: "0123456789",
    },
  },
  {
    id: 2,
    nickname: "Travel Fund",
    toAccountDetail: {
      id: 102,
      accountNumber: "9876543210",
    },
  },
  {
    id: 3,
    nickname: "Emergency Stash",
    toAccountDetail: {
      id: 103,
      accountNumber: "2233445566",
    },
  },
  {
    id: 4,
    nickname: "Rent Account",
    toAccountDetail: {
      id: 104,
      accountNumber: "5566778899",
    },
  },
  {
    id: 5,
    nickname: "Crypto Wallet",
    toAccountDetail: {
      id: 105,
      accountNumber: "6677889900",
    },
  },
];
