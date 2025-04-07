import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_CATEGORIES, SAMPLE_BUDGET_DATA, CATEGORY_COLORS } from '@/utils/constants';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem('budgets');
    return saved ? JSON.parse(saved) : SAMPLE_BUDGET_DATA;
  });

  const [income, setIncome] = useState(() => {
    const saved = localStorage.getItem('income');
    return saved ? JSON.parse(saved) : 0;
  });
  
  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('categories');
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES.map(category => ({
      category,
      color: CATEGORY_COLORS[category] || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));
  });

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [budgets, categories]);

  const addBudget = (newBudget) => {
    setBudgets(prev => [...prev, {
      ...newBudget,
      spent: newBudget.spent || 0,
      currency: 'NGN',
      color: CATEGORY_COLORS[newBudget.category] || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }]);
  };

  const logTransaction = ({ category, amount, type }) => {
    setBudgets(prev =>
      prev.map(budget =>
        budget.category === category
          ? {
              ...budget,
              spent: type === 'expense' ? budget.spent + amount : budget.spent - amount,
            }
          : budget
      )
    );

    if (type === 'income') {
      setIncome(prev => prev + amount);
    } else {
      setBudgets(prev =>
        prev.map(budget =>
          budget.category === category
            ? {
                ...budget,
                spent: budget.spent + amount,
              }
            : budget
        )
      );
    }
  };

  const editBudget = (updatedBudget) => {
    setBudgets(prev =>
      prev.map(budget =>
        budget.category === updatedBudget.category ? { ...budget, ...updatedBudget } : budget
      )
    );
  };

  const deleteBudget = (category) => {
    setBudgets(prev => prev.filter(budget => budget.category !== category));
  };
  const addCategory = (newCategory) => {
    setCategories(prev => [...prev, {
      name: newCategory,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }]);
  };

  return (
    <BudgetContext.Provider value={{ budgets, categories, addBudget, editBudget, deleteBudget, addCategory, logTransaction, income }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => React.useContext(BudgetContext);