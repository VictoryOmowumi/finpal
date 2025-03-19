import React from 'react'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, Tooltip, } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const chartData = [
    { name: "January", income: 40000, expenses: 24000 },
    { name: "February", income: 32000, expenses: 21000 },
    { name: "March", income: 28000, expenses: 25000 },
    { name: "April", income: 35000, expenses: 30000 },
    { name: "May", income: 42000, expenses: 32000 },
    { name: "June", income: 38000, expenses: 27000 },
    { name: "July", income: 45000, expenses: 35000 },
    { name: "August", income: 47000, expenses: 33000 },
    { name: "September", income: 43000, expenses: 31000 },
    { name: "October", income: 48000, expenses: 36000 },
    { name: "November", income: 50000, expenses: 38000 },
    { name: "December", income: 52000, expenses: 40000 },
]

const chartConfig = {
    income: {
        label: "Income",
        color: "hsl(var(--chart-1))",
    },
    expenses: {
        label: "Expenses",
        color: "hsl(var(--chart-2))",
    },
}

const IncomeChart = () => {
    return (
        <Card className="border-none">
            <CardHeader>
                <h2 className="text-lg font-semibold  text-black">Income vs Expenses</h2>
                <CardDescription className="text-gray-400">
                    A comparison of your income and expenses for the last 12 months
                </CardDescription>
            </CardHeader>
            <CardContent className="">
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <BarChart data={chartData}>

                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Tooltip
                            cursor={false}
                            formatter={(value, name) => [`${name.charAt(0).toUpperCase() + name.slice(1)} -`, `$${value.toLocaleString()}`,]}
                            content={<ChartTooltipContent indicator="dashed" />}
                            className="bg-[#bfa7fc] text-black shadow-sm"
                        />
                        <Bar dataKey="income" stackId="a" fill='#94cef2' />
                        <Bar dataKey="expenses" stackId="b" fill='#6ad9b9' />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-between items-start gap-2 text-sm">
                <div className="flex gap-2 text-gray-400 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-gray-500 ">
                    Showing data for the last 12 months
                </div>
            </CardFooter>
        </Card>
    )
}

export default IncomeChart