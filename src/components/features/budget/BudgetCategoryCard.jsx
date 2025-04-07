import React, { useState } from 'react';
import { EllipsisVerticalIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import BudgetProgress from './BudgetProgress';
import EditBudgetDialog from './EditBudgetDialog';
import { useBudget } from '@/context/BudgetContext';

const BudgetCategoryCard = ({ category }) => {
  const { editBudget, deleteBudget } = useBudget();
  const percentage = (category.spent / category.budget) * 100;
  const remaining = category.budget - category.spent;
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the budget for "${category.category}"?`)) {
      deleteBudget(category.category);
    }
  };

  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <CategoryIcon color={category.color || '#BFA7F2'} />
          <div>
            <h4 className="font-medium capitalize">{category.category}</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEditOpen(true)}
            className="text-gray-400 hover:text-gray-600"
          >
            <PencilSquareIcon className="h-5 w-5" />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-600"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <BudgetProgress
        percentage={percentage}
        remaining={remaining}
        color={category.color || '#BFA7F2'}
        spent={category.spent}
      />
      <EditBudgetDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        budget={category}
        onSave={editBudget}
      />
    </div>
  );
};

const CategoryIcon = ({ color }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center"
    style={{ backgroundColor: `${color}20` }}
  >
    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
  </div>
);

export default BudgetCategoryCard;