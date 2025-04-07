import React from 'react';
import BudgetCategoryCard from './BudgetCategoryCard';

const BudgetCategoriesList = ({ budgetData }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-2">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-lg">Expense Categories</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {budgetData.length} categories
      </span>
    </div>
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {budgetData.map((category, index) => (
        <BudgetCategoryCard key={index} category={category} />
      ))}
    </div>
  </div>
);

export default BudgetCategoriesList;