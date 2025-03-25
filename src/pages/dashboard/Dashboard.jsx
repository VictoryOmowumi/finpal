import React, { useState } from 'react'
import lines from '../../assets/lines.png'
import mastercardlogo from '../../assets/mastercard.svg'
import { useTheme } from 'next-themes'
import { ArrowUpRightIcon, CheckIcon, EllipsisHorizontalIcon, DevicePhoneMobileIcon, ArrowPathRoundedSquareIcon, UsersIcon, BanknotesIcon, ArrowsRightLeftIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import IncomeChart from '@/components/features/dashboard/IncomeChart'
import CreditLimit from '@/components/features/dashboard/CreditLimit'
import TopTransactionCategory from '@/components/features/dashboard/TopTransactionCategory'
import RecentTransactions from '@/components/features/dashboard/RecentTransactions'

const quickActions = [
  {
    icon: ArrowsRightLeftIcon,
    title: 'Send Money',
    description: 'Send money to friends and family'
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    title: 'Transaction History',
    description: 'View all your transactions'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Airtime & Data',
    description: 'Buy airtime and data'
  },
  {
    icon: BanknotesIcon,
    title: 'Pay Bills',
    description: 'Pay your bills with ease'
  },
  {
    icon: UsersIcon,
    title: 'Beneficiaries',
    description: 'Manage your beneficiaries'
  }
]


const blobSVG = `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FF0066" d="M45.8,-57.1C59.2,-43.4,69.6,-28.8,75.6,-10.9C81.7,7,83.4,28,75,44C66.6,60,48.2,70.8,29.6,74.7C11.1,78.6,-7.6,75.4,-25.8,69.4C-43.9,63.4,-61.5,54.5,-71,40C-80.5,25.6,-81.8,5.4,-77.7,-13C-73.6,-31.4,-63.9,-48.1,-50.1,-61.6C-36.2,-75.1,-18.1,-85.5,-0.9,-84.4C16.2,-83.3,32.5,-70.7,45.8,-57.1Z" transform="translate(100 100)" /></svg>')`;



const Dashboard = () => {
  const userName = 'Mariam Kamal';
  const [showTotalBalance, setShowTotalBalance] = useState(true);
  const [showDailyBalance, setShowDailyBalance] = useState(true)

  const toggleTotalBalance = () => {
    setShowTotalBalance(!showTotalBalance);
  };
  const toggleDailyBalance = () => {
    setShowDailyBalance(!showDailyBalance);
  };
  return (
    <div className='flex w-full h-screen'>

      <div className="flex-3/5  flex flex-col gap-4 overflow-y-auto dark:bg-[#171326] no-scrollbar">
        <div className=" bg-[#C7AAFC] flex flex-col justify-between gap-5 space-y-10 p-4"
          style={{
            backgroundImage: `url(${lines})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'screen'
          }}
        >
          <div className="flex flex-col">
            <h1 className="text-4xl text-[#171326] font-medium">Welcome back, {userName}</h1>
            <p className="text-[#434243] ml-1">Here's what's happening with your account today</p>
          </div>
          <div className="flex justify-between space-x-5  ">
            <div className="flex-1/2  rounded-md h-[180px] bg-[#f5f5f5] flex flex-col justify-between gap-4 p-2">
              <div className="flex justify-between">
                <img src={mastercardlogo} alt="mastercard logo" className="w-14" />
                <EllipsisHorizontalIcon className="w-5 h-5 text-[#171326]" />
              </div>

              <h1 className="text-[#171326] m-0 p-0 text-xl font-medium">{userName} Bode-Thomas</h1>


              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] text-xs">Card Number</p>
                  <h1 className="text-[#171326] font-medium font-body">**** **** **** 1234</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] text-xs">Expiry Date</p>
                  <h1 className="text-[#171326] font-medium font-body">06/26</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] text-xs">CVV</p>
                  <h1 className="text-[#171326] font-medium font-body">234</h1>
                </div>

              </div>

            </div>
            <div className="flex-2/3 flex flex-col justify-between gap-5">
              <div className="flex justify-between gap-5">
                <div className="flex flex-col">
                  <p className="text-[#434243] ml-1.5 flex items-center gap-1 cursor-pointer"
                    onClick={toggleTotalBalance}
                  >Total Balance
                    {showTotalBalance ? <EyeIcon className='w-4 h-4' /> : <EyeSlashIcon className='w-4 h-4' />}
                  </p>
                  <h1 className="text-5xl text-[#171326]  font-body mt-1.5">{showTotalBalance ? '$5,332.18' : '$*****'}</h1>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#434243] ml-1.5 flex items-center gap-1 cursor-pointer" onClick={toggleDailyBalance} >Daily Expense
                    {showDailyBalance ? <EyeIcon className='w-4 h-4' /> : <EyeSlashIcon className='w-4 h-4' />}
                  </p>
                  <h1 className="text-5xl text-[#171326]  font-body mt-1.5">{showDailyBalance ? '$1,580.02' : '$*****'}</h1>
                </div>
              </div>
              <div className="flex justify-between space-x-10 ml-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] ml-1 text-xs">Last Month</p>
                  <div className="flex items-baseline gap-1">
                    <span className="w-5 h-5 bg-[#171326] rounded-full flex items-center justify-center">
                      <ArrowUpRightIcon className="w-3 h-3 text-[#f2d5e0]" />
                    </span>
                    <span className="text-[#171326] text-sm font-medium font-body">+15%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] ml-1 text-xs">Status</p>
                  <div className="flex items-baseline gap-1">
                    <span className="w-5 h-5 bg-[#171326] rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-[#f2d5e0]" />
                    </span>
                    <span className="text-[#171326] text-sm font-medium font-body">Active</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#434243] ml-1 text-xs">Cash Back</p>
                  <div className="flex items-baseline gap-1">
                    <span className="w-5 h-5 bg-[#171326] rounded-full flex items-center justify-center">
                      <BanknotesIcon className="w-3 h-3 text-[#f2d5e0]" />
                    </span>
                    <span className="text-[#171326] text-sm font-medium font-body">$580.25</span>
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick actions, Send Money, Transaction History, Airtime & Data, Pay Bills */}

        <div className="flex-1/6 bg-purple-100 dark:bg-[#261f3d] p-4 ">
          <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Quick Actions</h2>
            <div className="flex justify-evenly gap-5 items-start">
              {quickActions.map((action, index) => (
                <div key={index} className="flex flex-col items-center gap-2 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center justify-center bg-[#C7AAFC] dark:bg-[#c7aafc6e] cursor-pointer w-12 h-12 rounded-full hover:bg-[#c7aafc]">
                          <action.icon className="w-5 h-5 text-[#070707] dark:text-[#c7aafc] hover:rotate-90 transition-transform duration-300 ease-in-out" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-[#171326] text-[#0d0d0d] dark:text-[#f5f5f5] p-2 rounded-md no-arrow">
                        {action.description}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-[#0d0d0d] dark:text-[#f5f5f5] text-sm font-medium">{action.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-3/5">
          <IncomeChart />
        </div>
      </div>

      <div className="flex-1/6 dark:bg-[#0D0B16] sticky top-0 flex flex-col space-y-2 p-1">
        <CreditLimit />
        <TopTransactionCategory />
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard