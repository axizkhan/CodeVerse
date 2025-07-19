import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TrendingLanguageChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/language-trends`);
        const formatted = res.data.map(lang => ({
          language: lang.name,
          trend: lang.trend,
        }));
        setData(formatted);
      } catch (err) {
        console.error('Failed to fetch trending languages:', err);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="chart-card">
      <h3>🔥 Trending Languages</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 60, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="language"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="trend" fill="#ff6384" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendingLanguageChart;
