import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AddBudgetForm from '@/components/features/budget/AddBudgetForm';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useBudget } from '@/context/BudgetContext';
import SummaryCards from '@/components/features/budget/SummaryCards';
import BudgetCategoriesList from '@/components/features/budget/BudgetCategoriesList';
import SpendingDistributionChart from '@/components/features/budget/SpendingDistributionChart';
import LogTransactionForm from '@/components/features/budget/LogTransactionForm';
const Budget = () => {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [openLogTransaction, setOpenLogTransaction] = useState(false);
  const { budgets, income } = useBudget();


  const { totalBudget, totalSpent, remaining, pieData } = React.useMemo(() => {
    const totalBudget = budgets.reduce((sum, item) => sum + item.budget, 0);
    const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0);
    const remaining = totalBudget - totalSpent;
    const pieData = budgets.map(item => ({
      name: item.category,
      value: item.spent,
      color: item.color || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));
    return { totalBudget, totalSpent, remaining, pieData };
  }, [budgets]);

  return (
    <div className="p-6 space-y-8 text-slate-800 dark:text-slate-200">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Budget Management</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track and manage your spending categories</p>
        </div>
        <div className="flex gap-4">
          <Dialog open={openAddCategory} onOpenChange={setOpenAddCategory}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <PlusIcon className="h-4 w-4" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Budget Category</DialogTitle>
              </DialogHeader>
              <AddBudgetForm onSuccess={() => setOpenAddCategory(false)} />
            </DialogContent>
          </Dialog>

          <Dialog open={openLogTransaction} onOpenChange={setOpenLogTransaction}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-[#af8cfa] hover:bg-[#BFA7F2] text-white">
                Log Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Log Income/Expense</DialogTitle>
              </DialogHeader>
              <LogTransactionForm onSuccess={() => setOpenLogTransaction(false)} />
            </DialogContent>
          </Dialog>
        </div>

      </div>

      <SummaryCards totalBudget={totalBudget} totalSpent={totalSpent} remaining={remaining} totalIncome={income} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BudgetCategoriesList budgetData={budgets} />
        <SpendingDistributionChart pieData={pieData} />
      </div>
    </div>
  );
};

export default Budget;