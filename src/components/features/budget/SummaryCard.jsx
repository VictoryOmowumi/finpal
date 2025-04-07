import React from 'react';

const SummaryCard = ({ title, value, icon, bgClass }) => (
  <div className={`p-6 rounded-xl border ${bgClass}`}>
    <div className="flex justify-between">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <div className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-xs text-lg w-8 h-8 flex items-center justify-center text-gray-700 dark:text-gray-200">
        {icon}
      </div>
    </div>
    <p className="text-2xl font-bold mt-2 dark:text-white">₦{value.toLocaleString().replace(/\..*/, '')}</p>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">NGN</p>
  </div>
);

export default SummaryCard;