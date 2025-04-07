import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="bg-[#f5f5f5] dark:bg-[#0D0B16] text-[#f5f5f5] h-screen grid grid-cols-[64px_1fr]">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout