import React, { useState } from 'react';
import { useBudget } from '@/context/BudgetContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatNumber, unformatNumber } from '@/utils/numberHelper';
const LogTransactionForm = ({ onSuccess }) => {
    const { categories, logTransaction } = useBudget();
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        type: 'expense', 
    });

 
    const handleAmountChange = (e) => {
        const rawValue = e.target.value;
        const numericValue = unformatNumber(rawValue); 
        if (!isNaN(numericValue) && numericValue >= 0) {
          setFormData({ ...formData, amount: formatNumber(numericValue) }); 
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(unformatNumber(formData.amount)); // Convert formatted value to raw number
    
        if (!formData.category || isNaN(amount) || amount <= 0) {
          alert('Please fill in all fields correctly.');
          return;
        }
    
        logTransaction({
          category: formData.category,
          amount,
          type: formData.type,
        });
    
        setFormData({
          category: '',
          amount: '',
          type: 'expense',
        });
    
        onSuccess?.();
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 mt-5">
            <div className='space-y-1'>
                <Label htmlFor="category">Category</Label>
                <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    defaultValue=""
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => (
                            <SelectItem key={cat.category} value={cat.category}>
                                {cat.category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className='space-y-1'>
                <Label htmlFor="amount">Amount</Label>
                <Input
                    id="amount"
                    type="text" // Use text to allow formatting
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={handleAmountChange}
                />
            </div>

            <div className='space-y-1'>
                <Label htmlFor="type">Transaction Type</Label>
                <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select transaction type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="expense">Expense</SelectItem>
                        <SelectItem value="income">Income</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-70 text-white mt-4">
                Log Transaction
            </Button>
        </form>
    );
};

export default LogTransactionForm;