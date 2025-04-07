import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const EditBudgetDialog = ({ open, onOpenChange, budget, onSave }) => {
  const [formData, setFormData] = useState({
    category: budget.category,
    budget: budget.budget,
  });

    // Helper function to format numbers with commas
    const formatNumber = (value) => {
      if (!value) return '';
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
  };

  // Helper function to remove formatting (commas)
  const unformatNumber = (value) => {
      return value.replace(/,/g, ''); 
  };

  const handleAmountChange = (e) => {
      const rawValue = e.target.value;
      const numericValue = unformatNumber(rawValue); 
      if (!isNaN(numericValue) && numericValue >= 0) {
          setFormData({ ...formData, amount: formatNumber(numericValue) }); 
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // Convert formatted value to raw number
    const budgetAmount = parseFloat(unformatNumber(formData.budget));
   
    if (isNaN(budgetAmount) || budgetAmount <= 0) {
      alert('Please enter a valid budget amount.');
      return;
    }

    onSave({ ...budget, budget: budgetAmount });
    setFormData({
      category: budget.category,
      budget: budgetAmount,
    });



    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Budget</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <Input
              id="category"
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              disabled
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget Amount
            </label>
            <Input
              id="budget"
              type="number"
              value={formData.budget}
              onChange={handleAmountChange}
              placeholder="Enter budget amount"
            />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 text-white">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBudgetDialog;