import React from 'react';
import { ShoppingBagIcon, MusicalNoteIcon, TruckIcon, WifiIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import lines from '../../../assets/lines.png';

const topCategories = [
  { icon: ShoppingBagIcon, title: 'Shopping', percentage: 30, amount: 1600, color: '#BFA7F2' },
  { icon: MusicalNoteIcon, title: 'Entertainment', percentage: 20, amount: 1200, color: '#97CCFE' },
  { icon: TruckIcon, title: 'Transport', percentage: 15, amount: 900, color: '#F7D7E2' },
  { icon: WifiIcon, title: 'Data', percentage: 25, amount: 1300, color: '#F1BDFD' },
  { icon: UserGroupIcon, title: 'Others', percentage: 10, amount: 500, color: '#F9E4A7' },
];

const TopTransactionCategory = () => {
const sortedCategories = [...topCategories].sort((a, b) => b.amount - a.amount);

return (
    <div className="flex gap-[2px] h-[300px] flex-2/3">
        {sortedCategories.map((category, index) => (
            <div
                key={index}
                className="flex flex-col items-start justify-between h-full p-1 text-[#171326] transition-transform duration-200 hover:scale-105"
                style={{
                    backgroundImage: `url(${lines})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'screen',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: category.color,
                    width: `${category.percentage}%`,
                }}
            >
                <div className="flex flex-col items-start gap-1">
                    <category.icon className="h-4 w-4" />
                    <div className="text-xs font-medium">{category.title}</div>
                </div>
                
                <div className="text-xs">${category.amount}</div>
            </div>
        ))}
    </div>
);
};

export default TopTransactionCategory;
