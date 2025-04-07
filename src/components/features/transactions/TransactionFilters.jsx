import React from 'react';

const TransactionFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 text-slate-800 dark:text-slate-200 print:hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Successful">Successful</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            <option value="Airtime & Data">Airtime & Data</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
          <select
            value={filters.dateRange}
            onChange={(e) => onFilterChange({ ...filters, dateRange: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            type="text"
            placeholder="Search transactions..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded placeholder:text-gray-400 placeholder:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;