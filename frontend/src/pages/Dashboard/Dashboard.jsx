import React from 'react';
import StatCards from './StatCards';
import MonthlyOrdersChart from './MonthlyOrdersChart';
import LanguageChaptersChart from './LanguageChaptersChart';
import TrendingLanguageChart from './TrendingLanguageChart';
import MembershipChart from './MembershipChart';
// import MembershipExpiryAlerts from './MembershipExpiryAlerts';
import QuickActions from './QuickActions';
// import './chartSetup'
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title"> Admin Dashboard</h2>

      <QuickActions />
<StatCards />
{/* <MembershipExpiryAlerts /> */}

      <div className="charts-grid">
        <MonthlyOrdersChart />
        <TrendingLanguageChart />
        <LanguageChaptersChart />
        <MembershipChart />
      </div>
    </div>
  );
};

export default Dashboard;
