import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const allMonths = [
  { month: 'Jan', orders: 0 },
  { month: 'Feb', orders: 0 },
  { month: 'Mar', orders: 0 },
  { month: 'Apr', orders: 0 },
  { month: 'May', orders: 0 },
  { month: 'Jun', orders: 0 },
  { month: 'Jul', orders: 0 },
  { month: 'Aug', orders: 0 },
  { month: 'Sep', orders: 0 },
  { month: 'Oct', orders: 0 },
  { month: 'Nov', orders: 0 },
  { month: 'Dec', orders: 0 },
];
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const monthMap = {
  1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
  7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec',
};

const MonthlyOrdersChart = () => {
  const [data, setData] = useState(allMonths);

  useEffect(() => {
    const fetchMonthlyOrders = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/monthly-orders`);

        const responseMap = {};
        res.data.forEach(entry => {
          const monthName = monthMap[entry._id];
          responseMap[monthName] = entry.count;
        });

        // Merge into allMonths template
        const finalData = allMonths.map(monthEntry => ({
          month: monthEntry.month,
          orders: responseMap[monthEntry.month] || 0
        }));

        setData(finalData);
      } catch (err) {
        console.error('Error fetching monthly order data:', err);
      }
    };

    fetchMonthlyOrders();
  }, []);

  return (
    <div className="chart-card">
      <h3> Monthly Orders</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="orders" fill="#00c9a7" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyOrdersChart;
