import type { Transaction } from "@/types/transaction.type"
interface TransactionDetailProps {
  transaction: Transaction;
}

const TransactionDetail = ({ transaction }:TransactionDetailProps) => {
  const transactionTextStyle = "text-sm font-light leading-5 tracking-normal text-body"
  return (
    <div className="flex flex-col items-center bg-white h-full py-[34px]">
      <figure className="w-[50px] h-auto aspect-square mb-[5px]">
        <img 
          width={50} 
          height={50} 
          alt="Coin icon with dollar sign" 
          className="w-full h-full object-contain" 
          src="/img/features/transaction/icon_dollar.svg"
        />
      </figure>
      <h1 className="text-lg font-semibold leading-7 tracking-normal text-center text-title mb-[44px]">Transaction Successful</h1>
      <ul className="w-full px-[32px]">
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Transaction Time</span>
          <span className={transactionTextStyle}>25/09/2025 20:22:12</span>
        </li>
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Transaction No</span>
          <span className={transactionTextStyle}>{transaction.id}</span>
        </li>
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Transaction Type</span>
          <span className={transactionTextStyle}>Transfer</span>
        </li>
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Transfer To</span>
          <span className={transactionTextStyle}>{transaction.user.name}</span>
        </li>
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Amount</span>
          <span className={transactionTextStyle}>{transaction.account.balance>0?"+":""}{transaction.account.balance} MMK</span>
        </li>
        <li className="flex justify-between mb-[8px]">
          <span className={transactionTextStyle}>Notes</span>
          <span className={transactionTextStyle}>Friends & Family</span>
        </li>
      </ul>
    </div>
  )
}

export default TransactionDetail