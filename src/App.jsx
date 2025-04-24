import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import { BudgetProvider } from './context/BudgetContext';
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Budget = lazy(() => import('./pages/budgetManagement/Budget'));
const Transactions = lazy(() => import('./pages/transactionsManagement/Transactions'));
const Report = lazy(() => import('./pages/report/Report'));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="budget" element={<BudgetProvider><Budget /></BudgetProvider>} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="reports" element={<Report />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App