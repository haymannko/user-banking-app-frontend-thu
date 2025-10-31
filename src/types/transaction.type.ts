export interface Transaction {
  id: number;
  user: {
    id: number;
    name: string;
  };
  account: {
    id: number;
    accountNumber: string;
    balance: number;
  };
}

export interface TransactionParams{
  fromDate?: string,
  toDate?: string
}

