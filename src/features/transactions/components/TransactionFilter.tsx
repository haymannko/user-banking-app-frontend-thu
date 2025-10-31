import { FilterIcon } from "lucide-react";
import { DateRangePicker } from "@/components/ui/date-range-picker";

interface TransactionFilterProps {
  onChange: (value: string) => void;
  currentFilter: string;
}

const TransactionFilter = ({onChange, currentFilter}: TransactionFilterProps) => {
  const handleClick = ()=>{}
  return (
    <>
      <div className="py-5 px-[32px]">
        <div className="flex justify-end items-center gap-3">
            <FilterIcon size={20} fontWeight={400}/>
            <DateRangePicker
              onUpdate={(values) => console.log(values)}
              initialDateFrom="2023-01-01"
              initialDateTo="2023-12-31"
              align="start"
              locale="en-GB"
              showCompare={false}
            />
        </div>
      </div>
    </>
  )
}

export default TransactionFilter