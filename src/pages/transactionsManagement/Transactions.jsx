import React from 'react';
import TransactionList from '@/components/features/transactions/TransactionList';
import TransactionFilters from '@/components/features/transactions/TransactionFilters';
import TransactionStats from '@/components/features/transactions/TransactionStats';
import ExportTransactions from '@/components/features/transactions/ExportTransactions';

const Transactions = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-[#0D0B16] dark:text-[#FFFFFF]">
        Transactions
      </h1>

      <TransactionFilters />

      <TransactionStats />

      <TransactionList />

      <ExportTransactions />
    </div>
  );
};

export default Transactions;
