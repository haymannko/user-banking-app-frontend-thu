import MobileHeader from '@/components/core/MobileHeader'
import TransactionDetail from '../components/TransactionDetail'
import { useGetTransactionDetail } from '@/queries/transactionHistory.query'
import { useParams } from 'react-router-dom';

const TransactionDetailPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const {data: transaction, isLoading, error} = useGetTransactionDetail(id!);
  
  if (isLoading) return <p>Loading...</p>;
  
  if (!transaction || error) return <p>Failed to load transactions</p>;  

  return (
    <>
      <MobileHeader backTo="/" title="Transaction Detail" />
      <TransactionDetail transaction={transaction}/>
    </>
  )
}

export default TransactionDetailPage