import React from 'react'
import logo from '../../assets/logo-2.svg'
import logoLight from '../../assets/logo-1.svg'
import { Link, useLocation } from 'react-router-dom';
import { BellIcon, ChartPieIcon, Squares2X2Icon, WalletIcon, SunIcon, MoonIcon, CurrencyDollarIcon, Cog8ToothIcon, BriefcaseIcon, ArrowRightStartOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../ui/tooltip'
import ThemeToggle from './ThemeToggle';
import { useTheme } from 'next-themes';
const menuItems = [
    {
        icon: Squares2X2Icon,
        tooltip: 'Dashboard',
        link: '/'
    },
    {
        icon: WalletIcon,
        tooltip: 'Transactions',
        link: '/transactions'
    },
    {
        icon: BriefcaseIcon,
        tooltip: 'Budget',
        link: '/budget'
    },
    {
        icon: ChartPieIcon,
        tooltip: 'Reports',
        link: '/reports'
    }

]


const Sidebar = () => {
    const location = useLocation();
    const { theme } = useTheme();

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };
    return (
        <div className=' flex flex-col items-center space-y-5 w-16 p-2 sticky top-0 h-screen justify-between print:hidden'>
            <div className="">
                <img src={theme === 'dark' ? logo : logoLight} alt="logo" />
            </div>
            <div className="space-y-5 flex flex-col items-center">
                <p className='text-[10px] uppercase text-gray-500 dark:text-gray-300'>Main</p>
                {menuItems.map((item, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to={item.link}
                                    className={` ${isActive(item.link) ? 'border rounded-full border-[#9a6ef9] p-1' : ''}
                                    `}
                                >
                                    <item.icon className={`w-5  ${isActive(item.link) ? 'text-[#9a6ef9]' : 'text-gray-500 dark:text-gray-300'}
                                    hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out
                                    `} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="bg-white text-purple-950 dark:bg-[#232126]  dark:text-[#9a6ef9] p-2 rounded-md no-arrow">
                                {item.tooltip}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
            <div className="flex flex-col items-center space-y-5">
                <p className='text-[10px] uppercase text-gray-400'>Utilities</p>
                <div className="">
                    <BellIcon className="w-5 text-gray-500 dark:text-gray-300 hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out" />
                </div>
                <ThemeToggle />
                <div className="">
                    <Cog8ToothIcon className="w-5 text-gray-500 dark:text-gray-300 hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-5">
                <p className='text-[10px] uppercase text-gray-500 dark:text-gray-300'>Account</p>
                <div className="">
                    <UserIcon className="w-5 text-gray-500 dark:text-gray-300 hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out" />
                </div>
                <div className="">
                    <ArrowRightStartOnRectangleIcon className="w-5 text-gray-500 dark:text-gray-300 hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar