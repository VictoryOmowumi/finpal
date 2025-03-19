import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Budget = lazy(() => import('./pages/budgetManagement/Budget'));
const Transactions = lazy(() => import('./pages/transactionsManagement/Transactions'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="budget" element={<Budget />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App