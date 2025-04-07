import React from 'react';

const CategoryLegend = ({ pieData }) => (
  <div className="grid grid-cols-2 gap-2 mt-4">
    {pieData.map((item) => (
      <div key={item.name} className="flex items-center">
        <div
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-sm truncate">{item.name}</span>
      </div>
    ))}
  </div>
);

export default CategoryLegend;