import React from 'react'
import { RadialBar, RadialBarChart, Legend } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { name: "Credit Limit", value: 75000, fill: "#94cef2" },
    { name: "Online Limit", value: 50000, fill: "#BFA7F2" },
]

const chartConfig = {
    creditLimit: {
        label: "Credit Limit",
        color: "#94cef2",
    },
    onlineLimit: {
        label: "Online Limit",
        color: "#6ad9b9",
    },
}

const CreditLimit = () => {
    return (
        <Card className="flex flex-col border-none flex-1/3 max-h-72 shadow-none p-1 ">
            <div className="items-center pb-0">
            <h2 className="text-lg font-semibold text-black">Account Limit</h2>
                <p className="text-gray-500">A comparison of your credit limit and online limit</p>
            </div>
            
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square  max-h-[250px] w-[200px]"
                >
                    <RadialBarChart data={chartData} innerRadius={30} outerRadius={110} >
                        <ChartTooltip
                            cursor={false}
                            formatter={(value, name) => [`${name.charAt(0).toUpperCase() + name.slice(1)} -`, `$${value.toLocaleString()}`,]}
                            content={<ChartTooltipContent hideLabel nameKey="name" className="bg-[#bfa7fc] text-black shadow-sm" />}
                        />
                        <RadialBar dataKey="value" background  />

                        {/* <Legend
                            layout="vertical"    
                            formatter={(value) => <span style={{ color: '#f5f5f5', marginTop: '10px' }}>{value}</span>}
                        /> */}
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}

export default CreditLimit