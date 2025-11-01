import { getTransactionDetail, getTransactions } from "@/services/transactionHistory.service";
import type { TransactionParams } from "@/types/transaction.type";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactions = (params?: TransactionParams) => {
  return useQuery({
    queryKey: ["transaction", params],
    queryFn: () => getTransactions(params),
  });
};

export const useGetTransactionDetail = (id: string) =>{
  return useQuery({
    queryKey: [`transaction_id: ${id}`],
    queryFn: ()=> getTransactionDetail(id)
  })
}