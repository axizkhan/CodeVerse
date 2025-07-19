import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const StatCards = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/dashboard-stats`);
        setStats(res.data);
      } catch (err) {
        console.error('Failed to fetch dashboard stats:', err);
      }
    };
    fetchStats();
  }, []);

  if (!stats) {
    return <div className="stat-cards-container">Loading stats...</div>;
  }

  const statList = [
    { title: 'Total Users', value: stats.totalUsers },
    { title: 'Total Sales', value: `₹${stats.totalSales}` },
    { title: 'Logged In Users', value: stats.loggedInUsers },
    { title: 'Total Languages', value: stats.totalLanguages },
    { title: 'Total Orders', value: stats.totalOrders },
    { title: 'Total Memberships', value: stats.totalMemberships },
  ];

  return (
    <div className="stat-cards-container">
      {statList.map((stat, i) => (
        <div key={i} className="stat-card glow-animate">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-title">{stat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
