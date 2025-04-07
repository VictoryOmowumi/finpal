import React from 'react';

const BudgetProgress = ({ percentage, remaining, color }) => (
  <div className="mt-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-500 dark:text-gray-400">
        {remaining > 0 ? `₦${remaining.toLocaleString(undefined, { minimumFractionDigits: 2 })} left` : 'Over budget'}
      </span>
      <span className="font-medium" style={{ color }}>
        {Math.round(percentage)}%
      </span>
    </div>
    <ProgressBar percentage={percentage} color={color} />
  </div>
);

const ProgressBar = ({ percentage, color }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <div
      className="h-2 rounded-full"
      style={{
        width: `${Math.min(percentage, 100)}%`,
        backgroundColor: color
      }}
    />
  </div>
);

export default BudgetProgress;