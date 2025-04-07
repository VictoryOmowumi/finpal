import React, { useContext } from 'react';
import BudgetContext from '@/context/BudgetContext';

const BudgetSummary = () => {
  const { budgets } = useContext(BudgetContext);
  
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.currentSpent, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-800 dark:text-slate-200">
      <div className="bg-background p-6 rounded-lg border shadow-sm">
        <h3 className="text-sm font-medium">Total Budget</h3>
        <p className="text-2xl font-bold mt-2">${totalBudget.toLocaleString()}</p>
      </div>
      <div className="bg-background p-6 rounded-lg border shadow-sm">
        <h3 className="text-sm font-medium">Total Spent</h3>
        <p className="text-2xl font-bold mt-2">${totalSpent.toLocaleString()}</p>
      </div>
      <div className="bg-background p-6 rounded-lg border shadow-sm">
        <h3 className="text-sm font-medium">Remaining</h3>
        <p className="text-2xl font-bold mt-2">${remaining.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;