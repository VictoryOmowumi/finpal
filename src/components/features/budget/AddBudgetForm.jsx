import React, { useState } from 'react';
import { useBudget } from '@/context/BudgetContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AddBudgetForm = ({ onSuccess }) => {
  const { categories, addBudget, addCategory } = useBudget();
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    isCustom: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(formData.amount);

    if (!formData.category || isNaN(amount) || amount <= 0) {
      // Show error message
      return;
    }

    if (formData.isCustom) {
      addCategory(formData.category);
    }

    addBudget({
      category: formData.category,
      budget: amount,
    });

    setFormData({
      category: '',
      amount: '',
      isCustom: false,
    });

    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CategoryTypeSelector 
        isCustom={formData.isCustom}
        onChange={(isCustom) => setFormData({ ...formData, isCustom, category: '' })}
      />
      
      <CategoryInput
        isCustom={formData.isCustom}
        value={formData.category}
        onChange={(category) => setFormData({ ...formData, category })}
        categories={categories}
      />
      
      <AmountInput
        value={formData.amount}
        onChange={(amount) => setFormData({ ...formData, amount })}
      />
      
      <Button type="submit" className="w-full mt-4 bg-purple-700">
        Create Budget Category
      </Button>
    </form>
  );
};

const CategoryTypeSelector = ({ isCustom, onChange }) => (
  <div className="space-y-3">
    <Label>Category Type</Label>
    <div className="flex gap-2">
      <Button
        type="button"
        variant={!isCustom ? 'default' : 'outline'}
        onClick={() => onChange(false)}
        className="flex-1"
      >
        Existing Category
      </Button>
      <Button
        type="button"
        variant={isCustom ? 'default' : 'outline'}
        onClick={() => onChange(true)}
        className="flex-1"
      >
        New Category
      </Button>
    </div>
  </div>
);

const CategoryInput = ({ isCustom, value, onChange, categories }) => (
  <div className="space-y-3 w-full">
    <Label htmlFor="category">
      {isCustom ? 'Category Name' : 'Select Category'}
    </Label>
    {!isCustom ? (
      <Select
        value={value}
        onValueChange={onChange}
        defaultValue=""
        className="w-full"
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat.category} value={cat.category} className="capitalize">
              {cat.category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ) : (
      <Input
        id="category"
        placeholder="Enter category name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    )}
  </div>
);

const AmountInput = ({ value, onChange }) => (
  <div className="space-y-3">
    <Label htmlFor="amount">Budget Amount</Label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₦</span>
      <Input
        id="amount"
        type="number"
        min="0.01"
        step="0.01"
        placeholder="0.00"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-8"
      />
    </div>
  </div>
);

export default AddBudgetForm;