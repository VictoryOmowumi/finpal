import React from "react";
import { Banknote, ArrowDownRight } from "lucide-react";

const recentTransactions = [
  { id: 1, name: "PayStation Store", amount: 100.0, date: "2023-10-01", type: "withdrawal", status: "Successful" },
  { id: 2, name: "Censore W.", amount: 33.8, date: "2023-10-02", type: "withdrawal", status: "Successful" },
  { id: 3, name: "Kilo Miano", amount: 400.0, date: "2023-10-03", type: "deposit", status: "Successful" },
  { id: 4, name: "Online Transfer", amount: 250.0, date: "2023-10-04", type: "withdrawal", status: "pending" },
  { id: 5, name: "Salary Deposit", amount: 1500.0, date: "2023-10-05", type: "deposit", status: "Successful" },
];

const RecentTransactions = () => {
  return (
    <div className="flex-3/5 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 text-black">Recent Transactions</h2>
      <div className="space-y-4">
        {recentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-600 transition duration-200 hover:bg-gray-200 hover:dark:bg-gray-800  cursor-pointer"
          >
            {/* Left Section - Icon & Transaction Details */}
            <div className="flex items-center gap-3">
              {/* Transaction Type Icon */}
              {transaction.type === "deposit" ? (
                <Banknote className="h-5 w-5 text-green-400" />
              ) : (
                <ArrowDownRight className="h-5 w-5 text-red-400" />
              )}
              <div>
                <p className="font-medium text-sm text-slate-600 mb-1">{transaction.name}</p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
              </div>
            </div>

            {/* Right Section - Amount & Status */}
            <div className="text-right text-sm">
              <p className={`font-semibold ${transaction.type === "deposit" ? "text-green-500" : "text-red-500"}`}>
                {transaction.type === "deposit" ? "+" : "-"}${transaction.amount.toFixed(2)}
              </p>
              <p className={`text-xs font-medium ${transaction.status === "Successful" ? "text-green-400" : "text-yellow-400"}`}>
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
