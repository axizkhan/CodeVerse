import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const LanguageChaptersChart = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchChapterData = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/language-chapter-counts`);
        setData(res.data);
      } catch (err) {
        console.error('Error fetching language chapter data:', err);
      }
    };
    fetchChapterData();
  }, []);

  return (
    <div className="chart-card">
      <h3>Chapters Per Language</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 60, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0} //  Show all labels
            angle={-45} // Rotate labels for spacing
            textAnchor="end"
            height={60} // Give enough space for rotated labels
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="chapterCount" fill="#36a2eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChaptersChart;
