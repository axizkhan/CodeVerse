import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FFCE56', '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB', '#FF9F40'];

const MembershipChart = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMembershipData = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/membership-popularity1`);
        // Transform data for recharts
        const formatted = res.data.map(item => ({
          name: item._id,
          value: item.count
        }));
        setData(formatted);
      } catch (err) {
        console.error('Error fetching membership chart data:', err);
      }
    };
    fetchMembershipData();
  }, []);

  return (
    <div className="chart-card">
      <h3>Membership Popularity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MembershipChart;
