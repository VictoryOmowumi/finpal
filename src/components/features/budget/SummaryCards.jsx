import React from 'react';
import SummaryCard from './SummaryCard';

const SummaryCards = ({ totalBudget, totalSpent, remaining, totalIncome }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <SummaryCard 
      title="Total Budget"
      value={totalBudget}
      icon="💰"
      bgClass="border-blue-200 bg-blue-50 dark:bg-blue-900/20"
    />
    <SummaryCard 
      title="Total Spent"
      value={totalSpent}
      icon="↑"
      bgClass="border-green-200 bg-green-50 dark:bg-green-900/20"
    />
    <SummaryCard 
      title="Remaining"
      value={remaining}
      icon="↓"
      bgClass="border-purple-200 bg-purple-50 dark:bg-purple-900/20"
    />
    <SummaryCard 
      title="Total Income"
      value={totalIncome}
      icon="💵"
      bgClass="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20"
    />
  </div>
);

export default SummaryCards;