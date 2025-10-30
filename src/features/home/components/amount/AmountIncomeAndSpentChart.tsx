import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", income: 300000, expense: 200000 },
  { month: "February", income: 700000, expense: 800000 },
  { month: "March", income: 300000, expense: 300000 },
  { month: "April", income: 800000, expense: 170000 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#0A3D62",
  },
  expense: {
    label: "Expense",
    color: "#FFC107",
  },
} satisfies ChartConfig;

export function AmountIncomeAndSpentChart() {
  return (
    <Card className="rounded-xl border-none shadow-sm bg-white">
      <CardHeader className="pb-1">
        <CardTitle className="text-black-pearl-700 text-sm font-semibold">
          Income & Expense
        </CardTitle>
      </CardHeader>

      <CardContent className="h-40 flex items-center justify-center pt-0">
        <ChartContainer className="w-full h-full" config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              opacity={0.15}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
              tickCount={4}
            />
            <ChartTooltip
              cursor={{ stroke: "#ccc", strokeWidth: 1 }}
              content={<ChartTooltipContent />}
            />

            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0A3D62" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#0A3D62" stopOpacity={0.05} />
              </linearGradient>

              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFC107" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#FFC107" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="expense"
              stroke={chartConfig.expense.color}
              strokeWidth={1.8}
              fill="url(#expenseGradient)"
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke={chartConfig.income.color}
              strokeWidth={1.8}
              fill="url(#incomeGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
