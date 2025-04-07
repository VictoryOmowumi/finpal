import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import CategoryLegend from './CategoryLegend';

const SpendingDistributionChart = ({ pieData }) => {
  // Filter out categories with zero value
  const filteredData = pieData.filter((entry) => entry.value > 0);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 h-max rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-1">
      <h3 className="font-semibold text-lg mb-4">Spending Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* Add Tooltip */}
            <Tooltip
              formatter={(value, name) => [`₦${value.toLocaleString()}`, name]}
              contentStyle={{
                backgroundColor: '#1f2937',
                borderRadius: '8px',
                color: '#fff',
                border: 'none',
              }}
              itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CategoryLegend pieData={filteredData} />
    </div>
  );
};

export default SpendingDistributionChart;